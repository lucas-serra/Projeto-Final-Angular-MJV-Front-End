import { wrapAsync } from '../infra';
import { login, register, checkUserMatriculaTaken } from '../api/user';

export const userRoutes = (app:any) => {

  app.route('/user/login')
    .post(wrapAsync(login));

  app.route('/user/signup')
    .post(wrapAsync(register));

  app.route('/user/exists/:matricula')
    .get(wrapAsync(checkUserMatriculaTaken));
};
