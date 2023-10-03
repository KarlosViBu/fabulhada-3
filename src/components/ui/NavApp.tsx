import Link from 'next/link';

export const NavApp = () => {
   return (
      <nav className='flex justify-center px-10 py-4'>
         <div className='flex gap-5 text-white text-xl md:text-lg font-bold'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/product'>Tienda</Link>
         </div>
      </nav>

   )
}
