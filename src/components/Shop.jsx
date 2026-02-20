import chilliImg from '../assets/chilli.jpg';
import sweetSauceImg from '../assets/sweet hot sauce.png';

export default function Shop() {
  const products = [
    { id: 1, name: "Chilli Flame", price: "£9.00", heat: "🌶️🌶️🌶️", image: chilliImg },
    { id: 2, name: "Sweet Hot", price: "£9.00", heat: "🌶️", image: sweetSauceImg }
  ];

  return (
    <section id="shop" className="py-32 px-6 md:px-12 lg:px-24 bg-[#f4f4f0] border-b-[6px] border-black relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-font text-5xl md:text-7xl mb-20 text-center tracking-tight">SHOP THE HEAT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white border-[4px] md:border-[6px] border-black p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-3 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-all duration-400 flex flex-col items-center group cursor-pointer">
              
              <div className="w-full h-80 bg-[#ebebeb] border-[4px] border-black mb-8 flex items-center justify-center p-6 overflow-hidden relative">
                {/* PRO EFFECT: Grayscale to Color on hover */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
              
              <div className="w-full flex justify-between items-end mb-8">
                <div className="flex flex-col text-left">
                  <h3 className="heading-font text-3xl tracking-tight">{product.name}</h3>
                  <span className="text-xl tracking-widest mt-2">{product.heat}</span>
                </div>
                <span className="heading-font text-3xl">{product.price}</span>
              </div>
              
              <button className="w-full bg-[#ccff00] text-black px-6 py-5 font-bold text-xl uppercase border-[4px] border-black hover:bg-black hover:text-[#ccff00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}