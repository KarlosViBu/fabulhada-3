import { FC } from 'react';

// import 'react-slideshow-image/dist/styles.css';

interface Props {
   images: string[]
}

export const Kslideshow: FC<Props> = ({ images }) => {
   return (
      <>
         <div className='container-all'>
            <div className="slide flex items-center my-0 md:my-4">
               {
                  images.map(image => {
                     const url = `${image}`;
                     return (
                        <div className="item-slide" key={image}>

                           <img src={url} alt="personaje" 
                              className=' w-32 md:w-56 lg:w-72 xl:w-96'
                           />

                        </div>
                     )

                  })
               }
            </div>
         </div>
      </>
   )

}
