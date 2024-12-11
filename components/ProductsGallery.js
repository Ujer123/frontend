import React from 'react'
import Image from 'next/image'
import perfumes from "@/public/images/perfumes.jpg"

function ProductsGallery() {
  return (
    <section className="gallerypart sm:mt-11">
    <h2 className='text-center font-bold text-3xl'>Our Latest Product</h2>
    <div className="flex justify-around flex-wrap gap-5 mt-5">
      <div>
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div>
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div>
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div>
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div >
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div>
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div>
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div>
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div>
        <Image
          src={perfumes}
          width={350}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div>
        <Image
          src={perfumes}
          width={950}
          height={100}
          alt="Picture of the author"
          className='rounded-lg'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

    </div>
  </section>
  )
}

export default ProductsGallery
