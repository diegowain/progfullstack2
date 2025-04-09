const db = require('./db');

const Candidato = {
  getAll: (callback) => {
    db.query('SELECT * FROM Candidato', callback);
  },
  create: (data, callback) => {
    const { pk_cand_cpf, cand_nome, cand_endereco, cand_telefone } = data;
    db.query(
      'INSERT INTO Candidato (pk_cand_cpf, cand_nome, cand_endereco, cand_telefone) VALUES (?, ?, ?, ?)',
      [pk_cand_cpf, cand_nome, cand_endereco, cand_telefone],
      callback
    );
  }
};

module.exports = Candidato;
