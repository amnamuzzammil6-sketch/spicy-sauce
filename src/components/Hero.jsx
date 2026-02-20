export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white relative z-10 overflow-hidden pt-24 pb-12">
      <div className="flex flex-col items-center justify-center w-full select-none z-10 px-4">
        
        {/* Mobile par text chota (18vw) aur desktop par bada (12vw/14rem) hoga */}
        <h1 className="font-black text-[22vw] sm:text-[18vw] md:text-[12vw] lg:text-[14rem] leading-[0.8] uppercase tracking-tight text-black">
          SPICY
        </h1>
        
        <div className="bg-[#ccff00] px-6 md:px-12 py-1 md:py-2 my-2 md:my-4 transform -rotate-2 border-[3px] md:border-[6px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10">
          <h1 className="font-black text-[20vw] sm:text-[16vw] md:text-[11vw] lg:text-[13rem] leading-[0.85] uppercase tracking-tight text-black">
            TANGY
          </h1>
        </div>
        
        <h1 className="font-black text-[22vw] sm:text-[18vw] md:text-[12vw] lg:text-[14rem] leading-[0.8] uppercase tracking-tight text-black">
          SWEET
        </h1>
        
      </div>
    </section>
  );
}