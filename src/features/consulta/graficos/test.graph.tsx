"use client";

import dynamic from 'next/dynamic'

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then(mod => mod.ResponsiveLine),
  { ssr: false }
)

const data = [
  {
    id: "Peso",
    color: "hsl(210, 70%, 50%)",
    data: [
      { x: "Medición 1", y: 80 },
      { x: "Medición 2", y: 78 },
      { x: "Medición 3", y: 75 },
    ],
  },
  {
    id: "IMC",
    color: "hsl(20, 70%, 50%)",
    data: [
      { x: "Medición 1", y: 25 },
      { x: "Medición 2", y: 24 },
      { x: "Medición 3", y: 23.5 },
    ],
  },
  {
    id: "Talla",
    color: "hsl(120, 70%, 50%)",
    data: [
      { x: "Medición 1", y: 170 },
      { x: "Medición 2", y: 170 },
      { x: "Medición 3", y: 170 },
    ],
  },
];

export function TestChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine
        data={data}
        margin={{ top: 40, right: 100, bottom: 60, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
        axisBottom={{
          legend: "Mediciones",
          legendOffset: 40,
        }}
        axisLeft={{
          legend: "Valores",
          legendOffset: -50,
        }}
        enablePoints={true}
        pointSize={12}          // ⬅️ Tamaño grande de los puntos
        pointBorderWidth={3}    // ⬅️ Borde para resaltarlos aún más
        pointLabelYOffset={-12}
        useMesh={true}
        curve="monotoneX"
        lineWidth={3}           // ⬅️ Línea más gruesa
        colors={{ scheme: "category10" }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
          },
        ]}
      />
    </div>
  );
}
