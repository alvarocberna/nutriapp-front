'use client'
//react
import React from "react"
//shared
import { HomeCont, ContSubSec, TitleSec, HeadSubSec, TitleSubSec, BodySubSec } from "@/shared"
//features
import {FormNuevoProfesional} from "@/features/usuario/components/profesional/form-nuevo-profesional"

export default function Registro(){
    return(
        <HomeCont widthInner="50%">
                {/* <TitleSec title="Registro"/> */}
                <ContSubSec>
                    <HeadSubSec>
                        <TitleSubSec title="Registro" width="90%"/>
                    </HeadSubSec>
                    {/* <BodySubSec>  */}
                        <FormNuevoProfesional/>
                    {/* </BodySubSec> */}
                    <div className='h-[40px]'></div>
                </ContSubSec>
        </HomeCont>
    )
}