

export interface UpdateFullConsultaDto{
    consulta: UpdateConsultaDto
    mediciones: UpdateMedicionesDto
    basicas: UpdateBasicasDto
    pliegues: UpdatePlieguesDto
    perimetros: UpdatePerimetrosDto
    diametros: UpdateDiametrosDto
    resultadosMed: UpdateResultadosMedDto
}

export interface UpdateConsultaDto{
    id: string;
    descripcion: string
    paciente_id: string
}

export interface UpdateMedicionesDto{
    id: number;
    nro_medicion: number;
    nivel: string;
    descripcion: string;
    paciente_id: string;
}

export interface UpdateBasicasDto{
    id: number;
    nro_medicion: number;
    peso: number
    talla: number
    talla_sentado: number
    envergadura: number
    paciente_id: string
}

export interface UpdatePlieguesDto{
    id: number;
    nro_medicion: number;
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

export interface UpdatePerimetrosDto{
    id: number;
    nro_medicion: number;
    brazo_relajado: number
    brazo_flexionado: number
    cintura: number
    cadera: number
    muslo_medio: number
    pierna: number
    paciente_id: string
}

export interface UpdateDiametrosDto{
    id: number;
    nro_medicion: number;
    humero: number
    biestiloideo: number
    femur: number
    paciente_id: string
}

export interface UpdateResultadosMedDto{
    id: number
}