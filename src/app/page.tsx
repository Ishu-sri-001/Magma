
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
import Stakeholders from "@/components/Home/Stakeholders";
import Blog from '@/components/Home/Blog'; 
import FeaturedIn from "@/components/Home/FeaturedIn"
import Footer from "@/components/Home/Footer"

export default function Home() {
  return (
    <>
      <Header />
        <Hero />
        <About />
         <div className="h-[175vh] w-[98.9vw] bg-primary">

        <StructureCanvas />

         </div>
        <Intro />
        <div className="h-[100vh] w-[98.9vw] bg-primary">

        <BuildingCanvas />
        </div>
        <Feature />
        <MagmaDTT />
        <MagmaInsights />
        <DTTCreation />
        <Stakeholders />
        <Blog />
        <FeaturedIn />
        <Footer />
    </>
  );
}
