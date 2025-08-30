import { Router } from 'express';
import { registroController, loginController } from '../controllers/registro.controller';

const router = Router();
router.post('/registro', registroController);
router.post('/login', loginController);

export default router;

