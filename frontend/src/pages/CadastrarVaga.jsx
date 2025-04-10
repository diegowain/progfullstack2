import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const CadastrarVaga = () => {
  const [formData, setFormData] = useState({
    vaga_cargo: '',
    vaga_salario: '',
    vaga_cidade: '',
    vaga_quantidade: '',
    vaga_descricao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = () => {
    setFormData({
      vaga_cargo: '',
      vaga_salario: '',
      vaga_cidade: '',
      vaga_quantidade: '',
      vaga_descricao: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/vagas', formData);
      alert('Vaga cadastrada com sucesso!');
      handleClear();
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
              <Form.Label>Cargo</Form.Label>
              <Form.Control name="vaga_cargo" value={formData.vaga_cargo} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Salário</Form.Label>
              <Form.Control name="vaga_salario" value={formData.vaga_salario} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Cidade</Form.Label>
              <Form.Control name="vaga_cidade" value={formData.vaga_cidade} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Quantidade de Vagas</Form.Label>
              <Form.Control name="vaga_quantidade" value={formData.vaga_quantidade} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={8}>
            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                name="vaga_descricao"
                rows={3}
                maxLength={300}
                value={formData.vaga_descricao}
                onChange={handleChange}
              />
              <Form.Text>{formData.vaga_descricao.length}/300 caracteres</Form.Text>
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

export default CadastrarVaga;
