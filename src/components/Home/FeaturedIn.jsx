'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const FeaturedIn = () => {
    const marqueeRef1 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const splitText = new SplitText(".featuredIn-text", {
            type: "chars,lines",
            linesClass: "lines",
            mask: "lines",
      })

       gsap.from(splitText.chars, {
        yPercent: 100,
        stagger: 0.02,
        rotate:20,
        scrollTrigger: {
          trigger: ".featuredIn-container",
          start: "30% 70%",
        //   markers: true,
        },
      })

      gsap.fromTo('.featuredIn-para', {
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
                trigger: ".featuredIn-container",
                start: "70% 80%",
                // scrub:true,
                end: "70% 20%",
                
                markers: false
            }
        })
            const marquee = marqueeRef1.current;
            const items = marquee.querySelectorAll('.marquee-item');

            // Clone all items for seamless loop
            items.forEach(item => {
                const clone = item.cloneNode(true);
                marquee.appendChild(clone);
            });

            const totalWidth = marquee.scrollWidth / 2;

            gsap.to(marquee, {
                x: `-=${totalWidth}`,
                duration: 15,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
                }
            });
        });

        return () => ctx.revert();
    }, []);

    const links = ['/assets/featured/feature1.png', '/assets/featured/feature2.png', '/assets/featured/feature3.png'];

    const links2 = ['/assets/featured/feature4.png', '/assets/featured/feature5.png', '/assets/featured/feature6.png', '/assets/featured/feature7.png', '/assets/featured/feature8.png', '/assets/featured/feature9.png', '/assets/featured/feature10.png', '/assets/featured/feature11.png'];

    const allImages = [...links, ...links2];

    return (
        <section className='w-full max-md:h-fit max-md:py-[10vh] h-screen max-sm:h-fit max-sm:py-[30vw] py-[10vw] bg-secondary featuredIn-container'>
            <div className='w-full flex flex-col items-end max-md:items-start max-md:pl-[4vw] max-sm:items-start pr-[20vw] max-sm:pr-0 max-sm:pl-[5vw] max-sm:pt-[10vw]'>
                <h2 className='text-[6.5vw] max-sm:text-[15vw] font-body font-medium tracking-tight featured-text text-white max-md:text-[10vw] featuredIn-text'>Featured In</h2>
                <p className='text-white featuredIn-para font-body text-[1.2vw] w-[29vw] max-sm:w-full opacity-90 max-sm:pl-0 pl-[1vw] max-md:w-full max-md:text-[2.5vw] max-sm:text-[5vw] max-md:pb-[10vw]'>Thrilled to have been featured in several prominent media outlets and leading professionals across the world's best real estate and web3 institutions.</p>
            </div>
            
            <div className='py-[8vw] w-full overflow-hidden'>
               
                <div className='overflow-hidden w-full'>
                    <div ref={marqueeRef1} className='flex whitespace-nowrap'>
                        {allImages.map((link, ind) => (
                            <div key={ind} className='marquee-item flex-shrink-0 mx-[5vw] max-sm:pt-[15vw]'>
                                <div className='h-[4vw] max-md:h-[8vw] max-sm:h-[15vw] w-auto'>
                                    <Image 
                                        src={link} 
                                        width={200} 
                                        height={100} 
                                        alt={`Featured ${ind + 1}`} 
                                        className='h-full w-auto object-contain' 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedIn