enum GenderEnum {
  femenino = "FEMENINO",
  masculino = "MASCULINO",
  otro = "OTRO",
}

export interface FormNuevoProfesionalInterface {
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

export interface FormNuevoPacienteInterface {
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
}