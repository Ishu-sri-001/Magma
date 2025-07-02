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
    <footer className='w-full h-fit py-[4vw] bg-[#0F0F17] footer-container'>
      
        <div className='pl-[8vw]'>
            <h2 className='text-[6.5vw] font-body font-medium featured-text text-white leading-[1] footer-text'>
                <span className='block'>

                Become an
                </span>
                <span className='block'>

                 early adopter
                </span>
            </h2>

            <div className='rounded-[2vw] bg-primary w-fit py-[0.7vw] px-[2vw] mt-[4vw] cursor-pointer footer-btn'>
            <p className='text-white font-body uppercase text-[1vw]'>

            Book a demo
            </p>
        </div>


        </div>


         <div className='pt-[4vw]'>

            {socials.map((social,idx) => (
                <div key={idx} className='flex justify-between py-[2vw] w-full cursor-pointer origin-center footer-links px-[8vw] z-0 '>
                    <p className='text-white text-[2.5vw] z-[2]'> {social}</p>
                    <p className=''> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                        </svg>
                    </p>
                    </div>
            ))}

        </div>

        
    <div className='flex justify-between py-[5vw] px-[8vw]'>

        <div className='flex gap-[10vw]'>
            <div className='flex flex-col text-[1vw] text-white space-y-[1vw] font-body'>
                <p className='cursor-pointer link'>MISSION</p>
                <p className='cursor-pointer link'>PRODUCT</p>
                <p className='cursor-pointer link'>BLOG</p>
                <p className='cursor-pointer link'>FAQ</p>

            </div >
            <div className='text-white flex flex-col text-[1vw] space-y-[1vw] font-body'>
                <p className='cursor-pointer link'>PRIVACY POLICY</p>
                <p className='cursor-pointer link '>CONTACT</p>
                <p className='cursor-pointer link'>TERMS</p>
            </div>
            </div>
        <div>

            

            </div>

            <div className='pr-[4vw] relative'>

             <h3 className="text-white font-body pb-[1.5vw] text-[2vw] font-medium">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 bg-transparent  text-white placeholder-gray-400 py-2 pr-4 "
            />
            <button className="ml-4 text-gray-400 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className='w-[17vw] h-[0.1vw] bg-gray-600 absolute bottom-[22%]' />

          
            </div>
            
    </div>
    <div className='px-[8vw]'>
        <p className='py-[3vw] font-body text-[1vw] text-white'>
                © 2025 by MAGMA
            </p>
    </div>
        
      
    </footer>
  )
}

export default Footer
