//local (features)
import { UsuarioEntity } from "../../types/usuario";
import { ConsultaEntity, MedicionEntity } from "@/features";
//shared
import {HeadSubSec, BodySubSec, ContSubSec} from '../../../../shared'
//features
import {GraphCompCorpPorc, GraphResumenFicha, TestChart} from '@/features'

interface Props {
  paciente: UsuarioEntity;
  consultas: ConsultaEntity[];
}


export default function FichaClinica({paciente, consultas}: Props){

    const usuario = paciente;
    //info personal
    const nombreCompleto = usuario?.nombre_primero + " " + usuario?.nombre_segundo + " " + usuario?.apellido_paterno + " " + usuario?.apellido_materno;
    const rut = usuario.rut + "-" + usuario?.dv_rut;
    const fecha = new Date(usuario?.fecha_nacimiento);
    const fechaNacimiento = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
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
    const correo = usuario?.correo;
    const celular = usuario?.celular;
    const sexo = usuario?.genero.toLowerCase();

    return(
        <ContSubSec>
            {/* 1 - Información personal */}
            <HeadSubSec>
                {/* <div className="flex w-full justify-between items-center mt-5 mb-10"> */}
                    <div className="w-full py-5 mb-1 md:mb-5">
                        <h2 className="text-[22px] text-primary font-bold mb-3">
                            Ficha clínica
                        </h2>
                        <div className="flex flex-col md:flex-row text-black">
                            <div className="w-[100%] md:w-[50%] text-sm">
                                <p className="mb-2">Nombre: {nombreCompleto}</p>
                                <p className="mb-2">Rut: {usuario.rut}</p>
                                <p className="mb-2">Fecha nacimiento: {fechaNacimiento}</p>
                                <p className="mb-2">Edad: {edad(fecha)}</p>
                            </div>
                              <div className="w-[100%] md:w-[50%] text-sm">
                                <p className="mb-2">Sexo: {sexo}</p>
                                <p className="mb-2">Correo: {correo}</p>
                                <p className="mb-2">Celular: {celular} </p>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </HeadSubSec>
            {/* Gráficos */}
            <BodySubSec>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="w-[100%] md:w-[50%]">
                        <GraphResumenFicha consultas={consultas} width="100"/>
                    </div>
                    <div className="w-[100%] md:w-[50%]">
                        <GraphCompCorpPorc consultas={consultas} width="100"/>
                    </div>
                </div>
            </BodySubSec>
            <div className='h-[50px]'></div>

        </ContSubSec>
    );
}