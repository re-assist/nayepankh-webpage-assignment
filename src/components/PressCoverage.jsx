import { ExternalLink, ArrowRight } from 'lucide-react';

export default function PressCoverage({ handleForward }) {
  return (
    <section id="press-coverage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary font-mono">PUBLIC HONORS</span>
        <h2 className="font-serif text-3xl text-text-cream font-bold">Newspaper Features</h2>
        <p className="text-sm text-[#A09D95] max-w-lg mx-auto">
          Our daily work and young volunteer actions celebrated across regional paper headlines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Paper 1 */}
        <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full bg-[#111]/70 hover:border-[#ffe088]/20 transition-all duration-300">
          <div className="h-44 relative bg-black/40 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop" 
              alt="Blanket Drive"
              className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500"
            />
            <span className="absolute top-4 left-4 text-[9px] uppercase font-bold tracking-widest text-[#0a0a0a] bg-[#f2ca50] px-2.5 py-1 rounded font-mono">
              Dainik Jagran
            </span>
          </div>
          <div className="p-6 flex flex-col justify-between flex-1 gap-4">
            <div>
              <span className="text-[9px] font-mono text-[#A09D95] uppercase block">Winter Drive Post</span>
              <h3 className="text-base font-serif font-bold text-[#F9F6EE] leading-tight mt-1 animate-fade-in">
                नए पंख फाउंडेशन ने बांटे ५०० से अधिक कंबल
              </h3>
              <p className="text-xs text-[#A09D95] mt-2 leading-relaxed">
                संस्थापक प्रशांत शुक्ला ने मलिन बस्तियों में शीतलहर से सुरक्षा हेतु कंबल बांटे। यह अभियान पूरे जाड़े नियमित रूप से जारी रहेगा।
              </p>
            </div>
            <button
              onClick={() => handleForward('newspaper')}
              className="text-xs text-[#f2ca50] font-bold uppercase tracking-wider hover:underline flex items-center gap-1.5 self-start pt-2 cursor-pointer"
            >
              Inspect Paper Scan <ExternalLink size={11} />
            </button>
          </div>
        </div>

        {/* Paper 2 */}
        <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full bg-[#111]/70 hover:border-[#ffe088]/20 transition-all duration-300">
          <div className="h-44 relative bg-black/40 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" 
              alt="Slum Schooling"
              className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500"
            />
            <span className="absolute top-4 left-4 text-[9px] uppercase font-bold tracking-widest text-[#0a0a0a] bg-[#ffe088] px-2.5 py-1 rounded font-mono">
              The Times of India
            </span>
          </div>
          <div className="p-6 flex flex-col justify-between flex-1 gap-4">
            <div>
              <span className="text-[9px] font-mono text-[#A09D95] uppercase block">Educational Feature</span>
              <h3 className="text-base font-serif font-bold text-[#F9F6EE] leading-tight mt-1">
                Sponsoring Slum Children with Basic Primary School Kits
              </h3>
              <p className="text-xs text-[#A09D95] mt-2 leading-relaxed">
                Transforming primary literacy across regional sectors. Sponsors secure physical learning bundles for children in poverty zones.
              </p>
            </div>
            <button
              onClick={() => handleForward('newspaper')}
              className="text-xs text-[#ffe088] font-bold uppercase tracking-wider hover:underline flex items-center gap-1.5 self-start pt-2 cursor-pointer"
            >
              Inspect Paper Scan <ExternalLink size={11} />
            </button>
          </div>
        </div>

        {/* Paper 3 */}
        <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full bg-[#111]/70 hover:border-[#ffe088]/20 transition-all duration-300">
          <div className="h-44 relative bg-black/40 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop" 
              alt="Food Kitchen"
              className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500"
            />
            <span className="absolute top-4 left-4 text-[9px] uppercase font-bold tracking-widest text-[#0a0a0a] bg-[#ffb77c] px-2.5 py-1 rounded font-mono">
              Amar Ujala
            </span>
          </div>
          <div className="p-6 flex flex-col justify-between flex-1 gap-4">
            <div>
              <span className="text-[9px] font-mono text-[#A09D95] uppercase block">Hunger Operations</span>
              <h3 className="text-base font-serif font-bold text-[#F9F6EE] leading-tight mt-1">
                भूख के खिलाफ जंग में युवाओं की अनूठी मिसाल
              </h3>
              <p className="text-xs text-[#A09D95] mt-2 leading-relaxed">
                रेलवे स्टेशन के समीप प्रतिदिन ३०० गरीबों को मुफ्त पौष्टिक गरम भोजन वितरित कर रहा है नए पंख फाउंडेशन का छात्र संजाल।
              </p>
            </div>
            <button
              onClick={() => handleForward('newspaper')}
              className="text-xs text-[#ffb77c] font-bold uppercase tracking-wider hover:underline flex items-center gap-1.5 self-start pt-2 cursor-pointer"
            >
              Inspect Paper Scan <ExternalLink size={11} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => handleForward('newspaper')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f2ca50] hover:text-[#ffe088] transition-colors cursor-pointer"
        >
          Explore Full Publication Scan Archives
          <ArrowRight size={13} />
        </button>
      </div>
    </section>
  );
}
