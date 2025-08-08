import express from 'express';
import { logRequest } from './middlewares/logger.middleware';
import { bookRoutes } from './routes/book.routes';
import { handleError } from './middlewares/error.middleware';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logRequest);

app.use('/api/books',bookRoutes)

app.use(handleError);

app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});