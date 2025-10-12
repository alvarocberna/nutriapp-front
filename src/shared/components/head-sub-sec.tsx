
interface ContProps {
  children: React.ReactNode
  width?: string // 👈 Nueva prop opcional
}

export function HeadSubSec({ children, width = '100%' }: ContProps){
    return(
        <div 
            className= {`w-[${width}] flex justify-between items-center`} 
            style={{minHeight: '80px'}} 
        >
            {children}
        </div>
    )
}