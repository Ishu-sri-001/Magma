'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import UseMobile from '../Home/isMobile';

const MobileHeader = () => {
    const isMobile= UseMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const menuItems = ["Product", "Mission", "Blog", "Events", "FAQ", "Contact"];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  if(!isMobile)
  {
    return null;
  }

  return (
    <>
     
      <div className='fixed z-52 w-full top-0 flex items-center justify-between h-[10vh] px-[4vw] '>
        
        
        <div className='h-auto w-[12vw]'>
          <Image 
            src='/assets/header/magma-logo.png' 
            height={900} 
            width={900} 
            className='w-full h-full object-contain' 
            alt='navbar-logo' 
          />
        </div>

        
        
        
        <button 
          className={`p-[2vw] rounded-full border border-white/50 py-[2.5vw] px-[6vw] hover:bg-white hover:bg-opacity-10 transition-colors duration-200 ${isSidebarOpen ? 'bg-primary' : ''}`}
          onClick={toggleSidebar}
        >
          <div className='flex flex-col w-[4.5vw] h-[3.5vw] justify-between z-52'>
            <span className={`w-full opacity-50 h-[0.5vw] bg-white transition-all duration-300 ${isSidebarOpen ? 'transform rotate-45 translate-x-[1vw] translate-y-[1.7vw]' : ''}`}></span>
            {/* <span className={`w-full h-[0.5vw] bg-white transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}></span> */}
            <span className={`w-full h-[0.5vw] bg-white opacity-50 transition-all duration-300 ${isSidebarOpen ? 'transform -rotate-45 translate-x-[1vw] -translate-y-[1.7vw]' : ''}`}></span>
          </div>
        </button>
      </div>

     
      <div 
        className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40 transition-all duration-300 ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeSidebar}
      />

    
      <div className={`fixed top-0 right-0 origin-right w-screen h-screen bg-white z-50 transform transition-transform duration-700 flex flex-col ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
       
        <div className='bg-white text-black flex justify-between items-center h-[10vh] px-[4vw]'>
          
          <div className='flex w-full items-start justify-center gap-[10vw]'>

         
          <div className='text-primary pl-[20vw] gap-[2vw] text-white text-[5vw]'>
          <span>🌐</span>
          <span>FR</span>
        </div>

         
           </div>
        </div>
        
    
        <div className='flex-1 p-[8vw] flex flex-col justify-center gap-[6vw]'>
         <ul className="list-none flex flex-col gap-[1.5vw] pt-[5vw]">
  {menuItems.map((item, idx) => (
    <li
      key={idx}
      className="text-[10vw] font-body font-medium text-black cursor-pointer hover:text-blue-600 transition-colors duration-200"
      onClick={closeSidebar}
    >
      {item}
    </li>
  ))}
</ul>
        </div>
      </div>


    </>
  )
}

export default MobileHeader