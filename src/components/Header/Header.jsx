import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='fixed z-50 w-full overflow-x-hidden overflow-y-hidden top-0 flex items-center justify-between h-[13vh] px-[2vw] '>

        <div className='flex justify-between w-full items-center px-[5vw]'>

            <div className='h-auto w-[10vw]'>
                <Image src='/assets/header/header-logo.svg' height={900} width={900} className='w-full h-full object-contain' alt='navbar-logo' />
            </div>

            <div className='flex gap-[2vw] text-white'>
                <div className='p-[0.5vw] rounded-[2vw] border border-gray-400 text-[1vw] px-[1vw]'>
                    Book a demo
                </div>
                <div></div>
            </div>

        </div>
      
    </div>
  )
}

export default Header
