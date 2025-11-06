
interface ContProps {
  height?: string // 👈 Nueva prop opcional
}

export function FooterSubSec({height = '25px' }: ContProps){
    return(
        <div    
            className= {`h-[${height}] w-full`} 
        >
        </div>
    )
}