
import {ProfessionalCont, TitleSec} from '../../shared'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus, faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'
import '../globals.css'


export default function Agenda() {
  return (
    <ProfessionalCont>
      
          <TitleSec title={'Agenda semanal'}/>

          {/* Search & Filtros */}
          <div className="flex items-center justify-between mb-10">
            {/* Search */}
            <div className="w-[250px] h-[40px] relative">
              <input className='input' value={'nombre'}/>
            </div>
            {/* Fecha */}
            <div className="w-[250px] h-[40px] relative">
              <input className='input' value={'fecha'}/>
            </div>
            {/* Hora */}
            <div className="w-[250px] h-[40px] relative">
              <input className='input' value={'hora'}/>
            </div>
            {/* Botón Buscar */}
            <div className="w-[250px] h-[40px] relative">
              <button className="w-full h-full rounded-[10px] bg-primary flex items-center justify-center text-md cursor-pointer">
                Buscar
              </button>
            </div>
          </div>

          {/* Calendario */}
          <div className=''>

            {/* Calendario Header */}
            <div className="h-[45px] relative mb-0">
              <div className="w-full h-full rounded-t-[15px] border border-[#BBB] bg-white flex items-center justify-between px-6">
                {/* Nueva Reserva  */}
                <button className="flex w-1/5 items-center">
                    <FontAwesomeIcon icon={faPlus} className="me-2 text-primary" style={{width: '16px', height: '16px'}}/>
                    <span className="text-md text-primary">Nueva reserva</span>
                </button>
                {/* Arrow navigation */}
                <div className="flex justify-between w-1/5">
                  <FontAwesomeIcon icon={faCircleLeft} className="me-2 text-primary" style={{width: '20px', height: '20px'}}/>
                  <span className="text-md text-black">Agosto 2025</span>
                  <FontAwesomeIcon icon={faCircleRight} className="me-2 text-primary" style={{width: '20px', height: '20px'}}/>
                </div>
              </div>
            </div>

            {/* Calendario Body */}
            <div className="w-full flex justify-between">

              {/* Hora */}
              <div className="w-1/15 h-full ">
                  {/* Row Head (void) */}
                  <div className="w-full h-[40px] border border-[#BBB]  bg-white"></div>
                  {/* Row Body */}
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="w-full h-[50px] border border-[#BBB]  bg-white"></div>
                  ))}
              </div>

              {/* Dias */}
              <div className='w-14/15 flex'>
                {[
                  { day: 'Lu', date: '11' },
                  { day: 'Ma', date: '12' },
                  { day: 'Mi', date: '13' },
                  { day: 'Ju', date: '14' },
                  { day: 'Vi', date: '15' },
                  { day: 'Sa', date: '16' },
                  { day: 'Do', date: '17' }
                ].map((dayInfo, dayIndex) => (
                  <div key={dayIndex} className="w-1/7" >
                    {/* Día  */}
                    <div className=" h-[40px] border border-[#BBB] bg-white flex items-center justify-center">
                      <span className="text-md text-black">{dayInfo.day} {dayInfo.date}</span>
                    </div>
                    {/* Hora */}
                    {Array.from({ length: 8 }, (_, i) => (
                      <div key={i} className="h-[50px] border border-[#BBB] bg-white"></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
    </ProfessionalCont>

  );
}
