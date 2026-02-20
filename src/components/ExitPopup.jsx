// src/components/ExitPopup.jsx
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Jab mouse screen ke bilkul top par jaye tabhi trigger ho
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    // Background overlay - z-[999] taake ye hamesha sab se upar rahe
    // onClick yahan is liye lagaya taake bahar black area par click karne se bhi popup band ho jaye
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-6"
      onClick={() => setIsVisible(false)} 
    >
      {/* Popup Box - e.stopPropagation() zaroori hai taake box ke andar click karne se band na ho
        animate-bounce hata diya gaya hai taake button easily click ho sake
      */}
      <div 
        className="bg-[#ccff00] border-[4px] md:border-[6px] border-black p-6 md:p-12 max-w-[90%] md:max-w-lg w-full relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform scale-100 transition-all"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* The Close Button (X) - Mobile par thoda chota aur proper aligned */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-white border-[3px] md:border-[4px] border-black p-2 md:p-3 hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50"
        >
          <FaTimes className="text-base md:text-xl" />
        </button>

        {/* Mobile-Friendly Typography: text-4xl on mobile, text-6xl on desktop */}
        <h2 className="font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter mb-3 md:mb-4 leading-[0.9] text-black">
          WAIT! DON'T<br/>LEAVE SPICY.
        </h2>
        
        {/* Paragraph adjusted for mobile readability */}
        <p className="font-bold text-sm md:text-xl mb-6 md:mb-8 text-black leading-snug">
          Get <span className="bg-black text-[#ccff00] px-2 py-0.5 mx-1 inline-block transform -rotate-2">10% OFF</span> your first order. Claim your discount before it melts away!
        </p>

        <div className="flex flex-col gap-3 md:gap-4">
          <div className="border-[3px] md:border-[4px] border-dashed border-black bg-white p-3 md:p-4 text-center font-black text-2xl md:text-3xl tracking-widest uppercase">
            SAUCY10
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="bg-black text-[#ccff00] border-[3px] md:border-[4px] border-black px-6 md:px-8 py-3 md:py-4 font-black text-lg md:text-xl uppercase hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] cursor-pointer"
          >
            Apply Discount
          </button>
        </div>
      </div>
    </div>
  );
}