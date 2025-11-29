'use client'
//next
import { useParams } from "next/navigation";
//react
import { useState, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form" 
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClipboardList, faPerson, faCalculator, faCarrot, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons'
//shared
import {ProfessionalCont, TitleSec} from '@/shared'
//features
import {ConsultaService, UsuarioService} from '@/features';
import {ConsultaEntity, MedicionEntity} from "@/features";
import { Usuario } from "@/features/usuario/types/usuario";
import {GraphResumen, GraphCompCorpPorc, GraphCompCorpKg, GraphPerimetros, GraphPliegues} from '@/features'
//app
import '../../../../globals.css'


export default function ResultadosConsulta(){
    const [usuario, setUsuario] = useState<Usuario>()
    const [consultas, setConsultas] = useState<ConsultaEntity[]>()
    const [verX, setVerX] = useState(3);
    const pacienteId = useParams<{pacienteId: string}>().pacienteId;
    const consultaId = useParams<{consultaId: string}>().consultaId;
    const medicionLastOne = consultas?.[0].mediciones;

    useEffect(() => {
        const fetchData = async () => {
            try{
                const dataUsuario = await UsuarioService.getUsuarioById(pacienteId);
                const consultaActual = await ConsultaService.getConsultaByIdPacienteAndIdConsulta(pacienteId, consultaId)
                const fechaConsultaActual = consultaActual.fecha_consulta;
                console.log('fecha consulta actual:' + fechaConsultaActual)
                const dataConsultas = await ConsultaService.getConsultasByIdPacienteAndDate(pacienteId, fechaConsultaActual)
                console.log('consultas x fecha: ' + dataConsultas)
                setUsuario(dataUsuario);      
                setConsultas(dataConsultas);
            }catch(error){
                console.error("Error al obtener datos:", error); 
            }
        }
        fetchData();
    }, [])
    
    return(
        <ProfessionalCont>
            <TitleSec title="Resultados"/>

            <div className="border mb-10 rounded">
                {/* falta añadir el default option */}
                <select onChange={(e) => setVerX(Number(e.target.value))} className="w-full">
                    {
                        consultas?.map((consulta, index) => (
                            <option key={index} value={index + 1}>
                                {
                                    index > 0 ? `Últimas ${index + 1} evaluaciones` : `Última evaluación`
                                }
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className="flex flex-wrap justify-between">

                <GraphResumen {...{peso: medicionLastOne?.basicas.peso, 
                    talla: medicionLastOne?.basicas.talla,
                    imc: medicionLastOne?.resultados_med.imc,
                    mm_kg: medicionLastOne?.resultados_med.mm_kg,
                    gc_kg: medicionLastOne?.resultados_med.gc_kg
                }} />
                <GraphCompCorpPorc consultas={consultas} />
                <GraphCompCorpKg consultas={consultas} />
                <GraphPerimetros data={consultas} verX={verX}/>
                <GraphPliegues data={consultas} verX={verX}/>
       
            </div>

        </ProfessionalCont>
    )
}
