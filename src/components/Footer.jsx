
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer({ handleForward }) {
  return (
    <footer id="app-footer" className="w-full bg-[#070707] border-t border-white/5 pt-16 pb-12 transition-all duration-300 mt-20 relative z-10 text-xs text-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvplkPMrDgyMCRbg4UQ5nijdyGQf5YmSElPWC1SQG_80STZlJqtCtVtdtTs5EIWXDCAUL_-dpKiRdCYCBnxupYLq95Rc-iPK6vmzrktffgUIFyLRf1Ies0Hfj2181qAFhYAtrHO0d36oAfbYjZE5kFDGjeRWik4UXx5Md8XXsXNhOOArrMSF0stRFrMc5MBDXvJolEoSEuNS9deiD-Ihq9rdjkxiYzZfzp6Q30tHlb8R-aOhuNjXa7u0sJF"
                alt="NayePankh Logo"
                referrerPolicy="no-referrer"
                className="h-8 w-8 object-contain rounded-full bg-white p-0.5"
              />
              <span className="font-serif text-lg font-bold text-primary tracking-tight">
                NayePankh Foundation
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              We are one of the closest student alliance charitable foundations in Uttar Pradesh. Running active daily street kitchens, distributing thick blankets to fight deadly winters, and packing primary educational resources.
            </p>
            <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-1 rounded">
              Section 80G Compliant  |  Central NGO Darpan Approved
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-cream font-mono border-b border-white/5 pb-2">
              External Forwarding Services
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleForward('donate')}
                className="hover:text-primary transition-colors text-left flex items-center gap-1 cursor-pointer"
              >
                Philanthropy Portal <ExternalLink size={10} />
              </button>
              <button
                onClick={() => handleForward('certificates')}
                className="hover:text-primary transition-colors text-left flex items-center gap-1 cursor-pointer"
              >
                Our Certificates &amp; Audits <ExternalLink size={10} />
              </button>
              <button
                onClick={() => handleForward('newspaper')}
                className="hover:text-primary transition-colors text-left flex items-center gap-1 cursor-pointer"
              >
                Newspaper Recognition <ExternalLink size={10} />
              </button>
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-cream font-mono border-b border-white/5 pb-2">
              Contact Office
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center gap-2">
                <Mail size={13} className="text-primary" />
                <span>contact@nayepankh.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={13} className="text-primary" />
                <span>+91-8318500748</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={13} className="text-primary shrink-0 mt-0.5" />
                <span>Kanpur Main Office &amp; Ghaziabad Hub, Uttar Pradesh, India</span>
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[11px] text-text-muted/60">
            © {new Date().getFullYear()} NayePankh Foundation. All Rights Reserved. UP Registered Charitable NGO (80G &amp; 12A).
          </p>
          <p className="text-[11px] text-text-muted/60">
            Assisting and feeding underserved humans with dignity since 2019.
          </p>
        </div>
      </div>
    </footer>
  );
}
