const Vaga = require('../models/vagaModel');

exports.getVagas = (req, res) => {
  Vaga.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addVaga = (req, res) => {
  Vaga.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).send('Vaga cadastrada com sucesso!');
  });
};
