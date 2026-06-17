
import { Heart, ExternalLink } from 'lucide-react';

export default function Hero({ handleForward }) {
  return (
    <section id="hero" className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center select-none overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 rounded-full shadow-[0_0_15px_rgba(242,202,80,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          UP Govt Registered NGO  |  80G &amp; 12A Certified
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-cream font-bold tracking-tight leading-tight">
          Bringing Smiles to <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-[#ffe088] to-secondary">
            Underserved Indian Lives
          </span>
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          It is that easy to bring a smile on their faces. Join one of India's largest youth-led grassroots movements. Be it through financial support, skills, or your valuable time, your support guarantees immediate street-level dignity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <button
            id="hero-primary-btn"
            onClick={() => handleForward('donate')}
            className="w-full sm:w-auto bg-primary text-[#0a0a0a] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-[#ffe088] transition-all duration-300 shadow-[0_4px_20px_rgba(242,202,80,0.25)] hover:shadow-[0_4px_30px_rgba(242,202,80,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Donate to NayePankh
            <Heart size={14} className="fill-current" />
          </button>
          <button
            id="hero-secondary-btn"
            onClick={() => handleForward('certificates')}
            className="w-full sm:w-auto border border-primary/30 hover:border-primary/70 text-primary font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-primary/5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            View Government Certificates
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
