export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b-4 border-black z-50 px-4 md:px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="text-xl md:text-2xl font-black uppercase tracking-tighter cursor-pointer">
        Koffiracha<span className="text-[#ccff00]">.</span>
      </div>
      <div className="flex gap-4 md:gap-6 font-bold uppercase text-xs md:text-sm">
        <a href="#shop" className="hover:text-[#ccff00] transition-colors">Shop</a>
        <a href="#about" className="hover:text-[#ccff00] transition-colors hidden md:block">Our Story</a>
        <button className="flex items-center hover:text-[#ccff00] transition-colors">
          Cart [0]
        </button>
      </div>
    </nav>
  );
}