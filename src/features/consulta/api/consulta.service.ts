
import {apiFetch} from "../../../shared/api/client"
import { CreateFullConsultaDto, CreateMedicionesDto, CreateBasicasDto, CreateConsultaDto, CreatePlieguesDto, CreatePerimetrosDto, CreateDiametrosDto } from "@/features";
import { UpdateFullConsultaDto, UpdateMedicionesDto, UpdateBasicasDto, UpdateConsultaDto, UpdatePlieguesDto, UpdatePerimetrosDto, UpdateDiametrosDto, UpdateResultadosMedDto } from "@/features";
import { ConsultaEntity, CreateFullConsultaForm } from "@/features";

type UpdateConsultaFormType = {
    pacienteId: string
    consultaId: string
    medicionId: number
    nroMedicion: number
    basicasId: number
    plieguesId: number
    perimetrosId: number
    diametrosId: number
    resultadosId: number
    data: CreateFullConsultaForm
}

export class ConsultaService{

    public static async getConsultasByIdPaciente(id_paciente: string): Promise<ConsultaEntity[]>{
        const consulta = await apiFetch<any[]>(`consulta/by-id-paciente/${id_paciente}`, 'GET');
        console.log('data consulta: ' + consulta);
        return consulta;
    }

    public static async getConsultaByIdPacienteAndIdConsulta(id_paciente: string, id_consulta: string): Promise<any>{
        return apiFetch<any>(`consulta/by-id-paciente-and-id-consulta/${id_paciente}/${id_consulta}`, 'GET');
    }

    public static async getConsultasByIdPacienteAndDate(id_paciente: string, fecha_hasta: string): Promise<ConsultaEntity[]>{
        return apiFetch<any>(`consulta/by-id-paciente-and-fecha/${id_paciente}/${fecha_hasta}`, 'GET');
    }

    public static async createConsulta(id_paciente: string, data: any): Promise<void>{

        //CONVERTIRMOS LOS DATOS DEL FORM AL FORMATO DTO ESPERADO POR EL ENDPOINT
        const consulta: CreateConsultaDto = {
            fecha_consulta: new Date(),
            descripcion: "primera consulta",
            paciente_id: id_paciente
        }
        const mediciones: CreateMedicionesDto = {
            nivel: "ISAK 1",
            descripcion: "primera medicion",
            paciente_id: id_paciente   
        }
        const basicas: CreateBasicasDto = {
            peso: data.mediciones.peso,
            talla: data.mediciones.talla,
            talla_sentado: data.mediciones.talla_sentado,
            envergadura: data.mediciones.envergadura,
            paciente_id: id_paciente
        }
        const pliegues: CreatePlieguesDto = {
            tricep: data.mediciones.tricep,
            subescapular: data.mediciones.subescapular,
            bicep: data.mediciones.bicep,
            cresta_iliaca: data.mediciones.cresta_iliaca,
            supraespinal: data.mediciones.supraespinal,
            abdominal: data.mediciones.abdominal,
            muslo: data.mediciones.muslo,
            pierna: data.mediciones.pierna_per,
            paciente_id: id_paciente
        }
        const perimetros: CreatePerimetrosDto = {
            brazo_relajado: data.mediciones.brazo_relajado,
            brazo_flexionado: data.mediciones.brazo_flexionado,
            cintura: data.mediciones.cintura,
            cadera: data.mediciones.cadera,
            muslo_medio: data.mediciones.muslo_medio,
            pierna: data.mediciones.pierna_per,
            paciente_id: id_paciente
        }
        const diametros: CreateDiametrosDto = {
            humero: data.mediciones.humero,
            biestiloideo: data.mediciones.biestiloideo,
            femur: data.mediciones.femur,
            paciente_id: id_paciente
        }

        const consultaData: CreateFullConsultaDto = {
            consulta: consulta,
            mediciones: mediciones,
            basicas: basicas,
            pliegues: pliegues,
            perimetros: perimetros,
            diametros: diametros
        }

        return apiFetch<void>('consulta', 'POST', consultaData)
    }

    public static async updateConsulta({pacienteId, consultaId, medicionId, nroMedicion, basicasId, plieguesId, perimetrosId, diametrosId, resultadosId, data}: UpdateConsultaFormType): Promise<void>{

        //CONVERTIRMOS LOS DATOS DEL FORM AL FORMATO DTO ESPERADO POR EL ENDPOINT
        const consulta: UpdateConsultaDto = {
            id: consultaId,
            descripcion: "primera consulta",
            paciente_id: pacienteId
        }
        const mediciones: UpdateMedicionesDto = {
            id: medicionId,
            nivel: "ISAK 1",
            nro_medicion: 0,
            descripcion: "primera medicion",
            paciente_id: pacienteId   
        }
        const basicas: UpdateBasicasDto = {
            id: basicasId,
            nro_medicion: nroMedicion,
            peso: data.mediciones.peso,
            talla: data.mediciones.talla,
            talla_sentado: data.mediciones.talla_sentado,
            envergadura: data.mediciones.envergadura,
            paciente_id: pacienteId
        }
        const pliegues: UpdatePlieguesDto = {
            id: plieguesId,
            nro_medicion: nroMedicion,
            tricep: data.mediciones.tricep,
            subescapular: data.mediciones.subescapular,
            bicep: data.mediciones.bicep,
            cresta_iliaca: data.mediciones.cresta_iliaca,
            supraespinal: data.mediciones.supraespinal,
            abdominal: data.mediciones.abdominal,
            muslo: data.mediciones.muslo,
            pierna: data.mediciones.pierna_per,
            paciente_id: pacienteId
        }
        const perimetros: UpdatePerimetrosDto = {
            id: perimetrosId,
            nro_medicion: nroMedicion,
            brazo_relajado: data.mediciones.brazo_relajado,
            brazo_flexionado: data.mediciones.brazo_flexionado,
            cintura: data.mediciones.cintura,
            cadera: data.mediciones.cadera,
            muslo_medio: data.mediciones.muslo_medio,
            pierna: data.mediciones.pierna_per,
            paciente_id: pacienteId
        }
        const diametros: UpdateDiametrosDto = {
            id: diametrosId,
            nro_medicion: nroMedicion,
            humero: data.mediciones.humero,
            biestiloideo: data.mediciones.biestiloideo,
            femur: data.mediciones.femur,
            paciente_id: pacienteId
        }

        const resultadosMed: UpdateResultadosMedDto = {
            id: resultadosId
        }

        const consultaData: UpdateFullConsultaDto = {
            consulta: consulta,
            mediciones: mediciones,
            basicas: basicas,
            pliegues: pliegues,
            perimetros: perimetros,
            diametros: diametros,
            resultadosMed: resultadosMed,
        }

        return apiFetch<void>('consulta', 'PUT', consultaData)
    }

    public static async deleteConsulta(id_paciente: string, id_consulta: string): Promise<any>{
        return apiFetch(`consulta/delete/${id_paciente}/${id_consulta}`, 'DELETE')
    }




}