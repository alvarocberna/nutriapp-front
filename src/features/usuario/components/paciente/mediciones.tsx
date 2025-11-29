'use client'
//react
import React from 'react';
import { useFormContext } from "react-hook-form";
//shared
import { TitleSubSec, HeadSubSec, BodySubSec, ContSubSec, InputOutlined} from '../../../../shared'
import {CreateMedicionesForm} from '../../../consulta/types/consulta'
//features
import {ConsultaEntity} from "@/features";
// import '../../../globals.css'

export function Mediciones(props: Partial<ConsultaEntity>){

    const med = props.mediciones
    const { register } = useFormContext();

    return(
        <div>
            <ContSubSec>
                <HeadSubSec>
                    <div className='w-[90%] m-auto'>
                        <TitleSubSec title="Mediciones"/>
                    </div>
                </HeadSubSec>
                <BodySubSec>
                    <div className='w-[90%] m-auto]'>
                        <TitleSubSec title="Mediciones básicas"/>
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-2 mb-6">
                            <InputOutlined defaultValue={med?.basicas.peso} label="Peso" name="mediciones.peso" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.basicas.talla} label="Talla" name="mediciones.talla" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.basicas.talla_sentado} label="Talla sentado" name="mediciones.talla_sentado" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.basicas.envergadura} label="Envergadura" name="mediciones.envergadura" type="number" register={register} rules={{ required: true }}/>
                        </div>
                        <TitleSubSec title="Pliegues"/>
                        <div className="grid grid-cols-2 grid-rows-4 gap-x-2 mb-6">
                            <InputOutlined defaultValue={med?.pliegues.tricep} label="Tricep" name="mediciones.tricep" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.pliegues.subescapular} label="Subescapular" name="mediciones.subescapular" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.pliegues.bicep} label="Bicep" name="mediciones.bicep" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.pliegues.cresta_iliaca} label="Cresta Iliaca" name="mediciones.cresta_iliaca" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.pliegues.supraespinal} label="Supraespinal" name="mediciones.supraespinal" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.pliegues.abdominal} label="Abdominal" name="mediciones.abdominal" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.pliegues.muslo} label="Muslo" name="mediciones.muslo" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.pliegues.pierna} label="Pierna" name="mediciones.pierna_pli" type="number" register={register} rules={{ required: true }}/>
                        </div>
                        <TitleSubSec title="Perímetros"/>
                        <div className="grid grid-cols-2 grid-rows-3 gap-x-2 mb-6">
                            <InputOutlined defaultValue={med?.perimetros.brazo_relajado} label="Brazo Relajado" name="mediciones.brazo_relajado" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.perimetros.brazo_flexionado} label="Brazo Flexionado" name="mediciones.brazo_flexionado" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.perimetros.cintura} label="Cintura" name="mediciones.cintura" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.perimetros.cadera} label="Cadera" name="mediciones.cadera" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.perimetros.muslo_medio} label="Muslo Medio" name="mediciones.muslo_medio" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.perimetros.pierna} label="Pierna" name="mediciones.pierna_per" type="number" register={register} rules={{ required: true }}/>
                        </div>
                           <TitleSubSec title="Diámetros óseos"/>
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-2 mb-6">
                            <InputOutlined defaultValue={med?.diametros.humero} label="Humero" name="mediciones.humero" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.diametros.biestiloideo} label="Biestiloideo" name="mediciones.biestiloideo" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined defaultValue={med?.diametros.femur} label="Femur" name="mediciones.femur" type="number" register={register} rules={{ required: true }}/>
                        </div>
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>
        </div>
         
    )
}