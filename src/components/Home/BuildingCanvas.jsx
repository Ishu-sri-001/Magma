'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const startFrame = 4;
const endFrame = 163;
const step = 3;

const frameIndices = Array.from(
  { length: Math.floor((endFrame - startFrame) / step) + 1 },
  (_, i) => startFrame + i * step
);

const getImagePath = (frameNumber) =>
  `/canva/bridges/bridges${String(frameNumber).padStart(5, '0')}.png`;

const BuildingCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const frameRef = useRef(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const ctx= gsap.context(() => {
        const loaded = [];

    frameIndices.forEach((frameNum) => {
      const img = new Image();
      img.src = getImagePath(frameNum);
      loaded.push(img);
    });

    setImages(loaded);
    })
    return () => ctx.revert();
    
  }, []);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || images.length === 0) return;

    const render = () => {
      const frameIndex = Math.floor(frameRef.current);
      const img = images[frameIndex];
      if (img) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    render(); // Initial render

    
    gsap.to(frameRef, {
      current: images.length - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=500',
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
      onUpdate: render,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [images]);

  return (
    <div ref={containerRef} className="h-[200vh] max-sm:h-[90vh] -mt-[2vw] w-full max-sm:w-screen overflow-hidden ">
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BuildingCanvas;
