'use client'
//react
import React from 'react';
//local
import { TitleSubSec, HeadSubSec, BodySubSec, ContSubSec, InputOutlined} from '../../../shared'
import '../../../app/globals.css'

export default function Requerimientos(){
    return(
        <div>
            <ContSubSec>
                <HeadSubSec>
                    <div className='w-[90%] m-auto'>
                        <TitleSubSec title="Cálculo de requerimientos"/>
                    </div>
                </HeadSubSec>   
                <BodySubSec>
                    <div className='w-[90%] m-auto]'>
                        <div className="grid grid-cols-3 grid-rows-3 border border-black">
                            {/* fila 1 */}
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>Item</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                Valor
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                Aporte
                            </div>
                            {/* fila 2 */}
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p className='w-full pl-5 text-left'>TMB</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <select className='w-full h-full text-center'>
                                    <option>FAO</option>
                                    <option>HB</option>
                                    <option>OMS</option>
                                </select>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>1400</p>
                            </div>
                            {/* fila 3 */}
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p className='w-full pl-5 text-left'>Actividad física</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>1.4</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>560</p>
                            </div>
                            {/* fila 4 */}
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p className='w-full pl-5 text-left'>Total</p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p></p>
                            </div>
                            <div className='h-[40px] border flex justify-center items-center border-black text-center text-black text-md'>
                                <p>1960</p>
                            </div>
                        </div>
                    </div>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>
        </div>
         
    )
}