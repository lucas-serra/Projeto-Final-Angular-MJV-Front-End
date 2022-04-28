import { verify } from 'jsonwebtoken'
import { promisify } from 'util';

const verifyPromise = promisify(verify);

export default async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token) {
    try {
      const decoded = await verifyPromise(token, req.app.get('secret'));
      console.log(`Valid token received: ${token}`);
      req.user = decoded;
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
