import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'FabulHada',
  description: 'E-shop venta de productos artesanales ',
  keywords:    'artesania, personajes, magia, amor, prosperidad, armonia, talisman, salud, vitalidad, proteccion'
}

export default function HomeLayout( { children, }: { children: React.ReactNode }) {

  return (

      <main>
        {children}
      </main>
  )
}
