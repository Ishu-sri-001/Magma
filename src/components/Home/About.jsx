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
            stagger:0.2,
            // color: `#fff`,
            opacity: 1,
            scrollTrigger: {
                trigger: ".about-text",
                start: "top 90%",
                end: "70% 50%",
                scrub:true,
                // markers: true
            }
        })
    })
    return () => ctx.revert();
}, []);

  return (
    <section className='h-screen w-full bg-primary ' id='about'>
        <div className='about-container h-full w-full bg-primary flex flex-col text-white justify-center px-[7%]'>

        
        <p className='uppercase font-body'>Unlocking the World’s Largest Asset Class</p>
        <p className='font-body text-[4vw] pt-[3vw] leading-[1.2] about-text  '>
            Real estate, a $300Tn market, faces inefficiencies and environmental challenges. Magma’s AI-driven platform leverages DePIN and tokenization to connect buildings with Web3.
        </p>
        </div>
    </section>
  )
}

export default About
