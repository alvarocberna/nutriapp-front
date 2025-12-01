'use state'
import {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(mod => mod.ResponsiveLine),
  { ssr: false }
)

export const Grafico = () => {
    const [data, setData] = useState<any>(data1);
    const [count, setCount] = useState(1);

    useEffect(() => {
        switch (count){
            case 1:
                setTimeout(() => {
                    setData(data2);
                    setCount(2);
                }, 2000)
                break;
            case 2:
                setTimeout(() => {
                    setData(data3);
                    setCount(3);
                }, 2000)
                break;
            case 3:
                setTimeout(() => {
                    setData(data1);
                    setCount(1);
                }, 2000)
                break;
        }
    }, [count])

    return(
        <div className="w-[90%] h-[90%] mx-auto my-auto bg-white">
               <ResponsiveLine
                    data={data}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 0, max: 30, stacked: false }}
                    axisBottom={null}
                    axisLeft={null}
                    enableGridX={false}
                    colors={{ scheme: "set2" }}
                    enablePoints={true}
                    pointSize={8}                      
                    pointLabelYOffset={-12}             
                    useMesh={true}
                    lineWidth={2}
                    />
        </div>
    )
}

const data1 = [
       {
            id: 'datos',
            color: "hsl(210, 70%, 50%)",
            data: [
                { x: `Tricep`, y: 10 },
                { x: `Subescapular`, y: 15 },
                { x: `Bicep`, y: 10 },
                { x: `Cresta Iliaca`, y: 15 },
                { x: `Supraespinal`, y: 10 },
                { x: `Abdominal`, y: 15 },
                { x: `Muslo`, y: 10 },
                { x: `Pierna`, y: 15 },
            ]
        },
]

const data2 = [
       {
            id: 'datos',
            color: "hsl(210, 70%, 50%)",
            data: [
                { x: `Tricep`, y: 5 },
                { x: `Subescapular`, y: 20 },
                { x: `Bicep`, y: 5 },
                { x: `Cresta Iliaca`, y: 20 },
                { x: `Supraespinal`, y: 5 },
                { x: `Abdominal`, y: 20 },
                { x: `Muslo`, y: 5 },
                { x: `Pierna`, y: 20 },
            ]
        }
    ]

const data3 = [
       {
            id: 'datos',
            color: "hsl(210, 70%, 50%)",
            data: [
                { x: `Tricep`, y: 20 },
                { x: `Subescapular`, y: 10 },
                { x: `Bicep`, y: 15 },
                { x: `Cresta Iliaca`, y: 5 },
                { x: `Supraespinal`, y: 20 },
                { x: `Abdominal`, y: 10 },
                { x: `Muslo`, y: 20 },
                { x: `Pierna`, y: 15 },
            ]
        }
    ]
