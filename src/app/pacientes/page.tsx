'use client'
//next
import Link from 'next/link';
//react
import React from 'react';
import { useEffect, useState } from 'react';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus, faArrowUp } from '@fortawesome/free-solid-svg-icons'
//shared
import {ProfessionalCont, TitleSec, HeadSubSec, RowSubSec, ContSubSec} from '../../shared'
//featured
import { UsuarioService } from '../../features/usuario/api/usuario.api';
import {Usuario} from '../../features/usuario/types/usuario';
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

const ListaPacientes = (props: Usuario) => {
  const id = props.id
  const nombre = `${props.nombre_primero} ${props.nombre_segundo} ${props.apellido_paterno} ${props.apellido_materno}`;
  return(
    <Link href={`/pacientes/${id}`}>
      <RowSubSec>
          <div className="h-full w-[25%] flex items-center ">
            <p className="text-md text-black ">
              {nombre}
            </p>
          </div>
          <div className="h-full w-[25%] flex items-center justify-center ">
            <p className="text-md text-black ">
              {id}
            </p>
          </div>
          <div className="h-full w-[25%] flex items-center justify-center ">
            <p className="text-md text-black ">
              Ver
            </p>
          </div>
      </RowSubSec>
    </Link>
  )
}
 
export default function Pacientes(){

  const [usuarios, setUsuarios] = useState<any>([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try{
        const data = await UsuarioService.getUsuarios();
        setUsuarios(data);
      }catch(error){
        console.error("Error al obtener usuarios:", error); 
      }
    }
    fetchUsuarios();
  }, []);

  const listaPacientes = usuarios.map((usuario: Usuario, index: number) => {
      return(
        <ListaPacientes key={index} {...usuario} />
      )
    })

  return (
    <ProfessionalCont>

        <TitleSec title="Fichas"/>

        {/* Search */}
        <div className="mb-10">
          {/* Search Filter */}
          <div className="flex flex-col lg:flex-row mb-5 justify-between">
            <div className="w-[79%] h-[40px]">
              <input className='input' value={'nombre'}/>
            </div>
            <div className='w-[20%] h-[40px]'>
              <button className="primary-btn">
                Buscar
              </button>
            </div>
          </div>

            {/* Filters */}
            <div className="flex justify-between">
              <div className="w-[32%] h-[40px]">
                  <input type='date' className='input px-3' />
              </div>
              <div className="w-[32%] h-[40px]">
                <select className="input" name='edad'>
                  <option>0-9</option>
                  <option>10-19</option>
                  <option>20-29</option>
                  <option>30-39</option>
                  <option>40-49</option>
                  <option>50 o +</option>
                </select>
              </div>
              
              <div className="w-[32%] h-[40px]">
                <select className="input" name='edad'>
                  <option>???</option>
                  <option>???</option>
                  <option>???</option>
                </select>
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
                <div className="h-[40px] w-[40%] flex items-center justify-between bg-tertiary rounded-lg">
                  <div className='flex justify-center items-center   h-[100%] w-[40px] border-r-1 border-black'>
                    <FontAwesomeIcon icon={faArrowUp} className='text-primary h-[16px] w-[16px]'/>
                  </div>
                  <div className="flex items-center">
                    <span className="text-md text-gray-500">Ordenar por</span>
                  </div>
                  <div className="flex w-[60%] h-[25px] mr-2 items-center text-sm">
                    <button className="w-[30%] h-full border border-primary text-primary bg-white rounded-lg">
                      Nombre
                    </button>
                    <button className="w-[30%] h-full text-gray-500 rounded-lg">
                      Fecha
                    </button>
                    <button className="w-[30%] h-full text-gray-500 rounded-lg">
                      Recurrencia
                    </button>
                  </div>
                </div>
              </HeadSubSec>
              {/* Table Body - Patient */}
              <div className="">
                {
                  listaPacientes
                }
              </div>
            </ContSubSec>
          </div>
          <div className='h-[200px]'></div>
    </ProfessionalCont>
  );
};

