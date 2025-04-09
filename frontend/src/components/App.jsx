// src/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import CadastrarCandidato from '../pages/CadastrarCandidato';
import CadastrarVaga from '../pages/CadastrarVaga';
import Inscricao from '../pages/Inscricao';
import ListarVagas from '../pages/ListarVagas';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/candidato" element={<CadastrarCandidato />} />
          <Route path="/vaga" element={<CadastrarVaga />} />
          <Route path="/inscricao" element={<Inscricao />} />
          <Route path="/vagasdisponiveis" element={<ListarVagas />} />
          <Route path="/" element={<h2>Bem-vindo ao Sistema de Recrutamento</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
