const express = require('express');
const router = express.Router();
const controller = require('../controllers/vagaController');

// GET /vagas → listar todas
router.get('/', controller.getVagas);

// GET /vagas/:id → buscar vaga por ID
router.get('/:id', controller.getVagaById);

// POST /vagas → adicionar nova vaga
router.post('/', controller.addVaga);

// PUT /vagas/:id → atualizar vaga existente
router.put('/:id', controller.updateVaga);

// DELETE /vagas/:id → deletar vaga
router.delete('/:id', controller.deleteVaga);

module.exports = router;
