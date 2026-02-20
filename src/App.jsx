import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FeaturedIn from './components/FeaturedIn';
import HotCouple from './components/HotCouple';
import SaucyEra from './components/SaucyEra';
import StorySection from './components/StorySection'; 
import Shop from './components/Shop';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';

import bottleImg from './assets/bottle.png';

export default function App() {
  const { scrollYProgress } = useScroll();
  
  // Custom Cursor Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    mass: 0.5,
  });

  const bottleY = useTransform(smoothScroll, [0, 0.4, 0.7, 1], ["0vh", "120vh", "230vh", "230vh"]); 
  const bottleRotate = useTransform(smoothScroll, [0, 0.4, 0.7, 1], [15, 180, 360, 360]);
  const bottleScale = useTransform(smoothScroll, [0, 0.6, 0.7, 1], [1, 1, 1.15, 1.15]);

  return (
    <div className="relative bg-white overflow-x-hidden font-sans text-black">
      
      {/* 1. THE NOISE OVERLAY (Magazine Texture) */}
      <div className="noise-overlay"></div>

      {/* 2. CUSTOM AGENCY CURSOR (Hidden on mobile) */}
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border-2 border-black bg-[#ccff00]/50 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      
      <ExitPopup />
      <Navbar />

      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50 flex justify-center pt-[15vh]">
        <motion.img 
          src={bottleImg} 
          alt="Falling Hot Sauce"
          style={{ y: bottleY, rotate: bottleRotate, scale: bottleScale }}
          className="w-[30%] max-w-[200px] md:max-w-[280px] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)]"
        />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <Marquee />
        <FeaturedIn />
        <HotCouple />
        <StorySection />
        <SaucyEra />
        <Shop />
        <Footer />
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <button className="group bg-[#ccff00] text-black border-[4px] border-black px-12 py-4 font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#ccff00] transition-all duration-300 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap cursor-none">
          <span className="relative inline-block group-hover:scale-105 transition-transform duration-300">
            Explore Sauces
          </span>
        </button>
      </div>
    </div>
  );
}