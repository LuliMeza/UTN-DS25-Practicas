import { z } from 'zod';
// Schema para crear libro
export const createBookSchema = z.object({
    title: z.string()
        .min(1, 'El título es requerido')
        .max(200, 'El título no puede exceder 200 caracteres')
        .trim(),
    autor: z.string()
        .min(1, 'El autor es requerido')
        .max(30, 'El autor no puede exceder 30 caracteres')
        .trim(),
    descripcion:z.string()
        .min(1, 'La descrripcion es requerida')
        .max(300, 'La descripcion no puede exceder 300 caracteres')
        .trim(),
    categoria: z.enum(["FICCION","HISTORIA","INFANTIL","CIENCIA"], "Categoría inválida"),
    imagen: z.string().optional(),
});

export const updateBookSchema = createBookSchema.partial();
