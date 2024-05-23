import React from 'react'

function About() {
  return (
<>
<div className='flex justify-center items-center h-screen'>
  <div className='p-8 md:p-12 flex flex-col md:flex-row md:items-center bg-white rounded-xl shadow-lg'>

    <div className='md:w-1/2 md:ml-8'>
      <h2 className='italic text-3xl font-bold mb-4'>About Us</h2>
      <p className='italic mb-4'>Hello! We're the Wedding Team</p>
      <p className="text-base text-gray-700 leading-normal font-serif">
        Welcome to our wedding planning service! At [Your Company Name], we specialize in creating beautiful and memorable weddings. Our dedicated team works closely with you to turn your dream wedding into reality. From intimate gatherings to grand celebrations, we handle every detail with care and precision.
        <br /><br />
        With years of experience and a passion for perfection, we ensure that your special day is everything you've ever imagined. Let us take the stress out of planning so you can enjoy every moment of your wedding journey.
        <br /><br />
        Thank you for considering us to be a part of your big day. We look forward to making your wedding unforgettable.
      </p>
    </div>
  </div>
</div>

</>
  )
}

export default About
