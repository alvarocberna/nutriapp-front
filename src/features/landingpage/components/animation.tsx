"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Componente animado de un usuario escribiendo en un computador.
// Ahora incluye cuerpo, brazos y manos que se mueven en animación de tecleo.
// Puedes ajustar colores, tamaños y animaciones libremente.

export function AnimatedUser() {
  const [blink, setBlink] = useState(false);
  const [eyebrowLift, setEyebrowLift] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    // Parpadeo
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3000);

    // Cejas
    const eyebrowInterval = setInterval(() => {
      setEyebrowLift(true);
      setTimeout(() => setEyebrowLift(false), 500);
    }, 5000);

    // Tecleo alternado
    const typingInterval = setInterval(() => {
      setTyping((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(eyebrowInterval);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-10">
      <div className="flex flex-col items-center">

        {/* CABEZA */}
        <div className="relative" style={{zIndex: 2}}>
          <div className="w-25 h-25 bg-blue-200 flex items-center justify-center relative shadow-md"
          style={{borderRadius: '60px 60px 60px 55px'}}>

            {/* OJOS */}
            <div className="absolute top-13 left-5 flex gap-8">
              <div className={`w-3 ${blink ? "h-1" : "h-4"} bg-black rounded-full transition-all`}></div>
              <div className={`w-3 ${blink ? "h-1" : "h-4"} bg-black rounded-full transition-all`}></div>
            </div>

            {/* CEJAS */}
            {/* <div className="absolute top-10 left-3 flex gap-8">
              <div className={`w-5 h-1 bg-black rounded-full transition-transform ${eyebrowLift ? "-translate-y-1" : ""}`}></div>
              <div className={`w-5 h-1 bg-black rounded-full transition-transform ${eyebrowLift ? "-translate-y-1" : ""}`}></div>
            </div> */}
          </div>
        </div>

        {/* CUERPO + BRAZOS */}
        <div className="mt-[-25px] relative" style={{zIndex: '1'}}>
          {/* TORSO */}
          <div className="bg-blue-300 w-30 h-20 shadow-md flex justify-center pt-10" style={{borderRadius: '80px 80px 0 0'}}>

            {/* BRAZOS */}
            <div className="flex gap-13 absolute top-14">
              {/* Mano izquierda */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-6 bg-blue-200 transition-transform ${
                    typing ? "translate-y-2" : "-translate-y-1"
                  }`} style={{borderRadius: '15px 15px 10px 10px'}}
                ></div>
              </div>
              {/* Mano derecha */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-6 bg-blue-200 rounded-full transition-transform ${
                    typing ? "-translate-y-1" : "translate-y-2"
                  }`} style={{borderRadius: '15px 15px 10px 10px'}}
                ></div>
              </div>

            </div>
          </div>
        </div>

        {/* COMPUTADOR */}
        <div className="relative mr-[80] h-[100px] w-[220px]">
          {/* Pantalla */}
          {/* <div className="bg-gray-700 w-72 h-40 rounded-lg shadow-xl flex items-center justify-center">
            <div className="bg-gray-900 w-60 h-28 rounded-md"></div>
          </div> */}

          {/* Base */}
          <Image  src="/images/teclado.png" width={220} height={100} alt="Teclado de computador" 
            className=""/>
          <Image  src="/images/pantalla.png" width={220} height={100} alt="Teclado de computador" 
            className="absolute bottom-16 right-18" style={{zIndex: 3}}/>
          {/* <div className="bg-gray-800 w-48 h-4 rounded-b-lg mx-auto"></div> */}

        </div>

      </div>
    </div>
  );
}
