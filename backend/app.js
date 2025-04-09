const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const candidatoRoutes = require('./routes/candidatoRoutes');
const vagaRoutes = require('./routes/vagaRoutes');
const inscricaoRoutes = require('./routes/inscricaoRoutes');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/candidatos', candidatoRoutes);
app.use('/vagas', vagaRoutes);
app.use('/inscricoes', inscricaoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
