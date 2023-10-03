import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { CartContext } from '@/context';

import { ShopLayout } from '@/components/layouts';

import { ItemCounter } from '@/components/ui/ItemCounter';
import { dbProducts } from '@/database';
import { ICartProduct, IProduct, IKind } from '@/interfaces';
import { currency } from '@/utils';
// import { ProductSlideshow } from '@/components/products';
import { arya } from '@/components/font';
import { Kslideshow } from '@/components/products/Kslideshow';

interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {

  const router = useRouter();
  const { addProductToCart } = useContext(CartContext)
  
  // console.log({ product });

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    kind: 'Simple',   //undefined,
    slug: product.slug,
    personage: product.personage,
    category: product.category,
    quantity: 1,
  })

  const selectedSize = (kind: IKind) => {
    // console.log('Padre:', kind);
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      kind
    }));
  }

  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      quantity
    }));
  }

  const onAddProduct = () => {

    if (!tempCartProduct.kind) { return; }

    addProductToCart(tempCartProduct);
    router.push('/cart');
  }

  return (
    <ShopLayout title={'Fabul♥Hada - Tienda'} pageDescription={'Encuentra los mejores productos de FabulHada aquí'}>

      <section className="text-gray-900  md:text-xl overflow-hidden">
        <div className=" flex flex-wrap bg-white bg-opacity-70 p-2 rounded-2xl lg:px-10 lg:mx-14">

          <div className="md:w-[60%] object-center rounded p-2 w-full lg:h-auto h-48 md:px-10" >
            <Kslideshow  images={ product.images }  />
            {/* <ProductSlideshow images={ product.images }/> */}

          </div>

          <div className="md:w-[40%] w-full md:pr-10 lg:py-6 mb-6 lg:mb-0 lg:px-5">
              <h1 className={`${arya.className} text-gray-900 text-2xl
                     md:text-3xl lg:text-4xl  font-extrabold m-2`}>
                {product.personage}
              </h1>
            <div className={`flex justify-between md:mb-4`}>
              <span className={`${arya.className} text-gray-900 text-2xl md:text-3xl lg:text-4xl  
                    font-extrabold`}>{currency.format(product.price)}
              </span>
              <div className='px-5 text-sky-800'>
                <h2 className='mx-5'>Cantidad</h2>
                  <ItemCounter
                    currentValue={tempCartProduct.quantity}
                    updatedQuantity={onUpdateQuantity}
                    maxValue={5}
                  />
              </div>
            </div>

            <div className="flex mb-4">
              <a className="flex text-sky-800 border-b-2 border-sky-800 py-2 px-1">
                Materiales
              </a>
            </div>
            <p className="leading-relaxed mb-4">{product.description}</p>

            <div className='flex gap-10 justify-center text-center'>
              <div className="flex flex-col">
                <span className="text-sky-800">Color</span>
                <span className="text-gray-900">{product.color}</span>
              </div>

              <div className="flex flex-col mb-5">
                <span className="text-sky-800">Tamaño</span>
                <span className="text-gray-900">{product.size}</span>
              </div>
            </div>
            <div className="flex px-10">

              <button className="flex-1 text-white bg-sky-600 border-0 py-2 md:py-3 text-xl md:text-xl px-3 md:px-6 focus:outline-none hover:bg-sky-800 rounded-full">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </section>

    </ShopLayout>
  )
}

/*
getServerSideProps
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// * No usar esto.... SSR
//                                                              ctx
// Cada vez que venga un Request a esta pagina.  El servidor procesa, renderiza y genera la respuesta.

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
  const { slug = '' } = params as { slug: string };
  const product = await dbProducts.getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    }
  }
}
*/

// getStaticPaths....
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

// Obtengo por Build todas los paths contruidos antes de que el usuario los solicite
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const productSlugs = await dbProducts.getAllProductSlugs();


  return {
    // desextructura            obj
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

// Para aquellos props (datos) que se renderizan cada determinado tiempo ej. 24h
// desextructura  del                                   ctx
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug = '' } = params as { slug: string };
  const product = await dbProducts.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 24
  }
}


export default ProductPage