const express = require('express');
const router = express.Router();
const controller = require('../controllers/candidatoController');

router.get('/', controller.getCandidatos);
router.post('/', controller.addCandidato);

module.exports = router;
