import chilliImg from '../assets/chilli.jpg';
import sweetSauceImg from '../assets/sweet hot sauce.png';

export default function Shop() {
  const products = [
    { id: 1, name: "Chilli Flame", price: "£9.00", heat: "🌶️🌶️🌶️", image: chilliImg },
    { id: 2, name: "Sweet Hot", price: "£9.00", heat: "🌶️", image: sweetSauceImg }
  ];

  return (
    <section id="shop" className="py-24 md:py-32 px-4 md:px-12 lg:px-24 bg-[#f4f4f0] border-b-[6px] border-black relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-font text-5xl md:text-7xl mb-12 md:mb-20 text-center tracking-tight">SHOP THE HEAT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white border-[4px] md:border-[6px] border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:-translate-y-3 md:hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-all duration-400 flex flex-col items-center group cursor-pointer">
              
              <div className="w-full h-64 md:h-80 bg-[#ebebeb] border-[3px] md:border-[4px] border-black mb-6 flex items-center justify-center p-4 overflow-hidden relative">
                {/* MIX BLEND MULTIPLY removes white background. Grayscale is now only for md (desktop) */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply filter grayscale-0 opacity-100 md:grayscale md:opacity-80 md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
              
              <div className="w-full flex justify-between items-end mb-6">
                <div className="flex flex-col text-left max-w-[60%]">
                  <h3 className="heading-font text-xl md:text-3xl tracking-tight leading-none">{product.name}</h3>
                  <span className="text-sm md:text-xl tracking-widest mt-1">{product.heat}</span>
                </div>
                <span className="heading-font text-xl md:text-3xl">{product.price}</span>
              </div>
              
              <button className="w-full bg-[#ccff00] text-black px-6 py-4 md:py-5 font-bold text-lg md:text-xl uppercase border-[3px] md:border-[4px] border-black hover:bg-black hover:text-[#ccff00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none cursor-none">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}