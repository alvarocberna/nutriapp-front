
export default function HeadSubSec(
    {children}: Readonly<{children: React.ReactNode;}>
){
    return(
        <div className="h-[80px] w-full px-5 flex justify-between items-center">
            {children}
        </div>
    )
}