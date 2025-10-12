'use client'
//next 
import { useParams } from "next/navigation";
import Link from "next/link";
//react
import React from "react";
import { useEffect, useState } from "react";
//fontawesoma
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faPencil, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
//shared
import {ProfessionalCont, TitleSec, HeadSubSec, RowSubSec, DivSubSec, ContSubSec} from '../../../shared'
//featured
import { UsuarioService } from "@/features/usuario/api/usuario.api";
import { Usuario } from "@/features/usuario/types/usuario";
import FichaClinica from "@/features/usuario/components/paciente/ficha-clinica";


export default function FichaPaciente(){

    const id = useParams<{id: string}>().id;

    const [usuario, setUsuario] = useState<Usuario>()
    
    useEffect(() => {
        const fetchUsuario = async () => {
            try{
                const data = await UsuarioService.getUsuarioById(id);
                setUsuario(data);         
            }catch(error){
                console.error("Error al obtener usuarios:", error); 
            }
        }
        fetchUsuario();
    }, [])
    
    return(

        <ProfessionalCont>
            <TitleSec title={"Ficha" + " " + usuario?.nombre_primero + " " + usuario?.apellido_paterno}/>

            {/* sesiones component */}
            <ContSubSec>
                {/* header sec */}
                <HeadSubSec>
                    {/* title sec */}
                    <h2 className="left-[19px] top-[24px] text-primary font-inter text-[24px] font-bold">
                        Sesiones anteriores
                    </h2>
                    {/* btn 'nuevo paciente' */}
                    <div className='w-[25%] h-[40px]'>
                        <Link href={`${id}/nueva-sesion`} className="primary-btn flex justify-center items-center">
                        <FontAwesomeIcon icon={faPlus} className="me-2 text-white" style={{width: '16px', height: '16px'}}/>
                        <p className='p-0 m-0 text-md'>Nueva sesión</p>
                        </Link>
                    </div>
                </HeadSubSec>

                {/* Row 1 */}
                <RowSubSec>
                    <span className="w-1/4 text-md text-black">01-01-25</span>
                    <span className="w-2/4 text-md text-black ">Peso: 70kg | Talla: 173cm | IMC: 24.0</span>
                    <div className="w-1/4 flex justify-center items-center ">
                        <Link href="#" className="h-[30px] w-[30px] flex justify-center items-center bg-green-500 mx-2 rounded-[3]">
                            <FontAwesomeIcon icon={faEye} className=" text-white" style={{width: '20px', height: '20px'}}/>
                        </Link>
                        <Link href="#" className="h-[30px] w-[30px] flex justify-center items-center bg-yellow-500 mx-2 rounded-[3]">
                            <FontAwesomeIcon icon={faPencil} className=" text-white" style={{width: '20px', height: '20px'}}/>
                        </Link>
                        <Link href="#" className="h-[30px] w-[30px] flex justify-center items-center bg-red-700 mx-2 rounded-[3]">
                            <FontAwesomeIcon icon={faTrash} className=" text-white" style={{width: '20px', height: '20px'}}/>
                        </Link>
                    </div>
                </RowSubSec>
                <RowSubSec>
                    <span className="w-1/4 text-md text-black">01-01-25</span>
                    <span className="w-2/4 text-md text-black ">Peso: 70kg | Talla: 173cm | IMC: 24.0</span>
                    <div className="w-1/4 flex justify-center items-center ">
                        <Link href="#" className="h-[30px] w-[30px] flex justify-center items-center bg-green-500 mx-2 rounded-[3]">
                            <FontAwesomeIcon icon={faEye} className=" text-white" style={{width: '20px', height: '20px'}}/>
                        </Link>
                        <Link href="#" className="h-[30px] w-[30px] flex justify-center items-center bg-yellow-500 mx-2 rounded-[3]">
                            <FontAwesomeIcon icon={faPencil} className=" text-white" style={{width: '20px', height: '20px'}}/>
                        </Link>
                        <Link href="#" className="h-[30px] w-[30px] flex justify-center items-center bg-red-700 mx-2 rounded-[3]">
                            <FontAwesomeIcon icon={faTrash} className=" text-white" style={{width: '20px', height: '20px'}}/>
                        </Link>
                    </div>
                </RowSubSec>
                {/* Ver todo link */}
                <DivSubSec/>
                <div className="h-[40px] w-full text-primary text-md flex justify-center items-center ">
                    <p>
                        Ver todo
                    </p>
                </div>
            </ContSubSec>

            {
                usuario && <FichaClinica {...usuario}/>
            }
         
            
            
            <div className='h-[320px]'></div>
        </ProfessionalCont>
    )
}
