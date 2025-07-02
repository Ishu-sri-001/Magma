'use client';

import React, {useEffect} from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);


const Feature = () => {


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
    <section className='h-screen w-full bg-primary' id='feature'>
        <div className='feature-container h-full w-full bg-primary flex flex-col text-white justify-center px-[7%]'>

        
        <p className='uppercase font-body'>Maximizing building value</p>
        <p className='font-body text-[4vw] pt-[3vw] leading-[1.2] feature-text '>
            The DTT® lowers operational costs, improves energy use, facilitates commercialization, and ultimately increases the value of the building
        </p>
        </div>
    </section>
  )
}

export default Feature
