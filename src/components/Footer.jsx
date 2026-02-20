export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 text-center border-t-8 border-[#ccff00] relative z-50">
      <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter mb-8 text-[#ccff00]">Stay Saucy</h2>
      <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-12">
        <input 
          type="email" 
          placeholder="ENTER YOUR EMAIL" 
          className="flex-1 bg-white text-black font-bold px-6 py-4 border-4 border-[#ccff00] focus:outline-none placeholder-gray-500 uppercase"
        />
        <button className="bg-[#ccff00] text-black font-black uppercase px-8 py-4 border-4 border-[#ccff00] hover:bg-white transition-colors cursor-pointer">
          Subscribe
        </button>
      </div>
      <div className="flex justify-center gap-8 font-bold uppercase text-sm tracking-widest text-gray-400">
        <a href="#" className="hover:text-[#ccff00]">Instagram</a>
        <a href="#" className="hover:text-[#ccff00]">TikTok</a>
        <a href="#" className="hover:text-[#ccff00]">Contact</a>
      </div>
      <p className="mt-12 text-gray-600 font-bold text-xs uppercase">© 2026 Koffiracha.</p>
    </footer>
  );
}