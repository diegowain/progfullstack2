const Candidato = require('../models/candidatoModel');

// GET /candidatos
exports.getCandidatos = (req, res) => {
  Candidato.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// GET /candidatos/:cpf
exports.getCandidatoByCpf = (req, res) => {
  const { cpf } = req.params;
  Candidato.getByCpf(cpf, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result || result.length === 0) return res.status(404).send('Candidato não encontrado.');
    res.json(result[0]);
  });
};


// POST /candidatos
exports.addCandidato = (req, res) => {
  Candidato.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).send('Candidato cadastrado com sucesso!');
  });
};

// PUT /candidatos/:cpf
exports.updateCandidato = (req, res) => {
  const { cpf } = req.params;
  Candidato.update(cpf, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.send('Candidato atualizado com sucesso!');
  });
};

// DELETE /candidatos/:cpf
exports.deleteCandidato = (req, res) => {
  const { cpf } = req.params;
  Candidato.delete(cpf, (err) => {
    if (err) return res.status(500).json(err);
    res.send('Candidato removido com sucesso!');
  });
};
