
import {apiFetch} from "../../../shared/api/client"
import { CreateFullConsultaDto, CreateMedicionesDto, CreateBasicasDto, CreateConsultaDto, CreatePlieguesDto, CreatePerimetrosDto, CreateDiametrosDto } from "../types/consulta";
import { Consulta } from "../types/consulta";

export class ConsultaService{

    public static async getConsultas(id_paciente: string): Promise<Consulta[]>{
        const consulta = await apiFetch<any[]>(`consulta/${id_paciente}`);
        console.log('data consulta: ' + consulta);
        return consulta;
    }

    public static async getConsultasById(id: string): Promise<any>{
        return apiFetch<any>(`consulta/${id}`);
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


}