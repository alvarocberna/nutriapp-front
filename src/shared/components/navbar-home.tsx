'use client'

import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClipboard, faAppleWhole, faChild, faChartSimple, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


export function NavbarHome() {
  const [open, setOpen] = useState(false);

  // categorías del menú
  const navInfo = [
    { nombre: "Iniciar Sesión", ruta: "/inicio-sesion", icon: faCalendarDays },
    { nombre: "Registro", ruta: "/registro", icon: faClipboard },
  ];

  // list item
  const navList = navInfo.map((info, index) => (
    <li key={index} className="flex w-[220px] mx-2 h-[60px]">
      <Link href={info.ruta} className="flex w-full h-[50px] m-auto text-primary rounded-lg font-medium hover:bg-tertiary" onClick={() => setOpen(false)}>
        {/* <FontAwesomeIcon icon={info.icon} className="me-2" style={{width: '16px', height: '16px'}}/> */}
        <p className="m-auto"> {info.nombre} </p>
      </Link>
    </li>
  ));

  return (
    <div className="">

      {/* Desktop: Menu */}
      <div className="hidden md:flex flex-col md:flex-row w-full h-[60px] bg-white left-0 top-0 z-20">
        {/* Logo */}
        <div className="flex h-[60px] w-1/4">
          <Link href="/" className="m-auto">
            <h1 className="text-2xl font-bold text-blue-600">NUTRIAPP</h1>
          </Link>
        </div>
        {/* Menú */}
        <nav className="flex w-3/4 justify-end h-[60px]">
          <ul className="flex flex-row h-[60px] ">
            {navList}
          </ul>
        </nav>
      </div>

      {/* Movil: Bar*/}
      <div className="flex md:hidden items-center justify-between bg-white border-b border-gray-300 px-4 py-3 fixed top-0 left-0 right-0 z-30">
        <h1 className="text-xl font-bold text-blue-600">NUTRIAPP</h1>
        <button
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Movil: Vista completa - menu + bar*/}
      {open && (
        <div className="border border-red-500 fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setOpen(false)} />
      )}

      {/* Movil: Menu*/}
      <div
        className={`fixed top-0 left-0 h-full w-[75vw] max-w-xs bg-white border-r border-gray-300 z-50 transform transition-transform duration-200 ease-in-out md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={{ boxShadow: open ? "2px 0 8px rgba(0,0,0,0.08)" : undefined }}
      >
        <div className="p-6 border-b border-gray-300 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">NUTRIAPP</h1>
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-6">
          <ul className="space-y-4">{navList}</ul>
        </nav>
      </div>
    </div>
  );
}