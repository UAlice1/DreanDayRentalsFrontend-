import React from 'react'

function Home() {
  return (
<div className="video-background bg-black flex justify-center items-center">
  <video autoPlay muted loop id="video-background" className="absolute inset-0 w-full h-full object-cover">
    <source src="/video.mp4" type="video/mp4" />
    <h2 className='wlc text-3xl text-black'>
      Welcome to Dream's Day Rentals
    </h2>
   
  </video>
  <div className="flex justify-center items-center z-40 left-0 w-full h-10vh absolute p-10">
  <h2 className="wlc text-4xl text-white">
    Welcome to wedding planner
  </h2>
  <p className="text-4xl text-white mb-4">Dream's Days Rentals</p>
</div>
</div>
  )
}

export default Home
