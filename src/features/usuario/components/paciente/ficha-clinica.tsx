//local (features)
import { Usuario } from "../../types/usuario";
//shared
import {BoxSubSec, HeadSubSec, BodySubSec, ContSubSec, DivSubSec} from '../../../../shared'

export default function FichaClinica(props: Usuario){
    const usuario = props;
    return(
        <ContSubSec>
{/* 
            <div className="d-flex justify-content-between align-items-center px-5">
                <div className="h-[100px] w-[100px] bg-primary rounded-[50px]">
                    img
                </div>
            </div> */}

            <BoxSubSec>
                <div className="flex w-full justify-between items-center mt-5 mb-10">
                    {/* img */}
                    <div className="h-[150px] w-[200px]">
                        <div className="h-[150px] w-[150px] bg-primary rounded-[75px]">
                      
                        </div>
                    </div>
                    {/* titulo e info personal */}
                    <div className="w-full ">
                        <h2 className="left-[19px] top-[24px] text-primary font-inter text-[24px] font-bold">
                            Ficha clínica {usuario.nombre_primero} {usuario.apellido_paterno}
                        </h2>
                        <div className="flex text-black">
                            <div className="w-[50%]">
                                <p>Edad: 30</p>
                                <p>Correo: alvaro@gmail.com</p>
                            </div>
                              <div className="w-[50%]">
                                <p>Dirección: cono sur 50</p>
                                <p>Próximo control: 16-09-25</p>
                            </div>

                        </div>
                    </div>
                </div>
            </BoxSubSec>

            <BodySubSec>
                <div className="text-black w-full">
                    body
                </div>
            </BodySubSec>
            <div className='h-[50px]'></div>

        </ContSubSec>
    );
}