
interface ContProps {
  title: string
  width?: string // 👈 Nueva prop opcional
}

export function TitleSubSec({ title, width = '100%' }: ContProps){
    return(
        <div className={`w-[${width}] my-auto mx-auto`}>
            <h1 className={`w-[full] text-xl font-bold text-[#414141]`}>{title}</h1>
        </div>
    )
}