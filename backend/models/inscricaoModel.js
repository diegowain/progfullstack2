const db = require('./db');
const InscricaoDAO = require('../DAO/inscricaoDAO');
module.exports = InscricaoDAO;

const Inscricao = {
  getAll: (callback) => {
    db.query('SELECT * FROM inscricoes', callback);
  },
  create: (data, callback) => {
    const { pk_cand_cpf, pk_vaga_id, data_inscricao, horario_inscricao } = data;
    db.query(
      'INSERT INTO inscricoes (pk_cand_cpf, pk_vaga_codigo, data_inscricao, horario_inscricao) VALUES (?, ?, ?, ?)',
      [pk_cand_cpf, pk_vaga_id, data_inscricao, horario_inscricao],
      callback
    );
  }
};

