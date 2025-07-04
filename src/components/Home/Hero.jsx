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
            type: "words , chars",
            linesClass: "words",
            mask: "words",
      })

       gsap.fromTo(splitText.chars, {
        yPercent: 100,
        rotate:20,
       }, {
        delay:0.2,
        yPercent:-10,
        stagger: 0.02,
        rotate:0,
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
    <section className='relative h-screen max-sm:h-[100vh] w-full overflow-hidden  bg-[#0841DE]'>
         <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      >
        <source src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2" />
      </video>
      <div className='absolute max-md:top-[32%] max-md:left-[5%]  top-[47%] max-sm:left-[6%] left-[9.5%] max-sm:top-[28%]'>
        <div>
            <h1 className='w-[60%] max-md:w-[80%] font-body max-md:pt-[2vw] font-extralight hero-text  max-md:text-[10vw] max-sm:text-[50vw] max-sm:w-[90%] max-sm:pb-[3vw]'>
                Experience Real Estate Agility
            </h1>

            <div className='flex justify-start max-sm:flex-col max-md:flex-col w-[70%] max-sm:w-full pt-[2.5vw]'>
            <p className='text-white hero-para max-sm:leading-[1.8]  font-body text-[1.3vw] w-[50%] max-sm:w-full pr-0 max-md:w-[80%] max-sm:text-[4.6vw] max-md:text-[3vw]'>
                Certify your building data with the Digital Twin Token (DTT®)
            </p>
            <div className='w-[20%] max-md:w-fit max-sm:w-fit max-sm:pt-[9.6vw] max-md:pt-[10vw] pt-[0.5vw] pr-[25vw]'>
                    <div className='py-[0.4vw]  max-sm:py-[0.5vw] max-sm:px-[5vw] cursor-pointer  border border-gray-300 text-center rounded-[2vw] max-md:rounded-full text-primary bg-white w-[12vw] max-sm:w-[40vw] max-md:w-[30vw] max-sm:text-nowrap  hero-btn  max-sm:rounded-full  max-md:text-nowrap max-md:py-[2vw]'>
                        <p className='font-semibold font-body text-[0.9vw] max-md:text-[2.5vw] max-md:font-semibold max-sm:text-[3.5vw] max-sm:font-bold max-sm:py-[3.3vw]'>LEARN MORE</p>
                    </div>
            </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default hero
