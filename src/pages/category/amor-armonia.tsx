import type { NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';
// import { SalmodiaAA } from '@/components/category';


const AmorArmoniaPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?category=amor-armonia');


  return (
    <ShopLayout title={'Fabul♥Hada - Amor y Armonía'} pageDescription={'Los mejores productos de FabulHada para el Amor y Armonía'}>
      <div className='flex justify-between'>
        <h1 className="text-slate-100 mb-2 titulo mx-3">Amor y Armonía</h1>
        {/* <SalmodiaAA /> */}
      </div>
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}

export default AmorArmoniaPage
