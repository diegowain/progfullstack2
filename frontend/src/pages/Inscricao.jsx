import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Inscricao = () => {
  const [candidatos, setCandidatos] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [inscricao, setInscricao] = useState({
    candidatoId: '',
    vagaId: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resCandidatos = await axios.get('http://localhost:4000/candidatos');
        const resVagas = await axios.get('http://localhost:4000/vagas');
        setCandidatos(resCandidatos.data);
        setVagas(resVagas.data);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInscricao({ ...inscricao, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/inscricoes', inscricao);
      alert('Inscrição realizada com sucesso!');
      setInscricao({ candidatoId: '', vagaId: '' });
    } catch (err) {
      alert('Erro ao realizar inscrição.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Inscrição do Candidato</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Selecionar Candidato</Form.Label>
              <Form.Control
                as="select"
                name="candidatoId"
                value={inscricao.candidatoId}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                {candidatos.map((candidato) => (
                  <option key={candidato.id} value={candidato.id}>
                    {candidato.nome}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Selecionar Vaga</Form.Label>
              <Form.Control
                as="select"
                name="vagaId"
                value={inscricao.vagaId}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                {vagas.map((vaga) => (
                  <option key={vaga.id} value={vaga.id}>
                    {vaga.titulo}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Confirmar Inscrição
        </Button>
      </Form>
    </div>
  );
};

export default Inscricao;
