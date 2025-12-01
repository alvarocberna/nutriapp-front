'use client'
//react
import React from "react"
//shared
import { HomeCont, ContSubSec, HeadSubSec, TitleSubSec, BodySubSec } from "@/shared"
//features
import {FormNuevoProfesional} from "@/features/usuario/components/profesional/form-nuevo-profesional"

export default function Registro(){
    return(
        <HomeCont>
            <div className="m-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mt-25 md:mt-5 border mb-10">
                <ContSubSec>
                    <HeadSubSec>
                        <TitleSubSec title="Registro" width="90%"/>
                    </HeadSubSec>
                        <FormNuevoProfesional/>
                    <div className='h-[40px]'></div>
                </ContSubSec>
            </div>
        </HomeCont>
    )
}