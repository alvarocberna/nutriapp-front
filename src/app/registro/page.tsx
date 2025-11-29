'use client'
//react
import React from "react"
//shared
import { HomeCont, ContSubSec, HeadSubSec, TitleSubSec, BodySubSec } from "@/shared"
//features
import {FormNuevoProfesional} from "@/features/usuario/components/profesional/form-nuevo-profesional"

export default function Registro(){
    return(
        <HomeCont widthInner="50%">
                <ContSubSec>
                    <HeadSubSec>
                        <TitleSubSec title="Registro" width="90%"/>
                    </HeadSubSec>
                        <FormNuevoProfesional/>
                    <div className='h-[40px]'></div>
                </ContSubSec>
        </HomeCont>
    )
}