const db = require('./db');

const Inscricao = {
  getAll: (callback) => {
    db.query('SELECT * FROM Candidato_Vaga', callback);
  },
  create: (data, callback) => {
    const { pk_cand_cpf, pk_vaga_codigo, data_inscricao, horario_inscricao } = data;
    db.query(
      'INSERT INTO Candidato_Vaga (pk_cand_cpf, pk_vaga_codigo, data_inscricao, horario_inscricao) VALUES (?, ?, ?, ?)',
      [pk_cand_cpf, pk_vaga_codigo, data_inscricao, horario_inscricao],
      callback
    );
  }
};

module.exports = Inscricao;
