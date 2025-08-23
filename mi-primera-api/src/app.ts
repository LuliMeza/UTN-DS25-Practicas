import express from 'express';
import cors from 'cors';
import { logRequest } from './middlewares/logger.middleware';
import { bookRoutes } from './routes/book.routes';
import  uploadRoutes  from './routes/upload.routes';
import { handleError } from './middlewares/error.middleware';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(logRequest);

// Servir carpeta uploads de forma estática
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Rutas
app.use('/api/books', bookRoutes);
app.use('/api/upload', uploadRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
