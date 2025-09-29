
export default function TitleSec(props: any){
    const title = props.title;
    return(
        <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#414141]">{title}</h1>
        </div>
    )
}