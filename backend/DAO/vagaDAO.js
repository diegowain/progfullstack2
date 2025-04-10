const db = require('../models/db');

const VagaDAO = {
  // Listar todas as vagas
  getAll: (callback) => {
    db.query('SELECT * FROM vagas', callback);
  },

  // Buscar uma vaga pelo ID
  getById: (id, callback) => {
    db.query('SELECT * FROM vagas WHERE vaga_id = ?', [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]); // retorna uma única vaga
    });
  },

  // Cadastrar uma nova vaga
  create: (data, callback) => {
    const { vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao } = data;
    db.query(
      `INSERT INTO vagas (vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao) 
       VALUES (?, ?, ?, ?, ?)`,
      [vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao],
      callback
    );
  },

  // Atualizar uma vaga existente
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

  // Excluir uma vaga
  delete: (id, callback) => {
    db.query('DELETE FROM vagas WHERE vaga_id = ?', [id], callback);
  }
};

module.exports = VagaDAO;
