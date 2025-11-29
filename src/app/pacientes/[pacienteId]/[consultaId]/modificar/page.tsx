'use client'
//next
import { useParams } from "next/navigation";
//react
import React from 'react';
import { useState, useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from "react-hook-form" 
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClipboardList, faPerson, faCalculator, faCarrot, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons'
//shared
import {ProfessionalCont, TitleSec} from '@/shared'
//features
import {Anamnesis, Mediciones, Requerimientos, Planificacion} from '@/features';
import {ConsultaService, CreateFullConsultaForm, UpdateFullConsultaForm, UpdateMedicionesForm} from '@/features';
import {ConsultaEntity} from "@/features";
//app
import '../../../../globals.css'


export default function ConsultaAnterior(){
    const [consulta, setConsulta] = useState<ConsultaEntity>()
    const pacienteId = useParams<{pacienteId: string}>().pacienteId;
    const consultaId = useParams<{consultaId: string}>().consultaId;
    const [medicionId, setMedicionId] = useState<number>(0);
    const [nroMedicion, setNroMedicion] = useState<number>(0);
    const [basicasId, setBasicasId] = useState<number>(0);
    const [plieguesId, setPlieguesId] = useState<number>(0);
    const [perimetrosId, setPerimetrosId] = useState<number>(0);
    const [diametrosId, setDiametrosId] = useState<number>(0);
    const [resultadosId, setResultadosId] = useState<number>(0);

    const methods = useForm<UpdateFullConsultaForm>({
        defaultValues: {
        // anamnesis: {},
        mediciones: UpdateMedicionesForm as any,
        // requerimientos: {},
        // planificacion: {}
        }
    });

    const { reset } = methods;

    useEffect(() => {
        const fetchData = async () => {
            try{
                const dataConsultas = (await ConsultaService.getConsultasByIdPaciente(pacienteId));
                dataConsultas.forEach((consulta: ConsultaEntity) => {
                    if(consulta.id === consultaId){
                        setConsulta(consulta)
                        setMedicionId(consulta.mediciones.id);
                        setNroMedicion(consulta.mediciones.nro_medicion);
                        setBasicasId(consulta.mediciones.basicas.id);
                        setPlieguesId(consulta.mediciones.pliegues.id);
                        setPerimetrosId(consulta.mediciones.perimetros.id);
                        setDiametrosId(consulta.mediciones.diametros.id);
                        setResultadosId(consulta.mediciones.resultados_med.id);
                        // ¡Punto clave! Reinicia el formulario con los datos obtenidos.
                        reset({
                            mediciones: {
                                "peso": consulta.mediciones.basicas.peso,
                                "talla": consulta.mediciones.basicas.talla,
                                "talla_sentado": consulta.mediciones.basicas.talla_sentado,
                                "envergadura": consulta.mediciones.basicas.envergadura,                          
                                "tricep": consulta.mediciones.pliegues.tricep,
                                "subescapular": consulta.mediciones.pliegues.subescapular,
                                "bicep": consulta.mediciones.pliegues.bicep,
                                "cresta_iliaca": consulta.mediciones.pliegues.cresta_iliaca,
                                "supraespinal": consulta.mediciones.pliegues.supraespinal,                                
                                "abdominal": consulta.mediciones.pliegues.abdominal,
                                "muslo": consulta.mediciones.pliegues.muslo,
                                "pierna_pli": consulta.mediciones.pliegues.pierna,
                                "brazo_relajado": consulta.mediciones.perimetros.brazo_relajado,
                                "brazo_flexionado": consulta.mediciones.perimetros.brazo_flexionado,
                                "cintura": consulta.mediciones.perimetros.cintura,
                                "cadera": consulta.mediciones.perimetros.cadera,
                                "muslo_medio": consulta.mediciones.perimetros.muslo_medio,
                                "pierna_per": consulta.mediciones.perimetros.pierna,
                                "humero": consulta.mediciones.diametros.humero,
                                "biestiloideo": consulta.mediciones.diametros.biestiloideo,
                                "femur": consulta.mediciones.diametros.femur,
                            }
                        });
                    }
                })  
            }catch(error){
                console.error("Error al obtener datos:", error); 
            }
        }
        fetchData();
    }, [pacienteId, consultaId, reset])

    const onSubmit = (data: UpdateFullConsultaForm) =>  {
        console.log("Datos completos:", data);
        // Aquí llamas a tu servicio/endpoint
        ConsultaService.updateConsulta({pacienteId, consultaId, medicionId, nroMedicion, basicasId, plieguesId, perimetrosId, diametrosId, resultadosId, data});
    };

    const [etapa, setEtapa] = useState(1);
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
            <TitleSec title={`Consulta #${consulta?.nro_consulta}`}/>
            {/* etapas */}
            <div className='relative h-[100px] w-full mb-10'>
                <div className='absolute w-full h-[100px]'>
                    {/* barra */}
                    <div className='relative m-auto h-[100px] w-3/4 top-0 flex justify-center items-center'>
                        <FontAwesomeIcon icon={faCircle} className=" text-primary " style={{width: '10px', height: '10px'}}/>
                        <div className='h-[2px] w-full bg-primary'></div>
                        <FontAwesomeIcon icon={faCircle} className=" text-primary " style={{width: '10px', height: '10px'}}/>
                    </div>
                    {/* circulos */}
                    <div className='relative m-auto flex w-3/4 h-[100px] top-[-100px] justify-evenly items-center'>
                        <div className='w-[70px] h-[70px]'>
                            {
                                anamnesis ?
                                <button onClick={changeEtapa} name="anamnesis" className='flex border w-[70px] h-[70px] justify-center items-center bg-primary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faClipboardList} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="anamnesis" className='flex border w-[70px] h-[70px] justify-center items-center bg-secondary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faClipboardList} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                        <div className='w-[70px] h-[70px]'>
                            {
                                mediciones ?
                                <button onClick={changeEtapa} name="mediciones" className='flex border w-[70px] h-[70px] justify-center items-center bg-primary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faPerson} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="mediciones" className='flex border w-[70px] h-[70px] justify-center items-center bg-secondary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faPerson} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                        <div className='w-[70px] h-[70px]'>
                            {
                                requerimientos ?
                                <button onClick={changeEtapa} name="requerimientos" className='flex border w-[70px] h-[70px] justify-center items-center bg-primary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCalculator} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="requerimientos" className='flex border w-[70px] h-[70px] justify-center items-center bg-secondary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCalculator} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                        <div className='w-[70px] h-[70px]'>
                            {
                                planificacion ?
                                <button onClick={changeEtapa} name="planificacion" className='flex border w-[70px] h-[70px] justify-center items-center bg-primary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCarrot} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="planificacion" className='flex border w-[70px] h-[70px] justify-center items-center bg-secondary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCarrot} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                        <div className='w-[70px] h-[70px]'>
                            {
                                preview ?
                                <button onClick={changeEtapa} name="preview" className='flex border w-[70px] h-[70px] justify-center items-center bg-primary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCheck} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                                :
                                <button onClick={changeEtapa} name="preview" className='flex border w-[70px] h-[70px] justify-center items-center bg-secondary border-blue-500 rounded-[50px]'>
                                    <FontAwesomeIcon icon={faCheck} className=" text-white " style={{width: '38px', height: '38px'}}/>
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Formulario */}
             <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}> 
                    {
                        anamnesis &&
                        <Anamnesis/>
                    }
                    {
                        mediciones &&
                        <Mediciones {...consulta}/>
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
                    <button type="submit">Guardar consulta</button>
                </form>
            </FormProvider>

            <div className='w-full flex justify-between mt-10 mb-5'>
                <div className='w-[150px] h-[35px]'>
                    <button className='primary-btn' onClick={prevEtapa}>Anterior</button> 
                </div>
                {/* <div className="w-[200px] h-[35px] flex justify-center m-auto">
                    <button className="primary-btn" type="button" onClick={methods.handleSubmit(onSubmit)}>
                        Guardar
                        </button>
                </div> */}
                <div className='w-[150px] h-[35px]'>
                    <button className='primary-btn' onClick={nextEtapa}>Siguiente</button>
                </div>
            </div>

    </ProfessionalCont>
    )
}