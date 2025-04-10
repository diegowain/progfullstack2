import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const CadastrarCandidato = () => {
  const [formData, setFormData] = useState({
    pk_cand_cpf: '',
    cand_nome: '',
    cand_endereco: '',
    cand_telefone: '',
    cand_email: '',
    cand_nascimento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = () => {
    setFormData({
      pk_cand_cpf: '',
      cand_nome: '',
      cand_endereco: '',
      cand_telefone: '',
      cand_email: '',
      cand_nascimento: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/candidatos', formData);
      alert('Candidato cadastrado com sucesso!');
      handleClear();
    } catch (err) {
      alert('Erro ao cadastrar candidato.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Cadastro de Candidato</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>CPF</Form.Label>
              <Form.Control name="pk_cand_cpf" value={formData.pk_cand_cpf} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control name="cand_nome" value={formData.cand_nome} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Endereço</Form.Label>
              <Form.Control name="cand_endereco" value={formData.cand_endereco} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control name="cand_telefone" value={formData.cand_telefone} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" name="cand_nascimento" value={formData.cand_nascimento} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="cand_email" value={formData.cand_email} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <div className="mt-4 d-flex gap-3">
          <Button type="submit" variant="primary">Cadastrar</Button>
          <Button type="button" variant="secondary" onClick={handleClear}>Limpar</Button>
        </div>
      </Form>
    </div>
  );
};

export default CadastrarCandidato;
