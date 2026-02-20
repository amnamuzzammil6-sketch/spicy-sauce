// src/components/StorySection.jsx
export default function StorySection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#ccff00] border-b-[6px] border-black overflow-hidden relative">
      
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Massive Image with Thick Borders */}
        {/* Isme aap baad mein apni friends/eating wali image laga sakti hain */}
        <div className="relative w-full h-[50vh] md:h-[65vh] rounded-[2rem] md:rounded-[3rem] border-[6px] border-black overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform lg:-rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80" 
            alt="Friends enjoying food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Floating Brutalist Text Card */}
        {/* lg:-ml-16 creates the professional overlap effect over the image */}
        <div className="bg-white p-8 md:p-14 lg:p-16 rounded-[2rem] border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative z-20 lg:-ml-16 transform lg:rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
          
          <h3 className="font-black text-[clamp(2rem,6vw,4rem)] uppercase tracking-tighter mb-6 leading-[0.9]">
            When Coffee<br />
            <span className="text-gray-400">Super-Liked</span> Chilli
          </h3>
          
          <p className="font-bold text-lg md:text-2xl leading-snug mb-10 text-gray-800 tracking-tight">
            Inspired by our love for sriracha 🌶️ and our deep roots in specialty coffee ☕ we created a hot sauce to end all hot sauces.
          </p>
          
          <button className="w-full sm:w-auto bg-transparent text-black border-[4px] border-black px-10 py-5 font-black text-xl uppercase tracking-tighter hover:bg-[#ccff00] hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-full">
            Explore Chilli Flame
          </button>
        </div>

      </div>
    </section>
  );
}