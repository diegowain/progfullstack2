const Inscricao = require('../models/inscricaoModel');

exports.getInscricoes = (req, res) => {
  Inscricao.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addInscricao = (req, res) => {
  Inscricao.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).send('Inscrição realizada com sucesso!');
  });
};
