
import React from 'react'

function Contact() {
  return (
    <div className='max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md'>
      <h2 className='text-3xl text-center text-pink-600 font-bold mb-6'>Contact Us</h2>
      <form action="">
        <div className='mb-4'>
          <label className='block text-white text-sm font-semibold mb-2' htmlfor="">your Name</label>
            <input placeholder='' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text"/>
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-semibold mb-2' htmlfor="">your Email</label>
            <input placeholder='nina@gmail.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="email"/>
        </div>
        <div className='mb-4'> 
          <label className='block text-white text-sm font-semibold mb-2'  htmlfor=""></label>
            <input placeholder='' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text"/>
        </div>
      </form>
    </div>
  )
}

export default Contact
