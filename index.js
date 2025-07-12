import express from 'express';
import routes from './routes/routes.js';
import { errorHandler } from './utils/error-handler.js';

const app = express();

app.use(express.json());
app.use('/', routes);

app.use(errorHandler);
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000')
})