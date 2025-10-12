'use client'
//react
import React from 'react';
import { useFormContext } from "react-hook-form";
//shared
import { TitleSubSec, HeadSubSec, BodySubSec, ContSubSec, InputOutlined} from '../../../../shared'
import {CreateMedicionesForm} from '../../../consulta/types/consulta'
// import '../../../globals.css'

export function Mediciones(){

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
                            <InputOutlined label="Peso" name="mediciones.peso" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Talla" name="mediciones.talla" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Talla sentado" name="mediciones.talla_sentado" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Envergadura" name="mediciones.envergadura" type="number" register={register} rules={{ required: true }}/>
                        </div>
                        <TitleSubSec title="Pliegues"/>
                        <div className="grid grid-cols-2 grid-rows-4 gap-x-2 mb-6">
                            <InputOutlined label="Tricep" name="mediciones.tricep" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Subescapular" name="mediciones.subescapular" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Bicep" name="mediciones.bicep" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Cresta Iliaca" name="mediciones.cresta_iliaca" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Supraespinal" name="mediciones.supraespinal" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Abdominal" name="mediciones.abdominal" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Muslo" name="mediciones.muslo" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Pierna" name="mediciones.pierna_pli" type="number" register={register} rules={{ required: true }}/>
                            {/* <InputOutlined label="Tricep"/>
                            <InputOutlined label="Subescapular"/>
                            <InputOutlined label="Bicep"/>
                            <InputOutlined label="Cresta Iliaca"/>
                            <InputOutlined label="Supraespinal"/>
                            <InputOutlined label="Abdominal"/>
                            <InputOutlined label="Muslo medio"/>
                            <InputOutlined label="Pierna"/> */}
                        </div>
                        <TitleSubSec title="Perímetros"/>
                        <div className="grid grid-cols-2 grid-rows-3 gap-x-2 mb-6">
                            <InputOutlined label="Brazo Relajado" name="mediciones.brazo_relajado" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Brazo Flexionado" name="mediciones.brazo_flexionado" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Cintura" name="mediciones.cintura" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Cadera" name="mediciones.cadera" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Muslo Medio" name="mediciones.muslo_medio" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Pierna" name="mediciones.pierna_per" type="number" register={register} rules={{ required: true }}/>
                            {/* <InputOutlined label="Brazo relajado"/>
                            <InputOutlined label="Brazo flexionado"/>
                            <InputOutlined label="Cintura"/>
                            <InputOutlined label="Cadera"/>
                            <InputOutlined label="Muslo medio"/>
                            <InputOutlined label="Pierna"/> */}
                        </div>
                           <TitleSubSec title="Diámetros óseos"/>
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-2 mb-6">
                            <InputOutlined label="Humero" name="mediciones.humero" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Biestiloideo" name="mediciones.biestiloideo" type="number" register={register} rules={{ required: true }}/>
                            <InputOutlined label="Femur" name="mediciones.femur" type="number" register={register} rules={{ required: true }}/>
                            {/* <InputOutlined label="medicion 1"/>
                            <InputOutlined label="medicion 2"/>
                            <InputOutlined label="medicion 3"/> */}
                        </div>
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>
        </div>
         
    )
}