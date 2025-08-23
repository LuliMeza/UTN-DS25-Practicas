import { Router } from 'express';
import multer from 'multer';
import path from 'path';

const router = Router();

// Carpeta donde se guardarán las imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // carpeta "uploads" en la raíz del proyecto
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('imagen'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No se subió ningún archivo' });
  // Devuelve la URL para usar en el frontend
  res.json({ url: `/uploads/${req.file.filename}` });
});

export default router;
