import { motion } from 'framer-motion';

export default function Hero() {
  // Pro-level easing animation (very smooth, not robotic)
  const textReveal = {
    hidden: { y: "120%" },
    visible: { y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white relative z-10 overflow-hidden pt-24 pb-12">
      <div className="flex flex-col items-center justify-center w-full select-none z-10 px-4">
        
        {/* Overflow-hidden wrapper creates the "mask" effect */}
        <div className="overflow-hidden pb-2">
          <motion.h1 
            variants={textReveal} initial="hidden" animate="visible"
            className="heading-font text-[22vw] sm:text-[18vw] md:text-[12vw] lg:text-[13rem] leading-[0.8] text-black"
          >
            SPICY
          </motion.h1>
        </div>
        
        <div className="overflow-hidden pb-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1, rotate: -2 }} 
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#ccff00] px-6 md:px-12 py-1 md:py-2 my-2 md:my-4 border-[3px] md:border-[6px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10"
          >
            <h1 className="heading-font text-[20vw] sm:text-[16vw] md:text-[11vw] lg:text-[12rem] leading-[0.85] text-black">
              TANGY
            </h1>
          </motion.div>
        </div>
        
        <div className="overflow-hidden pt-2">
          <motion.h1 
            variants={textReveal} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
            className="heading-font text-[22vw] sm:text-[18vw] md:text-[12vw] lg:text-[13rem] leading-[0.8] text-black"
          >
            SWEET
          </motion.h1>
        </div>
        
      </div>
    </section>
  );
}