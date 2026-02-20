import { useState } from "react";
// Ye real, crisp icons aapki app ko premium look denge
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. PREMIUM ANNOUNCEMENT BAR (Top Black Strip) */}
      <div className="w-full bg-black text-[#ccff00] text-center py-2 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] z-50 relative">
        Free Worldwide Shipping on 3+ Bottles
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="sticky top-0 w-full bg-white border-b-[3px] md:border-b-[6px] border-black z-50 px-4 md:px-8 py-3 md:py-4 flex justify-between items-center shadow-sm">
        
        {/* MOBILE MENU ICON (Left Side only on Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl text-black hover:text-[#ccff00] transition-colors p-1"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* LOGO (Center on Mobile, Left on Desktop) */}
        <div className="text-2xl md:text-3xl font-black uppercase tracking-tighter cursor-pointer absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-50">
          Koffiracha<span className="text-[#ccff00]">.</span>
        </div>

        {/* DESKTOP LINKS (Center) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 font-black uppercase text-sm tracking-widest">
          <a href="#shop" className="hover:text-[#ccff00] transition-colors">Shop</a>
          <a href="#story" className="hover:text-[#ccff00] transition-colors">Story</a>
          <a href="#reviews" className="hover:text-[#ccff00] transition-colors">Reviews</a>
        </div>

        {/* CART BUTTON (Right Side) */}
        <div className="flex items-center gap-4 relative z-50">
          <button className="flex items-center gap-2 md:gap-3 bg-[#ccff00] text-black border-[2px] md:border-[3px] border-black px-3 py-1.5 md:px-5 md:py-2 font-black text-xs md:text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#ccff00] active:translate-y-[2px] active:shadow-none transition-all">
            <FaShoppingCart className="text-sm md:text-lg" />
            {/* "Cart" word mobile par hide ho jayega, sirf icon aur number dikhega */}
            <span className="hidden sm:inline">Cart</span> 
            <span>(0)</span>
          </button>
        </div>
      </nav>

      {/* 3. MOBILE SLIDE-DOWN MENU */}
      <div 
        className={`fixed top-[50px] left-0 w-full bg-white border-b-[4px] border-black z-40 flex flex-col items-center py-10 gap-8 font-black uppercase text-3xl tracking-tighter transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0 shadow-[0_15px_0_0_rgba(0,0,0,1)]' : '-translate-y-[150%]'}`}
      >
        <a href="#shop" onClick={() => setIsOpen(false)} className="hover:text-[#ccff00] hover:scale-110 transition-transform">Shop</a>
        <a href="#story" onClick={() => setIsOpen(false)} className="hover:text-[#ccff00] hover:scale-110 transition-transform">Our Story</a>
        <a href="#reviews" onClick={() => setIsOpen(false)} className="hover:text-[#ccff00] hover:scale-110 transition-transform">Reviews</a>
      </div>
    </>
  );
}