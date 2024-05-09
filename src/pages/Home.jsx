import React from 'react'

function Home() {
  return (
<div className="video-background bg-black flex justify-center items-center">
  <video autoPlay muted loop id="video-background" className="absolute inset-0 w-full h-full object-cover">
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="content text-center">
    <h2 className='wlc text-3xl text-white'>
      Welcome to Dream's Day Rentals
    </h2>
  </div>
</div>
  )
}

export default Home
