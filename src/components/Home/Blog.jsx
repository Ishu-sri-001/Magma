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
    <div className='px-[7vw] py-[5vw] blog-container'>
      <div className='pb-[5vw]'>
        <h2 className='text-[6.5vw] font-body font-normal blog-text'>Recent blog</h2>
      </div>
     

      <div className='flex flex-col gap-[2vw] pr-[7vw]'>
  {contentItems.map((item, idx) => {
    return (
      <div key={idx} className='h-[14vw] w-full flex gap-[2vw] cursor-pointer group'>
        <div className='h-full w-[50%] rounded-[2vw] overflow-hidden cursor-pointer  '>
          <Image src={item.image} height={900} width={900} alt='blog-img' className='h-full w-full object-cover group-hover:scale-105 duration-700 ease-in-out' />
        </div>
        <div className='w-[50%]  px-[2vw] h-full  flex flex-col gap-[1.5vw] justify-center '>
           
                <p className=' font-body text-[1vw]'>
                    {item.type} {' / '} {item.date}
                </p>
                <p className='font-body font-medium text-[1.5vw] text-black leading-[1]'>{item.title}</p>

            </div>
      </div>
    );
  })}
</div>

    <div className='w-full flex justify-center py-[2vw]'>
      <Button />
      
      </div>
    </div>
  )
}

export default Blog
