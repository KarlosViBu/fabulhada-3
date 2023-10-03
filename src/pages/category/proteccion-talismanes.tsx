import type { NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';
// import { SalmodiaPT } from '@/components/category';


const TalismanesPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?category=proteccion-talismanes');


  return (
    <ShopLayout title={'Fabul♥Hada - Talismanes'} pageDescription={'Los mejores productos de FabulHada acerca de la Protección y los Talismanes'}>
      <div className='flex justify-between'>
        <h1 className="text-slate-100 mb-2 titulo mx-3">
          Protección y Talismán</h1>
        {/* <SalmodiaPT /> */}
      </div>
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}

export default TalismanesPage
