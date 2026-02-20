import Marquee from "react-fast-marquee";

export default function SaucyEra() {
  const images = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="py-16 md:py-32 bg-[#ccff00] border-b-[4px] md:border-b-[6px] border-black overflow-hidden relative flex flex-col items-center">
      
      {/* Running Headline - Scaled down for mobile */}
      <div className="absolute top-8 md:top-24 left-0 w-full opacity-90 pointer-events-none">
        <Marquee speed={60} gradient={false}>
          <h2 className="font-black text-[12vw] md:text-[8vw] leading-none tracking-tighter text-black mx-4">
            SAUCY ERA • SAUCY ERA • SAUCY ERA • 
          </h2>
        </Marquee>
      </div>

      {/* PERFECT OVALS - Hover disabled on mobile for a cleaner touch experience */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-6 mt-20 md:mt-40 w-full max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="group relative w-full max-w-[240px] md:max-w-[300px] aspect-[3/4] rounded-full border-[4px] md:border-[6px] border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:hover:-translate-y-4 md:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 bg-white"
          >
            <img 
              src={img} 
              alt={`Saucy Era ${index}`} 
              className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700"
            />
            
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-[#ccff00] border-[2px] md:border-[3px] border-black px-6 md:px-8 py-2 rounded-full font-black uppercase text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#ccff00] transition-colors cursor-pointer whitespace-nowrap">
              Explore
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}