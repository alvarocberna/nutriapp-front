
import {NavbarHome} from './navbar-home'

interface HomeContProps {
  children: React.ReactNode
  widthInner?: string // 👈 Nueva prop opcional
}

export function HomeCont({ children, widthInner = '100%' }: HomeContProps) {
  return (
    <div className="">

        {/* Navbar de 280px */}
        {/* <NavbarHome/> */}

        {/* Sec Principal */}
        <div className="w-full h-full  pb-10 flex bg-quaternary"  >
            <div className={`w-[${widthInner}] h-full mt-5 mb-10 mx-auto`}  style={{marginTop: '50px'}} >
                {children}
            </div>
        </div>
    </div>
  )
}