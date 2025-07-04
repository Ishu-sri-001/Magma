'use client';

import React, {useEffect} from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);


const About = () => {


    useEffect(() => {
    const ctx= gsap.context(() => {
        const splitText = new SplitText(".about-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      });
        gsap.to(".about-container", {
            yPercent: -30,
            scrollTrigger: {
                trigger: ".about-container",
                scrub: true,
                start: "top 80%",
                end: "bottom top",
                markers: false
            }
        })
        gsap.fromTo(splitText.chars,{
             opacity: 0.2,
        }, {
            stagger:0.1,
            // color: `#fff`,
            opacity: 1,
            scrollTrigger: {
                trigger: ".about-text",
                start: "top 90%",
                end: "70% 70%",
                scrub:true,
                // markers: true
            }
        })
    })
    return () => ctx.revert();
}, []);

  return (
    <section className='h-screen max-md:h-fit max-md:py-[25%] max-sm:h-fit max-sm:pt-[25vh] max-sm:w-screen w-full bg-primary max-sm:px-[3vw]' id='about'>
        <div className='about-container h-full w-full bg-primary flex flex-col text-white justify-center px-[10vw] max-md:pl-[5vw] max-sm:pl-0 max-sm:pr-0 max-md: max-sm:px-[4vw] '>

        
        <p className='uppercase font-body max-sm:text-[3.7vw] max-sm:text-nowrap max-sm:font-body max-sm:font-medium max-md:text-[3vw] max-sm:pl-[2vw] text-[1.3vw] font-medium'>Unlocking the World’s Largest Asset Class</p>
        <p className='font-body text-[4.2vw] max-sm:text-[9.6vw] max-sm:leading-[1.1] pt-[3vw] leading-[1.1] about-text max-md:tracking-tighter max-sm:tracking-tighter  max-sm:pl-[2vw] max-sm:pt-[8vw] max-md:text-[7.5vw]'>
            Create a Digital Twin Token (DTT®) of your existing building and release the potential of Web3.
        </p>
        </div>
    </section>
  )
}

export default About
