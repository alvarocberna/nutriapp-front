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
        console.log(count)
        //   setTimeout(() => {
        //             setData(data2);
        //             setCount(1);
        //         }, 2000)
        switch (count){
            case 1:
                setTimeout(() => {
                    console.log('settimeout 1 ejecutado')
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
                    // axisBottom={{
                    //     tickSize: 5,
                    //     tickPadding: 5,
                    //     tickRotation: -45, // 👈 ROTACIÓN vertical
                    //     legend: '',
                    //     legendOffset: 6,
                    //     legendPosition: 'middle',
                    // }}
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
                { x: `Tricep`, y: 20 },
                { x: `Subescapular`, y: 22 },
                { x: `Bicep`, y: 12 },
                { x: `Cresta Iliaca`, y: 18 },
                { x: `Supraespinal`, y: 16 },
                { x: `Abdominal`, y: 13 },
                { x: `Muslo`, y: 14 },
                { x: `Pierna`, y: 15 },
            ]
        }
    ]

const data3 = [
       {
            id: 'datos',
            color: "hsl(210, 70%, 50%)",
            data: [
                { x: `Tricep`, y: 10 },
                { x: `Subescapular`, y: 25 },
                { x: `Bicep`, y: 12 },
                { x: `Cresta Iliaca`, y: 28 },
                { x: `Supraespinal`, y: 6 },
                { x: `Abdominal`, y: 13 },
                { x: `Muslo`, y: 24 },
                { x: `Pierna`, y: 15 },
            ]
        }
    ]
