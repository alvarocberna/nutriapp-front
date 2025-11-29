//shared
import {apiFetch} from "../../../shared/api/client"
//features
import { Usuario, FormNuevoProfesionalInterface, FormNuevoPacienteInterface  } from "@/features";


export class UsuarioService{

    public static async getUsuarios(): Promise<Usuario[]>{
        return await apiFetch<Usuario[]>('usuario');
    }

    //PACIENTES

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

    public static async createPaciente(paciente: FormNuevoPacienteInterface): Promise<void>{
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
        }

        return apiFetch<void>('usuario/create-paciente', 'POST', pacienteData)
    }

    //PROFESIONALES
    
    public static async createProfesional(profesional: FormNuevoProfesionalInterface): Promise<void>{
        const profesionalData = {
            rut: profesional.rut,
            dv_rut: profesional.dv_rut,
            nombre_primero: profesional.nombre_primero,
            nombre_segundo: profesional.nombre_segundo,
            apellido_paterno: profesional.apellido_paterno,
            apellido_materno: profesional.apellido_materno,
            genero: profesional.genero,
            correo: profesional.correo,
            celular: profesional.celular,
            fecha_nacimiento: profesional.fecha_nacimiento,
            fecha_creacion: new Date(),
            password: profesional.password,
        }
        return apiFetch<void>('usuario/create-profesional', 'POST', profesionalData)
    }


}

