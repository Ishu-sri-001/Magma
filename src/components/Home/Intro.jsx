import React from 'react'

const Intro = () => {
  return (
    <section className='h-screen max-md:h-fit max-md:py-[20%] max-sm:h-fit max-sm:py-[35%] w-full bg-primary flex flex-col text-white justify-center  px-[10vw] max-md:px-[5vw] max-sm:px-[5vw]'>
        <p className='uppercase text-[1.2vw] font-body max-sm:text-[4vw] max-md:text-[3vw]'>Transforming buildings into Smart, Sustainable assets</p>
        <p className='font-body text-[4.2vw] tracking-tight pt-[2.5vw] max-md:pt-[2vw] leading-[1.2]  max-sm:pt-[5vw] max-sm:text-[9.6vw] max-sm:tracking-tighter max-md:tracking-tighter max-md:leading-[1.1] max-sm:leading-[1.1] max-md:mt-[4vw] max-md:text-[8vw]'>
            The Digital Twin Token (DTT®) is a unique digital asset powered by property data and IoT connectivity. Magma integrates building’s components, systems, and critical information into one intelligent token, enabling AI-driven optimization, predictive insights, and streamlined property management
        </p>
      
    </section>
  )
}

export default Intro
