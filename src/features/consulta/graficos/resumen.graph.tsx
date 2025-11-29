interface GraphResumenInterface {
    peso?: number;
    talla?: number;
    imc?: number;
    mm_kg?: number;
    gc_kg?: number;
    width?: string;
    height?: string;
}

export function GraphResumen({peso, talla, imc = 0, mm_kg = 0, gc_kg = 0, width = '30', height = '300'}: GraphResumenInterface){
    return(
        <div className={`flex flex-col w-[${width}%] h-[${height}px] me-3 mb-5 bg-white shadow rounded-xl pt-1 py-2`}>
            <p className="text-md text-center my-1">
                General
            </p>
            <div className="w-[100%] h-[86%] m-auto">
                <div className="grid grid-cols-2 grid-rows-10 p-4">
                    <div className="border-b-1 border-b-gray-500 text-sm ps-2 py-1">Peso</div>
                    <div className="border-b-1 border-b-gray-500 text-sm text-center py-1">{peso} kg</div>
                    <div className="border-b-1 border-b-gray-500 text-sm ps-2 py-1">Talla</div>
                    <div className="border-b-1 border-b-gray-500 text-sm text-center py-1">{talla} cm</div>
                    <div className="border-b-1 border-b-gray-500 text-sm ps-2 py-1">IMC</div>
                    <div className="border-b-1 border-b-gray-500 text-sm text-center py-1">{imc.toFixed(2)}</div>
                    <div className="border-b-1 border-b-gray-500 text-sm ps-2 py-1">Masa Muscular</div> 
                    <div className="border-b-1 border-b-gray-500 text-sm text-center py-1">{mm_kg?.toFixed(2)} kg</div>
                    <div className="border-b-1 border-b-gray-500 text-sm ps-2 py-1">Grasa Corporal</div>
                    <div className="border-b-1 border-b-gray-500 text-sm text-center py-1">{gc_kg?.toFixed(2)} kg</div>
                </div>
            </div>
        </div>
    )
}