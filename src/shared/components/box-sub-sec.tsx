interface Props {
    children: React.ReactNode
    width?: string
    height?: string
}

export function BoxSubSec({children, width = '100%', height = '100%'}: Props){
    return(
        <div className={`w-[${width}] h-[${height}]] flex flex-col justify-center items-center`}>
            {children}
        </div>
    )
}