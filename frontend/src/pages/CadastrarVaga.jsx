import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

const CadastrarVaga = () => {
  const [vagaData, setVagaData] = useState({
    titulo: '',
    descricao: '',
    requisitos: '',
    local: '',
    cargaHoraria: '',
    salario: '',
    beneficios: '',
    dataLimite: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVagaData({ ...vagaData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/vagas', vagaData);
      alert('Vaga cadastrada com sucesso!');
      setVagaData({
        titulo: '',
        descricao: '',
        requisitos: '',
        local: '',
        cargaHoraria: '',
        salario: '',
        beneficios: '',
        dataLimite: ''
      });
    } catch (err) {
      alert('Erro ao cadastrar vaga.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Cadastro de Vaga</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Título da vaga</Form.Label>
              <Form.Control name="titulo" value={vagaData.titulo} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Local</Form.Label>
              <Form.Control name="local" value={vagaData.local} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} name="descricao" value={vagaData.descricao} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>Requisitos</Form.Label>
              <Form.Control as="textarea" rows={2} name="requisitos" value={vagaData.requisitos} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Carga horária</Form.Label>
              <Form.Control name="cargaHoraria" value={vagaData.cargaHoraria} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Salário</Form.Label>
              <Form.Control name="salario" value={vagaData.salario} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Data limite</Form.Label>
              <Form.Control type="date" name="dataLimite" value={vagaData.dataLimite} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>Benefícios</Form.Label>
              <Form.Control name="beneficios" value={vagaData.beneficios} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-4">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default CadastrarVaga;
