// src/components/FeaturedIn.jsx
import Marquee from "react-fast-marquee";

export default function FeaturedIn() {
  const brands = ["FORBES", "VICE", "EATER", "GQ", "VOGUE", "BON APPÉTIT"];

  return (
    <section className="py-12 bg-white border-b-[6px] border-black">
        <h3 className="text-center font-black uppercase text-xl mb-8 tracking-widest">As Seen In</h3>
      <Marquee gradient={false} speed={50}>
        {brands.map((brand, index) => (
          <div key={index} className="mx-12">
            <span className="font-black text-4xl md:text-6xl uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 opacity-40 hover:opacity-100 transition-opacity cursor-default">
              {brand}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}