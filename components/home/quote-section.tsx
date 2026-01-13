export function QuoteSection() {
  return (
    <section className="py-24 bg-primary text-white text-center px-4 relative overflow-hidden">
       {/* Decorative Quotes */}
       <div className="absolute top-10 left-10 text-white/5 font-serif text-[200px] leading-none select-none">“</div>
       <div className="absolute bottom-10 right-10 text-white/5 font-serif text-[200px] leading-none rotate-180 select-none">“</div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <blockquote className="text-2xl md:text-4xl font-serif leading-relaxed font-light italic mb-8">
          “The digital landscape is ever-evolving; staying static is not an option in the transformation journey.”
        </blockquote>
        <cite className="not-italic flex flex-col items-center">
          <span className="text-xl font-bold tracking-wide">A. V. Subbarao</span>
          <span className="text-sm opacity-80 uppercase tracking-widest mt-2">Founder & CEO</span>
        </cite>
      </div>
    </section>
  );
}
