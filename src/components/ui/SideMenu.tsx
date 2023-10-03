import React, { useContext, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AuthContext, UiContext } from '@/context';
import { useRouter } from "next/router";
import { CategorIcon, ClearIcon, DashboardIcon, ExitIcon, KeyIcon, OrdersIcon, SearchIcon, UserIcon, UsersIcon } from '../iconos/Kicons';
// import { ClearIcon } from '../iconos/ClearIcon';
// import { SearchIcon } from '../iconos/SearchIcon';
// import { UserIcon } from '../iconos/UserIcon';
// import { OrdersIcon } from '../iconos/OrdersIcon';
// import { KeyIcon } from '../iconos/KeyIcon';
// import { ExitIcon } from '../iconos/ExitIcon';
// import { DashboardIcon } from '../iconos/DashboardIcon';
// import { CategorIcon } from '../iconos/CategorIcon';
// import { UsersIcon } from '../iconos/UsersIcon';

export const SideMenu = () => {
   const router = useRouter();
   const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
   const { user, isLoggedIn, logout } = useContext(AuthContext);
   const navigateTo = (url: string) => {
      toggleSideMenu();
      router.push(url);
   }
   const kperfil = `Perfil : ${user?.name}`

   const [searchTerm, setSearchTerm] = useState('');

   const onSearchTerm = () => {
      if (searchTerm.trim().length === 0) return;
      navigateTo(`/search/${searchTerm}`);
   }
   return (
      <>
         {
            isMenuOpen &&

            <div id="modal-component-container" className='fixed inset-0  z-50'>
               {/* <button className='bg-blue-300 text-white p-3'>Menu</button> */}
               <div className='h-10'>

               </div>
               <div className="modal-flex-container 
                       block 
                       text-end"
               >
                  <div className="modal-bg-container fixed inset-0 
                            bg-green-950 bg-opacity-[30%] backdrop-blur-sm"
                  >
                     <div className="modal-space-container"></div>
                     <div className="modal-container inline-block align-bottom
                               text-left overflow-hidden shadow-2xl transform transition-all
                               my-0 w-[350px]"
                     >
                        <div className="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 
                                 lg:mt-5  "
                        >
                           <div className="modal-wrapper-flex cursor-pointer" >
                              <div><ClearIcon width={25} onClick={toggleSideMenu} /></div>

                              <div className="modal-actions mt-3
                                           text-lg font-medium text-gray-900"
                              >
                                 <div className="flex flex-col relative mb-4">

                                    <div className="flex flex-row w-full">
                                       <input id="buscar" placeholder="¿ Buscar ?" name="buscar"
                                          className="peer h-10 w-[90%] border-b-[3px]
                                               border-gray-300 text-gray-800 focus:outline-none
                                                placeholder-transparent   focus:border-blue-400 "
                                          value={searchTerm}
                                          onChange={(e) => setSearchTerm(e.target.value)}
                                          onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                                       />
                                       <label htmlFor="buscar"
                                          className="absolute left-0 -top-3.5 text-gray-600 text-lg
                                               peer-placeholder-shown:text-lg
                                               peer-placeholder-shown:text-gray-400
                                                peer-placeholder-shown:top-1.5  transition-all
                                                peer-focus:-top-3.5 peer-focus:text-sm"

                                       >¿ Buscar ?</label>
                                       <button onClick={onSearchTerm}>
                                          <SearchIcon width={25} fill="#33496a" />
                                       </button>
                                    </div>

                                 </div>

                              </div>
                              <div className="modal-content">
                                 <div>
                                    <Link
                                       href="" passHref
                                       className="flex items-center border-s-[3px] border-blue-500 bg-blue-50 px-4 py-1 md:py-2 text-blue-700"
                                    >
                                       <UserIcon width={40} fill="#33496a" />

                                       <span className="text-sm font-semibold"> {kperfil} </span>
                                    </Link>
                                 </div>

                                 <div>
                                    <Link
                                       href="" passHref
                                       className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                       <OrdersIcon width={25} fill="#33496a" />
                                       <span className="text-sm font-semibold"> Mis Ordenes </span>
                                    </Link>
                                 </div>

                                 <div className='block md:hidden'>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                       <summary
                                          className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-1 md:py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                       >
                                          <span className='subtitulo px-4 m-3'> Categorías </span>

                                          <span
                                             className="shrink-0 transition duration-300 group-open:-rotate-180"
                                          >
                                             <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                             >
                                                <path
                                                   fillRule="evenodd"
                                                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                   clipRule="evenodd"
                                                />
                                             </svg>
                                          </span>
                                       </summary>

                                       <div className="mt-2 space-y-1 px-4">
                                          <div>
                                             <div onClick={() => navigateTo('/category/amor-armonia')}
                                                className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                             >
                                                <Image src="/moon1.svg" alt="AA Logo"
                                                   width={25} height={25} priority
                                                />
                                                <span className="text-sm font-semibold"> Amor - Armonía </span>
                                             </div>

                                          </div>
                                          <div>
                                             <div onClick={() => navigateTo('/category/abundancia-prosperidad')}
                                                className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                             >
                                                <Image src="/moon2.svg" alt="AA Logo"
                                                   width={25} height={25} priority
                                                />
                                                <span className="text-sm font-semibold"> Abundancia - Prosperidad </span>
                                             </div>
                                          </div>

                                          <div>
                                             <div onClick={() => navigateTo('/category/salud-vitalidad')}
                                                className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                             >
                                                <Image src="/moon3.svg" alt="AA Logo"
                                                   width={25} height={25} priority
                                                />
                                                <span className="text-sm font-semibold"> Salud - Vitalidad </span>
                                             </div>
                                          </div>

                                          <div>
                                             <div onClick={() => navigateTo('/category/sabiduria-poder')}
                                                className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                             >
                                                <Image src="/moon4.svg" alt="AA Logo"
                                                   width={25} height={25} priority
                                                />
                                                <span className="text-sm font-semibold"> Sabiduría - Poder </span>
                                             </div>
                                          </div>

                                          <div>
                                             <div onClick={() => navigateTo('/category/naturaleza-zodiaco')}
                                                className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                             >
                                                <Image src="/moon5.svg" alt="AA Logo"
                                                   width={25} height={25} priority
                                                />
                                                <span className="text-sm font-semibold"> Naturaleza - Zodíaco </span>
                                             </div>
                                          </div>
                                          <div>
                                             <div onClick={() => navigateTo('/category/proteccion-talismanes')}
                                                className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                             >
                                                <Image src="/moon6.svg" alt="AA Logo"
                                                   width={25} height={25} priority
                                                />
                                                <span className="text-sm font-semibold"> Protección - Talisman </span>
                                             </div>
                                          </div>
                                       </div>
                                    </details>
                                 </div>
                                 {
                                 !isLoggedIn
                                 ? (
                                 <div>
                                    <button
                                       onClick={() => navigateTo(`/auth/login?p=${router.asPath}`)}
                                       className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                       <KeyIcon width={25} fill="#33496a" />

                                       <span className="text-sm font-semibold"> Ingresar </span>
                                    </button>
                                 </div>
                                 )
                                 :(
                                 <div>
                                    <Link onClick={logout}
                                       href="" passHref
                                       className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                       <ExitIcon width={25} fill="#33496a" />

                                       <span className="text-sm font-semibold"> Salir </span>
                                    </Link>
                                 </div>
                                 )
                                 }
                                 <div>
                                    <h3 className='subtitulo px-4 m-3'>Admin Panel</h3>
                                 </div>
                                 <div>
                                    <Link
                                       href="" passHref
                                       className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                       <DashboardIcon width={25} stroke="#033" />

                                       <span className="text-sm font-semibold"> Dashboard </span>
                                    </Link>
                                 </div>
                                 <div>
                                    <Link
                                       href="" passHref
                                       className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                       <CategorIcon width={25} />

                                       <span className="text-sm font-semibold"> Productos </span>
                                    </Link>
                                 </div>
                                 <div>
                                    <Link
                                       href="" passHref
                                       className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                       <OrdersIcon width={25} fill="#33496a" />

                                       <span className="text-sm font-semibold"> Ordenes </span>
                                    </Link>
                                 </div>
                                 <div>
                                    <Link
                                       href="" passHref
                                       className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-1 md:py-2 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                       <UsersIcon width={25} />

                                       <span className="text-sm font-semibold"> Usuarios </span>
                                    </Link>
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>


                  </div>
               </div>
            </div>
         }
      </>

   )
}
