const db = require('../models/db.js');

const InscricaoDAO = {
  // Listar todas as inscrições
  getAll: (callback) => {
    db.query('SELECT * FROM inscricoes', callback);
  },

  // Listar inscrições de um candidato específico
  getByCpf: (cpf, callback) => {
    const sql = `
      SELECT i.*, v.vaga_cargo AS vaga_nome
      FROM inscricoes i
      JOIN vagas v ON i.fk_vaga_id = v.pk_vaga_id
      WHERE i.fk_cand_cpf = ?`;

    db.query(sql, [cpf], callback);
  },

  // Criar nova inscrição
  create: (data, callback) => {
    const { fk_cand_cpf, fk_vaga_id } = data;

    const sql = `
      INSERT INTO inscricoes (fk_cand_cpf, fk_vaga_id)
      VALUES (?, ?)`;

    db.query(sql, [fk_cand_cpf, fk_vaga_id], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return callback({ message: 'Candidato já inscrito nesta vaga.' });
        }
        return callback(err);
      }
      callback(null, result);
    });
  }
};

module.exports = InscricaoDAO;
