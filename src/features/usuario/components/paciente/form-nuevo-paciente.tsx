'use client'
//react
import { useForm, SubmitHandler } from "react-hook-form" 
//features
import { UsuarioService, FormNuevoPacienteInterface } from "@/features";
//shared
import {InputOutlined} from "../../../../shared";
//toastify
import {toast} from 'react-toastify'

/*
 Se definen los campos que tendrá el formulario
 Con esto le defimos al hook useForm que campos debe esperar, 
 además da validación de tipos
*/

export function FormNuevoPaciente() {
    //hacemos destructuring de useForm
    const {
    register, //fn que conecta cada input del form al sistema React Hook Form. Básicamente dice: vigila este campo, guarda su valor y aplica validaciones
    handleSubmit, //fn que valida los inputs antes de enviar el form
    watch, //para observar valores en tiempo real dentro del formulario (nos evitamos definir un estado para cada valor y usar onChange)
    formState: { errors }, //objeto que contiene los errores de validación actuales del formulario
    } = useForm<FormNuevoPacienteInterface>()

    const onSubmit: SubmitHandler<FormNuevoPacienteInterface> = (data) => {
        try{
            UsuarioService.createPaciente(data);
            toast.success("Paciente creado");
        }catch{
            toast.error("No se pudo crear el paciente");
        }
    }

    console.log(watch("rut")) // watch input value by passing the name of it

    return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] m-auto">

        {/* rut */}
        <InputOutlined label="Rut" name="rut" type="number" register={register} rules={{ required: true, minLength: {value: 7, message: 'Rut demasiado corto'}, maxLength: {value: 8, message: 'Rut demasiado largo'} }}/>
        {errors.rut && <span className="text-red-400 text-sm">{errors.rut.message}</span>}

        {/* dv_rut */}
        <InputOutlined label="DV-Rut" name="dv_rut" type="text" register={register} rules={{ required: true, maxLength: {value: 1, message: 'Largo exedido'} }}/>
        {errors.dv_rut && <span className="text-red-400 text-sm">{errors.dv_rut.message}</span>}

        {/* primer nombre */}
        <InputOutlined label="Primer nombre" name="nombre_primero" type="text" register={register} rules={{ required: 'Campo requerido' }}/>
        {errors.nombre_primero && <span className="text-red-400 text-sm">{errors.nombre_primero.message}</span>}

        {/* segundo nombre */}
        <InputOutlined label="Segundo nombre" name="nombre_segundo" type="text" register={register} rules={{ required: false }}/>

        {/* appellido paterno */}
        <InputOutlined label="Apellido paterno" name="apellido_paterno" type="text" register={register} rules={{ required: 'Campo requerido' }}/>
        {errors.apellido_paterno && <span className="text-red-400 text-sm">{errors.apellido_paterno.message}</span>}
        
        {/* Apellido materno */}
        <InputOutlined label="Apellido materno" name="apellido_materno" type="text" register={register} rules={{ required: false }}/>

        {/* Genero */}
        <div className="relative w-full mt-3">
            <select
            {...register("genero", {required: true, validate: (value) => ["MASCULINO", "FEMENINO"].includes(value) || "Valor debe ser Masculino o Femenino" })}
                id="floating-outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                defaultValue=""
            >
                {/* <option value="" disabled hidden></option> */}
                <option value="MASCULINO">Masculino</option>
                <option value="FEMENINO">Femenino</option>
                <option value="OTRO">Otro</option>
            </select>
            <label
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 
                peer-focus:px-2 peer-focus:text-primary 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
                peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
            >
                Género
            </label>
        </div>

        {/* correo */}
        <InputOutlined label="Correo" name="correo" type="email" register={register} rules={{ required: 'Campo requerido' }}/>
        {errors.correo && <span className="text-red-400 text-sm">Campo requerido</span>}

        {/* celular */}
        <InputOutlined label="Celular" name="celular" type="number" register={register} rules={{ required: false }}/>

        {/* fecha nacimiento */}
        <InputOutlined label="Fecha nacimiento" name="fecha_nacimiento" type="date" register={register} rules={{ required: 'Campo requerido' }}/>
        {errors.fecha_nacimiento && <span className="text-red-400 text-sm">Campo requerido</span>}

       <div className='w-1/2 h-[40px] mx-auto mt-10'>
            <input className='primary-btn' type='submit' value='Crear'/>
        </div>

    </form>
  )
}