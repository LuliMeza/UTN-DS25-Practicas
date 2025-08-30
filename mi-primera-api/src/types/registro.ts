import { Sexo, Categoria } from '../../generated/prisma/index';

export interface RegistroRequest {
  nombre: string;
  apellido: string;
  fecha: Date;
  email: string;    
  password: string;
  sexo: Sexo;
  tema: Categoria;
}

export interface RegistroResponse {
  estadoIngreso: 'ingresoExitoso' | 'ingresoFallido';
  mensaje?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UsuarioResponse {
  id: number;
  email: string;
}

export interface LoginResponse {
  token?: string; 
  mensaje?: string | undefined;
  usuario?: UsuarioResponse;
}
