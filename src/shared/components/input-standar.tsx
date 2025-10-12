
export function InputStandar(props: any){
    const label = props.label;
    return(
          <div className="relative z-0 mt-3">
            <input type="text" id="floating_standard" className="block py-2.5 px-2 w-full text-sm text-black bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
            <label className="absolute text-sm px-2 text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{label}</label>
        </div>
    )
}