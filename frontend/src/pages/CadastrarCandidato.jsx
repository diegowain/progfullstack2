import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';


const CadastrarCandidato = () => {
  const [formData, setFormData] = useState({
    funcao: '',
    nome: '',
    nascimento: '',
    naturalidade: '',
    uf: '',
    estadoCivil: '',
    conjuge: '',
    filhos: false,

    cpf: '',
    rg: '',
    orgaoEmissor: '',
    tituloEleitor: '',
    zona: '',
    pis: '',
    habilitacao: '',
    ctpsNumero: '',
    ctpsSerie: '',
    certMilitarNumero: '',
    certMilitarSerie: '',
    certMilitarCategoria: '',

    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    ufEndereco: '',
    cep: '',
    residencia: '',

    telefone: '',
    celular: '',
    email: '',

    pai: '',
    mae: '',
    escolaridade: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/candidatos', formData);
      alert('Candidato cadastrado com sucesso!');
      setFormData({ ...formData, nome: '', cpf: '' }); // reset parcial ou total
    } catch (err) {
      alert('Erro ao cadastrar candidato.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Cadastro de Candidato</h2>
      <Form onSubmit={handleSubmit}>

        {/* Dados Pessoais */}
        <h5 className="mt-4 titulo">Dados Pessoais</h5>
        <Row>
          <Col md={6}><Form.Group><Form.Label>Função pretendida</Form.Label><Form.Control name="funcao" value={formData.funcao} onChange={handleChange} /></Form.Group></Col>
          <Col md={6}><Form.Group><Form.Label>Nome completo</Form.Label><Form.Control name="nome" value={formData.nome} onChange={handleChange} required /></Form.Group></Col>
        </Row>
        <Row>
          <Col md={4}><Form.Group><Form.Label>Data de nascimento</Form.Label><Form.Control type="date" name="nascimento" value={formData.nascimento} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>Naturalidade</Form.Label><Form.Control name="naturalidade" value={formData.naturalidade} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>UF</Form.Label><Form.Control name="uf" value={formData.uf} onChange={handleChange} /></Form.Group></Col>
        </Row>
        <Row>
          <Col md={4}><Form.Group><Form.Label>Estado civil</Form.Label>                    
          <Form.Select name="estadoCivil" value={formData.estadoCivil} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="Casado">Casado</option>
              <option value="Solteiro">Solteiro</option>
              <option value="Divorciado">Divorciado</option>
              <option value="Separado">Separado</option>
              <option value="Amigado">Amigado</option>
            </Form.Select> 
          </Form.Group></Col>

          <Col md={4}><Form.Group><Form.Label>Nome do cônjuge</Form.Label><Form.Control name="conjuge" value={formData.conjuge} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}>
  <Form.Group>
    <Form.Label>Possui filhos?</Form.Label>
    <div>
      <Form.Check
        type="radio"
        label="Sim"
        name="filhos"
        value="sim"
        checked={formData.filhos === "sim"}
        onChange={handleChange}
        inline
      />
      <Form.Check
        type="radio"
        label="Não"
        name="filhos"
        value="nao"
        checked={formData.filhos === "nao"}
        onChange={handleChange}
        inline
      />
    </div>
  </Form.Group>
</Col>

        </Row>

        <div className="linha-separadora my-4"></div>
        {/* Documentos */}
        <h5 className="mt-4 titulo">Documentos</h5>
        <Row>
          <Col md={4}><Form.Group><Form.Label>CPF</Form.Label><Form.Control name="cpf" value={formData.cpf} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>RG</Form.Label><Form.Control name="rg" value={formData.rg} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>Órgão Emissor</Form.Label><Form.Control name="orgaoEmissor" value={formData.orgaoEmissor} onChange={handleChange} /></Form.Group></Col>
        </Row>
        <Row>
          <Col md={4}><Form.Group><Form.Label>Título de eleitor</Form.Label><Form.Control name="tituloEleitor" value={formData.tituloEleitor} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>Zona</Form.Label><Form.Control name="zona" value={formData.zona} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>PIS</Form.Label><Form.Control name="pis" value={formData.pis} onChange={handleChange} /></Form.Group></Col>
        </Row>
        <Row>
          <Col md={4}><Form.Group><Form.Label>Habilitação</Form.Label><Form.Control name="habilitacao" value={formData.habilitacao} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>CTPS Nº</Form.Label><Form.Control name="ctpsNumero" value={formData.ctpsNumero} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>Série</Form.Label><Form.Control name="ctpsSerie" value={formData.ctpsSerie} onChange={handleChange} /></Form.Group></Col>
        </Row>
        <Row>
          <Col md={4}><Form.Group><Form.Label>Cert. Militar Nº</Form.Label><Form.Control name="certMilitarNumero" value={formData.certMilitarNumero} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>Série</Form.Label><Form.Control name="certMilitarSerie" value={formData.certMilitarSerie} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>Categoria</Form.Label><Form.Control name="certMilitarCategoria" value={formData.certMilitarCategoria} onChange={handleChange} /></Form.Group></Col>
        </Row>
        <div className="linha-separadora my-4"></div>
        {/* Endereço */}
        <h5 className="mt-4 titulo">Endereço</h5>
        <Row>
          <Col md={6}><Form.Group><Form.Label>Endereço</Form.Label><Form.Control name="endereco" value={formData.endereco} onChange={handleChange} /></Form.Group></Col>
          <Col md={2}><Form.Group><Form.Label>Número</Form.Label><Form.Control name="numero" value={formData.numero} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>Bairro</Form.Label><Form.Control name="bairro" value={formData.bairro} onChange={handleChange} /></Form.Group></Col>
        </Row>
        <Row>
          <Col md={4}><Form.Group><Form.Label>Cidade</Form.Label><Form.Control name="cidade" value={formData.cidade} onChange={handleChange} /></Form.Group></Col>
          <Col md={2}><Form.Group><Form.Label>UF</Form.Label><Form.Control name="ufEndereco" value={formData.ufEndereco} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>CEP</Form.Label><Form.Control name="cep" value={formData.cep} onChange={handleChange} /></Form.Group></Col>
          <Col md={2}><Form.Group><Form.Label>Complemento</Form.Label><Form.Control name="complemento" value={formData.complemento} onChange={handleChange} /></Form.Group></Col>

          <Col md={4}><Form.Group><Form.Label>Residência</Form.Label>                    
          <Form.Select name="residencia" value={formData.residencia} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="Própria">Própria</option>
              <option value="Alugada">Alugada</option>
            </Form.Select> 
          </Form.Group></Col>

        </Row>

        <div className="linha-separadora my-4"></div>
        {/* Contato */}
        <h5 className="mt-4 titulo">Contato</h5>
        <Row>
          <Col md={4}><Form.Group><Form.Label>Telefone</Form.Label><Form.Control name="telefone" value={formData.telefone} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>Celular</Form.Label><Form.Control name="celular" value={formData.celular} onChange={handleChange} /></Form.Group></Col>
          <Col md={4}><Form.Group><Form.Label>E-mail</Form.Label><Form.Control type="email" name="email" value={formData.email} onChange={handleChange} /></Form.Group></Col>
        </Row>

        <div className="linha-separadora my-4"></div>
        {/* Família */}
        <h5 className="mt-4 titulo">Família</h5>
        <Row>
          <Col md={6}><Form.Group><Form.Label>Nome do pai</Form.Label><Form.Control name="pai" value={formData.pai} onChange={handleChange} /></Form.Group></Col>
          <Col md={6}><Form.Group><Form.Label>Nome da mãe</Form.Label><Form.Control name="mae" value={formData.mae} onChange={handleChange} /></Form.Group></Col>
        </Row>

        <div className="linha-separadora my-4"></div>
        {/* Escolaridade */}
        <h5 className="mt-4 titulo">Escolaridade</h5>
        <Row>
          <Col md={12}><Form.Group><Form.Label>Grau de instrução</Form.Label>
            <Form.Select name="escolaridade" value={formData.escolaridade} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="Fundamental">Ensino Fundamental</option>
              <option value="FundamentalCompleto">Ensino Fundamental Completo</option>
              <option value="FundamentalIncompleto">Ensino Fundamental Incompleto</option>
              <option value="Médio">Ensino Médio</option>
              <option value="MédioCompleto">Ensino Médio Completo</option>
              <option value="MédioIncompleto">Ensino Médio Incompleto</option>
              <option value="Superior">Ensino Superior</option>
              <option value="SuperiorCompleto">Ensino Superior Completo</option>
              <option value="SuperiorIncompleto">Ensino Superior Incompleto</option>
            </Form.Select>
          </Form.Group></Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-4">Cadastrar</Button>
      </Form>
    </div>
  );
};

export default CadastrarCandidato;
