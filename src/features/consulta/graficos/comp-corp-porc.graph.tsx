'use client'
//next
import dynamic from 'next/dynamic'
//features
import {ConsultaEntity} from "@/features";

const ResponsivePie = dynamic(
  () => import('@nivo/pie').then(mod => mod.ResponsivePie),
  { ssr: false }
)

interface GraphCompCorpPorcInterface{
    consultas: ConsultaEntity[] | undefined;
    width?: string;
    height?: string;
}

export function GraphCompCorpPorc({consultas, width = '100', height = '300'}: GraphCompCorpPorcInterface){

    const data = dataGraph(consultas);

    return(
        <div className={`flex flex-col w-[${width}%] h-[${height}px] me-3 mb-5 bg-white shadow rounded-xl pt-1 py-2`}>
            <p className="text-md text-center my-1">
                Composición Corporal (%)
            </p>
            <div className="w-[100%] h-[86%] mx-auto">
                <ResponsivePie
                    data={data}
                    margin={{top: 10, right: 0, bottom: 50, left: 0}}
                    innerRadius={0.5}
                    padAngle={3}
                    cornerRadius={2}
                    activeOuterRadiusOffset={8}
                    colors={{ datum: 'data.color' }}
                    borderWidth={2}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableArcLabels={true}
                    arcLabelsSkipAngle={10}
                    enableArcLinkLabels={false}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            translateY: 45,
                            justify: false,
                            itemWidth: 60,
                            itemHeight: 18,
                            itemsSpacing: 10,
                            itemTextColor: '#555',
                            symbolSize: 12,
                            // symbolShape: 'circle',
                        },
                    ]}
                    />
            </div>
        </div>
    )
}

const dataGraph = (consultas: ConsultaEntity[] | undefined) => {
    if (!consultas || consultas.length === 0) {
        return [];
    }
    const mm = Number(consultas[0].mediciones.resultados_med.mm_porcentaje.toFixed(1)) ?? 0;
    const gc = Number(consultas[0].mediciones.resultados_med.gc_porcentaje.toFixed(1)) ?? 0;
    const otros = Number((100 - (mm + gc)).toFixed(2));
    return [
        { id: 'Masa Muscular', label: 'MM', value: mm, color: '#ED786E' },
        { id: 'Masa Grasa', label: 'GC', value: gc, color: '#ECCF68' },
        { id: 'Otros', label: 'Otros', value: otros, color: '#71C68E' },
    ];
}