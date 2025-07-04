'use client';

import React, {useEffect} from 'react'
import useMobile from '@/components/Home/isMobile'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);


const Feature = () => {

    const isMobile = useMobile();

    
    useEffect(() => {
    const ctx= gsap.context(() => {
        const splitText = new SplitText(".feature-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      });
        // gsap.to(".feature-container", {
        //     yPercent: -30,
        //     scrollTrigger: {
        //         trigger: ".feature-container",
        //         scrub: true,
        //         start: "top 80%",
        //         end: "bottom top",
        //         markers: false
        //     }
        // })
        gsap.fromTo(splitText.chars, {
            opacity:0.2,
        } , {
            opacity:1,
            stagger:0.2,
            
            scrollTrigger: {
                trigger: "#feature",
                start: "20% 50%",
                end: "80% 50%",
                scrub:true,
                markers: false
            }
        })
    })
    return () => ctx.revert();
}, []);

  return (
    <section className='h-fit py-[10vh] relative z-[80] max-md:h-[70vh] max-sm:h-fit  max-sm:w-screen max-sm:px-[1.5vw]  max-sm:bg-[#0D36C5] w-full bg-primary' id='feature'>
        <div className='feature-container h-full w-full bg-primary flex flex-col text-white justify-center max-md:px-[5vw] max-md:leading-[1.1] max-sm:px-[4vw] px-[10vw] '>

        
        <p className='uppercase text-[1.2vw] font-body max-sm:text-[4vw] max-md:text-[3vw]'>Maximizing building value</p>
        <p className='font-body tracking-tight text-[4.2vw] pt-[3vw] leading-[1.2] max-sm:pt-[8vw] max-sm:text-[9.5vw] max-sm:leading-[1.1] max-sm:tracking-tighter max-md:tracking-tighter feature-text max-md:text-[8vw]'>
            The DTT® lowers operational costs, improves energy use, facilitates commercialization, and ultimately increases the value of the building
        </p>
        </div>
    </section>
  )
}

export default Feature
