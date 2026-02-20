export default function Marquee() {
  return (
    <div className="bg-white border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative z-20">
      <div className="animate-marquee inline-block text-[10px] sm:text-sm md:text-lg font-bold uppercase tracking-widest">
        PLANT BASED INGREDIENTS • NO ARTIFICIAL FLAVOURS • SUSTAINABLY SOURCED • MADE WITH SPECIALTY COFFEE • &nbsp;
        PLANT BASED INGREDIENTS • NO ARTIFICIAL FLAVOURS • SUSTAINABLY SOURCED • MADE WITH SPECIALTY COFFEE • 
      </div>
    </div>
  );
}