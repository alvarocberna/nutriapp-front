'use client'
//features
import { InicioSesionForm } from "@/features";
//shared
// import { GeneralCont } from "@/shared";

// export default function InicioSesion(){
//     return(
//         <GeneralCont>
//             <div className="w-1/2 m-auto">
//                 <InicioSesionForm/>
//             </div>
//         </GeneralCont>
//     )
// }

//react
import React from "react"
//shared
import { HomeCont, ContSubSec, TitleSec, HeadSubSec, TitleSubSec, BodySubSec } from "@/shared"
//features
import {FormNuevoProfesional} from "@/features/usuario/components/profesional/form-nuevo-profesional"

export default function Registro(){
    return(
        <HomeCont widthInner="50%">
                <ContSubSec>
                    <HeadSubSec>
                        <TitleSubSec title="Inicio de sesión" width="90%"/>
                    </HeadSubSec>
                    {/* <BodySubSec>  */}
                        <InicioSesionForm/>
                    {/* </BodySubSec> */}
                    <div className='h-[40px]'></div>
                </ContSubSec>
        </HomeCont>
    )
}