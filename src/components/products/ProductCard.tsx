import { FC, useMemo, useState } from 'react';
import 'animate.css';
import { IProduct } from '../../interfaces'
import { currency } from '@/utils';
// import { arya, satisfy } from '../ui';
import Image from 'next/image';
import Link from 'next/link';
import { arya, satisfy } from '../font';

interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const productImage = useMemo(() => {
        return isHovered
            ? `/products/pergamino-1.png`
            : product.images[0];

    }, [isHovered, product.images])

    const inImage = useMemo(() => {
        return isHovered
            ? "animate__animated animate__flipInY "
            //  ? "animate__animated animate__zoomIn animate__fast bordImg  kshadow"
            // ? "animate__animated animate__fadeInUp animate__slow"
            : "animate__animated animate__fadeIn animate__slow"
        // : "animate__animated animate__zoomIn animate__faster"

    }, [isHovered])

    return (
        <div className='kcenter'>
            <div key={product.slug}
                className={`${arya.className} group relative kcenter
                      px-0 py-3 bg-white shadow-2xl rounded-xl kborde`}
            >

                <Link href={`/product/${product.slug}`} passHref prefetch={false}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className='relative cursor-pointer group 
                                kcenter px-2'
                >
                    <Image src={productImage} alt="personaje"
                        width={300} height={400}
                        className={`rounded-xl kimgs ${inImage}`}
                        onLoad={() => setIsImageLoaded(true)}
                    />
                    {
                        isHovered &&

                        <div
                            className="absolute justify-items-center opacity-0 transition-all group-hover:opacity-100 kshadow animate__animated animate__flipInY"
                        >
                            <p className={`${satisfy.className} text-[.8rem] sm:text-[1.15rem] md:text-[1.23rem] lg:text-[1.45rem] xl:text-[1.55rem] font-bold text-center px-4 md:px-[1.2rem] lg:px-6`}>
                                {product.iam}
                            </p>
                        </div>
                    }

                </Link>


                {
                    isImageLoaded &&
                    <div className=''>
                        <span className='absolute bottom-10  lg:bottom-12  text-white text-center text-xl  lg:text-2xl mb-1 font-extrabold cardText'>{product.personage}</span>
                        <span className='text-center text-2xl  lg:text-3xl'>{currency.format(product.price)}</span>
                    </div>
                }
            </div>
        </div>
    )
}
