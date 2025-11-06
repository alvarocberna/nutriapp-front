
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
//   password: string 
//   password_confirmation: string
}

export class UsuarioService{

    public static async getUsuarios(): Promise<Usuario[]>{
        return await apiFetch<Usuario[]>('usuario');
    }

    public static async getPacientesByProfId(filters?: {search?: string, fechaInicio: Date, fechaFin: Date, edadMin?: number, edadMax?: number}): Promise<Usuario[]>{
        const query = new URLSearchParams();
        if (filters?.search) query.append('search', filters?.search);
        if (filters?.fechaInicio) query.append('fechaInicio', filters?.fechaInicio.toString());
        if (filters?.fechaFin) query.append('fechaFin', filters?.fechaFin.toString());
        if (filters?.edadMin) query.append('edadMin', filters?.edadMin.toString());
        if (filters?.edadMax) query.append('edadMax', filters?.edadMax.toString());
        return await apiFetch<Usuario[]>(`usuario/pacientes-by-profesional-id?${query.toString()}`)
        // return await apiFetch<Usuario[]>('usuario/pacientes-by-profesional-id')
    }

    public static async getUsuarioById(id: string): Promise<Usuario>{
        return await apiFetch<Usuario>(`usuario/id/${id}`);
    }

    public static async createPaciente(paciente: IFormInput): Promise<void>{

        const pacienteData = {
            rut: paciente.rut,
            dv_rut: paciente.dv_rut,
            nombre_primero: paciente.nombre_primero,
            nombre_segundo: paciente.nombre_segundo,
            apellido_paterno: paciente.apellido_paterno,
            apellido_materno: paciente.apellido_materno,
            genero: paciente.genero,
            correo: paciente.correo,
            celular: paciente.celular,
            fecha_nacimiento: paciente.fecha_nacimiento,
            fecha_creacion: new Date(),
            // password: paciente.password,
            // rol: "PACIENTE",
        }

        return apiFetch<void>('usuario', 'POST', pacienteData)
    }


}

