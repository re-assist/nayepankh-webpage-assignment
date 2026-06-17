import { Clock } from 'lucide-react';

export default function LiveMetrics({ liveMeals, liveBlankets, liveStudents, liveVolunteers }) {
  return (
    <section id="live-metrics" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="glass-card rounded-xl p-8 border border-[#f2ca50]/15 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#f2ca50]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffe088]/80 font-mono flex items-center gap-1.5">
            <Clock size={12} className="text-[#f2ca50] animate-pulse" />
            Live Distribution Index
          </span>
          <span className="text-[10px] uppercase bg-emerald-500/10 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/20">
            ● Live Updates Active
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-2 sm:p-4 border-r border-white/5 last:border-0 md:last:border-r">
            <div className="text-xl sm:text-3xl font-bold text-[#f2ca50] font-mono tracking-tight">
              {liveMeals.toLocaleString()}+
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#A09D95] mt-2">
              Meals Sourced
            </div>
          </div>

          <div className="text-center p-2 sm:p-4 border-r border-white/5 md:last:border-r">
            <div className="text-xl sm:text-3xl font-bold text-[#ffe088] font-mono tracking-tight">
              {liveBlankets.toLocaleString()}+
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#A09D95] mt-2">
              Blankets Distributed
            </div>
          </div>

          <div className="text-center p-2 sm:p-4 border-r border-white/5 last:border-0">
            <div className="text-xl sm:text-3xl font-bold text-[#ffb77c] font-mono tracking-tight">
              {liveStudents.toLocaleString()}+
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#A09D95] mt-2">
              Students Sponsored
            </div>
          </div>

          <div className="text-center p-2 sm:p-4">
            <div className="text-xl sm:text-3xl font-bold text-[#f2ca50] font-mono tracking-tight">
              {liveVolunteers.toLocaleString()}+
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#A09D95] mt-2">
              Youth Volunteers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
