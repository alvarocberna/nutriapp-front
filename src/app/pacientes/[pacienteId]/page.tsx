'use client'
//next 
import { useParams } from "next/navigation";
import Link from "next/link";
//react
import React from "react";
import { useEffect, useState } from "react";
//fontawesoma
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
//toastify
import {toast} from 'react-toastify'
//shared
import {ProfessionalCont, TitleSec, HeadSubSec, RowSubSec, DivSubSec, ContSubSec} from '../../../shared'
//featured
import { UsuarioService } from "@/features/usuario/api/usuario.api";
import { ConsultaService } from "@/features/consulta/api/consulta.api";
import { UsuarioEntity } from "@/features/usuario/types/usuario";
import {ConsultaEntity} from "@/features";
import FichaClinica from "@/features/usuario/components/paciente/ficha-clinica";


export default function Paciente(){
    const id_paciente = useParams<{pacienteId: string}>().pacienteId;
    const [usuario, setUsuario] = useState<UsuarioEntity>()
    const [consultas, setConsultas] = useState<ConsultaEntity[]>()
    const [verTodo, setVerTodo] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            //la lógica de este try catch debería estar separada ya que si es paciente nuevo tirará un catch
            try{
                const dataUsuario = await UsuarioService.getUsuarioById(id_paciente);
                setUsuario(dataUsuario);        
            }catch(error){
                console.error("Error al obtener usuario:", error); 
            }
            try{
                const dataConsultas = await ConsultaService.getConsultasByIdPaciente(id_paciente);   
                setConsultas(dataConsultas);    
            }catch(error){
                console.error("Error al obtener consultas:", error); 
            }
        }
        fetchData();
    }, [])

    let listaConsultas: any;
    if(consultas){
        listaConsultas = consultas?.map((consulta: ConsultaEntity, index: number) => {
           return(
               <ListaConsultas key={index} {...consulta} />
           )
       })
    }
    
    return(
        <ProfessionalCont>
            <TitleSec title={`${usuario?.nombre_primero} ${usuario?.apellido_paterno}`}/>
            {/* 1 - Lista consultas */}
            <ContSubSec>
                <HeadSubSec>
                    <h2 className="left-[19px] top-[24px] text-primary font-inter text-[22px] font-bold">
                        Sesiones anteriores
                    </h2>
                    <div className='w-[25%] h-[40px]'>
                        <Link href={`${id_paciente}/nueva-sesion`} className="primary-btn flex justify-center items-center">
                            <FontAwesomeIcon icon={faPlus} className="me-2 text-white" style={{width: '14px', height: '14px'}}/>
                            <p className='p-0 m-0 text-sm'>Nueva sesión</p>
                        </Link>
                    </div>
                </HeadSubSec>
                {
                    verTodo? 
                    listaConsultas
                    :
                    listaConsultas?.slice(0, 3)
                }
                <DivSubSec/>
                <div className="h-[40px] w-full text-primary text-md flex justify-center items-center ">
                    <p onClick={() => {setVerTodo(!verTodo)}} className="text-sm cursor-pointer" style={{}}>
                        Ver todo
                    </p>
                </div>
            </ContSubSec>

            {/* 2 - Ficha clinica */}
            {
                usuario && <FichaClinica paciente={usuario} consultas={consultas ? consultas: []}/>
            }
            {/* 3 - Espacio pie de pagina */}
            <div className='h-[320px]'></div>
        </ProfessionalCont>
    )
}


const ListaConsultas = (props: ConsultaEntity) => {
    const id_paciente = useParams<{pacienteId: string}>().pacienteId;
    //todo esto hacia abajo puede que no exista
    const id_consulta = props.id;
    const nro_consulta = props.nro_consulta; 
    const fecha = new Date(props.fecha_consulta); 
    const fechaConsulta = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
    const peso = props.mediciones?.basicas.peso;

    const deleteConsulta = () => {
        try{
            ConsultaService.deleteConsulta(id_paciente, id_consulta)
            toast.success('Consulta eliminada')
            window.location.reload();
        }catch(error){
            toast.error('Error al eliminar consulta');
        }
    }

    return(
        <RowSubSec>
            <div className="flex w-full justify-between items-center text-sm">
                <span className="w-1/5 text-md text-black text-start">{nro_consulta}°</span>
                <span className="w-1/5 text-md text-black text-center">{fechaConsulta}</span>
                <span className="w-1/5 text-md text-black text-center">{peso} Kg</span>
                <div className="w-2/5 flex justify-end">
                    <Link href={`/pacientes/${id_paciente}/${id_consulta}/resultados`} className="h-[30px] w-[30px] flex justify-center items-center bg-blue-500 mx-2 rounded-[3]">
                        <FontAwesomeIcon icon={faEye} className=" text-white" style={{width: '16px', height: '16px'}}/>
                    </Link>
                    <Link href={`/pacientes/${id_paciente}/${id_consulta}/modificar`} className="h-[30px] w-[30px] flex justify-center items-center bg-amber-500 mx-2 rounded-[3]">
                        <FontAwesomeIcon icon={faPencil} className=" text-white" style={{width: '16px', height: '16px'}}/>
                    </Link>
                    <Link href="#" onClick={() => deleteConsulta()} className="h-[30px] w-[30px] flex justify-center items-center bg-red-600 mx-2 rounded-[3]">
                        <FontAwesomeIcon icon={faTrash} className=" text-white" style={{width: '16px', height: '16px'}}/>
                    </Link>
                </div>
            </div>
        </RowSubSec>
    )
}