import { verify } from 'jsonwebtoken'
import { promisify } from 'util';
import { NextFunction, Request, Response } from 'express';

const verifyPromise = promisify(verify);

export default async (req:Request, res:Response, next:NextFunction) => {
  const token = req.headers['x-access-token'];
  if (token) {
    try {
      const decoded = await verifyPromise(token, req.app.get('secret'));
      console.log(`Valid token received: ${token}`);
      req.funcionario = decoded;
      next();
    } catch (err) {
      console.log(err);
      console.log(`Invalid token: ${token}`);
      return res.sendStatus(401);
    }
  } else {
    console.log('Toke is missing!');
    return res.sendStatus(401);
  }
}
