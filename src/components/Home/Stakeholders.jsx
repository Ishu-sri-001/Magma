'use client'
import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Stakeholders = () => {

  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx= gsap.context(() => {
         const splitText = new SplitText(".stakeholder-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      })

      gsap.from(splitText.chars, {
        yPercent: 100,
        stagger: 0.02,
        rotate:20,
        scrollTrigger: {
          trigger: ".stakeholder-container",
          start: "top 70%",
          markers: false,
          
        },
      });
    })
    return () => ctx.revert();
  })

  useEffect(() => {
    const moveCursor = (e) => {
      const bounds = containerRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom;

      if (inside) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: 'power2.out',
          autoAlpha: 1,
        });
      } else {
        gsap.to(cursorRef.current, {
          autoAlpha: 0,
          duration: 0.2,
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

// const handleMouseMove = (e) => {
//   gsap.to(cursorRef.current, {
//     x: e.clientX,
//     y: e.clientY,
//     duration: 0.2,
//     ease: 'power2.out',
//     autoAlpha: 1,
//   });
// };


const handleMouseEnter = () => {
  gsap.to(cursorRef.current, { autoAlpha: 1 });
};

const handleMouseLeave = () => {
  gsap.to(cursorRef.current, { autoAlpha: 0 });
};


  const stakeholderCards = [
  {
    role: "Owner",
    image: "/assets/stakeholders/stake1.jpeg",
    items: [
      "Improve asset liquidity",
      "Consolidate all the documentation in one place",
      "Lower operating costs",
      "Have a 360 and intuitive reproduction of your Building",
      "Connect to Web3 with a wallet",
      "Create digital value for the building (digital assets)",
      "Access governance of Magma"
    ]
  },
  {
    role: "Asset Manager",
    image: "/assets/stakeholders/stake2.jpeg",
    items: [
      "Improve asset liquidity",
      "Connect to Web3 with a wallet",
      "Create digital value for the building",
      "Monitor building performance",
      "Manage access and rights to the digital model",
      "Keep an operational data room with validated data",
      "Keep an immutable record of Stakeholder's activity",
      "Access governance of Magma"
    ]
  },
  {
    role: "Property/Facility Managers",
    image: "/assets/stakeholders/stake3.jpeg",
    items: [
      "Record Service Providers activity",
      "Monitor energy performance and manage carbon credit offsets",
      "Facilitate predictive maintenance",
      "Integrate technology and new services",
      "Improve recyclability of building parts and objects",
      "Automate transactions and services to the building",
      "Access governance of Magma"
    ]
  },
  {
    role: "Service Providers",
    image: "/assets/stakeholders/stake4.jpeg",
    items: [
      "Any company providing services to a building can join Magma",
      "30+ categories of Service Providers: Accountant, Attorney, Broker, Consulting Firm, Diagnostician, Interior Designer, Plumber and more",
      "Showcase objects or services in the Magma Platform",
      "Access the 3D model",
      "Create 3D objects and increment the model",
      "Earn tokens by uploading and validating documents",
      "Access governance of Magma"
    ]
  },
  {
    role: "Tenants",
    image: "/assets/stakeholders/stake5.jpeg",
    items: [
      "Earn tokens by uploading and validating documents",
      "Convert tokens into governance or access",
      "Access governance of Magma"
    ]
  },
  {
    role: "Observers",
    image: "/assets/stakeholders/stake6.jpeg",
    items: [
      "Upload or access information upon authorization",
      "Convert tokens into governance or access",
      "Access governance of Magma"
    ]
  }
];


 return (
  <div className='w-full bg-gray-200 h-fit max-sm:pl-0 max-md:pl-0 max-sm:pr-0 pl-[2vw] py-[5vw] max-md:pb-[20vh] stakeholder-container relative max-sm:pt-[10vh]'>
    
    {/* <img 
      loading="lazy"
      ref={cursorRef} 
      src="/assets/cursor-arrow.png" 
      alt="Custom Cursor" 
      className="pointer-events-none fixed w-[50px] h-[50px] z-[9999]" 
      style={{ 
        transform: 'translate(-50%, -50%)', 
        opacity: 0, 
      }} 
    /> */}

    <div className='w-full pl-[7vw] max-md:pl-[6vw] max-sm:pl-[4vw] py-[5vw] max-sm:py-[10vw] max-md:py-[10vh]'>
      <h2 className='text-[6.5vw] font-body font-normal max-sm:leading-[1.1] max-sm:text-[15vw] max-sm:font-medium max-md:font-medium max-md:text-[10vw] stakeholder-text tracking-tighter'>For All Stakeholders</h2>
    </div>

    <div className="relative w-full h-full max-sm:pl-0 max-md:pl-0 pl-[2vw] pr-0 max-sm:pb-[20vw]" ref={containerRef}>
      <Swiper 
        slidesPerView={2.7} 
        spaceBetween={0} 
        className="mySwiper w-full !pl-[5vw] !pr-0 max-sm:pr-0 max-sm:pl-0"

        breakpoints={{
    // For mobile devices (0px and up)
    0: {
      slidesPerView: 1.2,
    },
    // For tablets (640px and up)
    640: {
      slidesPerView: 1.2,
    },
    // For desktops (1024px and up)
    1024: {
      slidesPerView: 2.5,
    },
  }}
       
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      > 
        {stakeholderCards.map((card, idx) => (
          <SwiperSlide key={idx}>
            <div className='w-[33vw] max-md:w-full max-sm:w-[74vw] h-fit rounded-[2vw] p-[0.5vw]'>
              <div className='h-[50vh] max-sm:h-[27vh] group w-fit max-sm:w-[75vw]] max-md:w-[75vw] rounded-[2vw] overflow-hidden max-md:h-[35vh]'>
                <Image loading="lazy" src={card.image} height={900} width={900} alt='stakeholder' className='h-full max-sm:rounded-[4vw] w-full object-fill group-hover:scale-110 duration-700 ease-in-out' />
              </div>
              <div>
                <p className='text-[2.5vw] max-sm:leading-[1] max-sm:text-[10vw] font-body py-[1vw] font-medium pl-[1vw] max-sm:py-[3vw] max-md:text-[6vw] max-md:font-medium max-sm:tracking-tighter'>{card.role}</p>
                <ul className="list-none pl-4  space-y-1 text-[1.1vw] pr-[1vw]">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className='mt-[0.5vw]  max-sm:mt-[2vw] max-md:h-[2vw] max-sm:h-[4vw] max-sm:w-[4vw]' xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 20 15" fill="none">
                        <path d="M2 8L7 13L18 2" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className='max-sm:text-[4.2vw] font-semibold font-body tracking-tight max-sm:w-full max-md:text-[3vw]'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)

}

export default Stakeholders
