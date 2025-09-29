
export default function BoxSubSec(
    {children}: Readonly<{children: React.ReactNode;}>
){
    return(
        <div className="w-full px-5 flex flex-col justify-center items-center">
            {children}
        </div>
    )
}