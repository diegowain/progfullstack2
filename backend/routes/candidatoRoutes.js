const express = require('express');
const router = express.Router();
const controller = require('../controllers/candidatoController');

// GET todos os candidatos
router.get('/', controller.getCandidatos);

// GET um candidato específico pelo CPF
router.get('/:cpf', controller.getCandidatoByCpf);

// POST para criar um novo candidato
router.post('/', controller.addCandidato);

// PUT para atualizar um candidato existente
router.put('/:cpf', controller.updateCandidato);

// DELETE para remover um candidato
router.delete('/:cpf', controller.deleteCandidato);

module.exports = router;
