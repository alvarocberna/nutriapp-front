'use client'
//react
import React from 'react';
import { useFormContext } from "react-hook-form";
//shared
import { TitleSubSec, HeadSubSec, BodySubSec, ContSubSec, InputOutlined} from '../../../../shared'
// import '../../../globals.css'

export function Anamnesis(){
    const { register } = useFormContext();
    return(
        <div>
            <ContSubSec>
                <HeadSubSec>
                    <div className='w-[90%] m-auto'>
                    <TitleSubSec title="Anamnésis clínica"/>
                    </div>
                </HeadSubSec>
                <BodySubSec>
                    <div className='w-[90%] m-auto]'>
                        {/* <InputOutlined label="Patologia" name="rut" type="text" register={register} rules={{ required: false }}/> */}
                        {/* <InputOutlined label="Antecedentes mórbidos familiares"/>
                        <InputOutlined label="Alergias"/>
                        <InputOutlined label="Intolerancias"/>
                        <InputOutlined label="Farmacos"/>
                        <InputOutlined label="Antecedentes gastroinestinales"/>
                        <InputOutlined label="Deposiciones"/>
                        <InputOutlined label="Cirugías"/>
                        <InputOutlined label="Exámenes de laboratorio"/> */}
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>

            {/* anamnesis psicosocial */}
            <ContSubSec>
                <HeadSubSec>
                    <div className='w-[90%] m-auto'>
                    <TitleSubSec title="Anamnésis psicosocial"/>
                    </div>
                </HeadSubSec>
                <BodySubSec>
                    <div className='w-[90%] m-auto]'>
                        {/* <InputOutlined label="?"/>
                        <InputOutlined label="??"/>
                        <InputOutlined label="???"/> */}
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>

            {/* anamnesis alimentaria */}
            <ContSubSec>
                <HeadSubSec>
                    <div className='w-[90%] m-auto'>
                    <TitleSubSec title="Anamnésis alimentaria"/>
                    </div>
                </HeadSubSec>
                <BodySubSec>
                    <div className='w-[90%] m-auto]'>
                        {/* <InputOutlined label="R24H"/>
                        <InputOutlined label="ETCC"/> */}
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>

            {/* evs */}
            <ContSubSec>
                <HeadSubSec>
                    <div className='w-[90%] m-auto'>
                    <TitleSubSec title="Estilo de vida saludable"/>
                    </div>
                </HeadSubSec>
                <BodySubSec>
                    <div className='w-[90%] m-auto]'>
                        {/* <InputOutlined label="Alcohol"/>
                        <InputOutlined label="Tabaco"/>
                        <InputOutlined label="Deporte"/> */}
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>
        </div>
         
    )
}