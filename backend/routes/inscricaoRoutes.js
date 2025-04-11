const express = require('express');
const router = express.Router();
const controller = require('../controllers/inscricaoController.js');

router.get('/:cpf', inscricaoController.getInscricoes);

router.post('/', controller.addInscricao);

module.exports = router;
