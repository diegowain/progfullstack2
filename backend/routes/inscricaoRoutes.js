const express = require('express');
const router = express.Router();
const controller = require('../controllers/inscricaoController');

router.get('/', controller.getInscricoes);
router.post('/', controller.addInscricao);

module.exports = router;
