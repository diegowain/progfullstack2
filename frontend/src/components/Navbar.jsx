import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import '../components/App.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Início</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/candidatos">Cadastrar Candidato</Nav.Link>
            <Nav.Link as={NavLink} to="/vagas">Cadastrar Vaga</Nav.Link>
            <Nav.Link as={NavLink} to="/inscricoes">Inscrição</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
