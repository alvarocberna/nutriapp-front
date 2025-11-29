'use client'
//react
import React from "react"
//features
import { InicioSesionForm } from "@/features";
//shared
import { HomeCont, ContSubSec, HeadSubSec, TitleSubSec } from "@/shared"

export default function Registro(){
    return(
        <HomeCont widthInner="50%">
                <ContSubSec>
                    <HeadSubSec>
                        <TitleSubSec title="Inicio de sesión" width="90%"/>
                    </HeadSubSec>
                        <InicioSesionForm/>
                    <div className='h-[40px]'></div>
                </ContSubSec>
        </HomeCont>
    )
}