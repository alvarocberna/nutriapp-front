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
import { InputOutlined } from '@/shared';
//toastify
import { toast } from 'react-toastify';
//global
// import 'globals.css'


export function InicioSesionForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try{
      await AuthService.login(data);
      toast.success("Login exitos");
      router.push("/pacientes");
    }catch(error: any){
      //esto imprime 'error en la petición'
      toast.error(error.message || 'usuario no encontrado' );
    }
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
          <div>
            <InputOutlined  label="Correo" name="correo" type="email" register={register} rules={{ required: true }}/>
            {errors.correo && <span className="text-sm text-red-400">Campo requerido</span>}
          </div>
          <div>
            <InputOutlined  label="Contraseña" name="password" type="password" register={register} rules={{ required: true }}/>
            {errors.password && <span className="text-sm text-red-400">Campo requerido</span>}
          </div>
          <div className='w-1/3 h-[40px] m-auto mb-10'>
             <button disabled={isSubmitting} className='primary-btn' type="submit">Entrar</button> 
          </div>
        </form>
  );
}
