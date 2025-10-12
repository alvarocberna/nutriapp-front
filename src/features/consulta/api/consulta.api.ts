
import {apiFetch} from "../../../shared/api/client"
import { CreateFullConsultaDto, CreateMedicionesDto, CreateBasicasDto, CreateConsultaDto, CreatePlieguesDto, CreatePerimetrosDto, CreateDiametrosDto } from "../types/consulta";

export class ConsultaService{

    public static async getConsulta(): Promise<any[]>{
        return await apiFetch<any[]>('consulta');
    }

    public static async getConsultaById(id: string): Promise<any>{
        return apiFetch<any>(`consulta/${id}`);
    }

    public static async createConsulta(data: any): Promise<void>{

        //CONVERTIRMOS LOS DATOS DEL FORM AL FORMATO DTO ESPERADO POR EL ENDPOINT
        const consulta: CreateConsultaDto = {
            fecha_consulta: new Date(),
            descripcion: "primera consulta",
            profesional_id: "ffa08696-ea33-4971-9430-22588e78cedf",
            paciente_id: "d2da2eca-4bf1-4b4e-834e-41ef2dc2909a"
        }
        const mediciones: CreateMedicionesDto = {
            nivel: "ISAK 1",
            descripcion: "primera medicion",
            profesional_id: "ffa08696-ea33-4971-9430-22588e78cedf",
            paciente_id: "d2da2eca-4bf1-4b4e-834e-41ef2dc2909a"   
        }
        const basicas: CreateBasicasDto = {
            peso: data.mediciones.peso,
            talla: data.mediciones.talla,
            talla_sentado: data.mediciones.talla_sentado,
            envergadura: data.mediciones.envergadura,
            profesional_id: "ffa08696-ea33-4971-9430-22588e78cedf",
            paciente_id: "d2da2eca-4bf1-4b4e-834e-41ef2dc2909a"
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
            profesional_id: "ffa08696-ea33-4971-9430-22588e78cedf",
            paciente_id: "d2da2eca-4bf1-4b4e-834e-41ef2dc2909a"
        }
        const perimetros: CreatePerimetrosDto = {
            brazo_relajado: data.mediciones.brazo_relajado,
            brazo_flexionado: data.mediciones.brazo_flexionado,
            cintura: data.mediciones.cintura,
            cadera: data.mediciones.cadera,
            muslo_medio: data.mediciones.muslo_medio,
            pierna: data.mediciones.pierna_per,
            profesional_id: "ffa08696-ea33-4971-9430-22588e78cedf",
            paciente_id: "d2da2eca-4bf1-4b4e-834e-41ef2dc2909a"
        }
        const diametros: CreateDiametrosDto = {
            humero: data.mediciones.humero,
            biestiloideo: data.mediciones.biestiloideo,
            femur: data.mediciones.femur,
            profesional_id: "ffa08696-ea33-4971-9430-22588e78cedf",
            paciente_id: "d2da2eca-4bf1-4b4e-834e-41ef2dc2909a"
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