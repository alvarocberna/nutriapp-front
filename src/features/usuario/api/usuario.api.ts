
import {apiFetch} from "../../../shared/api/client"
import { Usuario } from "../types/usuario";

enum GenderEnum {
  femenino = "FEMENINO",
  masculino = "MASCULINO",
  otro = "OTRO",
}

interface IFormInput {
  rut: number
  dv_rut: string
  nombre_primero: string
  nombre_segundo: string
  apellido_paterno: string
  apellido_materno: string
  correo: string
  genero: GenderEnum
  celular: number
  fecha_nacimiento: Date
  fecha_creacion: Date
  password: string 
  password_confirmation: string
}

export class UsuarioService{

    public static async getUsuarios(): Promise<Usuario[]>{
        return await apiFetch<Usuario[]>('usuario');
    }

    public static async getUsuarioById(id: string): Promise<Usuario>{
        return apiFetch<Usuario>(`usuario/id/${id}`);
    }

    public static async createUsuario(usuario: IFormInput): Promise<void>{

        const usuarioData = {
            rut: usuario.rut,
            dv_rut: usuario.dv_rut,
            nombre_primero: usuario.nombre_primero,
            nombre_segundo: usuario.nombre_segundo,
            apellido_paterno: usuario.apellido_paterno,
            apellido_materno: usuario.apellido_materno,
            genero: usuario.genero,
            correo: usuario.correo,
            celular: usuario.celular,
            fecha_nacimiento: usuario.fecha_nacimiento,
            fecha_creacion: new Date(),
            password: usuario.password,
            rol: "PACIENTE",
        }

        return apiFetch<void>('usuario', 'POST', usuarioData)
    }


}

