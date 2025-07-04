
import Hero from "@/components/Home/Hero";
import Header from "@/components/Header/Header";
import About from "@/components/Home/About"
import StructureCanvas from "@/components/Home/StructureCanvas"
import Intro from "@/components/Home/Intro";
import BuildingCanvas from "@/components/Home/BuildingCanvas"
import Feature from "@/components/Home/Feature";
import MagmaDTT from "@/components/Home/MagmaDTT";
import MagmaInsights from "@/components/Home/MagmaInsights"
import DTTCreation from "@/components/Home/DTTCreation"
import DTTCreationMobile from "@/components/Home/DTTCreationMobile"
import Stakeholders from "@/components/Home/Stakeholders";
import Blog from '@/components/Home/Blog'; 
import FeaturedIn from "@/components/Home/FeaturedIn"
import Footer from "@/components/Home/Footer"
import MobileHeader from '@/components/Header/HeaderMobile'

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
