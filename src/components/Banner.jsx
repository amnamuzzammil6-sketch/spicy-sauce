import burgerImg from '../assets/burger.png';

export default function Banner() {
  return (
    <section className="w-full h-[40vh] md:h-[60vh] bg-[#f4f4f0] border-b-4 border-black relative overflow-hidden flex justify-center items-center">
      <img 
        src={burgerImg} 
        alt="Delicious Burger" 
        className="w-full h-full object-cover md:object-contain object-center"
      />
    </section>
  );
}