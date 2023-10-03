import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { AuthProvider, CartProvider, UiProvider } from '@/context'

import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppProps) {

   return (
      <SessionProvider>
         <PayPalScriptProvider options={{ 'clientId': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '' }}>

            <SWRConfig
               value={{
                  fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
               }}
            >
               <AuthProvider>
                  <CartProvider>
                     <UiProvider>
                           <Component {...pageProps} />
                     </UiProvider>
                  </CartProvider>
               </AuthProvider>
            </SWRConfig>

         </PayPalScriptProvider>
      </SessionProvider>
   )
}
