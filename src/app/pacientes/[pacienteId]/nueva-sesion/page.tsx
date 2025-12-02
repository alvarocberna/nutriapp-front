'use client'
//next
// import Link from 'next/link';
import { useParams, useRouter } from "next/navigation";
//react
import React from 'react';
import { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from "react-hook-form" 
//fontawesome
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faClipboardList, faPerson, faCalculator, faCarrot, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons'
//toast
import {toast} from 'react-toastify'
//shared
import {ProfessionalCont, TitleSec } from '../../../../shared'
//features
import {Anamnesis, Mediciones, Requerimientos, Planificacion} from '../../../../features';
import {ConsultaService, CreateFullConsultaForm, CreateMedicionesForm} from '../../../../features';
//app
import '../../../globals.css'

export default function NuevaSesion(){

    const router = useRouter();
    const id = useParams<{pacienteId: string}>().pacienteId;
    const methods = useForm<CreateFullConsultaForm>({
        defaultValues: {
        // anamnesis: {},
        mediciones: CreateMedicionesForm as any,
        // requerimientos: {},
        // planificacion: {}
        }
    });

    const onSubmit = (data: CreateFullConsultaForm) =>  {
        try{
            ConsultaService.createConsulta(id, data);
            toast.success('Consulta guardada con éxito');
            router.push(`/pacientes/${id}`);
        }catch(error: any){
            // toast.error('Error al guardar consulta');
            toast.error(error.message);
        }
    };

    const [etapa, setEtapa] = useState(2);
    const [anamnesis, setAnamnesis] = useState(false);
    const [mediciones, setMediciones] = useState(true);
    const [requerimientos, setRequerimientos] = useState(false);
    const [planificacion, setPlanificacion] = useState(false);
    const [preview, setPreviev] = useState(false);

    const changeEtapa = (e: React.MouseEvent<HTMLButtonElement>) => {
        const nameEtapa = e.currentTarget.name;
        if(nameEtapa === "anamnesis"){
            setAnamnesis(true);
            setMediciones(false);
            setRequerimientos(false);
            setPlanificacion(false);
            setPreviev(false);
            setEtapa(1);
        }else if(nameEtapa === "mediciones"){
            setAnamnesis(false);
            setMediciones(true);
            setRequerimientos(false);
            setPlanificacion(false);
            setPreviev(false);
            setEtapa(2);
        }else if(nameEtapa === "requerimientos"){
            setAnamnesis(false);
            setMediciones(false);
            setRequerimientos(true);
            setPlanificacion(false);
            setPreviev(false);
            setEtapa(3);
        }else if(nameEtapa === "planificacion"){
            setAnamnesis(false);
            setMediciones(false);
            setRequerimientos(false);
            setPlanificacion(true);
            setPreviev(false);
            setEtapa(4);
        }else if(nameEtapa === "preview"){
            setAnamnesis(false);
            setMediciones(false);
            setRequerimientos(false);
            setPlanificacion(false);
            setPreviev(true);
            setEtapa(5);
        }
    }

    const nextEtapa = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(etapa < 5){
            const etapaLvl = etapa + 1;
            setEtapa(etapaLvl);
            if(etapaLvl === 2){
                setAnamnesis(false);
                setMediciones(true);
            }else if(etapaLvl === 3){
                setMediciones(false);
                setRequerimientos(true);
            }else if(etapaLvl === 4){
                setRequerimientos(false);
                setPlanificacion(true);
            }else if(etapaLvl === 5){
                setPlanificacion(false);
                setPreviev(true)
            }
        }
    }

    const prevEtapa = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(etapa > 1){
            const etapaLvl = etapa - 1;
            setEtapa(etapaLvl);
            if(etapaLvl === 1){
                setAnamnesis(true);
                setMediciones(false);
            }else if(etapaLvl === 2){
                setMediciones(true);
                setRequerimientos(false);
            }else if(etapaLvl === 3){
                setRequerimientos(true);
                setPlanificacion(false);
            }else if(etapaLvl === 4){
                setPlanificacion(true);
                setPreviev(false)
            }
        }
    }

    return(
        <ProfessionalCont>
            <TitleSec title="Nueva sesión"/>

            {/* etapas */}
            {/* <div className='relative h-[100px] w-full mb-10'>
                <div className='absolute w-full h-[100px]'>
                    
                    <div className='BARRA relative m-auto h-[100px] w-3/4 top-0 flex justify-center items-center'>
                        <FontAwesomeIcon icon={faCircle} className=" text-green-600 " style={{width: '10px', height: '10px'}}/>
                        <div className='h-[2px] w-full bg-green-600'></div>
                        <FontAwesomeIcon icon={faCircle} className=" text-green-600 " style={{width: '10px', height: '10px'}}/>
                    </div>
                    
                    <div className='CIRCULITOS relative m-auto flex w-3/4 h-[100px] top-[-100px] justify-evenly items-center'>
                        <div className='w-[70px] h-[70px]'>
                            {
                                anamnesis ?
                                <button onClick={changeEtapa} name="anamnesis" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-600 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faClipboardList} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="anamnesis" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-200 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faClipboardList} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                        <div className='w-[70px] h-[70px]'>
                            {
                                mediciones ?
                                <button onClick={changeEtapa} name="mediciones" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-600 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faPerson} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="mediciones" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-200 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faPerson} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                        <div className='w-[70px] h-[70px]'>
                            {
                                requerimientos ?
                                <button onClick={changeEtapa} name="requerimientos" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-600 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCalculator} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="requerimientos" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-200 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCalculator} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                        <div className='w-[70px] h-[70px]'>
                            {
                                planificacion ?
                                <button onClick={changeEtapa} name="planificacion" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-600 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCarrot} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="planificacion" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-200 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCarrot} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                        <div className='w-[70px] h-[70px]'>
                            {
                                preview ?
                                <button onClick={changeEtapa} name="preview" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-600 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCheck} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="preview" className='flex border w-[70px] h-[70px] justify-center items-center bg-green-200 border-green-600 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCheck} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Formulario */}
             <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}> 
                    {
                        anamnesis &&
                        <Anamnesis/>
                    }
                    {
                        mediciones &&
                        <Mediciones/>
                    }
                    {
                        requerimientos &&
                        <Requerimientos/>
                    }
                    {
                        planificacion &&
                        <Planificacion/>
                    }
                    {
                        preview &&
                        <div>preview</div>
                    }
                    <div className='w-full flex flex-col justify-between mt-10'>
                        {/* <div className='w-full flex justify-between mb-2'>
                            <div className='w-[49%] h-[30px]'>
                                <button className='primary-btn' onClick={prevEtapa}>Anterior</button> 
                            </div>
                            <button className='hidden md:flex bg-green-600 w-[200px] h-[30px] text-white' 
                            type="submit" style={{borderRadius: '5px', cursor: 'pointer'}}>
                                Guardar consulta
                            </button>
                            <div className='w-[49%] h-[30px]'>
                                <button className='primary-btn' onClick={nextEtapa}>Siguiente</button>
                            </div>
                        </div> */}
                        <button className='m-auto bg-green-600 w-full sm:w-[50%] lg:w-[40%] xl:w-[25%] h-[30px] text-white' 
                            type="submit" style={{borderRadius: '5px', cursor: 'pointer'}}>
                            Guardar consulta
                        </button>
                    </div>
                </form>
            </FormProvider>


    </ProfessionalCont>
    )
}