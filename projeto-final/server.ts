import * as http from 'http';
import { app } from './config/express';

http.createServer(app).listen(3000, function () {
  console.log('Servidor escutando na porta: ' + 3000);
});

