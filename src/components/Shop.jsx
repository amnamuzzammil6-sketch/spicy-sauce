import chilliImg from '../assets/chilli.jpg';
import sweetSauceImg from '../assets/sweet hot sauce.png';

export default function Shop() {
  const products = [
    { id: 1, name: "Chilli Flame", price: "£9.00", heat: "🌶️🌶️🌶️", image: chilliImg },
    { id: 2, name: "Sweet Hot", price: "£9.00", heat: "🌶️", image: sweetSauceImg }
  ];

  return (
    <section id="shop" className="py-24 px-6 md:px-12 lg:px-24 bg-[#f4f4f0] border-b-8 border-black relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase text-center tracking-tighter">Shop the Heat</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white border-4 border-black p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col items-center group cursor-pointer">
              
              {/* Product Image Container */}
              <div className="w-full h-80 bg-[#f8f8f8] border-4 border-black mb-6 flex items-center justify-center p-4 overflow-hidden relative">
                {/* Agar in images ka background white hai, toh mix-blend-multiply use karein */}
                <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"/>
              </div>
              
              {/* Product Details */}
              <div className="w-full flex justify-between items-end mb-6">
                <div className="flex flex-col text-left">
                  <h3 className="text-3xl font-black uppercase tracking-tight">{product.name}</h3>
                  <span className="text-xl tracking-widest mt-1">{product.heat}</span>
                </div>
                <span className="text-3xl font-black">{product.price}</span>
              </div>
              
              {/* Pro Add to Cart Button */}
              <button className="w-full bg-[#ccff00] text-black px-6 py-4 font-black text-xl uppercase border-4 border-black hover:bg-black hover:text-[#ccff00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}