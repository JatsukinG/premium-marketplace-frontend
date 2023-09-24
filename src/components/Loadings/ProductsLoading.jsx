import React from 'react'

const ProductsLoading = () => {
  return (
    <div className='w-full p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 animate-pulse'>
        {
            [1,1,1,1,1,1,1,1,,1,1].map(n=>(
                <div className='w-full h-48 md:h-64 bg-gray-200 rounded-md'></div>
            ))
        }
    </div>
  )
}

export default ProductsLoading