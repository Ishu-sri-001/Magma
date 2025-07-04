'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import UseTablet from './IsTablet';

gsap.registerPlugin(ScrollTrigger, SplitText);

const DTTCreation = () => {

  const isMobile = UseTablet();
  const [isActive, setIsActive] = useState(0);
  const stepsRef = useRef([]);

  const images = ['1.jpg', '25.jpg', '50.jpg', '75.jpg'];

  const steps = [
    {
      id: '01',
      title: 'Inviting building Stakeholders',
      description: 'Each Stakeholder of a building can connect to Magma'
    },
    {
      id: '02',
      title: 'Uploading and validating building data',
      description: 'Stakeholders upload and validate all data about the building and get rewarded.  Real-time data is collected using IoT'
    },
    {
      id: '03',
      title: "Minting the building's Digital Twin Token",
      description: 'The unique digital asset of the building. It contains a 3D model and all its data'
    },
    {
      id: '04',
      title: 'AI-based optimisation',
      description: "Using the data collected and IoT connectivity to building's equipments , Magma's AI Agents optimize the building's performance"
    }
  ];

  useEffect(() => {
    const ctx= gsap.context(() => {
        stepsRef.current.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        // pin:true,
        // markers: true,
        scrub: true,
        onEnter: () => setIsActive(index),
        onEnterBack: () => setIsActive(index),
      });
    })
            const splitText = new SplitText(".creation-txt", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      })
    gsap.from(splitText.chars, {
        yPercent: 100,
        stagger: 0.02,
        rotate:20,
        scrollTrigger: {
          trigger: ".dttcreation-container",
          start: "top 70%",
          markers: false,
          
        },
      });
    });
    return () => ctx.revert();
  }, []);

  if(isMobile)
  {
    return null;
  }


  return (
    <div className='h-fit w-full py-[10vw] relative dttcreation-container bg-[#02268E]'>
      <div className='w-full pl-[10vw]'>
        <h2 className='text-[6.5vw] text-white font-body font-normal creation-txt'>DTT Creation</h2>
      </div>

      <div className='w-full flex pt-[5vw] h-full px-[5vw]'>
        <div className='w-[45%] pr-[5vw] pb-[5vw] pl-[7vw] relative'>
          {/* Vertical Line */}
          <div className='absolute left-[2vw] top-[8vw] w-[2px] h-[183vh] bg-white/30 z-10'></div>
          
          <div className='text-white max-sm:pl-[4vw] space-y-[10vw] mt-[5vw] relative'>
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={el => (stepsRef.current[index] = el)}
                className={`transition-opacity duration-500 relative ${
                  isActive === index ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {/* Circle */}
                <div className='absolute -left-[5.4vw] top-[2vw] w-[1vw] h-[1vw] rounded-full bg-white z-20'></div>
                
                <p className='text-[0.9vw] font-body font-bold pb-[2vw]'>{step.id}</p>
                <p className='text-[3.5vw] leading-[1] font-medium font-body pb-[1.5vw]'>{step.title}</p>
                <p className='text-[1.3vw] font-body pr-[2vw]'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='w-[50%] h-fit sticky top-0 pl-[5vw]'>
          <div className='h-[80vh] w-[40vw] pb-[8vw]'>
           <Image
                src={`/canva/creation/${images[isActive]}`}
                width={900}
                height={900}
                alt='creation'
                className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DTTCreation;