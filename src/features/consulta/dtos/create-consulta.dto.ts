

export interface CreateFullConsultaDto{
    consulta: CreateConsultaDto
    mediciones: CreateMedicionesDto
    basicas: CreateBasicasDto
    pliegues: CreatePlieguesDto
    perimetros: CreatePerimetrosDto
    diametros: CreateDiametrosDto
}

export interface CreateConsultaDto{
    fecha_consulta: Date
    descripcion: string
    paciente_id: string
}

export interface CreateMedicionesDto{
    nivel: string
    descripcion: string
    paciente_id: string
}

export interface CreateBasicasDto{
    peso: number
    talla: number
    talla_sentado: number
    envergadura: number
    paciente_id: string
}

export interface CreatePlieguesDto{
    tricep: number
    subescapular: number
    bicep: number
    cresta_iliaca: number
    supraespinal: number
    abdominal: number
    muslo: number
    pierna: number
    paciente_id: string
}

export interface CreatePerimetrosDto{
    brazo_relajado: number
    brazo_flexionado: number
    cintura: number
    cadera: number
    muslo_medio: number
    pierna: number
    paciente_id: string
}

export interface CreateDiametrosDto{
    humero: number
    biestiloideo: number
    femur: number
    paciente_id: string
}