const Candidato = require('../models/candidatoModel');

exports.getCandidatos = (req, res) => {
  Candidato.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addCandidato = (req, res) => {
  Candidato.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).send('Candidato cadastrado com sucesso!');
  });
};
