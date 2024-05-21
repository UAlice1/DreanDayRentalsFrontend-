import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gradient-to-t from-[#fbc2eb] fixed to-[#a6c1ee]  z-40 flex flex-col lg:flex-row items-center justify-between'>
      <div className='flex items-center justify-center lg:justify-start mb-4 lg:mb-0 bg-white'>
        <img
          src='public/images/lasttttt-removebg-preview.png'
          className='w-[15vh] h-[10vh] mt-[5vh] ml-[5vh]'
          alt="Logo"
        />
        <button
          className='block lg:hidden px-4 py-2 text-[#a6c1ee] hover:text-[#87acec]'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
        <nav className={`lg:flex lg:flex-row  lg:items-center lg:ml-[70vh] ${isOpen ? 'block' :'hidden'}`}>
          <ul className='flex flex-col lg:flex-row lg:gap-10 justify-around mr-[5vh]'>
            <li><a href='/' style={{fontWeight:500, }}  className='hover:text-gray-500 font-sans'>Home</a></li>
            <li><a href='/About' style={{fontWeight:500, }}  className='hover:text-gray-500 font-sans'>About</a></li>
            <li><a href='/Service'  style={{fontWeight:600, }}  className='hover:text-gray-500 font-sans'>Service</a></li>
            <li><a href='/Available' style={{fontWeight:600, }}  className='hover:text-gray-500 font-sans hover:underline '>Available</a></li>
            <li><a href='/Contact' style={{fontWeight:600, }}  className='hover:text-gray-500 font-sans'>Contact</a></li>
            <li><a href='/' style={{fontWeight:600, }}  className='hover:text-gray-500 font-sans'>Bookings</a></li>
            <button className='bg-[#a6c1ee] text-white  font-sans py-2 px-4 rounded hover:bg-[#87acec] ml-4 lg:ml-0'>
  <Link to="/SignUp">Register</Link>
</button>
<button className='bg-[#a6c1ee] font-sans text-white py-2 px-4 rounded hover:bg-[#87acec] ml-4 lg:ml-0'>
  <Link to="/Signin">Login</Link>
</button>
          </ul>
  
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
