import { Users, CheckCircle } from 'lucide-react';

export default function VolunteerSignUp({
  activeVolunteerName,
  setActiveVolunteerName,
  activeVolunteerEmail,
  setActiveVolunteerEmail,
  activeVolunteerPhone,
  setActiveVolunteerPhone,
  isVolunteerRegistered,
  handleVolunteerSubmit
}) {
  return (
    <section id="volunteer-campaign" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="glass-card rounded-2xl p-6 sm:p-10 border border-primary/15 bg-linear-to-br from-black/55 to-black/30 relative">
        
        <div className="text-center space-y-3 mb-8">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffe088] font-mono flex items-center justify-center gap-1.5">
            <Users size={12} className="text-primary" /> Active Youth Mobilization
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-text-cream font-bold">Become a Student Volunteer</h3>
          <p className="text-xs sm:text-sm text-text-muted max-w-xl mx-auto leading-relaxed">
            Have skills, spare hours, or weekend availability? Share your contact information. Our nearest zonal lead will schedule a brief call.
          </p>
        </div>

        <form onSubmit={handleVolunteerSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[9px] uppercase font-bold text-text-muted mb-1 font-mono">Full Name *</label>
              <input
                type="text"
                required
                value={activeVolunteerName}
                onChange={(e) => setActiveVolunteerName(e.target.value)}
                placeholder="Rahul Mishra"
                className="w-full bg-white/5 border border-white/10 focus:border-primary px-3.5 py-2.5 text-xs text-text-cream rounded outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[9px] uppercase font-bold text-text-muted mb-1 font-mono">Email *</label>
              <input
                type="email"
                required
                value={activeVolunteerEmail}
                onChange={(e) => setActiveVolunteerEmail(e.target.value)}
                placeholder="rahul@example.com"
                className="w-full bg-white/5 border border-white/10 focus:border-primary px-3.5 py-2.5 text-xs text-text-cream rounded outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[9px] uppercase font-bold text-text-muted mb-1 font-mono">Phone Number *</label>
              <input
                type="tel"
                required
                value={activeVolunteerPhone}
                onChange={(e) => setActiveVolunteerPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full bg-white/5 border border-white/10 focus:border-primary px-3.5 py-2.5 text-xs text-text-cream rounded outline-none transition-colors"
              />
            </div>
          </div>

          {isVolunteerRegistered ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded text-center text-xs font-semibold flex items-center justify-center gap-2">
              <CheckCircle size={15} /> Thank you! Your submission is stored. Our regional head will contact you soon. ❤️
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-3.5 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 text-text-cream hover:text-primary font-bold text-xs uppercase tracking-widest text-center transition-all rounded flex items-center justify-center gap-2 cursor-pointer"
            >
              Submit Volunteer Profile
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
