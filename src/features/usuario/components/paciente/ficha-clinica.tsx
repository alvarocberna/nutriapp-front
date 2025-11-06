//local (features)
import { Usuario } from "../../types/usuario";
import { Consulta } from "@/features/consulta/types/consulta";
//shared
import {BoxSubSec, HeadSubSec, BodySubSec, ContSubSec, DivSubSec} from '../../../../shared'

interface Props {
  paciente: Usuario;
  consultas: Consulta[];
}


export default function FichaClinica({paciente, consultas}: Props){
    const usuario = paciente;
    const len = consultas.length;
    const consultaLast1 = consultas[len - 1].mediciones;
    const consultaLast2 = consultas[len - 2];
    const consultaLast3 = consultas[len - 3];
    //info personal
    const nombreCompleto = usuario.nombre_primero + " " + usuario?.nombre_segundo + " " + usuario.apellido_paterno + " " + usuario?.apellido_materno;
    const rut = usuario.rut + "-" + usuario.dv_rut;
    const fecha = new Date(usuario.fecha_nacimiento);
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
    const correo = usuario.correo;
    const celular = usuario.celular;
    const sexo = usuario.genero.toLowerCase();
    //mediciones
    const imc = (consultaLast1.basicas.peso / ((consultaLast1.basicas.talla/100)**2)).toFixed(2);

    return(
        <ContSubSec>
            {/* 1 - Información personal */}
            <HeadSubSec>
                {/* <div className="flex w-full justify-between items-center mt-5 mb-10"> */}
                    <div className="w-full py-5">
                        <h2 className="text-[22px] text-primary font-bold mb-3">
                            Ficha clínica
                        </h2>
                        <div className="flex text-black">
                            <div className="w-[50%] text-sm">
                                <p className="mb-2">Nombre: {nombreCompleto}</p>
                                <p className="mb-2">Rut: {usuario.rut}</p>
                                <p className="mb-2">Fecha nacimiento: {fechaNacimiento}</p>
                                <p className="mb-2">Edad: {edad(fecha)}</p>
                            </div>
                              <div className="w-[50%] text-sm">
                                <p className="mb-2">Sexo: {sexo}</p>
                                <p className="mb-2">Correo: {correo}</p>
                                <p className="mb-2">Celular: {celular} </p>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </HeadSubSec>
            <BodySubSec>
                <div className="flex w-full">
                    {/* 2 - Evaluación física */}
                    {/* <div className="w-[48%] px-2 py-2 border border-gray-400 rounded">
                        <p className="mb-3">
                            Evaluación Física
                        </p>
                        <div className="flex mb-3">
                            <div className="w-1/2">
                                <p>Peso: {consultaLast1.basicas.peso}</p>
                                <p>Talla: {consultaLast1.basicas.talla}</p>
                                <p>IMC: {imc}</p>
                            </div>
                            <div className="w-1/2">
                                <p>Masa Muscular:</p>
                                <p>Grasa corporal</p>
                            </div>
                        </div>
                        <div>
                            graficos
                        </div>
                    </div> */}
                </div>
            </BodySubSec>
            <div className='h-[50px]'></div>

        </ContSubSec>
    );
}