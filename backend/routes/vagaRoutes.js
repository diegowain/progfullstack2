const express = require('express');
const router = express.Router();
const controller = require('../controllers/vagaController');

router.get('/', controller.getVagas);
router.post('/', controller.addVaga);

module.exports = router;
