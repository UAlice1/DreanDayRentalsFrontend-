import React, { useState } from 'react';
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdPhoneCallback } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

function Contact() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <div>
      <div className='flex flex-row justify-center bg-gray-100 h-[15vh] w-full justify-around'>
        <h1 className='mr-[5vh] text-[5vh]'>Contact </h1>
        <ul>
          <li><a href=''>Home</a></li>
        </ul>
        <h1>Contact Us</h1>
      </div><br/>
      <div className='flex flex-row justify-center justify-around '>
        <div
          className={`bg-white mr-[5vh] flex flex-col contact-item w-[50vh] h-[40vh] border-[0.5px] border-[gray-200] ${selected === 0 ? 'selected' : ''}`}
          onClick={() => handleSelect(0)}
        >
          <i className='text-[5vh] text-[#a6c1ee] ml-[20vh] mt-[10vh]'><FaUsersViewfinder/></i><br/>
          <h1 className='ml-[20vh]'>Find Us</h1>
          <p className='ml-[10vh]'>2404 Redwood Ct, Auburn<br/>
            <span className='ml-[10vh]'>WA 98092, USA</span></p>
        </div>
        <div
          className={`bg-white mr-[5vh] flex flex-col contact-item w-[50vh] h-[40vh] border-[0.5px] border-[gray-200]${selected === 1 ? 'selected' : ''}`}
          onClick={() => handleSelect(1)}
        >
          <i className='text-[5vh] text-[#a6c1ee]  ml-[20vh] mt-[10vh]'><MdPhoneCallback/></i><br/>
          <h1 className='ml-[20vh]'>Find Us</h1>
          <p className='ml-[8vh]'>2404 Redwood Ct, Auburn<br/>
            <span className='ml-[10vh]'>WA 98092, USA</span></p>
        </div>
        <div
          className={`bg-white mr-[5vh] flex flex-col contact-item w-[50vh] h-[40vh] border-[0.5px] border-[gray-200] ${selected === 2 ? 'selected' : ''}`}
          onClick={() => handleSelect(2)}
        >
          <i className='text-[5vh] text-[#a6c1ee]  ml-[20vh] mt-[10vh]'><HiOutlineMailOpen/></i><br/>
          <h1 className='ml-[20vh]'>Find Us</h1>
          <p className='ml-[10vh]'>2404 Redwood Ct, Auburn<br/>
            <span className='ml-[9vh]'>WA 98092, USA</span></p>
        </div>
      </div>
      <div>
        <form></form>
      </div>
    </div>
  );
}

export default Contact;
