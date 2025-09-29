
import Navbar from './navbar'

export default function ProfessionalCont(
  {children,}: Readonly<{children: React.ReactNode;}>
) {
  return (
    <div className="">

        {/* Navbar de 280px */}
        <Navbar/>

        {/* Sec Principal */}
        <div className="h-full md:ml-[280px] pb-10 flex bg-quaternary">
            <div className='w-[80%] h-full mt-5 mb-10 mx-auto '>
                {children}
            </div>
        </div>
    </div>
  )
}