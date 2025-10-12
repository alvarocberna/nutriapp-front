
//next
import Link from "next/link";

export function RowSubSec(
    {children}: Readonly<{children: React.ReactNode;}>
){

    return(
    <div className="h-[40px] w-full flex items-center justify-between px-5  border-t-1 border-[#bbb]">
        {children}
    </div>
    )
}