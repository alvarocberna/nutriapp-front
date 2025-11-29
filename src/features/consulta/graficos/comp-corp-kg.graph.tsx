'use client'
//next
import dynamic from 'next/dynamic'
//features
import {ConsultaEntity} from "@/features";

const ResponsiveBar = dynamic(
  () => import('@nivo/bar').then(mod => mod.ResponsiveBar),
  { ssr: false }
)

interface GraphCompCorpKgInterface{
    consultas: ConsultaEntity[] | undefined;
    width?: string;
    height?: string;
}


export function GraphCompCorpKg({consultas, width = '30', height = '300'}: GraphCompCorpKgInterface){

    const data = dataGraph(consultas);

    return(
        <div className={`flex flex-col w-[${width}%] h-[${height}px] me-3 mb-5 bg-white shadow rounded-xl pt-1 py-2`}>
            <p className="text-md text-center my-1">
                Composición Corporal (Kg)
            </p>
            <div className="w-[80%] h-[86%] m-auto">
                <ResponsiveBar
                    data={data}
                    margin={{top: 10, right: 0, bottom: 30, left: 0}}
                    // margin={{ top: 30, right: 40, bottom: 40, left: 40 }}
                    colors={{ datum: 'data.color' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                />
            </div>
        </div>
    )
}

const dataGraph = (consultas: ConsultaEntity[] | undefined) => {
    if (!consultas || consultas.length === 0) {
        return [];
    }
    const peso = consultas[0].mediciones.basicas.peso.toFixed(1) ?? 0;
    const mm = consultas[0].mediciones.resultados_med.mm_kg.toFixed(1) ?? 0;
    const gc = consultas[0].mediciones.resultados_med?.gc_kg.toFixed(1) ?? 0;
    return [
        { id: 'MM', label: 'MM', value: mm, color: '#e7000b' },
        { id: 'GC', label: 'GC', value: gc, color: '#fe9a00' },
        { id: 'Peso', label: 'Peso', value: peso, color: '#2b7fff' },
    ];
}