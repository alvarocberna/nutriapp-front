'use client'
import Image from "next/image";
import { NavbarHome } from "@/shared";
import { HomeCont } from "@/shared";
import {toast} from 'react-toastify';
import { Grafico } from "@/features/landingpage/components/grafico";
import {AnimatedUser} from "@/features/landingpage/components/animation";


export default function Home() {

  const mensaje = () => {
    toast.success('uwu')
  }

  return (
    <div>
      <HomeCont>
        {/* contenedor */}
        <div className="flex f-column justify-end w-full h-[450px] bg-primary">
          {/* left */}
          <div className="w-1/2 h-full flex flex-col justify-center">
            <h2 className="mx-auto text-3xl w-[75%] mb-5">
              Software Nutricional para la gestión de pacientes, 
              creación de fichas clínicas e informes antropométricos
            </h2>
            <div className="flex mx-auto w-[75%]">
              <button className="w-[200px] py-2 rounded border me-3">Registro</button>
              <button className="w-[200px] py-2 rounded border">Inicio de Sesión</button>
            </div>
          </div>
          {/* right */}
          <div className="w-1/2 h-full relative">
            <div className="absolute flex h-[200px] w-[300px] top-15 right-40 shadow" 
              style={{background: 'white', borderRadius: '12px'}}>
              <Grafico/>
            </div>
            <div className="absolute h-[300px] w-[300px] top-45 left-60">
              <AnimatedUser/>
            </div>
          </div>
        </div>
      </HomeCont>
    </div>
  );
}
