import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegistroRequest, RegistroResponse, LoginRequest, LoginResponse  } from '../types/registro';
import { Sexo } from '../generated/prisma';
import { Categoria } from '../generated/prisma';

const SALT_ROUNDS = 10;
const JWT_SECRET: string = 'mi_secreto';

export async function registrar(data: RegistroRequest): Promise<RegistroResponse> {
  try {
    const existingUsuario = await prisma.usuario.findUnique({
      where: { email: data.email }
    });
    if (existingUsuario) {
      return { estadoIngreso: 'ingresoFallido', mensaje: 'El email ya está registrado' };
    }

    // Encriptar password
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    // Crear usuario
    await prisma.usuario.create({
      data: {
        email: data.email,
        password: hashedPassword,
        nombre: data.nombre,
        apellido: data.apellido,
        fecha: data.fecha,
        sexo: data.sexo as Sexo,
        tema: data.tema as Categoria,
      }
    });

    return { estadoIngreso: 'ingresoExitoso', mensaje: 'Registro exitoso' };
  } catch (error: any) {
    console.error(error);
    return { estadoIngreso: 'ingresoFallido', mensaje: error.message };
  }
}

// Login de usuario (por email o DNI)
export async function loginUsuario(data: LoginRequest): Promise<LoginResponse> {
    const input = data.email;
  const usuario = await prisma.usuario.findUnique({ where: { email: input } });

  if (!usuario) return { mensaje: 'Usuario no encontrado' };

  const passwordValido = await bcrypt.compare(data.password, usuario.password);
  if (!passwordValido) return { mensaje: 'Contraseña incorrecta' };

  const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: '8h' });

  return { token, mensaje: 'Login exitoso', usuario: { id: usuario.id, email: usuario.email } };
};


