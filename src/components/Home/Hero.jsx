'use client'

import React, {useEffect} from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

const hero = () => {

  useEffect(() => {
    const ctx= gsap.context(() => {
         const splitText = new SplitText(".hero-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      })

       gsap.from(splitText.chars, {
        delay:0.2,
        yPercent: 90,
        stagger: 0.02,
        rotate:20,
      });
      const tl=gsap.timeline();
      tl.fromTo(".hero-btn", {
        x:'-30vw',
        y: '20vw',
        opacity: 0,
      },{
        y: '0',
        duration:0.5,
        opacity:1,
      })
      tl.fromTo(".hero-para", {
        yPercent:-50,
        opacity:0,
      }, {
        yPercent:0,
        opacity:1,
        duration:0.5
      })
      tl.fromTo(".hero-btn", {
          x: '-30vw',
          opacity:1,
      } ,{
        x:0,
        delay:-0.5,
        duration:1,
        opacity:1
      })
    })
    return () => ctx.revert();
  })

  return (
    <section className='relative h-screen w-full overflow-hidden  bg-[#0841DE]'>
         <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      >
        <source src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2" />
      </video>
      <div className='absolute  top-[40%] left-[8%]'>
        <div>
            <h1 className='w-full font-body font-extralight hero-text pb-[0.5]'>
                <span className='block'>

                Experience real
                </span>
                <span className='block pb-[0.5vw]'>

                 Estate Agility
                </span>
                
            </h1>

            <div className='flex w-full pt-[4vw]'>
            <p className='text-white hero-para  font-body text-[1.3vw] w-[50%] pr-[5vw]'>
                Unlock the $300+ trillion real estate market with the power of Digital Twin Tokens (DTT®).
            </p>
            <div className='w-[15%]'>
                    <div className='py-[0.8vw] cursor-pointer  border border-gray-300 text-center rounded-[2vw] text-primary bg-white w-[10vw] font-body text-[0.9vw] hero-btn'>
                        LEARN MORE
                    </div>
            </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default hero
