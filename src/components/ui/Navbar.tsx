import { UiContext } from "@/context"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext, useState } from "react"
import { CartIcon, SearchIcon } from "../iconos/Kicons"

export const Navbar = () => {
   const pathname = usePathname()
  // console.log(pathname);
  const [ksideMenuOpen,setKsideMenuOpen] = useState(false)
  const { toggleSideMenu } = useContext(UiContext);

  const closeUserMenu = () => {
    setKsideMenuOpen(false)
  } 
  return (
   <div className="fixed top-0 left-0 right-0 z-50  bg-white bg-opacity-95">
      <nav className='flex justify-between py-5 px-3'>

        <Link href="/" className="flex items-center">
               <span className='text-yellow-600 text-3xl'>Fabul</span>
               <span className='text-red-600 text-2xl'>♥</span>
               <span className='text-blue-600 text-3xl'>Hada</span>
        </Link>

        <div className='hidden md:flex gap-9 lg:gap-14 justify-center'>
          <div className={`w-8 h-8 inline-flex items-center justify-center rounded-full
           ${ pathname === '/category/amor-armonia' ? 'ring-2' : 'ring-0' } ring-[#f0aaad]  mb-4`}>
          <Link href='/category/amor-armonia' passHref  className="ktooltip bajo">
            <Image src="/moon1.svg" alt="AA Logo"
              width={30} height={30} priority
            />
              <span className={`tiptext`}>Amor Armonía</span>

          </Link>
          </div>
          <div className={`w-8 h-8 inline-flex items-center justify-center rounded-full
           ${ pathname === '/category/abundancia-prosperidad' ? 'ring-2' : 'ring-0' } ring-[#efca5c]  mb-4`}>
          <Link href='/category/abundancia-prosperidad' passHref className="ktooltip bajo">
            <Image src="/moon2.svg" alt="AA Logo"
              width={30} height={30} priority
            />
              <span className="tiptext">Abundancia Prosperidad</span>

          </Link>
          </div>
          <div className={`w-8 h-8 inline-flex items-center justify-center rounded-full
           ${ pathname === '/category/salud-vitalidad' ? 'ring-2' : 'ring-0' } ring-[#0ced17]  mb-4`}>
          <Link href='/category/salud-vitalidad' passHref className="ktooltip bajo">
            <Image src="/moon3.svg" alt="AA Logo"
              width={30} height={30} priority
            />
              <span className="tiptext">Salud Vitalidad</span>

          </Link>
          </div>
          <div className={`w-8 h-8 inline-flex items-center justify-center rounded-full
           ${ pathname === '/category/sabiduria-poder' ? 'ring-2' : 'ring-0' } ring-[#57a6f0]  mb-4`}>
          <Link href='/category/sabiduria-poder' passHref className="ktooltip bajo">
            <Image src="/moon4.svg" alt="AA Logo"
              width={30} height={30} priority
            />
              <span className="tiptext">Sabiduria Poder</span>

          </Link>
          </div>
          <div className={`w-8 h-8 inline-flex items-center justify-center rounded-full
           ${ pathname === '/category/naturaleza-zodiaco' ? 'ring-2' : 'ring-0' } ring-[#ba6bf7]  mb-4`}>
          <Link href='/category/naturaleza-zodiaco' passHref className="ktooltip bajo">
            <Image src="/moon5.svg" alt="AA Logo"
              width={30} height={30} priority
            />
              <span className="tiptext">Naturaleza Zodiaco</span>

          </Link>
          </div>
          <div className={`w-8 h-8 inline-flex items-center justify-center rounded-full
           ${ pathname === '/category/proteccion-talismanes' ? 'ring-2' : 'ring-0' } ring-[#f9ab4c]  mb-4`}>
          <Link href='/category/proteccion-talismanes' passHref className="ktooltip bajo">
            <Image src="/moon6.svg" alt="AA Logo"
              width={30} height={30} priority
            />
              <span className="tiptext">Protección Talismanes</span>

          </Link>
          </div>
        </div>
        <div className='flex gap-5 justify-center'>
          <SearchIcon width={25} fill="#33496a" />

          <Link href="shop/cart" className='flex relative'>

            <CartIcon width={25}/>
            <span className='bg-blue-950 text-center text-blue-100 font-bold text-[11px] 
              rounded-full w-6 h-6  px-1 py-1  absolute top-[-12px] left-4'>
              5
            </span>
          </Link>

          {/* onClick={() => setUserMenuOpen(prev => !prev)}> */}
          <button className="boton2"
                  onClick={ toggleSideMenu }>
           Menu</button>
          
        </div>
      </nav>

    </div>
  )
}
