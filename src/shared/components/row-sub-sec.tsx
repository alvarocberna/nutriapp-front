//css
import '../../app/globals.css'

interface Props {
    children: React.ReactNode
}

export function RowSubSec({children}: Props){
    return(
        <div className="h-[40px] w-full flex items-center justify-between px-1 md:px-5  border-t-1 border-[#bbb] hover-primary">
            {children}
        </div>
    )
}


