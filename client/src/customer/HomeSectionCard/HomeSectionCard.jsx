import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3 w-[13rem]'>
      <div className='h-[13rem] w-[10rem]'>
      <img className='object-cover object-top w-full h-full '
      src={product.imageUrl} alt="" />
      </div>
      <div className='p-4'>
        <h3>{product.brand}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
