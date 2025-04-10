const db = require('./db');

const Vaga = {
  getAll: (callback) => {
    db.query('SELECT * FROM Vaga', callback);
  },
  create: (data, callback) => {
    const { vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao } = data;
    db.query(
      'INSERT INTO Vaga (vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao) VALUES (?, ?, ?, ?, ?)',
      [vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade, vaga_descricao],
      callback
    );
  }
};

module.exports = Vaga;
