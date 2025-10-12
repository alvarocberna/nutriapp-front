
interface ContProps {
  children: React.ReactNode
  width?: string 
  widthInner?: string
}

export function ContSubSec({ children, width = '100%', widthInner = '90%' }: ContProps){
    return(
        <div className={`w-[${width}] flex mx-auto bg-white rounded-[20px] mt-8 shadow`} >
            <div className={`w-[${widthInner}] m-auto flex flex-col`}>
                {children}
            </div>
        </div>
    )
}