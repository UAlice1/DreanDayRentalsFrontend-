import React from 'react'

function About() {
  return (
<div className='flex items-center justify-center p-36 mt-32'>
  <div className='p-8 md:p-12 flex flex-col md:flex-row md:items-center bg-white rounded-xl shadow-lg'>
    <div className="md:mr-8">
      <img className='rounded-lg md:rounded-xl' src="./images/wed.png" alt="Wedding Team" />
    </div>
    <div className='md:ml-8'>
      <h2 className='italic text-3xl font-bold mb-4'>About Us</h2>
      <p className='italic mb-4'>Hello! We're the Wedding Team</p>
      <p className="text-base text-gray-700 leading-normal font-serif">
      We are a group of wedding planners who love making your special day perfect.
  Whether you want a small, intimate wedding or a big celebration, we take care of everything.
  Our services include finding the right venue, <br />designing the theme, coordinating with vendors, and managing the day itself.
  We’re here to make your <br />wedding beautiful and stress-free, reflecting your unique love story.
  Let us help you create unforgettable memories.
      </p>
    </div>
  </div>
</div>
  )
}

export default About
