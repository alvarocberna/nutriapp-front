'use client'
//next
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react';
//
import { ConsultaEntity } from '@/features';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(mod => mod.ResponsiveLine),
  { ssr: false }
)

interface GraphPerimetrosInterface{
    data: ConsultaEntity[] | undefined;
    verX: number;
    width?: string;
    height?: string;
}

export function GraphPerimetros({ data, verX, width = '100', height = '300'}: GraphPerimetrosInterface) {
    const dataGraph = dataGraphLine(data || [], verX);
    const [scaleMax, setScaleMax] = useState(100);
    useEffect(() => {
            let max = 100;
            if(!data){
                return;
            }
            data.forEach((consulta) => {
                const perimetros: number[] = Object.values(consulta.mediciones.perimetros).slice(0, 6);
                perimetros.forEach((perimetro) => {
                    if (perimetro > max) {
                        max = perimetro + 10;
                    }
                })
            })
            setScaleMax(max);
            }, [data])
    
    return (
        <div className={`flex flex-col w-[${width}%] h-[${height}px] mb-5 bg-white shadow rounded-xl pt-1 py-2`}>
            <p className="text-md text-center my-1">
                Perímetros (cm)
            </p>
            <div className="w-[100%] h-[90%] m-auto">
                <ResponsiveLine
                    data={dataGraph}
                    margin={{ top: 10, right: 70, bottom: 70, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 0, max: scaleMax, stacked: false }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -45, // 👈 ROTACIÓN vertical
                        legend: '',
                        legendOffset: 6,
                        legendPosition: 'middle',
                    }}
                    enableGridX={false}
                    colors={{ scheme: "set2" }}
                    enablePoints={true}
                    pointSize={8}                      
                    pointLabelYOffset={-12}             
                    useMesh={true}
                    lineWidth={2}
                    // enablePointLabel={true}
                    legends={[
                        {
                            anchor: "right",
                            direction: "column",
                            translateY: 0, //100
                            translateX: 65,
                            itemWidth: 50, //80
                            itemHeight: 50, //20
                            symbolSize: 12,
                        },
                    ]}
                    />
            </div>
        </div>
    )
}

function dataGraphLine(consultas: ConsultaEntity[] | undefined, verX: number = 3){
    // Si 'consultas' es undefined o un array vacío, retornamos un array vacío
    if (!consultas || consultas.length === 0) {
        return [];
    }
    console.log('largo previo: ' + consultas.length)
    const consultasSlice = consultas.slice(0, verX); // Ahora 'consultas' está garantizado como un array
    console.log('largo post corte: ' + consultasSlice.length)
    return(
        consultasSlice.map((consulta, index) => (
            {
                id: `n ${consulta.nro_consulta + 1}`,
                color: "hsl(210, 70%, 50%)",
                data: [
                    { x: `Brazo relajado`, y: consulta.mediciones.perimetros.brazo_relajado },
                    { x: `Brazo tensión`, y: consulta.mediciones.perimetros.brazo_flexionado },
                    { x: `Cintura`, y: consulta.mediciones.perimetros.cintura },
                    { x: `Cadera`, y: consulta.mediciones.perimetros.cadera },
                    { x: `Muslo Medio`, y: consulta.mediciones.perimetros.muslo_medio },
                    { x: `Pierna`, y: consulta.mediciones.perimetros.pierna }
                    ]
            } 
        ))
    )
}

const dataTest = [
        {
            id: `Consulta 1`,
            color: "hsl(210, 70%, 50%)",
            data: [
                { x: `Brazo relajado`, y: 20 },
                { x: `Brazo tensión`, y: 22},
                { x: `Cintura`, y: 20 },
                { x: `Cadera`, y: 22 },
                ]
        },
        {
            id: `Consulta 2`,
            color: "hsl(210, 70%, 50%)",
            data: [
                { x: `Brazo relajado`, y: 25 },
                { x: `Brazo tensión`, y: 27},
                { x: `Cintura`, y: 25 },
                { x: `Cadera`, y: 27 },
                ]
        },
        {
            id: `Consulta 3`,
            color: "hsl(210, 70%, 50%)",
            data: [
                { x: `Brazo relajado`, y: 30 },
                { x: `Brazo tensión`, y: 32},
                { x: `Cintura`, y: 30 },
                { x: `Cadera`, y: 32 },
                ]
        },
        {
            id: `Consulta 4`,
            color: "hsl(210, 70%, 50%)",
            data: [
                { x: `Brazo relajado`, y: 35 },
                { x: `Brazo tensión`, y: 37},
                { x: `Cintura`, y: 35 },
                { x: `Cadera`, y: 37 },
                ]
        } 
]