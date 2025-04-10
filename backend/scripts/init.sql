CREATE DATABASE IF NOT EXISTS Fulls;
USE Fulls;

CREATE TABLE IF NOT EXISTS candidatos (
  pk_cand_cpf VARCHAR(11) PRIMARY KEY,
  cand_nome VARCHAR(100),
  cand_endereco VARCHAR(150),
  cand_telefone VARCHAR(20),
  cand_email VARCHAR(100),
  cand_nascimento DATE
);

CREATE TABLE IF NOT EXISTS vagas (
  pk_vaga_id INT AUTO_INCREMENT PRIMARY KEY,
  vaga_cargo VARCHAR(100),
  vaga_salario DECIMAL(10,2),
  vaga_cidade VARCHAR(100),
  vaga_quantidade INT,
  vaga_descricao TEXT
);
