

export interface Usuario {
    id: string;
    rut: number;
    dv_rut: string;
    nombre_primero: string;
    nombre_segundo: string;
    apellido_paterno: string;
    apellido_materno: string;
    correo: string;
    celular: number;
    fecha_nacimiento: Date;
    fecha_creacion: Date;
    // password: string;
    rol: string;
};