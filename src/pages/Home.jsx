import React from 'react';
import About  from '../assets/pages/About';
import Service from '../assets/pages/Service';


function Home() {
  return (
    <div>
<div className="video-background bg-black/75 flex justify-center items-center z-0">
      <video autoPlay muted loop id="video-background" className="absolute inset-0 w-full h-full object-cover">
        <source src="/video.mp4" type="video/mp4" />
        <div className="text-center text-white flex justify-center place-content-center">
          <h2 className='wlc text-3xl'>
            Welcome to Dream's Day Rentals
          </h2>
        </div>
      </video>
      <div className="flex place-content-center z-40 w-full p-10 mt-[25vh] ">
        <div className="text-center">
          <h2 className="wlc text-4xl text-black text-[10vh]">
            Welcome to wedding planner
          </h2><br/><br/>
          <p className="text-4xl text-black mb-10 text-[10vh]">Dream Days Rentals</p>
        </div>
      </div>
    </div>
    <About/>
    <Service/>
    
    </div>
  

  )
}

export default Home
