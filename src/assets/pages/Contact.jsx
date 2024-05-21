import React from 'react';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

function Contact() {
  return (
    <div className='max-w-3xl w-full mx-auto p-16 bg-white rounded-lg shadow-md'>
      <h2 className='text-3xl text-center text-gray-800 font-bold mb-6'>Contact Us</h2>
      <form action="">
        <div className='mb-4'>
          <label className='flex items-center text-gray-800 text-sm font-semibold mb-2' htmlFor="name">
            <FiUser className='mr-2'/>
            Your Name
          </label>
          <input
            placeholder=''
            className='w-full px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500'
            required
            type="text"
            id="name"
          />
        </div>
        <div className='mb-4'>
          <label className='flex items-center text-gray-800 text-sm font-semibold mb-2' htmlFor="email">
            <FiMail className='mr-2'/>
            Your Email
          </label>
          <input
            placeholder='nina@gmail.com'
            className='w-full px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500'
            required
            type="email"
            id="email"
          />
        </div>
        <div className='mb-4'>
          <label className='flex items-start text-gray-800 text-sm font-semibold mb-2' htmlFor="message">
            <FiMessageSquare className='mr-2 mt-1.5' />
            Message
          </label>
          <textarea
            placeholder=''
            className='w-full px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500'
            required
            rows={4}
            id="message"
          />
        </div>
        <div className='flex justify-center'>
          <button className='bg-[#7596ce] hover:bg-[#7596ce] text-white font-semibold py-2 px-4 rounded-lg'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;