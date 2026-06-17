
import { Apple, Shirt, School, ArrowRight } from 'lucide-react';

export default function Interventions({ handleForward }) {
  return (
    <section id="interventions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f2ca50]">WHAT WE DO</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#F9F6EE] font-bold">Deployments on the Ground</h2>
        <p className="text-sm text-[#A09D95] max-w-xl mx-auto leading-relaxed">
          Eliminating deep structural inequalities in Uttar Pradesh, Kanpur, Ghaziabad, and rural slum fields.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="glass-card hover:border-[#f2ca50]/40 transition-all duration-300 p-8 rounded-lg flex flex-col gap-5 group">
          <div className="h-12 w-12 rounded bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] group-hover:scale-105 transition-all">
            <Apple size={24} />
          </div>
          <div>
            <h3 className="text-lg font-serif text-[#F9F6EE] font-bold mb-3">Fresh Cooked Food</h3>
            <p className="text-xs sm:text-sm text-[#A09D95] leading-relaxed">
              Satisfying absolute hunger gaps by procuring authentic raw grains to formulate balanced hot meals. Distributed daily to marginal wage earners, construction site children, and roadside families.
            </p>
          </div>
          <button
            onClick={() => handleForward('donate')}
            className="mt-auto inline-flex items-center gap-1.5 text-xs text-[#f2ca50] font-bold uppercase tracking-wider hover:underline cursor-pointer pt-4 border-t border-white/5"
          >
            Support Food Drives <ArrowRight size={12} />
          </button>
        </div>

        {/* Card 2 */}
        <div className="glass-card hover:border-[#ffe088]/40 transition-all duration-300 p-8 rounded-lg flex flex-col gap-5 group">
          <div className="h-12 w-12 rounded bg-[#ffb77c]/10 flex items-center justify-center text-[#ffb77c] group-hover:scale-105 transition-all">
            <Shirt size={24} />
          </div>
          <div>
            <h3 className="text-lg font-serif text-[#F9F6EE] font-bold mb-3">Warm Clothes &amp; Blankets</h3>
            <p className="text-xs sm:text-sm text-[#A09D95] leading-relaxed">
              Protecting pavement dwellers from deadly winter cold waves. Our youth patrols coordinate midnight distribution loops to transport thick, highly insulating double-ply woolen blankets.
            </p>
          </div>
          <button
            onClick={() => handleForward('donate')}
            className="mt-auto inline-flex items-center gap-1.5 text-xs text-[#ffb77c] font-bold uppercase tracking-wider hover:underline cursor-pointer pt-4 border-t border-white/5"
          >
            Distribute Warmth <ArrowRight size={12} />
          </button>
        </div>

        {/* Card 3 */}
        <div className="glass-card hover:border-[#f2ca50]/40 transition-all duration-300 p-8 rounded-lg flex flex-col gap-5 group">
          <div className="h-12 w-12 rounded bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] group-hover:scale-105 transition-all">
            <School size={24} />
          </div>
          <div>
            <h3 className="text-lg font-serif text-[#F9F6EE] font-bold mb-3">NayePankh Pathshala</h3>
            <p className="text-xs sm:text-sm text-[#A09D95] leading-relaxed">
              Sponsoring educational setups, notebooks, backpacks, and primary clothing kits to slum children. We prevent families from pulling children from basic literacy to enter hazardous child labor.
            </p>
          </div>
          <button
            onClick={() => handleForward('donate')}
            className="mt-auto inline-flex items-center gap-1.5 text-xs text-[#f2ca50] font-bold uppercase tracking-wider hover:underline cursor-pointer pt-4 border-t border-white/5"
          >
            Sponsor School Kits <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
}
