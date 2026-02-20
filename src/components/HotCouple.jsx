// src/components/HotCouple.jsx
export default function HotCouple() {
  return (
    <section className="py-32 md:py-48 bg-white border-b-[6px] border-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Massive Tight Typography */}
      <div className="font-black text-[clamp(5rem,18vw,16rem)] leading-[0.75] uppercase tracking-[-0.05em] text-center w-full flex flex-col items-center justify-center text-black">
        <h2>HOT</h2>
        <h2>COUPLE</h2>
        <h2>HOTTER</h2>
        <h2>SAUCE</h2>
      </div>
    </section>
  );
}