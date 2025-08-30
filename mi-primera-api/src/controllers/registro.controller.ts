import { Request, Response } from 'express';
import { registrar, loginUsuario } from '../services/registro.service';
import { RegistroRequest, RegistroResponse,  LoginRequest, LoginResponse} from '../types/registro';
export const registroController = async (req: Request, res: Response) => {
  try {
    const body: RegistroRequest = req.body;
    const resultado: RegistroResponse = await registrar(body);
    return res.status(resultado.estadoIngreso === 'ingresoExitoso' ? 201 : 400).json(resultado);
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({ estadoIngreso: 'ingresoFallido', mensaje: error.message });
  }
};

export const loginController = async (req: Request, res: Response) => { 
  try {
    const body: LoginRequest = req.body; 
    const resultado = await loginUsuario(body); 

    if (resultado.token) {
      const respuesta: LoginResponse = {
        token: resultado.token,
        ...(resultado.mensaje ? { mensaje: resultado.mensaje } : {}),
        ...(resultado.usuario ? { usuario: resultado.usuario } : {})
        };

      return res.status(200).json(respuesta);
    } else {
      return res.status(401).json({ mensaje: resultado.mensaje });
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Login fallido', error: error.message });
  }
};
