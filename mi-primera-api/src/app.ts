import express from 'express';
import cors from 'cors';
import { logRequest } from './middlewares/logger.middleware';
import { bookRoutes } from './routes/book.routes';
import { handleError } from './middlewares/error.middleware';

const app = express();
const PORT = 3000;

// esto porque en react corre en el puerto 3001 
app.use(cors());

app.use(express.json());
app.use(logRequest);

app.use('/api/books', bookRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});

//ME FALTA VER COMO HACER CON LA IMAGEN PORQUE AHORA LA GUARDA COMO URL PERO EN REACT SE CARGA UN ARCHIVO
