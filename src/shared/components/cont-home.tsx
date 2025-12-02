//shared
import {NavbarHome} from '@/shared/components/navbar-home';

interface Props {
  children: React.ReactNode
  widthInner?: string
  heightInner?: string
}

export function HomeCont({ children, widthInner = '100%', heightInner = '100%' }: Props) {
  return (
    <div className="">
        {/* 1-Navbar de 280px */}
        <NavbarHome/>
        {/* 2-Sec Principal */}
        <div className="w-full h-100% flex bg-quaternary">
            <div className={`w-[${widthInner}] h-[${heightInner}] m-auto flex`}>
                {children}
            </div>
        </div>
    </div>
  )
}