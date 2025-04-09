import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ListarVagas = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const res = await axios.get('http://localhost:4000/vagas');
        setVagas(res.data);
      } catch (err) {
        console.error('Erro ao buscar vagas:', err);
      }
    };

    fetchVagas();
  }, []);

  return (
    <Container>
      <h2 className="my-4">Vagas Disponíveis</h2>
      <Row>
        {vagas.map((vaga) => (
          <Col md={6} lg={4} key={vaga.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{vaga.titulo}</Card.Title>
                <Card.Text><strong>Descrição:</strong> {vaga.descricao}</Card.Text>
                <Card.Text><strong>Requisitos:</strong> {vaga.requisitos}</Card.Text>
                <Card.Text><strong>Local:</strong> {vaga.local}</Card.Text>
                <Card.Text><strong>Tipo:</strong> {vaga.tipoContrato}</Card.Text>
                <Button variant="primary" href="/inscricao">Inscrever-se</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListarVagas;
