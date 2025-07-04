"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
import UseMobile from "./isMobile";

const MagmaDTT = () => {
  const isMobile = UseMobile();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitText = new SplitText(".dtt-text", {
        type: "chars,lines",
        linesClass: "lines",
        mask: "lines",
      });

      

      if (isMobile) {
        gsap.fromTo(
        splitText.chars,
        {
          yPercent: 100,
          rotate: 30,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,

          scrollTrigger: {
            trigger: ".dtt-video",
            start: "90% top",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        }
      );
        gsap.fromTo(
          ".dtt-video",
          {
            scale: 2,
            opacity: 0.1,
            yPercent:-60,
          },
          {
            scale: 1,
            opacity: 1,
            yPercent:0,

            scrollTrigger: {
              trigger: "#video-section",
              scrub: true,

              start: "10% 90%",
              end: "bottom 30%",
              markers: false,
            },
          }
        );
        gsap.from(".dtt-container", {
          scrollTrigger: {
            trigger: ".dtt-container",
            start: "top top",
            end: "bottom bottom",
            pin: true,
            markers:false
          },
        });
      } else {
        gsap.fromTo(
        splitText.chars,
        {
          yPercent: 30,
          rotate: 30,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,

          scrollTrigger: {
            trigger: ".dtt-video",
            start: "50% 60%",
            end: "70% 20%",
            scrub: true,
            markers: false,
          },
        }
      );
        gsap.from(".dtt-container", {
          scrollTrigger: {
            trigger: ".dtt-container",
            start: "top top",
            end: "bottom +500",
            pin: true,
            // markers:true
          },
        });
        gsap.fromTo(
          ".dtt-video",
          {
            scale: 2.5,
            opacity: 0.1,
            yPercent: -50,
          },
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: ".dtt-video",
              scrub: true,

              start: "50% 90%",
              end: "70% 30%",
              markers: false,
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, [isMobile]);

  

  return (
    <div
      className="w-full h-[100vh] bg-primary dtt-container overflow-hidden relative"
      id="video-section"
    >
      <div className=" h-full w-full dtt-video ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full object-cover absolute top-0 left-0 "
        >
          <source src="https://thisismagma.com/wp-content/themes/magma/assets/home/glass/1.webm?2" />
        </video>
      </div>
      <div className="absolute max-md:bottom-[6%] max-md:left-[23%] bottom-[14%] max-sm:bottom-[6%] max-sm:left-[7%] left-[33%]">
        <h2 className="text-white text-[6.5vw] max-sm:text-[16.5vw] font-body dtt-text max-sm:text-nowrap tracking-tighter max-md:text-[10vw] max-sm:pb-[2vw] max-sm:font-medium">
          Magma DTT®
        </h2>
        <div className="w-full flex justify-center pr-[8vw] pt-[1vw]  ">
          <div className="w-[15%] max-sm:w-[50%] max-sm:pl-[1vw] max-md:w-[50%]">
            <div className="py-[0.8vw] cursor-pointer max-sm:w-[40vw] max-sm:text-[4vw] max-sm:rounded-full max-sm:py-[4vw] max-sm:px-[6vw] max-sm:text-nowrap max-sm:font-semibold  border border-gray-300 max-md:w-[35vw] max-md:rounded-full text-center rounded-[2vw] text-primary max-md:text-[2.5vw] max-md:font-semibold max-md:text-nowrap bg-white max-md:py-[1.5vw] w-[12vw] font-semibold font-body text-[0.9vw]">
              LEARN MORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagmaDTT;
