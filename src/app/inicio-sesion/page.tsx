'use client'
//react
import React from "react"
//features
import { InicioSesionForm } from "@/features";
//shared
import { HomeCont, ContSubSec, HeadSubSec, TitleSubSec } from "@/shared"

export default function Registro(){
    return(
        <HomeCont>
            <div className="m-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mt-40 md:mt-20">
                <ContSubSec>
                    <HeadSubSec>
                        <TitleSubSec title="Inicio de sesión"/>
                    </HeadSubSec>
                        <InicioSesionForm/>
                    <div className='h-[40px]'></div>
                </ContSubSec>
            </div>
        </HomeCont>
    )
}