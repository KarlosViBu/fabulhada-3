import type { NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';
// import { SalmodiaSP } from '@/components/category';


const SabiduriaPoderPage: NextPage = () => {


   const { products, isLoading } = useProducts('/products?category=sabiduria-poder');


   return (
      <ShopLayout title={'Fabul♥Hada - sabiduria & poder'} pageDescription={'Los mejores productos de FabulHada para la Sabiduria y Poder'}>
         <div className='flex justify-between'>
           <h1 className="text-slate-100 mb-2 titulo mx-3">
             Sabiduría y Poder</h1>
             {/* <SalmodiaSP  /> */}
         </div>
         {
            isLoading
               ? <FullScreenLoading />
               : <ProductList products={products} />
         }

      </ShopLayout>
   )
}

export default SabiduriaPoderPage
