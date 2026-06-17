
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function CertificatesHighlight({ handleForward }) {
  return (
    <section id="certifications-highlight" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5 font-mono">
            <ShieldCheck size={14} className="text-primary" />
            Government Trust &amp; Audits
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-cream font-bold leading-tight">
            100% Secure, Compliant, and Exempt from Tax
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed">
            <p>
              As a fully registered and legal trust, NayePankh offers Indian citizens maximum tax exemption options. Under <strong className="text-primary">Section 80G</strong> and <strong className="text-primary">Section 12A</strong>, you can claim significant rebates as specified under Central government codes.
            </p>
            <p>
              These certificates maintain absolute transparency for public oversight, guaranteeing that our fund movements contain no leakages.
            </p>
          </div>
          
          <div className="pt-2">
            <button
              onClick={() => handleForward('certificates')}
              className="inline-flex items-center gap-2 py-3 px-6 bg-transparent hover:bg-primary/5 border border-primary/30 hover:border-primary/70 text-primary text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer"
            >
              Inspect Official Certificates
              <ExternalLink size={13} />
            </button>
          </div>
        </div>

        <div className="glass-card rounded-xl p-8 border border-primary/20 space-y-6 relative overflow-hidden bg-linear-to-tr from-[#131212] via-[#1a1818] to-[#131212]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-base font-serif text-text-cream font-bold border-b border-white/5 pb-3">
            Official Tax Exemption Summary
          </h3>

          <div className="space-y-4 text-xs">
            <div className="flex justify-between items-center bg-black/30 p-3 rounded">
              <div>
                <p className="font-bold text-text-cream">Section 80G Approval</p>
                <p className="text-[10px] text-text-muted">Claim direct 50% deductions under IT rules</p>
              </div>
              <span className="font-mono text-[10px] text-primary font-bold border border-primary/25 px-2 py-0.5 rounded">
                80G Exemption
              </span>
            </div>

            <div className="flex justify-between items-center bg-black/30 p-3 rounded">
              <div>
                <p className="font-bold text-text-cream">Section 12A Registry</p>
                <p className="text-[10px] text-text-muted">Fully compliant charitable entity immunity</p>
              </div>
              <span className="font-mono text-[10px] text-[#ffe088] font-bold border border-[#ffe088]/25 px-2 py-0.5 rounded">
                12A Authenticated
              </span>
            </div>

            <div className="flex justify-between items-center bg-black/30 p-3 rounded">
              <div>
                <p className="font-bold text-text-cream">NITI Aayog NGO Darpan</p>
                <p className="text-[10px] text-text-muted">UP State society registration license</p>
              </div>
              <span className="font-mono text-[10px] text-secondary font-bold border border-secondary/25 px-2 py-0.5 rounded">
                UP Registered
              </span>
            </div>
          </div>
          
          <p className="text-[10px] text-text-muted/80 font-mono text-center">
            All official receipts are instantly dispatched upon online checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
