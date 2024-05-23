import React from 'react'

function Gallery() {
  return (
    <div>
        <h2 italic mb-4>See Our Gallery</h2>
      <div className='flex justify-center items-center h-screen'>
       <div className='Gallery'>
        <img src="wed.png" alt="img-Gallery"/>
       </div>
       <div className='Gallery'>
        <img src="wed.png" alt="img-Gallery"/>
       </div>
       <div className='Gallery'>
        <img src="wed.png" alt="img-Gallery"/>
       </div>
       <div className='Gallery'>
        <img src="wed.png" alt="img-Gallery"/>
       </div>
       <div className='Gallery'>
        <img src="wed.png" alt="img-Gallery"/>
       </div>
      </div>
    </div>
  )
}

export default Gallery
