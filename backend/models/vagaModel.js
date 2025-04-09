const db = require('./db');

const Vaga = {
  getAll: (callback) => {
    db.query('SELECT * FROM Vaga', callback);
  },
  create: (data, callback) => {
    const { pk_vaga_codigo, vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade } = data;
    db.query(
      'INSERT INTO Vaga (pk_vaga_codigo, vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade) VALUES (?, ?, ?, ?, ?)',
      [pk_vaga_codigo, vaga_cargo, vaga_salario, vaga_cidade, vaga_quantidade],
      callback
    );
  }
};

module.exports = Vaga;
