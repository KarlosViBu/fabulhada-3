import type { NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';
import { FullScreenLoading } from '../../components/ui';
// import { SalmodiaAP } from '@/components/category';


const AbundanciaProsperidadPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?category=abundancia-prosperidad');

  return (
    <ShopLayout title={'Fabul♥Hada - Abundancia y Prosperidad'} pageDescription={'Los mejores productos de FabulHada para la Abundancia y la Prosperidad'}>
      <div className='flex justify-between'>
        <h1 className="text-slate-100 mb-2 titulo mx-3">
          Abundancia y Prosperidad</h1>
          {/* <SalmodiaAP  /> */}
      </div>
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}

export default AbundanciaProsperidadPage
