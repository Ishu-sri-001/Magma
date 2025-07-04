'use client';
import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);


const Footer = () => {

  useEffect(() => {
        const ctx = gsap.context(() => {
            const splitText = new SplitText(".footer-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      })

       gsap.from(splitText.chars, {
        yPercent: 100,
        stagger: 0.02,
        rotate:20,
        scrollTrigger: {
          trigger: ".footer-container",
          start: "10% 80%",
        //  markers: true,
          
        },
      })

      gsap.fromTo('.footer-btn', {
            yPercent: 70,
           
            opacity:0,
        } , {
            yPercent: 0,
          
            opacity:1,
            duration: 1,
            stagger: 0.5,
            
            scrollTrigger: {
                trigger: ".footer-container",
                start: "10% 80%",
                // scrub:true,
                end: "70% 20%",
                
                // markers: true
            }
        })
        });

        return () => ctx.revert();
    }, []);

    const socials= ['𝕏','LinkedIn', 'Instagram', 'Telegram', 'Youtube'];

  return (
    <footer className='w-full h-fit max-sm:pt-[16vh] max-md:pt-[12vh] py-[7vw] bg-[#0F0F17] footer-container max-sm:pb-[5vh] max-md:py-[10vw]'>
      
        <div className='pl-[10vw] max-md:pl-[4vw] max-sm:pl-[4vw]'>
            <h2 className='text-[6.5vw] font-body font-medium featured-text text-white leading-[1] footer-text max-sm:text-[15vw] max-sm:leading-[1] max-md:text-[10vw]'>
                <span className='block'>

                Become an
                </span>
                <span className='block'>

                 early adopter
                </span>
            </h2>

            <div className='rounded-[2vw] mb-[7vw] max-md:rounded-full max-sm:rounded-full bg-primary w-fit py-[0.7vw] px-[2vw] max-sm:mb-[15vw] max-sm:py-[3.5vw] max-sm:px-[10vw] max-md:px-[6vw] max-md:py-[2vw] mt-[4vw] cursor-pointer footer-btn max-md:mt-[8vw]'>
            <p className='text-white font-semibold max-sm:text-[3.5vw] font-body uppercase text-[1vw] max-md:text-[2.5vw] '>

            Book a demo
            </p>
        </div>


        </div>


         <div className='pt-[2vw] max-sm:pt-0 max-md:pt-[8vw]'>

            {socials.map((social,idx) => (
                <div key={idx} className='flex  justify-between py-[2vw] max-sm:py-[5vw] w-full cursor-pointer origin-center footer-links px-[8.5vw] z-0 max-md:px-[4vw] max-md:py-[4.5vw] max-sm:px-[5vw] border-t border-b border-gray-800'>
                    <p className='text-white text-[2.5vw] z-[2] max-sm:text-[4.5vw] max-md:text-[3.5vw]'> {social}</p>
                    <p className='z-[2] max-sm:h-[8vw] max-sm:w-[8vw]'> 
                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
                    </p>
                    </div>
            ))}

        </div>

        
    <div className='flex max-md:flex-col justify-between py-[5vw] max-sm:py-[10vw] px-[8vw] max-sm:px-0 max-md:px-[4vw]'>

        <div className='flex max-md:mt-[3vw] max-sm:justify-between max-md:justify-between max-md:pr-[15vw] max-sm:pr-[25vw] gap-[10vw]'>
            <div className='flex flex-col max-sm:pl-[5vw] text-[1vw] max-sm:text-[4vw] text-white space-y-[1vw] max-md:space-y-[2vw] max-md:text-[2.5vw] font-body max-sm:space-y-[3vw]'>
                <p className='cursor-pointer link'>MISSION</p>
                <p className='cursor-pointer link'>PRODUCT</p>
                <p className='cursor-pointer link'>BLOG</p>
                <p className='cursor-pointer link'>FAQ</p>

            </div >
            <div className='text-white flex flex-col text-[1vw] space-y-[1vw] font-body max-sm:text-[4vw] max-sm:space-y-[3vw] max-md:text-[2.5vw]'>
                <p className='cursor-pointer link'>PRIVACY POLICY</p>
                <p className='cursor-pointer link '>CONTACT</p>
                <p className='cursor-pointer link'>TERMS</p>
            </div>
            </div>
        <div>

            

            </div>

            <div className='pr-[4vw] max-sm:pl-[5vw]  relative'>

             <h3 className="text-white font-body pb-[1.5vw] text-[2vw] font-medium max-sm:text-[5.5vw] max-sm:pb-[7vw] max-sm:pt-[14vw] max-md:pt-[10vw] max-md:text-[4vw]">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 bg-transparent max-md:placeholder-white  text-white placeholder-gray-400 py-2 pr-4 "
            />
            <button className="ml-4 text-gray-400 hover:text-white transition-colors"  aria-label="Go back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className='w-[17vw] max-md:w-[88vw] max-md:bottom-0 max-sm:w-[80vw] max-sm:bottom-0 h-[0.1vw] bg-gray-600 absolute bottom-[22%]' />

          
            </div>
            
    </div>
    <div className='px-[8vw] max-md:px-[4vw]'>
        <p className='py-[3vw] max-sm:pt-[5vw] max-md:pt-[8vw] font-body text-[1vw] max-sm:text-[4vw] text-white max-md:text-[2.5vw] max-md:text-gray-500'>
                © 2025 by MAGMA
            </p>
    </div>
        
      
    </footer>
  )
}

export default Footer
