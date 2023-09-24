import React from 'react'

const ProductPageLoading = () => {
  return (
    <div className='w-full flex flex-col md:flex-row-reverse gap-4 p-4 animate-pulse'>
      <div className='w-full md:w-1/3 bg-white rounded-md flex flex-col gap-4 p-4'>
        <div className='w-1/3 h-8 bg-gray-200 rounded-full'></div>
        <div className='w-2/3 h-8 bg-gray-200 rounded-full'></div>
        <div className='flex gap-2'>
          <div className='w-1/2 h-4 bg-gray-200 rounded-full'></div>
          <div className='w-1/2 h-4 bg-gray-200 rounded-full'></div>
        </div>
        <div className='w-full h-12 bg-gray-200 rounded-full'></div>
        <div className='w-full h-12 bg-gray-200 rounded-full'></div>
      </div>
      <div className='w-full flex flex-col'>
        <div className='w-full bg-white rounded-md flex flex-col md:flex-row-reverse flex gap-4 p-4'>
          <div className='w-full h-48 md:h-full rounded-md bg-gray-200'></div>
          <div className='md:w-24 flex md:flex-col gap-2'>
            <div className='w-full h-12 rounded-md bg-gray-200'></div>
            <div className='w-full h-12 rounded-md bg-gray-200'></div>
            <div className='w-full h-12 rounded-md bg-gray-200'></div>
            <div className='w-full h-12 rounded-md bg-gray-200'></div>
            <div className='w-full h-12 rounded-md bg-gray-200'></div>
          </div>
        </div>
        <div className='w-full bg-white rounded-md flex flex-col gap-4 p-4'>
          <div className='w-2/3 h-8 bg-gray-200 rounded-full'></div>
          <div className='w-full h-4 bg-gray-200 rounded-full mt-8'></div>
          <div className='w-full h-4 bg-gray-200 rounded-full'></div>
          <div className='w-full h-4 bg-gray-200 rounded-full'></div>
          <div className='w-full h-4 bg-gray-200 rounded-full'></div>
          <div className='w-2/3 h-8 bg-gray-200 rounded-full mt-8'></div>
          <div className='w-full h-4 bg-gray-200 rounded-full mt-8'></div>
          <div className='w-full h-4 bg-gray-200 rounded-full'></div>
          <div className='w-full h-4 bg-gray-200 rounded-full'></div>
          <div className='w-full h-4 bg-gray-200 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductPageLoading