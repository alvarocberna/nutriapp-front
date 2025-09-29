'use client'
//react
import React from 'react';
//local
import { TitleSubSec, HeadSubSec, BodySubSec, ContSubSec, InputOutlined} from '../../../shared'
// import '../../../globals.css'

export default function Mediciones(){
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
                            <InputOutlined label="Peso"/>
                            <InputOutlined label="Talla"/>
                            <InputOutlined label="Talla sentado"/>
                            <InputOutlined label="Envergadura"/>
                        </div>
                        <TitleSubSec title="Pliegues"/>
                        <div className="grid grid-cols-2 grid-rows-4 gap-x-2 mb-6">
                            <InputOutlined label="Tricep"/>
                            <InputOutlined label="Subescapular"/>
                            <InputOutlined label="Bicep"/>
                            <InputOutlined label="Cresta Iliaca"/>
                            <InputOutlined label="Supraespinal"/>
                            <InputOutlined label="Abdominal"/>
                            <InputOutlined label="Muslo medio"/>
                            <InputOutlined label="Pierna"/>
                        </div>
                        <TitleSubSec title="Perímetros"/>
                        <div className="grid grid-cols-2 grid-rows-3 gap-x-2 mb-6">
                            <InputOutlined label="Brazo relajado"/>
                            <InputOutlined label="Brazo flexionado"/>
                            <InputOutlined label="Cintura"/>
                            <InputOutlined label="Cadera"/>
                            <InputOutlined label="Muslo medio"/>
                            <InputOutlined label="Pierna"/>
                        </div>
                           <TitleSubSec title="Diámetros óseos"/>
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-2 mb-6">
                            <InputOutlined label="medicion 1"/>
                            <InputOutlined label="medicion 2"/>
                            <InputOutlined label="medicion 3"/>
                        </div>
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>
        </div>
         
    )
}