'use client'

import React, {useEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const MagmaInsights = () => {

    useEffect(() => {
        const ctx= gsap.context(()=> {
            const splitText = new SplitText(".insights-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      })
   
       gsap.from(splitText.chars, {
        yPercent: 100,
        stagger: 0.02,
        rotate:20,
        scrollTrigger: {
          trigger: ".insights-container",
          start: "30% 70%",
        //   end: "50% 30%",
        //   scrub:true,
        //   markers: true,
          
        },
      })
        gsap.fromTo('.para-container', {
            yPercent: 30,
            // rotate:30,
            opacity:0,
        } , {
            yPercent: 0,
            // rotate:0,
            opacity:1,
            duration: 1,
            stagger: 0.5,
            
            scrollTrigger: {
                trigger: ".insights-para-container",
                start: "20% 80%",
                // scrub: true,
                end: "70% 20%",
                
                markers: false
            }
        })
      })
        return () => ctx.revert();
    })

  return (
    <div className='h-fit py-[5vw] max-md:pb-[15vw] max-sm:pt-[10vh] max-sm:py-[20vw] w-full bg-gradient-to-b from-[#0A3CCE] to-[#02268E] pt-[15%] max-sm:pl-[2vw] pl-[5vw] pr-[2vw] max-sm:px-[3vw] insights-container'>
        <div className='flex max-sm:flex-col max-md:flex-col w-full gap-[5vw] justify-center'>
            <h2 className='text-white max-sm:py-[3vh] text-[7vw] font-body dtt-text leading-[1] max-md:text-[11vw] insights-text max-sm:text-[16vw] max-sm:mx-[4vw]'>
                <span className='block'>

                What is 
                </span>
                <span className='block pb-[1vw]'>Magma
                    </span>
            </h2>
            <div className='h-[32vw] w-fit max-sm:px-0 max-sm:w-full  max-sm:h-[55vw] max-md:h-[60vw] '>
                <Image src='/assets/insights/intro.jpeg' width={900} height={900} className='w-full h-full rounded-[1vw] object-cover max-md:rounded-[4vw] max-sm:rounded-[5vw]' alt='intro' />
            </div>
            
        </div>

        <div className='text-white w-full flex justify-start'>
            <div className='w-[25%] max-sm:w-0 max-md:w-0'>

            </div>
            <div className='w-[70%] max-sm:pl-0 pl-[9vw] max-md:pl-0 max-sm:pb-[15vw] pt-[4.7vw] max-md:pt-[5vw] pr-0 flex flex-col gap-[3vw] insights-para-container max-sm:w-full max-md:w-full'>

                <div className='para-container max-sm:px-[3vw] max-md:pt-[6vw] max-sm:pt-[8vw] '>

                
                <p className='text-[1.6vw] max-md:pt-[4vw] max-sm:text-[5.9vw] font-body font-semibold tracking-tight max-sm:tracking-tight pb-[0.7vw] max-md:text-[3.7vw]'>
                    The Future of Real Estate Starts Here
                </p>

                <p className='text-[1.7vw] font-medium max-sm:font-extralight font-body max-sm:text-[5.7vw] max-sm:pt-[3vw] max-md:text-[4vw] opacity-80 '>
                    Magma is reshaping the real estate landscape through the power of blockchain, AI, and decentralized infrastructure. At the heart of our platform is the Digital Twin Token (DTT®️), a groundbreaking digital asset backed by property data, unlocking unprecedented levels of transparency, efficiency, and sustainability.
                </p>
                </div>
                <div className='para-container max-sm:px-[3vw] max-sm:pt-[10vw] '>


                <p className='text-[1.8vw] max-md:pt-[7vw] max-sm:text-[5.9vw] font-body font-semibold pb-[0.7vw] max-md:text-[3.7vw] max-sm:leading-[1.2] tracking-tight'>
                    Transforming the World’s Largest Asset Class
                </p>

                <p className='text-[1.7vw] font-medium max-sm:font-extralight font-body opacity-80 max-sm:text-[5.7vw] max-sm:pt-[3vw] max-md:text-[4vw]'>
                    Real estate, the world’s largest asset class with over $300 trillion in value, has long faced challenges—data asymmetry, inefficiencies, and environmental impact. Magma solves these problems by digitizing buildings into dynamic assets, integrating essential property data with AI-driven insights and autonomous management tools.
                </p>

            </div>
                
            <div className='para-container max-sm:px-[3vw] max-sm:pt-[10vw] max-md:pt-[7vw]'>
                <p className='text-[1.6vw] max-sm:text-[5.9vw] font-body font-semibold pb-[0.7vw] max-md:text-[3.7vw] max-sm:leading-[1.2] tracking-tight'>
                    Innovating Real Estate with Digital Twins & Blockchain
                </p>

                <p className='text-[1.7vw] font-medium max-sm:font-extralight font-body opacity-80 max-sm:text-[5.9vw] max-sm:pt-[3vw] max-md:text-[4vw] '>
                    Magma uses blockchain technology to record essential data, which enables transparent, traceable, and immutable streams of information to be readily accessible to its users. Magma smart contracts are built with this blockchain data to expedite tasks like requests for proposals, lease agreements, and services arrangements.
                </p>
                </div>
                </div>    
            </div>
        
    </div>
  )
}

export default MagmaInsights
