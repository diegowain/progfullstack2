const db = require('./db');
const CandidatoDAO = require('../DAO/candidatoDAO');
module.exports = CandidatoDAO;

const Candidato = {
  getAll: (callback) => {
    db.query('SELECT * FROM candidatos', callback);
  },

  getByCpf: (cpf, callback) => {
    db.query('SELECT * FROM candidatos WHERE pk_cand_cpf = ?', [cpf], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]); // retorna apenas um resultado
    });
  },

  create: (data, callback) => {
    const { pk_cand_cpf, cand_nome, cand_endereco, cand_telefone, cand_email, cand_nascimento } = data;
    db.query(
      'INSERT INTO candidatos (pk_cand_cpf, cand_nome, cand_endereco, cand_telefone, cand_email, cand_nascimento) VALUES (?, ?, ?, ?, ?, ?)',
      [pk_cand_cpf, cand_nome, cand_endereco, cand_telefone, cand_email, cand_nascimento],
      callback
    );
  },

  update: (cpf, data, callback) => {
    const { cand_nome, cand_endereco, cand_telefone, cand_email, cand_nascimento } = data;
    db.query(
      'UPDATE candidatos SET cand_nome = ?, cand_endereco = ?, cand_telefone = ?, cand_email = ?, cand_nascimento = ? WHERE pk_cand_cpf = ?',
      [cand_nome, cand_endereco, cand_telefone, cand_email, cand_nascimento, cpf],
      callback
    );
  },

  delete: (cpf, callback) => {
    db.query('DELETE FROM candidatos WHERE pk_cand_cpf = ?', [cpf], callback);
  }
};

module.exports = Candidato;

