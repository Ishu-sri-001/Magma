import React from 'react';
import Image from 'next/image';

const Button = () => {
  return (
    <div>
      <button className='group rounded-full w-fit px-[1.5vw] py-[0.5vw] max-sm:py-[1.5vw] max-sm:px-[5vw] max-md:px-[4vw] bg-white border border-[#0A3CCE] cursor-pointer transition-all btn duration-300 ease-in-out transform hover:scale-105 overflow-hidden flex max-sm:gap-[4vw] max-sm:justify-between'>
        <p className='text-primary text-[1vw] max-sm:py-0 max-md:py-[1vw] max-sm:text-[3.7vw] max-md:text-[2vw] max-md:px-[3vw] pr-[1vw]'>View all</p>
        <div className='relative h-[1.5vw] max-sm:h-[4vw]  max-md:h-[4vw] max-md:w-[4vw] max-sm:w-[4vw] overflow-hidden  w-[1.5vw] flex items-center justify-center mt-[0.3vw] max-sm:mt-[1.5vw] max-md:mt-[1vw]'>
             
        
          <div className='absolute inset-0 flex items-center justify-center translate-x-0 group-hover:translate-x-[280%] duration-300 ease-in-out '>
            
            <Image 
              loading="lazy"
              src='/assets/Button/arrow.svg' 
              width={900} 
              height={900} 
              alt='Arrow up' 
              className='w-full h-full'
            />
          </div>
          

          <div className='absolute inset-0 flex items-center justify-center translate-x-[-250%] group-hover:translate-x-0 duration-300 ease-in-out'>

            <Image 
              src='/assets/Button/arrow.svg' 
              width={900} 
              height={900} 
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