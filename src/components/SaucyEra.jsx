// src/components/SaucyEra.jsx
import Marquee from "react-fast-marquee";

export default function SaucyEra() {
  // Maine yahan 3 reliable images daal di hain taake koi oval khali na rahe.
  // Baad mein aap in URLs ko apni local images (e.g., import burgerImg from '../assets/burger.png') se replace kar sakti hain.
  const images = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="py-20 md:py-32 bg-[#ccff00] border-b-[6px] border-black overflow-hidden relative flex flex-col items-center">
      
      {/* 1. RUNNING HEADLINE (Marquee) */}
      <div className="absolute top-10 md:top-24 left-0 w-full opacity-90 pointer-events-none">
        <Marquee speed={80} gradient={false}>
          <h2 className="font-black text-[12vw] md:text-[9vw] leading-none tracking-tighter text-black mx-6">
            SAUCY ERA • SAUCY ERA • SAUCY ERA • 
          </h2>
        </Marquee>
      </div>

      {/* 2. PERFECT OVALS LAYOUT */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-6 mt-28 md:mt-40 w-full max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div 
            key={index} 
            // aspect-[3/4] aur max-w-[320px] ovals ko perfect shape mein lock kar dega
            className="group relative w-full md:w-1/3 max-w-[300px] aspect-[3/4] rounded-full border-[6px] border-black overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-4 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-white"
          >
            {/* Image container */}
            <img 
              src={img} 
              alt={`Saucy Era ${index}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Clean Floating Button inside Oval */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#ccff00] border-[3px] border-black px-8 py-2 rounded-full font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#ccff00] transition-colors cursor-pointer whitespace-nowrap">
              Explore
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}