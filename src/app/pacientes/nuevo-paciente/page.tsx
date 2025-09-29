//shared
import {ProfessionalCont, TitleSec, TitleSubSec, HeadSubSec, ContSubSec, InputOutlined, BodySubSec} from '../../../shared'
//feature
import {FormNuevoPaciente} from '../../../features'
//local
import '../../globals.css'

export default function NuevoPaciente(){
    return(
        <ProfessionalCont>
            <TitleSec title="Registro"/>
            <ContSubSec>
                <HeadSubSec>
                    <div className='w-[90%] m-auto'>
                        <TitleSubSec title="Nuevo Paciente"/>
                    </div>
                </HeadSubSec>
                <BodySubSec>
                    <FormNuevoPaciente/>
                </BodySubSec>
                <div className='h-[40px]'></div>
            </ContSubSec>
        </ProfessionalCont>
    )
}