import type { NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';
// import { SalmodiaNZ } from '@/components/category';


const NaturalezaZodiacoPage: NextPage = () => {


   const { products, isLoading } = useProducts('/products?category=naturaleza-zodiaco');


   return (
      <ShopLayout title={'Fabul♥Hada - Naturaleza & Zodiaco'} 
      pageDescription={'Los mejores productos de FabulHada para la Naturaleza y Zodiaco'}>
      <div className='flex justify-between'>
        <h1 className="text-slate-100 mb-2 titulo mx-3">
          Naturaleza y Zodíaco</h1>
          {/* <SalmodiaNZ  /> */}
      </div>
         {
            isLoading
               ? <FullScreenLoading />
               : <ProductList products={products} />
         }

      </ShopLayout>
   )
}

export default NaturalezaZodiacoPage
