

export interface UsuarioEntity {
    id: string;
    rut: number;
    dv_rut: string;
    nombre_primero: string;
    nombre_segundo: string;
    apellido_paterno: string;
    apellido_materno: string;
    genero: string;
    correo: string;
    celular: number;
    fecha_nacimiento: Date;
    fecha_creacion: Date;
    rol: string;
};

export interface Usuario { //son lo mismo, Usuario hay que eliminarla cuando sea reemplazado x UsuarioEntity
    id: string;
    rut: number;
    dv_rut: string;
    nombre_primero: string;
    nombre_segundo: string;
    apellido_paterno: string;
    apellido_materno: string;
    genero: string;
    correo: string;
    celular: number;
    fecha_nacimiento: Date;
    fecha_creacion: Date;
    rol: string;
};