'use client'
import Hero from "@/components/Home/Hero";
import Header from "@/components/Header/Header";
import About from "@/components/Home/About"

import MobileHeader from '@/components/Header/HeaderMobile'

import dynamic from 'next/dynamic';

const StructureCanvas = dynamic(() => import('@/components/Home/StructureCanvas'), { ssr: true });
const BuildingCanvas = dynamic(() => import('@/components/Home/BuildingCanvas'), { ssr: true });
const Intro = dynamic(() => import('@/components/Home/Intro'));
const Feature = dynamic(() => import('@/components/Home/Feature'));
const MagmaDTT = dynamic(() => import('@/components/Home/MagmaDTT'));
const MagmaInsights = dynamic(() => import('@/components/Home/MagmaInsights'));
const DTTCreation = dynamic(() => import('@/components/Home/DTTCreation'));
const DTTCreationMobile = dynamic(() => import('@/components/Home/DTTCreationMobile'));
const Stakeholders = dynamic(() => import('@/components/Home/Stakeholders'), { ssr: false });
const Blog = dynamic(() => import('@/components/Home/Blog'), { ssr: true });
const FeaturedIn = dynamic(() => import('@/components/Home/FeaturedIn'), { ssr: true });
const Footer = dynamic(() => import('@/components/Home/Footer'), { ssr: true });

export default function Home() {
  return (
    <>
    <MobileHeader />
      <Header />
        <Hero />
        <About />
         <div className="h-[175vh] max-sm:h-fit max-md:w-[98vw] max-sm:w-[100vw] w-[98.9vw] bg-primary overflow-hidden">

        <StructureCanvas />

         </div>
        <Intro />
        <div className="h-[100vh] max-sm:h-[80vh] w-[98.9vw] max-md:w-[98vw] max-sm:w-[100vw] bg-primary overflow-hidden">

        <BuildingCanvas />
        </div>
        <Feature />
        <MagmaDTT />
        <MagmaInsights />
        <DTTCreation />
        <DTTCreationMobile />
        <Stakeholders />
        <Blog />
        <FeaturedIn />
        <Footer />
    </>
  );
}
