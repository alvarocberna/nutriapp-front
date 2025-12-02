//shared
import {NavbarProfesional} from '@/shared/components/navbar-profesional';

export function ProfessionalCont(
  {children,}: Readonly<{children: React.ReactNode;}>
) {
  return (
    <div className="">
        {/* Navbar de 280px */}
        <NavbarProfesional/>
        {/* Sec Principal */}
        <div className="h-full md:ml-[280px] pb-10 flex bg-quaternary">
            <div className='w-[90%] sm:w-[80% md:w-[90%] lg:w-[80%] h-full mt-25 md:mt-8 mb-10 mx-auto'>
                {children}
            </div>
        </div>
    </div>
  )
}