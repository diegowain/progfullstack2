const db = require('./db');
const VagaDAO = require('../DAO/vagaDAO');
module.exports = VagaDAO;

const Vaga = {
  getAll: (callback) => {
    db.query('SELECT * FROM vagas', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM vagas WHERE vaga_id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao } = data;
    db.query(
      'INSERT INTO vagas (vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao) VALUES (?, ?, ?, ?, ?)',
      [vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao],
      callback
    );
  },

  update: (id, data, callback) => {
    const { vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao } = data;
    db.query(
      `UPDATE vagas SET 
        vaga_cargo = ?, 
        vaga_salario = ?, 
        vaga_cidade = ?, 
        vaga_quantidade = ?, 
        vaga_descricao = ? 
       WHERE vaga_id = ?`,
      [vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM vagas WHERE vaga_id = ?', [id], callback);
  }
};

module.exports = Vaga;
