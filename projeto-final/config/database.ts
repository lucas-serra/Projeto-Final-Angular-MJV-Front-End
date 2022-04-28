import { Client } from 'pg';

export const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'angular_project',
  password: '12345',
  port: 5432
});



const FUNCIONARIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS funcionario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL UNIQUE,
    profissao VARCHAR(100) NOT NULL,
    salario NUMERIC NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    celular INTEGER NOT NULL,
    matricula INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCAHR(255) NOT NULL,

)
`;

const INSERT_DEFAULT_FUNCIONARIO_1 =
  `
INSERT INTO funcionario(
    nome,
    profissao,
    salario,
    cpf,
    celular,
    matricula,
    email,
    senha
) SELECT 'alvaro luis', 'dev java', 5000.00, '11122233345',99999999,1234,'alvaro@email.com.br', '12345678' WHERE NOT EXISTS (SELECT * FROM user WHERE name = 'alvaro')
`;

async function rodaQueries() {
  await db.connect();
  await db.query(FUNCIONARIO_SCHEMA);
  await db.query(INSERT_DEFAULT_FUNCIONARIO_1);

  await db.query("SELECT * FROM user", (err, funcionario) => {
    console.log('Users');
    console.log(funcionario);
  });
}

rodaQueries();

process.on('SIGINT', () =>
  db.end(() => {
    console.log('Database closed');
    process.exit(0);
  })
);
