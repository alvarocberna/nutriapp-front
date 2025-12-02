'use client'
//next
import Link from "next/link";
import Image from "next/image";
//shared
import { HomeCont } from "@/shared";
//features
import { Grafico } from "@/features/landingpage/components/grafico";
import {AnimatedUser} from "@/features/landingpage/components/animation";
//css
import './globals.css'

export default function Home() {
  return (
    <div>
      <HomeCont>
        {/* contenedor */}
        <div className="flex flex-col md:flex-row justify-start w-full h-full md:h-[450px] mt-25 md:mt-10">
          {/* left */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center">
            <h2 className="mx-auto text-4xl w-[90%] md:w-[75%] mb-5 md:mb-8">
              Software Nutricional para la gestión de pacientes, 
              creación de fichas clínicas e informes antropométricos
            </h2>
            <div className="flex mx-auto w-[90%] md:w-[75%]">
              <Link href='/registro' className="w-[200px] flex bg-green-600 py-2 rounded me-3 text-white btn-hover">
                <p className="mx-auto">Registro</p>
              </Link>
              <Link href='/inicio-sesion' className="w-[200px] flex bg-green-600 py-2 rounded text-white btn-hover">
                <p className="mx-auto">Inicio de Sesión</p>
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <div className="absolute flex h-[200px] w-[300px] top-5 md:top-15 right-5 sm:right-20 lg:right-20 xl:right-40 shadow" 
              style={{background: 'white', borderRadius: '12px'}}>
              <Grafico/>
            </div>
            <Image src={'/images/nota-1.png'} alt="nota" width={25} height={25} className="absolute top-35 md:top-20 right-85 sm:right-100 md:right-8 xl:right-25" />
            <Image src={'/images/nota-2.png'} alt="nota" width={25} height={25} className="absolute top-15 md:top-40  right-85 sm:right-100 xl:right-125" />
            {/* <Image src={'/images/planta.png'} alt="planta" width={52} height={52} className="absolute top-67 right-20" /> */}
            <div className="absolute w-[500px] md:left-0 lg:left-20 xl:left-35 top-80" style={{borderTop: '1px solid #d9d9d9'}}></div>
            <div className="absolute h-[300px] w-[230px] md:w-[300px] top-20 md:top-50 right-5 sm:right-25 md:right-5 lg:right-20 xl:right-50">
              <AnimatedUser/>
            </div>
          </div>
        </div>
      </HomeCont>
    </div>
  );
}
