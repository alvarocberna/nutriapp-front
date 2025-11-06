'use client'
//next
import Link from 'next/link';
//react
import React, { ReactEventHandler } from 'react';
import { useEffect, useState } from 'react';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus, faArrowUp, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
//shared
import {ProfessionalCont, TitleSec, HeadSubSec, RowSubSec, ContSubSec, FooterSubSec} from '@/shared'
//featured
import { UsuarioService } from '@/features/usuario/api/usuario.api';
import {Usuario} from '@/features/usuario/types/usuario';
//local
import '../globals.css'

//ciclo de vida de este componente
/*
1-Ejecución del componente: Se ejecuta la fn Ficha() donde:
--->Se inicializan los estados.
--->Se define useEffect (pero no se ejecuta aun)
--->Se calcula listaPaciente con usuario que por el momento es un [] vacío
--->En resumen: se definen/inicializan los estados, funciones y variables.
2-Primer render: Se renderiza el componente en pantalla con los datos que hay.
  En este primer render el componente ListaPacientes estará vacío.
3-Ejecución de useEffect: Después que el primer render se haya pintado en el DOM, React ejecuta el código
  de useEffect, donde se actualiza el valor del estado 'usuarios'
4-Segundo render: Al actualizar el estado de 'usuarios' se dispara un nuevo render, donde
  se vuelve a llamar la función de Ficha(), ejecutandose, pero esta vez 'usuarios' ya contiene datos 
  por lo que se vuelve a calcular 'listaPacientes' esta vez con los usuarios obtenidos.
*/

 
//Componente Principal Pacientes
export default function Pacientes(){

  const [usuarios, setUsuarios] = useState<any>([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState(0)
  const [edadMin, setEdadMin] = useState<number>(0);
  const [edadMax, setEdadMax] = useState<number>(99);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= 1950; y--) {
    years.push(y);
  }
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  useEffect(() => {
    const fechaInicio = new Date(selectedYear || 1950, months.indexOf(selectedMonth || 'Enero'), 1);
    const FechaFin = new Date(selectedYear || currentYear, months.indexOf(selectedMonth || 'Diciembre'), 28)
    
    const fetchUsuarios = async () => {
      try{
        const data = await UsuarioService.getPacientesByProfId({search: search, fechaInicio: fechaInicio, fechaFin: FechaFin, edadMin: edadMin, edadMax: edadMax});
        setUsuarios(data);
      }catch(error){
        console.error("Error al obtener usuarios:", error); 
      }
    }
    fetchUsuarios();
  }, [query]);

  const listaPacientes = usuarios.map((usuario: Usuario, index: number) => {
      return(
        <ListaPacientes key={index} {...usuario} />
      )
    })

  return (
    <ProfessionalCont>

        <TitleSec title="Pacientes"/>

    {/* 1 - Search */}
        <div className="mb-10">
          {/* Search Filter */}
          <div className="flex flex-col lg:flex-row mb-5 justify-between">
            <div className="relative w-[79%] h-[40px]">
                <input type='text' id="floating-outlined" value={search} onChange={(e) => {setSearch(e.target.value)}} className="block input px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                <label className="absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Busqueda por nombre y/o correo</label>
            </div>
            <div className='w-[20%] h-[40px]'>
              <button className="primary-btn" onClick={() => {setQuery(query + 1)}}>
                Buscar
              </button>
            </div>
          </div>

    {/* 2 - Filtros */}
            <div className="flex justify-between relative">
              {/* Edad */}
              <div className="w-[49%] h-[40px]">
                <select className="input text-gray-500 text-sm" name='edad' onChange={(e) => {setEdadMin(Number(e.target.value.split('-')[0])); setEdadMax(Number(e.target.value.split('-')[1]))}}>
                  <option className='text-sm' value='0-99'>Edad</option>
                  <option className='text-black text-sm' value='0-9'>0-9</option>
                  <option className='text-black text-sm' value='10-19'>10-19</option>
                  <option className='text-black text-sm' value='20-29'>20-29</option>
                  <option className='text-black text-sm' value='30-39'>30-39</option>
                  <option className='text-black text-sm' value='40-49'>40-49</option>
                  <option className='text-black text-sm' value='50-99'>50 o +</option>
                </select>
              </div>
              {/* año y mes */}
              <div className='flex w-[49%] h-[40px] border border-gray-300 rounded-lg bg-white'>
                  <p className='w-[30%] m-auto px-2 text-gray-500 text-sm'>Creación</p>
                  {/* año */}
                  <div className="w-[40%] h-[40px] flex flex-col gap-2">
                    {/* <label htmlFor="year">Año:</label> */}
                    <select id="year" className="h-full w-full border border-gray-200 px-2 text-center text-sm text-gray-500" value={selectedYear ?? ""} onChange={(e) => setSelectedYear(Number(e.target.value))}>
                      <option value="">Año</option>
                      {years.map((year) => (
                        <option className='text-black text-sm text-start' key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* mes */}
                  <div className="w-[40%] h-[40px] flex flex-col gap-2">
                    {/* <label htmlFor="year">Año:</label> */}
                    <select id="month" className="h-full w-full border border-gray-200 px-2 text-gray-500 text-center text-sm" value={selectedMonth ?? ""} onChange={(e) => setSelectedMonth(String(e.target.value))}>
                      <option value="" className='border'>Mes</option>
                      {months.map((month) => (
                        <option key={month} value={month} className='text-start text-sm text-black'>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
              </div>
      
            </div>
          </div>

    {/* section 'usuarios */}
          <div className="">
            <ContSubSec>
              {/* header */}
              <HeadSubSec>
                {/* btn nuevo paciente */}
                <div className='w-[25%] h-[40px]'>
                  <Link href='/pacientes/nuevo-paciente' className="primary-btn flex justify-center items-center">
                    <FontAwesomeIcon icon={faPlus} className="me-2 text-white" style={{width: '16px', height: '16px'}}/>
                    <p className='p-0 m-0 text-md'>Nuevo paciente</p>
                  </Link>
                </div>
                {/* Order by */}
                {/* <div className="h-[40px] w-[60%] flex items-center justify-between bg-quaternary border border-primary rounded-lg">
                    <div className="flex w-[20%] h-full" style={{borderRight: '1px solid'}}>
                      <span className="m-auto text-md text-primary">Ordenar por</span>
                    </div>
                    <button className="w-[20%] h-full  text-primary" style={{borderRight: '1px solid'}}>
                      <FontAwesomeIcon icon={faArrowUp} className='text-primary h-[16px] w-[16px]'/>
                      Nombre
                    </button>
                    <button className="w-[20%] h-full text-primary" style={{borderRight: '1px solid'}}>
                      <FontAwesomeIcon icon={faArrowUp} className='text-primary h-[16px] w-[16px]'/>
                      Fecha
                    </button>
                    <button className="w-[20%] h-full text-gray-500">
                        <FontAwesomeIcon icon={faArrowUp} className='text-primary h-[16px] w-[16px]'/>
                      Recurrencia
                    </button>
                    <button className="w-[20%] h-full text-gray-500">
                        <FontAwesomeIcon icon={faArrowUp} className='text-primary h-[16px] w-[16px]'/>
                      Recurrencia
                    </button>
                </div> */}
              </HeadSubSec>
              {/* Table Body - Patient */}
              <div className="">
                {
                  listaPacientes
                }
              </div>
              <FooterSubSec height='30px'/>
            </ContSubSec>
          </div>
          <div className='h-[200px]'></div>
    </ProfessionalCont>
  );
};


// SubComponente ListaPacientes
const ListaPacientes = (props: Usuario) => {
  const id = props.id
  const nombre = `${props.nombre_primero} ${props.nombre_segundo} ${props.apellido_paterno} ${props.apellido_materno}`;
  const fechaNacimiento = new Date(props.fecha_nacimiento);
  const edad = (fechaNacimiento: Date) => {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    // Ajuste si el cumpleaños aún no ha ocurrido este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
  }
  const sexo = props.genero;
  return(
    <Link href={`/pacientes/${id}`}>
      <RowSubSec>
          <div className="h-full w-[50%] flex items-center ">
            <p className="text-md text-black text-sm">
              {
              sexo == 'MASCULINO' ? 
                <FontAwesomeIcon icon={faMars} className="me-2 text-blue-500" style={{width: '12px', height: '12px'}}/>
                : 
                <FontAwesomeIcon icon={faVenus} className="me-2 text-pink-500" style={{width: '12px', height: '12px'}}/>
               }
              {nombre}
            </p>
          </div>
          <div className="h-full w-[25%] flex items-center justify-start ">
             <p className="text-md text-black text-sm">
               {edad(fechaNacimiento)} años
             </p>
           </div>
          <div className="h-full w-[25%] flex items-center justify-start ">
            <p className="text-md text-black text-sm">
              {props.correo}
            </p>
          </div>
      </RowSubSec>
    </Link>
  )
}