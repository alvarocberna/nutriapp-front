'use client'
//next
import { useRouter } from "next/navigation";
//react
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form" 
//features
import { AuthService } from '../api/auth.service';
import { FormValues } from '../types/auth.types';
//shared
import { ContSubSec, HeadSubSec, BodySubSec, TitleSubSec, InputOutlined } from '@/shared';
//global
// import 'globals.css'


export function InicioSesionForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('submit hecho')
    try{
      const response = await AuthService.login(data);
      console.log("Login exitoso:", response);
      router.push("/pacientes");
    }catch(error: any){
      alert(error.message || "Error en el inicio de sesión");
    }
      
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
          <div>
            <InputOutlined  label="Correo" name="correo" type="email" register={register} rules={{ required: true }}/>
            {errors.correo && <span>Requerido</span>}
          </div>
          <div>
            <InputOutlined  label="Contraseña" name="password" type="password" register={register} rules={{ required: true }}/>
            {errors.password && <span>Requerido</span>}
          </div>
          <div className='w-1/2 h-[40px] m-auto mb-10'>
             <button disabled={isSubmitting} className='primary-btn' type="submit">Entrar</button> 
          </div>
        </form>
  );
}
