'use client'
//react
import React from 'react';
//local
import { TitleSubSec, HeadSubSec, BodySubSec, ContSubSec, InputOutlined} from '../../../../shared'
// import '../../../globals.css'

export function Planificacion(){
    return(
        <div>
            <ContSubSec>
                <HeadSubSec>
                    <div className='w-[90%] m-auto'>
                        <TitleSubSec title="Planificacion"/>
                    </div>
                </HeadSubSec>   
                <BodySubSec>
                    <div className='w-[90%] m-auto]'>
                        <div className="grid grid-cols-5 grid-rows-4 border border-black">
                            {/* fila 1 */}
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
    
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>Calorías</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>Proteínas</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>Carbohidratos</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>Lípidos</p>
                            </div>
                            {/* fila 2 */}
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>Aporte</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            {/* fila 3 */}
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>Requerimientos</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            {/* fila 4 */}
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>Adecuación</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                     
                        </div>
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>
        </div>
         
    )
}