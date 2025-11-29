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

interface GraphPlieguesInterface{
    data: ConsultaEntity[] | undefined;
    verX: number;
    width?: string;
    height?: string;
}

export function GraphPliegues({ data, verX, width = '49', height = '300'}: GraphPlieguesInterface) {
    const dataGraph = dataGraphLine(data || [], verX);
    const [scaleMax, setScaleMax] = useState(10);
    useEffect(() => {
        let max = 10;
        if(!data){
            return;
        }
        data.forEach((consulta) => {
            const pliegues: number[] = Object.values(consulta.mediciones.pliegues).slice(0, 8);
            pliegues.forEach((pliegue) => {
                if (pliegue > max) {
                    max = pliegue + 3;
                }
            })
        })
        setScaleMax(max);
        }, [data])
    
    return (
      <div className={`flex flex-col w-[${width}%] h-[${height}px] mb-5 bg-white shadow rounded-xl pt-1 py-2`}>
            <p className="text-md text-center my-1">
                Pliegues (mm)
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
    const consultasSlice = consultas.slice(0, verX); // Ahora 'consultas' está garantizado como un array
    return(
        consultasSlice.map((consulta, index) => (
            {
                id: `n ${consulta.nro_consulta + 1}`,
                color: "hsl(210, 70%, 50%)",
                data: [
                    { x: `Tricep`, y: consulta.mediciones.pliegues.tricep },
                    { x: `Subescapular`, y: consulta.mediciones.pliegues.subescapular },
                    { x: `Bicep`, y: consulta.mediciones.pliegues.bicep },
                    { x: `Cresta Iliaca`, y: consulta.mediciones.pliegues.cresta_iliaca },
                    { x: `Supraespinal`, y: consulta.mediciones.pliegues.supraespinal },
                    { x: `Abdominal`, y: consulta.mediciones.pliegues.abdominal },
                    { x: `Muslo`, y: consulta.mediciones.pliegues.muslo },
                    { x: `Pierna`, y: consulta.mediciones.pliegues.pierna },
                    ]
            } 
        ))
    )
}
