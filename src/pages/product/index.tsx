
import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from "@mui/material";

export default function Home() {

  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout title={'Fabul♥Hada - Home'} pageDescription={'Encuentra los mejores productos de FabulHada aquí'}>
        <h1 className="text-slate-100 mb-2 titulo mx-3">Tienda</h1>
        <h2 className="text-slate-100 mb-2 subtitulo mx-3">Todos los productos</h2>

        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }

    
    </ShopLayout>
  )
}
