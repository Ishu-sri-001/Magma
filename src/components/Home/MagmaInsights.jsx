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
    //   const splitPara = new SplitText(".insights-text", {
    //         type: "chars,lines",
    //         linesClass: "lines",
    //         mask: "lines",
    //   })
       gsap.from(splitText.chars, {
        yPercent: 100,
        stagger: 0.02,
        rotate:20,
        scrollTrigger: {
          trigger: ".insights-container",
          start: "20% 70%",
          markers: false,
          
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
    <div className='h-fit py-[5vw] w-full bg-gradient-to-b from-[#0A3CCE] to-[#02268E] pt-[15%] px-[5vw] insights-container'>
        <div className='flex w-full gap-[5vw] justify-center'>
            <h2 className='text-white text-[7vw] font-body dtt-text leading-[1] insights-text '>
                <span className='block'>

                What is 
                </span>
                <span className='block pb-[1vw]'>Magma
                    </span>
            </h2>
            <div className='h-[28vw] w-fit'>
                <Image src='/assets/insights/intro.jpeg' width={900} height={900} className='w-full h-full object-cover' alt='' />
            </div>
            
        </div>

        <div className='text-white w-full flex justify-end'>
            <div className='w-[30%]'>

            </div>
            <div className='w-[61%] pt-[4vw] pr-[4vw] flex flex-col gap-[3vw] insights-para-container'>

                <div className='para-container'>

                
                <p className='text-[1.8vw] font-body font-semibold pb-[0.7vw] '>
                    The Future of Real Estate Starts Here
                </p>

                <p className='text-[1.5vw] font-bod'>
                    Magma is reshaping the real estate landscape through the power of blockchain, AI, and decentralized infrastructure. At the heart of our platform is the Digital Twin Token (DTT®️), a groundbreaking digital asset backed by property data, unlocking unprecedented levels of transparency, efficiency, and sustainability.
                </p>
                </div>
                <div className='para-container'>


                <p className='text-[1.8vw] font-body font-semibold pb-[0.7vw] '>
                    Transforming the World’s Largest Asset Class
                </p>

                <p className='text-[1.5vw] font-body '>
                    Real estate, the world’s largest asset class with over $300 trillion in value, has long faced challenges—data asymmetry, inefficiencies, and environmental impact. Magma solves these problems by digitizing buildings into dynamic assets, integrating essential property data with AI-driven insights and autonomous management tools.
                </p>

            </div>
                
            <div className='para-container'>
                <p className='text-[1.8vw] font-body font-semibold pb-[0.7vw] '>
                    Innovating Real Estate with Digital Twins & Blockchain
                </p>

                <p className='text-[1.5vw] font-body '>
                    Magma uses blockchain technology to record essential data, which enables transparent, traceable, and immutable streams of information to be readily accessible to its users. Magma smart contracts are built with this blockchain data to expedite tasks like requests for proposals, lease agreements, and services arrangements.
                </p>
                </div>
                </div>    
            </div>
        
    </div>
  )
}

export default MagmaInsights
