// import { pattaya, seymour } from '@/components/ui'
import { NavApp } from '@/components/ui/NavApp'
import logo from '/public/img/Logo4.png'
import Image from 'next/image'
import { pattaya, seymour } from '@/components/font'

export default function AboutPage() {
   return (
      <>
         <NavApp />
         <section className={`${pattaya.className} text-gray-900  md:text-xl overflow-hidden`}>
            <div className=" flex flex-col bg-white bg-opacity-0 p-2 rounded-2xl lg:px-10 lg:mx-12">
               <div className={`${seymour.className} text-center  text-4xl lg:text-6xl font-extrabold mb-5`}>
                  <span className="text-center animate-pulse tracking-normal lg:tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-500">
                     FABULHADA
                  </span>
               </div>
               <div className='flex flex-col  md:flex-row justify-evenly items-center'>
                  <div className=' h-[500] lg:h-[650]
                      drop-shadow-[0_12px_12px_rgba(12,237,25,0.29)]'>
                     <Image src={ logo } alt="logo"
                        width={850} height={300} className=''
                        priority />
                     {/* <Image src={hada} alt="logo"
                        width={250} height={300} className='py-10'
                        priority /> */}
                  </div>
                  <div className='w-[80%] lg:w-72 mt-2'>
                     <p className=" text-center text-yellow-300 text-2xl lg:text-5xl mb-2 lg:mb-5 cardText">
                        Elementos Mágicos y de Protección.</p>
                     <p className=" text-center text-yellow-300 text-2xl lg:text-5xl cardText">
                        Elaborados artesanalmente con materiales reciclados.</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}
