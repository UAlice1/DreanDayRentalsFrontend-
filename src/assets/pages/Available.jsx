import React from 'react'
function Footer() {
  return (
    <div>
      <div className='Available flex flex-col items-center'>
  <p className='text-3xl mt-10 font-sans italic'>Our available halls</p>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between ml-[5vh]'>
      <img className='w-full h-94 w-[80vh] object-cover' src='public/images/des8.jpg' alt='Hall 3' />
      <div className='p-4 flex-grow'>
        <a href='#' className='bg-[#A6C1EE] hover:bg-[#A6C1EE] text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between mr-[5vh]'>
      <img className='w-full h-[90vh] w-[80vh] object-cover' src='public/images/des3.jpg' alt='Hall 3' />
      <div className='p-4 flex-grow'>
        <a href='#' className='bg-[#A6C1EE] hover:bg-[#A6C1EE] text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between mr-[5vh]'>
      <img className='w-full h-[90vh] w-[80vh] object-cover' src='public/images/des4.jpg' alt='Hall 3' />
      <div className='p-4 flex-grow'>
        <a href='#' className='bg-[#A6C1EE] hover:bg-[#A6C1EE] text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
  </div>
</div><br/>
<div className='Available flex flex-col items-center'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between ml-[5vh]'>
      <img className='w-full h-94 w-[80vh] object-cover' src='public/images/des6.jpg' alt='Hall 3' />
      <div className='p-4 flex-grow'>
        <a href='#' className='bg-[#A6C1EE] hover:bg-[#A6C1EE] text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between mr-[5vh]'>
      <img className='w-full h-94 w-[80vh] object-cover' src='public/images/des4.jpg' alt='Hall 3' />
      <div className='p-4 flex-grow'>
        <a href='#' className='bg-[#A6C1EE] hover:bg-[#A6C1EE] text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
    <div className='card1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between mr-[5vh]'>
      <img className='w-full h-94 w-[80vh] object-cover' src='public/images/des5.jpg' alt='Hall 3' />
      <div className='p-4 flex-grow'>
        <a href='#' className='bg-[#A6C1EE] hover:bg-[#A6C1EE] text-white font-bold py-2 px-4 rounded block text-center'>Book Now</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
export default Footer

