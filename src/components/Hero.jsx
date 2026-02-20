export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white relative z-10 overflow-hidden pt-20 pb-10">
      
      {/* Background Graphic Element (Optional, adds depth) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center w-full select-none z-10">
        
        {/* clamp() makes typography fluid and massive on all screens */}
        <h1 className="font-black text-[clamp(6rem,20vw,18rem)] leading-[0.75] uppercase tracking-[-0.05em] text-black">
          SPICY
        </h1>
        
        <div className="bg-[#ccff00] px-8 md:px-16 py-0 md:py-2 my-2 transform -rotate-2 border-[4px] md:border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10">
          <h1 className="font-black text-[clamp(5.5rem,18vw,16rem)] leading-[0.8] uppercase tracking-[-0.05em] text-black">
            TANGY
          </h1>
        </div>
        
        <h1 className="font-black text-[clamp(6rem,20vw,18rem)] leading-[0.75] uppercase tracking-[-0.05em] text-black">
          SWEET
        </h1>
        
      </div>
    </section>
  );
}