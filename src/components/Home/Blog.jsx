'use client'
import Image from 'next/image';
import React, {useEffect} from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)
import Button from '@/components/Button/index'

const Blog = () => {



    useEffect(() => {
    const ctx= gsap.context(() => {
         const splitText = new SplitText(".blog-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      })

      gsap.from(splitText.chars, {
        yPercent: 100,
        stagger: 0.02,
        rotate:20,
        scrollTrigger: {
          trigger: ".blog-container",
          start: "top 70%",
          markers: false,
          
        },
      });
    })
    return () => ctx.revert();
  })

   

     const contentItems = [
    {
      id: 1,
      type: 'ANNOUNCEMENTS',
      date: 'APR 07, 2025',
      title: 'Rewriting Real Estate: Zoniqx and Magma Power the New Digital Asset Frontier',
      image: '/assets/blog/blog1.jpg',
      
    },
    {
      id: 2,
      type: 'ANNOUNCEMENTS',
      date: 'JAN 30, 2025',
      title: 'Digital Twins Meet Blockchain: Magma\'s 3D Viewer is Live',
      image: '/assets/blog/blog2.png',
    },
    {
      id: 3,
      type: 'EVENTS',
      date: 'JAN 27, 2025',
      title: 'Join Us at the Miami Digital Real Estate Summit',
      image: '/assets/blog/blog3.jpg',
    }
  ];

  return (
    <div className='pl-[10vw] max-md:px-[4vw] pr-[2vw] max-sm:pl-[5vw] max-sm:px-[5vw] py-[5vw] max-sm:pt-[30vw] max-md:py-[5vh]  blog-container'>
      <div className='pb-[5vw] max-md:pb-[8vw] max-sm:pl-0 '>
        <h2 className='text-[6.5vw] max-sm:text-[15vw] font-body max-sm:font-medium font-normal blog-text max-sm:pb-[15vw] max-md:text-[10vw] max-md:leading-[1.1] max-md:font-medium tracking-tight max-sm:w-full max-md:w-[30%]'>Recent blog</h2>
      </div>
     

      <div className='flex flex-col gap-[2vw] max-sm:gap-[0.3vw] pr-[7vw] max-md:pr-0 max-sm:pr-0'>
  {contentItems.map((item, idx) => {
    return (
      <div key={idx} className='h-[14vw] max-md:h-[35vh] max-md:mb-[8vw] max-sm:h-[33vh] w-full max-md:rounded-[1vw] flex max-sm:flex-col max-md:flex-col gap-[2vw] cursor-pointer group max-sm:pb-[1vw]'>
        <div className='h-full w-[50%] max-md:w-full max-md:h-[62vh] max-sm:h-[30vh] max-sm:w-full rounded-[1.5vw] overflow-hidden cursor-pointer max-sm:rounded-[2vw] '>
          <Image src={item.image} height={900} width={900} alt='blog-img' className='h-full w-full max-md:rounded-[4vw] object-cover group-hover:scale-105 duration-700 ease-in-out' />
        </div>
        <div className='w-[50%] max-md:w-full max-sm:w-full px-[2vw] h-full  flex flex-col gap-[1.5vw] max-sm:gap-0 justify-center '>
           
                <p className=' font-body max-sm:font-medium max-md:text-nowrap max-md:font-semibold max-sm:text-[3.5vw] max-sm:pb-[2vw] text-[1vw] max-md:text-[2.5vw]'>
                    {item.type} {' / '} {item.date}
                </p>
                <p className='font-body max-md:text-[4vw] font-medium max-sm:text-[6vw] max-sm:font-medium text-[1.8vw] text-black leading-[1] max-sm:leading-[1.2]'>{item.title}</p>

            </div>
      </div>
    );
  })}
</div>

    <div className='w-full flex justify-center max-md:justify-start max-sm:justify-start py-[2vw] max-md:py-[2vw] max-sm:py-[2vw] max-sm:pb-[15vh] max-md:pb-[13vh]'>
      <Button />
      
      </div>
    </div>
  )
}

export default Blog
