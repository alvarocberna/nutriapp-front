'use client'
//next
import dynamic from 'next/dynamic'
//
import { ConsultaEntity } from '@/features';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(mod => mod.ResponsiveLine),
  { ssr: false }
)

interface GraphPlieguesInterface{
    consultas: ConsultaEntity[] | undefined;
    width?: string;
    height?: string;
}

export function GraphResumenFicha({ consultas, width = '50', height = '300' }: GraphPlieguesInterface) {

    const data = dataGraph(consultas);
    
    return (
        <div className={`flex flex-col w-[${width}%] h-[${height}px] me-3 mb-5 bg-white shadow rounded-xl pt-1 py-2`}>
            <p className="text-md text-center my-1">
                Resumen
            </p>
            <div className="w-[100%] h-[86%] mx-auto">
                <ResponsiveLine
                    data={data}
                    //1-margenes
                    margin={{ top: 10, right: 30, bottom: 60, left: 45 }}
                    //2-(?)
                    // xScale={{ type: "point" }}
                    //3-(?)
                    // yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
                    //4-eje horizontal ingerior: legends
                    // axisBottom={{ legend: "Mediciones", legendOffset: 40 }} 
                    //5-eje vertical izquierdo: legendss
                    // axisLeft={{ legend: "Valores", legendOffset: -50 }}
                    //6-grid horizontal del fondo del gráfico
                    enableGridX={false}
                    //7-grid vertical del fondo del gráfico
                    // enableGridY={false}
                    //8-habilitar puntos en los valores xy
                    enablePoints={true}
                    //9-tamaño de los puntos
                    pointSize={8}         
                    //10-borde para resaltarlos aún más 
                    pointBorderWidth={2}   
                    //11-(?)
                    pointLabelYOffset={-12}
                    //12-
                    useMesh={true}
                    //13-lineas curvadas
                    // curve="monotoneX"
                    //14-ancho linea
                    //15-colores lineas
                    colors={{ scheme: "category10" }}
                    //16-categorías de cada linea
                    legends={[
                        {
                            anchor: "bottom",
                            direction: "row",
                            translateY: 55, //100
                            translateX: 12,
                            itemWidth: 100, //80
                            itemHeight: 20, //20
                            symbolSize: 12,
                        },
                    ]}
                    />
            </div>
        </div>
    )
}

function dataGraph(consultas: ConsultaEntity[] | undefined){
    // Si 'consultas' es undefined o un array vacío, retornamos un array vacío
    if (!consultas || consultas.length === 0) {
        return [];
    }
    const consultasSlice = consultas.slice(0, 3); // Ahora 'consultas' está garantizado como un array
    return(
            [
                {
                    id: 'IMC',
                    color: "hsl(280, 70%, 50%)", // Cambiado para diferenciar la línea
                    data: consultasSlice.map((consulta) => (
                        {
                            x: `n ${consulta.nro_consulta}`,
                            y: consulta.mediciones.resultados_med.imc.toFixed(1)
                        }  
                    ))
                },
                {
                    id: 'MM kg',
                    color: "hsl(340, 70%, 50%)", // Cambiado para diferenciar la línea
                    data: consultasSlice.map((consulta) => (
                        {
                            x: `n ${consulta.nro_consulta}`,
                            y: consulta.mediciones.resultados_med.mm_kg.toFixed(1)
                        }  
                    ))
                }, 
                {
                    id: 'Peso (kg)',
                    color: "hsl(210, 70%, 50%)",
                    data: consultasSlice.map((consulta) => (
                        {
                            x: `n ${consulta.nro_consulta}`,
                            y: consulta.mediciones.basicas.peso.toFixed(1)
                        }  
                    ))
                },
            ]
    )
}
