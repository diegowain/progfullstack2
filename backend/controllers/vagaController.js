const Vaga = require('../models/vagaModel');

// GET /vagas
exports.getVagas = (req, res) => {
  Vaga.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// GET /vagas/:id
exports.getVagaById = (req, res) => {
  const { id } = req.params;
  Vaga.getById(id, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result || result.length === 0) return res.status(404).send('Vaga não encontrada.');
    res.json(result[0]);
  });
};

// POST /vagas
exports.addVaga = (req, res) => {
  Vaga.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).send('Vaga cadastrada com sucesso!');
  });
};

// PUT /vagas/:id
exports.updateVaga = (req, res) => {
  const { id } = req.params;
  Vaga.update(id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.send('Vaga atualizada com sucesso!');
  });
};

// DELETE /vagas/:id
exports.deleteVaga = (req, res) => {
  const { id } = req.params;
  Vaga.delete(id, (err) => {
    if (err) return res.status(500).json(err);
    res.send('Vaga removida com sucesso!');
  });
};
