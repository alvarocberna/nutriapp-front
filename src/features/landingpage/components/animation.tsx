"use client";
//react
import { useEffect, useState } from "react";
//next
import Image from "next/image";

export function AnimatedUser() {
  const [blink, setBlink] = useState(false);
  const [eyebrowLift, setEyebrowLift] = useState(false);
  const [damage, setDamage] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    // Parpadeo
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
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
    
    //cada vez que useEffect termina, React ejecuta el return:
    //1) antes de volver a ejecutar useEffect y 2) al desmontar el componente
    //en este caso detenemos los setInterval al desmontar el componente
    return () => {
      clearInterval(blinkInterval);
      clearInterval(eyebrowInterval);
      clearInterval(typingInterval);
    };
  }, []);
  
  const clickUser = () => {
    setDamage(true)
    setTimeout(() => {setDamage(false)}, 800)
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-10">
      <div className="flex flex-col items-center">

        {/* CABEZA */}
        <div className="relative" style={{zIndex: 2, cursor: 'pointer'}} onClick={() => {clickUser()}}>
          <div className="w-25 h-25 bg-purple-300 flex items-center justify-center relative shadow-md"
          style={{borderRadius: '60px 60px 60px 55px'}}>

            {/* OJOS */}
            {
              damage ? 
                <div className="absolute top-13 left-5 flex gap-8">
                  <div className={`w-3 h-4 transition-all flex justify-center items-center`}>X</div>
                  <div className={`w-3 h-4 transition-all flex justify-center items-center`}>X</div>
                </div>
                :
                <div className="absolute top-13 left-5 flex gap-8">
                  <div className={`w-3 ${blink ? "h-1" : "h-4"} bg-black rounded-full transition-all`}></div>
                  <div className={`w-3 ${blink ? "h-1" : "h-4"} bg-black rounded-full transition-all`}></div>
                </div>
            }

            {/* CEJAS */}
            {/* <div className="absolute top-10 left-3 flex gap-8">
              <div className={`w-5 h-1 bg-black rounded-full transition-transform ${eyebrowLift ? "-translate-y-1" : ""}`}></div>
              <div className={`w-5 h-1 bg-black rounded-full transition-transform ${eyebrowLift ? "-translate-y-1" : ""}`}></div>
            </div> */}

            {/* BOCA */}
            <div className="absolute top-20 left-9 flex gap-8">
              {
                damage ?
                <div className="w-5 h-2 border bg-black transition-all" style={{borderRadius: '10px 10px 10px 10px'}}></div>
                :
                <div className=""></div>
              }
            </div>
          </div>
        </div>

        {/* CUERPO + BRAZOS */}
        <div className="mt-[-25px] relative" style={{zIndex: '1', cursor: 'pointer'}} onClick={() => {clickUser()}}>
          {/* TORSO */}
          <div className="bg-purple-400 w-30 h-20 shadow-md flex justify-center pt-10" style={{borderRadius: '80px 80px 0 0'}}>

            {/* BRAZOS */}
            <div className="flex gap-13 absolute top-14">
              {/* Mano izquierda */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-6 bg-purple-300 transition-transform ${
                    typing ? "translate-y-2" : "-translate-y-1"
                  }`} style={{borderRadius: '15px 15px 10px 10px'}}
                ></div>
              </div>
              {/* Mano derecha */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-6 bg-purple-300 rounded-full transition-transform ${
                    typing ? "-translate-y-1" : "translate-y-2"
                  }`} style={{borderRadius: '15px 15px 10px 10px'}}
                ></div>
              </div>

            </div>
          </div>
        </div>

        {/* COMPUTADOR */}
        <div className="relative mr-[80] h-[100px] w-[220px]">
          {/* Base */}
          <Image  src="/images/teclado.png" width={220} height={100} alt="Teclado de computador" 
            className=""/>
            {/* pantalla */}
          <Image  src="/images/pantalla.png" width={220} height={100} alt="Pantalla de computador" 
            className="absolute bottom-16 right-18" style={{zIndex: 3}}/>
        </div>

      </div>
    </div>
  );
}
