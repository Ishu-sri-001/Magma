'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import UseMobile from '../Home/isMobile'

const Header = () => {
    const isMobile = UseMobile();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = ["Product", "Mission", "Blog", "Events", "FAQ", "Contact"];

    const socials= ['𝕏','LinkedIn', 'Instagram', 'Telegram', 'Youtube'];


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    if(isMobile) {
        return null;
    }

    return (
        <>
            <div className='fixed z-52 w-full overflow-x-hidden overflow-y-hidden top-0 flex items-center justify-between max-md:h-[10vh] h-[13vh] px-[2vw] '>
                <div className='flex justify-between w-full items-center px-[2vw]'>
                    <div className='h-auto w-[4.2vw] max-md:w-[7.3vw] max-sm:w-[9vw]'>
                        <Image src='/assets/header/magma-logo.webp' height={900} width={900} className='w-full h-full object-contain ' alt='navbar-logo' />
                    </div>

                    <div className='flex gap-[1vw] max-md:gap-[3vw] text-white items-center z-50'>
                        <div className={`p-[0.5vw] max-md:text-[2vw] max-md:px-[3vw] max-md:py-[1vw] max-md:rounded-full rounded-[2vw] border border-white/40 font-body text-[1vw] px-[1.5vw] z-50 ${isSidebarOpen ? 'hidden' : ''}`}>
                            Book a Demo
                        </div>
                        
                        {/* Hamburger Button */}
                        <button 
                            className={`p-[0.5vw] z-52 rounded-full border border-white/40 py-[0.7vw] px-[1.5vw] max-md:px-[3.5vw] max-md:py-[2vw] cursor-pointer hover:bg-opacity-10 transition-colors duration-200 ${isSidebarOpen ? 'bg-primary' : ''}`}
                            onClick={toggleSidebar}
                            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
                        >
                            <div className='flex flex-col w-[1.2vw] h-[1vw] max-md:h-[1.5vw] max-md:w-[2vw] justify-between'>
                                <span className={`w-full h-[0.1vw] bg-white transition-all  duration-300 ${isSidebarOpen ? 'transform rotate-45 translate-y-[0.4vw]' : ''}`}></span>
                                {/* <span className={`w-full h-[0.1vw] bg-white transition-all opacity-50 duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}></span> */}
                                <span className={`w-full h-[0.1vw] bg-white transition-all duration-300 ${isSidebarOpen ? 'transform -rotate-45 -translate-y-[0.4vw]' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            <div 
                className={`fixed top-0 left-0 w-screen h-screen bg-black/40 bg-opacity-50 z-40 transition-all duration-300 ${
                    isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={closeSidebar}
            />

            {/* Sidebar  */}
            <div className={`fixed top-0 right-0 origin-right w-[40%] max-md:w-full h-screen bg-white z-51 transform transition-transform duration-700 flex flex-col  ${
                isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className='flex max-md:justify-between'>
                <div className='flex-1 max-md:pl-[10vw] pl-[4vw] flex flex-col justify-start max-md:pt-[25vh] max-md:h-full'>
                    <ul className="list-none flex flex-col gap-[0.3vw] max-md:gap-0">
                        {menuItems.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-[4.2vw] max-md:text-[10vw] font-body font-medium text-black cursor-pointer hover:text-blue-600 transition-colors duration-200"
                                onClick={closeSidebar}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='bg-white text-black flex justify-between items-center max-md:pb-[3vw] h-[13vh] pr-[10vw] max-md:pr-[20vw]'>
                    <div className='flex w-full items-center justify-center'>
                        <div className='text-primary  flex items-center gap-[1vw] text-[1vw] max-md:text-[3vw]'>
                            <span>🌐</span>
                            <span>FR</span>
                        </div>
                    </div>
                </div>
                 </div>

                 <div className='flex gap-[1.5vw] max-md:gap-[4vw] max-md:pt-[8vw] px-[5vw] pt-[3.5vw] max-md:pl-[10vw] pb-[4vw] max-md:pb-[1vw]'>
                    {socials.map((social,idx) => (
                        <div key={idx} className='cursor-pointer '>
                            <p className='text-[1vw] head-link max-md:text-[2.5vw]'>
                            {social}
                            </p>
                        </div>
                    ))}
                 </div>
            </div>
        </>
    )
}

export default Header