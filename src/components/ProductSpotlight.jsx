// src/components/ProductSpotlight.jsx
export default function ProductSpotlight() {
  return (
    // Is section ko hum relative denge taake bottle iske upar place ho sake
    <section className="relative w-full py-24 md:py-40 bg-[#ccff00] border-y-[6px] border-black flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Left Side - Big Typography */}
      <div className="flex flex-col items-start z-10 mb-12 md:mb-0">
        <h2 className="font-black text-[clamp(3rem,8vw,7rem)] leading-[0.85] uppercase tracking-tighter mb-6">
          THE WORLD'S<br />
          <span className="bg-black text-[#ccff00] px-2">BEST</span> HOT SAUCE
        </h2>
        <div className="flex flex-wrap gap-4 font-black text-lg md:text-xl uppercase tracking-widest">
          <span className="border-4 border-black px-4 py-2 bg-white">Made With Coffee</span>
          <span className="border-4 border-black px-4 py-2 bg-white">Vegan</span>
          <span className="border-4 border-black px-4 py-2 bg-white">Gluten Free</span>
        </div>
      </div>

      {/* Right Side - CTA Button */}
      <div className="z-10">
        <button className="group bg-black text-[#ccff00] border-[4px] border-black px-10 py-5 font-black text-xl md:text-3xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black transition-all duration-300 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="relative inline-block group-hover:scale-105 transition-transform duration-300">
            SHOP NOW
          </span>
        </button>
      </div>

      {/* Background Pattern Element */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_black_2px,_transparent_2px)] bg-[size:30px_30px] pointer-events-none"></div>
    </section>
  );
}