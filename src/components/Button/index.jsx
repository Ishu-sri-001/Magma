import React from 'react';
import Image from 'next/image';

const Button = () => {
  return (
    <div>
      <button className='group rounded-full w-fit px-[1.5vw] py-[0.5vw] bg-white border border-[#0A3CCE] cursor-pointer transition-all btn duration-300 ease-in-out transform hover:scale-105 overflow-hidden flex'>
        <p className='text-primary text-[1vw] pr-[1vw]'>View all</p>
        <div className='relative h-[1.5vw] overflow-hidden  w-[1.5vw] flex items-center justify-center mt-[0.3vw]'>
             
        
          <div className='absolute inset-0 flex items-center justify-center translate-x-0 group-hover:translate-x-[280%] duration-300 ease-in-out '>
            
            <Image 
              src='/assets/Button/arrow.svg' 
              width={15} 
              height={15} 
              alt='Arrow up' 
              className='w-full h-full'
            />
          </div>
          

          <div className='absolute inset-0 flex items-center justify-center translate-x-[-250%] group-hover:translate-x-0 duration-300 ease-in-out'>

            <Image 
              src='/assets/Button/arrow.svg' 
              width={15} 
              height={15} 
              alt='Arrow down' 
              className='w-full h-full'
            />
          </div>
        </div>
      </button>
    </div>
  )
}

export default Button;