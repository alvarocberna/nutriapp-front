'use client'
//react
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form" 
//features
import { UsuarioService } from '../../api/usuario.api';
//shared
import {InputOutlined} from "../../../../shared";

enum GenderEnum {
  femenino = "FEMENINO",
  masculino = "MASCULINO",
  otro = "OTRO",
}

/*
 Se definen los campos que tendrá el formulario
 Con esto le defimos al hook useForm que campos debe esperar, 
 además da validación de tipos
*/
interface IFormInput {
  rut: number
  dv_rut: string
  nombre_primero: string
  nombre_segundo: string
  apellido_paterno: string
  apellido_materno: string
  correo: string
  genero: GenderEnum
  celular: number
  fecha_nacimiento: Date
  fecha_creacion: Date
  password: string 
  password_confirmation: string
}

export function FormNuevoPaciente() {

    //hacemos destructuring de useForm
    const {
    register, //fn que conecta cada input del form al sistema React Hook Form. Básicamente dice: vigila este campo, guarda su valor y aplica validaciones
    handleSubmit, //fn que valida los inputs antes de enviar el form
    watch, //para observar valores en tiempo real dentro del formulario (nos evitamos definir un estado para cada valor y usar onChange)
    formState: { errors }, //objeto que contiene los errores de validación actuales del formulario
    } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        UsuarioService.createUsuario(data);
        console.log("form enviado" + data)
    }

    console.log(watch("rut")) // watch input value by passing the name of it

    return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] m-auto">

        {/* rut */}
        {/* <div className="relative w-full mt-3">
            <input {...register("rut", {required: true})}  type="number" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Rut
            </label>
        </div> */}
        <InputOutlined label="Rut" name="rut" type="number" register={register} rules={{ required: true }}/>
        {errors.rut && <span className="text-red-700">Campo requerido</span>}

        {/* dv_rut */}
        {/* <div className="relative w-full mt-3">
            <input {...register("dv_rut", {required: true})}  type="text" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                DV-Rut
            </label>
        </div> */}
        <InputOutlined label="DV-Rut" name="dv_rut" type="text" register={register} rules={{ required: true }}/>
        {errors.dv_rut && <span className="text-red-700">Campo requerido</span>}

        {/* primer nombre */}
        {/* <div className="relative w-full mt-3">
            <input {...register("nombre_primero", {required: true})}  type="text" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Primer nombre
            </label>
        </div> */}
        <InputOutlined label="Primer nombre" name="nombre_primero" type="text" register={register} rules={{ required: true }}/>
        {errors.nombre_primero && <span className="text-red-700">Campo requerido</span>}

        
        {/* segundo nombre */}
        {/* <div className="relative w-full mt-3">
            <input {...register("nombre_segundo", {required: false})}  type="text" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Segundo nombre
            </label>
        </div> */}
        <InputOutlined label="Segundo nombre" name="nombre_segundo" type="text" register={register} rules={{ required: false }}/>

        {/* appellido paterno */}
        {/* <div className="relative w-full mt-3">
            <input {...register("apellido_paterno", {required: true})}  type="text" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Apellido paterno
            </label>
        </div> */}
        <InputOutlined label="Apellido paterno" name="apellido_paterno" type="text" register={register} rules={{ required: true }}/>
        {errors.apellido_paterno && <span className="text-red-700">Campo requerido</span>}
        
        {/* Apellido materno */}
        {/* <div className="relative w-full mt-3">
            <input {...register("apellido_materno", {required: false})}  type="text" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Apellido materno
            </label>
        </div> */}
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
        {/* <div className="relative w-full mt-3">
            <input {...register("correo", {required: true})}  type="email" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Correo
            </label>
        </div> */}
        <InputOutlined label="Correo" name="correo" type="email" register={register} rules={{ required: true }}/>
        {errors.correo && <span className="text-red-700">Campo requerido</span>}

        {/* celular */}
        {/* <div className="relative w-full mt-3">
            <input {...register("celular", {required: false})}  type="number" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Celular
            </label>
        </div> */}
        <InputOutlined label="Celular" name="celular" type="number" register={register} rules={{ required: false }}/>

        {/* fecha nacimiento */}
        {/* <div className="relative w-full mt-3">
            <input {...register("fecha_nacimiento", {required: true})}  type="date" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Fecha nacimiento
            </label>
        </div> */}
        <InputOutlined label="Fecha nacimiento" name="fecha_nacimiento" type="date" register={register} rules={{ required: true }}/>
        {errors.fecha_nacimiento && <span className="text-red-700">Campo requerido</span>}

        {/* password */}
        {/* <div className="relative w-full mt-3">
            <input {...register("password", {required: "Campo obligatorio", pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, message: "Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"}, minLength: {value: 8, message: "Debe tener al menos 8 caracteres"}, maxLength: {value: 16, message: "Debe tener máximo 16 caracteres"}})}  type="password" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Contraseña
            </label>
        </div> */}
        <InputOutlined label="Contraseña" name="password" type="password" register={register} rules={{ required: "campo obligatorio", pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, message: "Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"}, minLength: {value: 8, message: "Debe tener al menos 8 caracteres"}, maxLength: {value: 16, message: "Debe tener máximo 16 caracteres"}}}/>
        {errors.password && <span className="text-red-700">{errors.password.message}</span>}

        {/* confirmar password */}
        {/* <div className="relative w-full mt-3">
            <input {...register("password_confirmation", {required: "Debes confirmar contraseña", validate: (value) => value === watch("password") || "Las contraseñas no coinciden" })}  type="password" id="floating-outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-blue-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Confirmar contraseña
            </label>
        </div> */}
        <InputOutlined label="Confirmar contraseña" name="password_confirmation" type="password" register={register} rules={{required: "Debes confirmar contraseña", validate: (value: any) => value === watch("password") || "Las contraseñas no coinciden" }}/>
        {errors.password_confirmation && <span className="text-red-700">{errors.password_confirmation.message}</span>}

       <div className='w-1/2 h-[40px] mx-auto mt-10'>
            <input className='primary-btn' type='submit' value='Crear'/>
        </div>
    </form>
  )
}