import type { NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';
// import { SalmodiaSV } from '@/components/category';


const SaludVitalidadPage: NextPage = () => {


   const { products, isLoading } = useProducts('/products?category=salud-vitalidad');


   return (
      <ShopLayout title={'Fabul♥Hada - Salud & Vitalidad'} pageDescription={'Los mejores productos de FabulHada para la Salud y Vitalidad'}>
         <div className='flex justify-between'>
           <h1 className="text-slate-100 mb-2 titulo mx-3">
             Salud y Vitalidad </h1>
             {/* <SalmodiaSV  /> */}
         </div>
         {
            isLoading
               ? <FullScreenLoading />
               : <ProductList products={products} />
         }

      </ShopLayout>
   )
}

export default SaludVitalidadPage
