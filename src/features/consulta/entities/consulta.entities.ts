
export interface ConsultaEntity{
    id: string
    nro_consulta: number
    fecha_consulta: Date
    descripcion: string
    profesional_id: string
    paciente_id: string
    mediciones: MedicionEntity
}

export interface MedicionEntity{
    id: number
    nro_medicion: number
    nivel: string
    descripcion: string
    profesional_id: string
    paciente_id: string
    basicas: BasicasEntity
    pliegues: PlieguesEntity
    perimetros: PerimetrosEntity
    diametros: DiametrosEntity
    resultados_med: ResultadosMedEntity
}

export interface BasicasEntity{
    id: number
    peso: number
    talla: number
    talla_sentado: number
    envergadura: number
    mediciones_id: number
    profesional_id: string
    paciente_id: string
}

export interface PlieguesEntity{
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

export interface PerimetrosEntity{
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

export interface DiametrosEntity{
    id: number
    humero: number
    biestiloideo: number
    femur: number
    mediciones_id: number
    profesional_id: string
    paciente_id: string
}

export interface ResultadosMedEntity{
    id: number
    imc: number
    imc_clasificacion: string
    gc_kg: number
    gc_porcentaje: number
    gc_clasificacion: string
    gv_kg: number
    gv_porcentaje: number
    gv_clasificacion: string
    mm_kg: number
    mm_porcentaje: number
    mm_clasificacion: string
    imm: number
    imm_clasificacion: string
    endo: number
    meso: number
    ecto: number
    pha_peso: number
    pha_pli_triceps: number
    pha_pli_subescapular: number
    pha_pli_biceps: number
    pha_pli_cresta_iliaca: number
    pha_pli_supraespinal: number
    pha_pli_abdominal: number
    pha_pli_muslo: number
    pha_pli_pierna: number
    pha_per_brazo: number
    pha_per_brazo_flex: number
    pha_per_cintura: number
    pha_per_cadera: number
    pha_per_muslo: number
    pha_per_pierna: number
    pha_dia_humero: number
    pha_dia_biestiloideo: number
    pha_dia_femur: number
    mediciones_id: number
    profesional_id: string
    paciente_id: string
}
