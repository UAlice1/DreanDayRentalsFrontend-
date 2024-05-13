import React from 'react';
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[35vh]'>
      <h1 className='text-4xl mb-8 font-sans italic sm:not-italic md:italic lg:not-italic xl:italic'>What we do</h1>
      <div className='flex items-center justify-center gap-20'>
        <div className='w-1/3'>
          <div className='relative'>
            <img src="public/images/black.jpg" alt="" className='w-64 h-full object-cover rounded-lg shadow' />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 py-2 rounded'>
              <div className='mb-2'>Consulting</div>
              <div className='text-sm text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi similique illo error iure distinctio modi et. Numquam, aut n
              </div>
              <a href='#' className='mt-2 text-blue-500 underline'>Read More</a>
            </div>
          </div>
        </div>
        <div className='w-1/3'>
          <div className='relative'>
            <img src="public/images/a9a631972e84a3a371d73507b5a00d77.jpg" alt="" className='w-64 h-full object-cover rounded-lg shadow' />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 py-2 rounded'>
              <div className='mb-2 text-black'>Consulting</div>
              <div className='text-sm text-center text-black'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi similique illo error iure distinctio modi et. Numquam, aut n
              </div>
              <a href='#' className='mt-2 text-blue-500 underline'>Read More</a>
            </div>
          </div>
        </div>
        <div className='w-1/3'>
          <div className='relative'>
            <img src="public/images/hall1.jpg" alt="" className='w-64 h-full object-cover rounded-lg shadow' />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 py-2 rounded'>
              <div className='mb-2 text-black'>Consulting</div>
              <div className='text-sm text-center text-black'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi similique illo error iure distinctio modi et. Numquam, aut n
              </div>
              <a href='#' className='mt-2 text-blue-500 underline'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
    };
export default About;