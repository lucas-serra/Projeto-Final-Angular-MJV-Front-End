import * as userAPI from '../api';
import { wrapAsync } from '../infra';

export const userRoutes = app => {

  app.route('/user/login')
    .post(wrapAsync(userAPI.login));

  app.route('/user/signup')
    .post(wrapAsync(userAPI.register));

  app.route('/user/exists/:matricula')
    .get(wrapAsync(userAPI.checkUserMatriculaTaken));
};
