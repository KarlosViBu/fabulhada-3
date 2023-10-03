import { FC } from 'react'
import { IProduct } from '@/interfaces'
import { ProductCard } from '.'

interface Props {
    products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                        gap-7 lg:gap-8 px-1 py-4 z-0'>
        {
            products.map( product => (
                <ProductCard 
                    key={ product.slug }
                    product={ product }
                />
            ))
        }
    </div>
  )
}
