import jwt from 'jsonwebtoken';
import { FuncionarioDao } from '../infra';
import { Request, response, Response } from 'express';


export const login = async (req:Request, res:Response) => {
  const { email, senha } = req.body;
  try{
    console.log('####################################');
  const funcionario = await new FuncionarioDao(req.db).findByEmailAndPassword(email, senha);
  console.log(funcionario);
  if (funcionario) {
    console.log(`User ${email} authenticated`);
    console.log('Authentication Token added to response');
    const token = jwt.sign(funcionario, req.app.get('secret'), {
      expiresIn: 86400 // seconds, 24h
    });
    res.set('x-access-token', token);
    return res.json(funcionario);
  } else {
    console.log(`Authentication failed for employee ${email}`);
    console.log('No token generated');
    res.status(401).json({ message: `Authentication failed for employee ${email}` });
  }
  }catch(e){
    res.status(401).json({ message: `Authentication failed for employee ${email}` });
  }
  
};

export const register = async (req: Request, res: Response) => {
  const funcionario = req.body;
  const funcionarioId = await new FuncionarioDao(req.db).add(funcionario);
  res.status(204).end();
};

export const checkUserMatriculaTaken = async (req:Request, res:Response) => {
  const { matricula } = req.params;
  const funcionario = await new FuncionarioDao(req.db).findByMatricula(matricula);
  res.json(!!funcionario);
};
