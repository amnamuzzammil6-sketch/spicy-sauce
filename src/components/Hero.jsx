import { motion } from 'framer-motion';

export default function Hero() {
  const textReveal = {
    hidden: { y: "120%" },
    visible: { y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white relative z-10 overflow-hidden pt-24 pb-12">
      <div className="flex flex-col items-center justify-center w-full select-none px-4">
        
        {/* SPICY is z-20 (Bottle z-30 will go over it) */}
        <div className="overflow-hidden pb-2 relative z-20">
          <motion.h1 
            variants={textReveal} initial="hidden" animate="visible"
            className="heading-font text-[22vw] sm:text-[18vw] md:text-[12vw] lg:text-[13rem] leading-[0.8] text-black"
          >
            SPICY
          </motion.h1>
        </div>
        
        {/* TANGY is z-40 (Bottle z-30 will go BEHIND it) */}
        <div className="overflow-hidden pb-4 relative z-40">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1, rotate: -2 }} 
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#ccff00] px-6 md:px-12 py-1 md:py-2 my-2 md:my-4 border-[3px] md:border-[6px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h1 className="heading-font text-[20vw] sm:text-[16vw] md:text-[11vw] lg:text-[12rem] leading-[0.85] text-black">
              TANGY
            </h1>
          </motion.div>
        </div>
        
        {/* SWEET is z-20 */}
        <div className="overflow-hidden pt-2 relative z-20">
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