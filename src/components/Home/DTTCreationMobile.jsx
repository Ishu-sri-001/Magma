'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import UseTablet from './IsTablet';

gsap.registerPlugin(ScrollTrigger, SplitText);

const DTTCreationMobile = () => {
    const isMobile= UseTablet();
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
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        //   markers: true,
          onEnter: () => setIsActive(index),
          onEnterBack: () => setIsActive(index),
        });
      });

      const splitText = new SplitText(".creation-txt-mobile", {
        type: "chars,lines",
        linesClass: "lines",
        mask: "lines",
      });

      gsap.from(splitText.chars, {
        yPercent: 100,
        stagger: 0.02,
        rotate: 20,
        scrollTrigger: {
          trigger: ".dttcreation-container-mobile",
          start: "top 70%",
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  if(!isMobile)
  {
    return null;
  }

  return (
    <div className='h-fit w-full py-[15vw] max-sm:pb-[40vw] relative dttcreation-container-mobile bg-[#02268E] max-sm:pl-0 pl-0'>
      <div className='w-full px-[7vw]'>
        <h2 className='max-sm:text-[15vw] text-[10vw] text-white font-body font-medium creation-txt-mobile mb-[15vw]'>DTT Creation</h2>
      </div>

      <div className='w-full px-[7vw] max-sm:pl-[7vw] pl-[12svw] space-y-[15vw] relative'>
        {/* Vertical Line */}
        <div className='absolute left-[3vw] max-sm:top-[80vw] max-sm:left-[6vw] top-[50vw] w-[2px] h-[190vh] max-sm:h-[213vh] bg-blue-800 z-10'></div>
        
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={el => (stepsRef.current[index] = el)}
            className='w-full relative'
          >
            {/* Circle */}
            <div className='absolute left-[-10vw] max-sm:left-[-2vw] top-[49vw] max-sm:top-[80vw] w-[2vw] max-sm:w-[3vw] h-[2vw] max-sm:h-[3vw] rounded-full bg-blue-800 z-20'></div>

            {/* Image */}
            <div className={`max-sm:w-[80vw] max-sm:pl-[10vw] max-sm:h-full h-[45vw] mb-[3.2svw] w-fit max-sm:mb-[8vw] ${isActive === index ? 'opacity-100' : 'opacity-40'}`}>
              <Image
                loading="lazy"
                src={`/canva/creation/${images[index]}`}
                width={900}
                height={900}
                alt=''
                className='w-full h-full object-cover rounded-lg'
              />
            </div>

            {/* Content */}
            <div
              className={`transition-opacity max-sm:pl-[10vw] duration-500 ${
                isActive === index ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <p className='text-[2.5vw] font-body font-medium max-sm:pb-[6vw] pb-[3vw] max-sm:text-[3.5vw] text-white'>{step.id}</p>
              <p className='max-sm:text-[10vw] leading-[1.1] font-medium font-body max-sm:pb-[3.5vw] pb-[3.5vw] text-white text-[6.5vw]'>{step.title}</p>
              <p className='max-sm:text-[4.5vw] max-sm:leading-[1.5] text-[2.6vw] max-w-[80vw] font-body text-white leading-[1.3] '>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DTTCreationMobile;