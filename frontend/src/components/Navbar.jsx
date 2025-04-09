import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Início</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/candidato">Cadastrar Candidato</Nav.Link>
            <Nav.Link as={Link} to="/vagasdisponiveis">Vagas Disponíveis</Nav.Link>
            <Nav.Link as={Link} to="/vaga">Cadastrar Vaga</Nav.Link>
            <Nav.Link as={Link} to="/inscricao">Inscrição</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
