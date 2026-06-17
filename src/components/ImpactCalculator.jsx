
import { Award, Apple, Shirt, School } from 'lucide-react';

export default function ImpactCalculator({ 
  calculatorValue, 
  setCalculatorValue, 
  mealImpact, 
  blanketImpact, 
  schoolKitImpact, 
  handleForward 
}) {
  return (
    <section id="impact-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-primary/15 shadow-xl">
        {/* Inputs Panel */}
        <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center gap-6 bg-black/40">
          <span className="text-[10px] uppercase tracking-widest font-bold text-primary font-mono flex items-center gap-1.5">
            <Award size={13} /> Golden Path Transparency Tool
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-text-cream font-bold leading-tight">
            Interactive Impact Estimator
          </h3>
          <p className="text-xs sm:text-sm text-[#A09D95] leading-relaxed">
            Every rupee donated is safely formatted, recorded, and deployed to buy raw commodities with absolute ground accountability. Slide the bar to simulate your contribution:
          </p>

          <div className="space-y-4 mt-2">
            <div className="flex justify-between items-center bg-black/50 px-5 py-4 rounded border border-primary/10">
              <span className="text-xs uppercase font-bold text-text-muted font-mono">Proposed Donation</span>
              <span className="text-2xl font-mono font-bold text-[#f2ca50]">₹ {calculatorValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              step="50"
              value={calculatorValue}
              onChange={(e) => setCalculatorValue(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
            />
            <div className="flex justify-between text-[10px] text-text-muted font-mono font-semibold">
              <span>Min: ₹100</span>
              <span>Mid: ₹5,000</span>
              <span>Max: ₹10,000</span>
            </div>
          </div>
        </div>

        {/* Slices of Output display */}
        <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-between gap-8 border-t lg:border-t-0 lg:border-l border-white/5 bg-white/1">
          <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary font-mono">
            Ground Value Sourced Directly:
          </h4>
          
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 rounded text-primary">
                  <Apple size={16} />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-text-cream">Daily Meals Cooked</span>
                  <span className="text-[11px] text-text-muted">₹35 per wholesome plate</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg sm:text-xl font-mono font-bold text-primary">{mealImpact}</span>
                <span className="text-[10px] text-text-muted block uppercase font-bold tracking-widest mt-0.5">Meals</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-secondary/10 rounded text-secondary">
                  <Shirt size={16} />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-text-cream">Double Blanket Warmers</span>
                  <span className="text-[11px] text-text-muted">₹250 per thick kit cover</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg sm:text-xl font-mono font-bold text-secondary">{blanketImpact}</span>
                <span className="text-[10px] text-text-muted block uppercase font-bold tracking-widest mt-0.5">Blankets</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 rounded text-[#f2ca50]">
                  <School size={16} />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-semibold text-[#F9F6EE]">Sponsor School kits</span>
                  <span className="text-[11px] text-[#A09D95]">₹600 sponsor packet</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg sm:text-xl font-mono font-bold text-[#f2ca50]">{schoolKitImpact}</span>
                <span className="text-[10px] text-[#A09D95] block uppercase font-bold tracking-widest mt-0.5">Kits</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleForward('donate')}
            className="relative overflow-hidden group bg-gradient-to-r from-[#f2ca50] to-[#e6be44] text-[#0a0a0a] font-bold text-xs uppercase tracking-widest py-4 rounded text-center shadow-[0_4px_15px_rgba(242,202,80,0.15)] hover:shadow-[0_4px_25px_rgba(242,202,80,0.4)] transition-all cursor-pointer"
          >
            Exempt Tax &amp; Donate ₹{calculatorValue.toLocaleString()} Now
          </button>
        </div>
      </div>
    </section>
  );
}
