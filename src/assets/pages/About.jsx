import React from 'react'

function About() {
  return (
<div className='flex items-center justify-center py-48'>
  <div className='p-8 md:p-12 flex flex-col md:flex-row md:items-center bg-white rounded-xl shadow-lg'>
    <div className="md:mr-8">
      <img className='rounded-lg md:rounded-xl' src="./images/wed.png" alt="Wedding Team" />
    </div>
    <div className='md:ml-8'>
      <h2 className='font-italic text-3xl font-bold mb-4'>About Us</h2>
      <p className='font-italic mb-4'>Hello! We're the Wedding Team</p>
      <p className="text-base text-gray-700 leading-normal font-serif">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cum veniam architecto 
        <br />perferendis nulla repellendus natus, quos temporibus 
        <br />fuga corrupti est voluptatum repudiandae sit unde eligendi officia saepe quod tempora.
      </p>
    </div>
  </div>
</div>
  )
}

export default About
