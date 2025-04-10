import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, ListGroup, InputGroup } from 'react-bootstrap';

const Inscricao = () => {
  const [candidatos, setCandidatos] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [busca, setBusca] = useState('');
  const [candidatoSelecionado, setCandidatoSelecionado] = useState(null);
  const [vagasSelecionadas, setVagasSelecionadas] = useState([]);
  const [inscricoesRealizadas, setInscricoesRealizadas] = useState([]);

  // Carrega todos os candidatos e vagas ao iniciar
  useEffect(() => {
    axios.get('http://localhost:4000/candidatos')
      .then(res => setCandidatos(res.data))
      .catch(err => console.error('Erro ao buscar candidatos:', err));

    axios.get('http://localhost:4000/vagas')
      .then(res => setVagas(res.data))
      .catch(err => console.error('Erro ao buscar vagas:', err));
  }, []);

  // Busca o candidato pelo nome
  const handleBuscarCandidato = () => {
    const candidato = candidatos.find(c => c.cand_nome.toLowerCase().includes(busca.toLowerCase()));
    if (candidato) {
      setCandidatoSelecionado(candidato);
      setVagasSelecionadas([]); // Limpa seleções anteriores
      carregarInscricoes(candidato.pk_cand_cpf);
    } else {
      alert('Candidato não encontrado.');
    }
  };

  const carregarInscricoes = (cpf) => {
    axios.get(`http://localhost:4000/inscricoes/${cpf}`)
      .then(res => setInscricoesRealizadas(res.data))
      .catch(err => console.error('Erro ao buscar inscrições:', err));
  };

  // Alterna seleção de vaga
  const handleSelecionarVaga = (codigoVaga) => {
    if (vagasSelecionadas.includes(codigoVaga)) {
      setVagasSelecionadas(vagasSelecionadas.filter(cod => cod !== codigoVaga));
    } else {
      setVagasSelecionadas([...vagasSelecionadas, codigoVaga]);
    }
  };

  const handleInscrever = async () => {
    if (!candidatoSelecionado || vagasSelecionadas.length === 0) return;

    try {
      const inscricoes = vagasSelecionadas.map(vaga => ({
        fk_candidato_cpf: candidatoSelecionado.pk_cand_cpf,
        fk_vaga_codigo: vaga
      }));

      await Promise.all(inscricoes.map(inscricao =>
        axios.post('http://localhost:4000/inscricoes', inscricao)
      ));

      alert('Inscrições realizadas com sucesso!');
      setVagasSelecionadas([]);
      carregarInscricoes(candidatoSelecionado.pk_cand_cpf);
    } catch (err) {
      alert('Erro ao realizar inscrições.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Inscrição em Vagas</h2>

      {/* Campo de busca */}
      <InputGroup className="mb-3 mt-4">
        <Form.Control
          placeholder="Digite o nome do candidato"
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />
        <Button onClick={handleBuscarCandidato} variant="primary">
          Buscar
        </Button>
      </InputGroup>

      {candidatoSelecionado && (
        <>
          <h5 className="mb-3">Candidato: {candidatoSelecionado.cand_nome}</h5>

          {/* Lista de vagas */}
          <h6>Vagas Disponíveis</h6>
          <ListGroup className="mb-3">
            {vagas.map(vaga => {
              const jaInscrito = inscricoesRealizadas.some(i => i.fk_vaga_codigo === vaga.pk_vaga_codigo);
              return (
                <ListGroup.Item key={vaga.pk_vaga_codigo}>
                  <Form.Check
                    type="checkbox"
                    label={`${vaga.vaga_cargo} - ${vaga.vaga_cidade}`}
                    checked={vagasSelecionadas.includes(vaga.pk_vaga_codigo)}
                    disabled={jaInscrito}
                    onChange={() => handleSelecionarVaga(vaga.pk_vaga_codigo)}
                  />
                  {jaInscrito && <small className="text-danger ms-2">Já inscrito</small>}
                </ListGroup.Item>
              );
            })}
          </ListGroup>

          <Button variant="success" onClick={handleInscrever} disabled={vagasSelecionadas.length === 0}>
            Confirmar Inscrição
          </Button>

          {/* Lista de vagas inscritas */}
          <div className="mt-4">
            <h6>Vagas já escolhidas</h6>
            <ul>
              {inscricoesRealizadas.map((inscricao, index) => (
                <li key={index}>{inscricao.vaga_nome || `Vaga ${inscricao.fk_vaga_codigo}`}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Inscricao;
