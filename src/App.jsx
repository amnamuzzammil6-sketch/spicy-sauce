import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FeaturedIn from './components/FeaturedIn';
// Naye Premium Components
import HotCouple from './components/HotCouple';
import SaucyEra from './components/SaucyEra';
import StorySection from './components/StorySection'; 
import Shop from './components/Shop';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';

import bottleImg from './assets/bottle.png';

export default function App() {
  const { scrollYProgress } = useScroll();

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    mass: 0.5,
  });

  // PRECISION FALLING PHYSICS
  // Starts at top (0vh), falls down to 230vh (exact landing spot over HOT COUPLE text)
  const bottleY = useTransform(smoothScroll, [0, 0.4, 0.7, 1], ["0vh", "120vh", "230vh", "230vh"]); 
  
  // Perfect 3D-like Rotation 
  const bottleRotate = useTransform(smoothScroll, [0, 0.4, 0.7, 1], [15, 180, 360, 360]);
  
  // Scales up slightly as it lands to give a dynamic "popping out" effect
  const bottleScale = useTransform(smoothScroll, [0, 0.6, 0.7, 1], [1, 1, 1.15, 1.15]);

  return (
    <div className="relative bg-white overflow-x-hidden font-sans text-black selection:bg-[#ccff00] selection:text-black">
      
      {/* 10% OFF EXIT POPUP ADDED HERE */}
      <ExitPopup />
      
      <Navbar />

      {/* THE FALLING BOTTLE LAYER */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50 flex justify-center pt-[15vh]">
        <motion.img 
          src={bottleImg} 
          alt="Falling Hot Sauce"
          style={{ y: bottleY, rotate: bottleRotate, scale: bottleScale }}
          className="w-[30%] max-w-[200px] md:max-w-[280px] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* MASTER PAGE LAYOUT */}
      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <Marquee />
        <FeaturedIn />
        
        {/* The Landing Zone for the Bottle */}
        <HotCouple />
        
        {/* Premium Neo-Brutalist Sections */}
        <StorySection />
        <SaucyEra />
        <Shop />
        <Footer />
      </div>

      {/* PREMIUM FLOATING CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <button className="group bg-[#ccff00] text-black border-[4px] border-black px-12 py-4 font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#ccff00] transition-all duration-300 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
          <span className="relative inline-block group-hover:scale-105 transition-transform duration-300">
            Explore Sauces
          </span>
        </button>
      </div>
    </div>
  );
}