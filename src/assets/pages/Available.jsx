import React from 'react'

export default function Available() {
  return (
    <>
<div className='Available flex flex-col items-center justify-center'>
  <p className='text-3xl mt-10 font-sans italic'>Our available halls</p>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between'>
      <img className='w-full h-64 object-cover' src='./images/hall1.jpg' alt='Hall 1' />
      <div className='p-4 flex-grow'>
        <span className='block text-gray-600 mb-2'>Location: Kigali</span>
        <span className='block text-gray-600 mb-2'>Price: Rwf</span>
        <a href='#' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
    {/* Repeat the card for each hall */}
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between'>
      <img className='w-full h-64 object-cover' src='./images/hall2.jpg' alt='Hall 2' />
      <div className='p-4 flex-grow'>
        <span className='block text-gray-600 mb-2'>Location: Nairobi</span>
        <span className='block text-gray-600 mb-2'>Price: KSH</span>
        <a href='#' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between'>
      <img className='w-full h-64 object-cover' src='./images/hall3.jpg' alt='Hall 3' />
      <div className='p-4 flex-grow'>
        <span className='block text-gray-600 mb-2'>Location: Dar es Salaam</span>
        <span className='block text-gray-600 mb-2'>Price: TZS</span>
        <a href='#' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
    
    {/* Add more cards as needed */}
  </div>
</div>
    </>

  )
}

