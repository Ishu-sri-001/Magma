'use client';

import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

const MagmaDTT = () => {

    useEffect(() => {
        const ctx= gsap.context(()=> {
            const splitText = new SplitText(".dtt-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      })

      gsap.fromTo(splitText.chars, {
            yPercent: 30,
            rotate:30,
            opacity:0,
        } , {
            yPercent: 0,
            rotate:0,
            opacity:1,
            
            scrollTrigger: {
                trigger: ".dtt-video",
                start: "50% 60%",
                end: "70% 20%",
                scrub:true,
                markers: false
            }
        })
            gsap.from(".dtt-container", {
                scrollTrigger:{
                    trigger: ".dtt-container",
                    start: 'top top',
                    end: 'bottom +500',
                    pin:true,
                    // markers:true
                }
            })
            gsap.fromTo(".dtt-video", {
                scale:2.5,
                opacity: 0.1,
                yPercent:-30,
            } , {
                yPercent: 0,    
                scale:1,
                opacity:1,
                scrollTrigger: {
                    trigger: '.dtt-video',
                    scrub: true,
                    
                    start: '50% 90%',
                    end: '70% 30%',
                    markers: false
                }
            })
        })
        return () => ctx.revert();
    })

  return (
    <div className='w-full  h-[100vh] bg-primary dtt-container overflow-hidden relative'>
        <div className='dtt-video h-full w-full'>

        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover  "
        >
        <source src="https://thisismagma.com/wp-content/themes/magma/assets/home/glass/1.webm?2" />
      </video>
          </div>
          <div className='absolute bottom-[20%] left-[30%]'>
                <h2 className='text-white text-[7vw] font-body dtt-text'>Magma DTT®</h2>
                <div className='w-full flex justify-center'>

               
                <div className='w-[15%]'>
                    <div className='py-[0.8vw] cursor-pointer  border border-gray-300 text-center rounded-[2vw] text-primary bg-white w-[10vw] font-body text-[0.9vw]'>
                        LEARN MORE
                    </div>
            </div>
             </div>
          </div>
    </div>
  )
}

export default MagmaDTT
