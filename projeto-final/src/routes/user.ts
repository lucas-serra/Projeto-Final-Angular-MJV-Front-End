import { login, register, checkUserMatriculaTaken } from '../api/user';
import { Router } from 'express';

const router = Router();

router.post('/login',login);

router.post('/signup',register);

router.get('/exists/:matricula',checkUserMatriculaTaken);

export default router;