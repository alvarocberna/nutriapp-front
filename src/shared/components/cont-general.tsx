
export function GeneralCont(
  {children,}: Readonly<{children: React.ReactNode;}>
) {
  return (
    <div className="">

        {/* Navbar de 280px */}

        {/* Sec Principal */}
        <div className="h-full pb-10 flex bg-quaternary">
            <div className='w-[80%] h-full mt-5 mb-10 mx-auto '>
                {children}
            </div>
        </div>
    </div>
  )
}