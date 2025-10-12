import Image from "next/image";
import { NavbarHome } from "@/shared";
import { HomeCont } from "@/shared";

export default function Home() {
  return (
    <div>
      <HomeCont>
        <p>dewf</p>
      </HomeCont>
    </div>
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <NavbarHome/>
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <div className="bg-quaternary">
    //       página principal
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     footer
    //   </footer>
    // </div>
  );
}
