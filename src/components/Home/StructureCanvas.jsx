'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const startFrame = 7;
const endFrame = 202;
const step = 3;

const frameIndices = Array.from(
  { length: Math.floor((endFrame - startFrame) / step) + 1 },
  (_, i) => startFrame + i * step
);

const getImagePath = (frameNumber) =>
  `/canva/structure/frames${String(frameNumber).padStart(5, '0')}.png`;

const StructureCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const frameRef = useRef(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loaded = [];

    frameIndices.forEach((frameNum) => {
      const img = new Image();
      img.src = getImagePath(frameNum);
      loaded.push(img);
    });

    setImages(loaded);
  }, []);

  
  useEffect(() => {
  const ctx = gsap.context(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context || images.length === 0) return;

    const render = () => {
      const frameIndex = Math.floor(frameRef.current);
      const img = images[frameIndex];
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
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
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      onUpdate: render,
    });
  }, containerRef); 

  return () => ctx.revert(); 
}, [images]);


  return (
    <div ref={containerRef} className="h-[100vh] max-sm:w-screen max-sm: max-sm:h-[90vh] w-full  overflow-hidden">
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default StructureCanvas;
