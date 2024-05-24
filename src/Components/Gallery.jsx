import React from 'react'

function Gallery() {
  return (
    <div>
  <div>
    <h2 className='text-3xl mt-10 font-sans italic text-center'>See Our Gallery</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      <div className='Gallery'>
        <img className='w-full h-auto rounded-lg' src="public/images/des9.jpg" alt="img-Gallery" />
      </div>
      <div className='Gallery'>
        <img className='w-full h-auto rounded-lg' src="public/images/des9.jpg" alt="img-Gallery" />
      </div>
      <div className='Gallery'>
        <img className='w-full h-auto rounded-lg' src="public/images/des9.jpg" alt="img-Gallery" />
      </div>
      <div className='Gallery'>
        <img className='w-full h-auto rounded-lg' src="public/images/des9.jpg" alt="img-Gallery" />
      </div>
    </div>
  </div>
</div>
  )
}

export default Gallery
