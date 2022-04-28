import jwt from 'jsonwebtoken';
import { FuncionarioDao } from '../infra';


export const login = async (req, res) => {
  const { email, senha } = req.body;
  console.log('####################################');
  const funcionario = await new FuncionarioDao(req.db).findByEmailAndPassword(email, senha);
  console.log(funcionario);
  if (funcionario) {
    // console.log(`User ${funcionario.nome} authenticated`);
    console.log('Authentication Token added to response');
    // const token = jwt.sign(user, req.app.get('secret'), {
    //   expiresIn: 86400 // seconds, 24h
    // });
    // res.set('x-access-token', token);
    // return res.json(user);
  } else {
    // console.log(`Authentication failed for employee ${nome}`);
    // console.log('No token generated');
    // res.status(401).json({ message: `Authentication failed for employee ${nome}` });
  }
};

export const register = async (req, res) => {
  const funcionario = req.body;
  const funcionarioId = await new FuncionarioDao(req.db).add(funcionario);
  res.status(204).end();
};

export const checkUserNameTaken = async (req, res) => {
  const { matricula } = req.params;
  const funcionario = await new FuncionarioDao(req.db).findByName(matricula);
  res.json(!!funcionario);
};
