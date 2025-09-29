
export default function ContSubSec(
    {children}: Readonly<{children: React.ReactNode;}>
){
    return(
        <div className="w-full bg-white rounded-[20px] mt-8 shadow">
            {children}
        </div>
    )
}