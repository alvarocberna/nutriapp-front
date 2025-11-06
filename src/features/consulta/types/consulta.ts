
export class CreateFullConsultaForm{
    "mediciones": CreateMedicionesForm
}

export class CreateMedicionesForm{
    "peso": number
    "talla": number
    "talla_sentado": number
    "envergadura": number
    "tricep": number
    "subescapular": number
    "bicep": number
    "cresta_iliaca": number
    "supraespinal": number
    "abdominal": number
    "muslo": number
    "pierna_pli": number
    "brazo_relajado": number
    "brazo_flexionado": number
    "cintura": number
    "cadera": number
    "muslo_medio": number
    "pierna_per": number
    "humero": number
    "biestiloideo": number
    "femur": number
}

//CONSULTA

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

export interface Consulta{
    id: string
    nro_consulta: number
    fecha_consulta: Date
    descripcion: string
    profesional_id: string
    paciente_id: string
    mediciones: Medicion
}

//MEDICIONES

export interface Medicion{
    id: string
    nro_medicion: number
    nivel: string
    descripcion: string
    profesional_id: string
    paciente_id: string
    basicas: Basicas
    pliegues: Pliegues
    perimetros: Perimetros
    diametros: Diametros
    resultados_med: any
}

export interface CreateMedicionesDto{
    nivel: string
    descripcion: string
    paciente_id: string
}

//BASICAS

export interface Basicas{
    id: number
    peso: number
    talla: number
    talla_sentado: number
    envergadura: number
    mediciones_id: number
    profesional_id: string
    paciente_id: string
}

export interface CreateBasicasDto{
    peso: number
    talla: number
    talla_sentado: number
    envergadura: number
    paciente_id: string
}

//PLIEGUES
export interface Pliegues{
    id: number
    tricep: number
    subescapular: number
    bicep: number
    cresta_iliaca: number
    supraespinal: number
    abdominal: number
    muslo: number
    pierna: number
    mediciones_id: number
    profesional_id: string
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

//PERIMETROS
export interface Perimetros{
    id: number
    brazo_relajado: number
    brazo_flexionado: number
    cintura: number
    cadera: number
    muslo_medio: number
    pierna: number
    mediciones_id: number
    profesional_id: string
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

//DIAMETROS
export interface Diametros{
    id: number
    humero: number
    biestiloideo: number
    femur: number
    mediciones_id: number
    profesional_id: string
    paciente_id: string
}

export interface CreateDiametrosDto{
    humero: number
    biestiloideo: number
    femur: number
    paciente_id: string
}

//RESULTADOS MEDICION
