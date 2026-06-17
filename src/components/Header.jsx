
import { Menu, X, Heart, ExternalLink } from 'lucide-react';

export default function Header({ mobileMenuOpen, setMobileMenuOpen, handleForward }) {
  return (
    <header id="app-header" className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div 
            id="brand-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary/40 to-secondary/20 blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvplkPMrDgyMCRbg4UQ5nijdyGQf5YmSElPWC1SQG_80STZlJqtCtVtdtTs5EIWXDCAUL_-dpKiRdCYCBnxupYLq95Rc-iPK6vmzrktffgUIFyLRf1Ies0Hfj2181qAFhYAtrHO0d36oAfbYjZE5kFDGjeRWik4UXx5Md8XXsXNhOOArrMSF0stRFrMc5MBDXvJolEoSEuNS9deiD-Ihq9rdjkxiYzZfzp6Q30tHlb8R-aOhuNjXa7u0sJF"
                alt="NayePankh Foundation"
                referrerPolicy="no-referrer"
                className="relative h-11 w-11 object-contain rounded-full bg-white p-0.5 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-primary tracking-tight leading-none group-hover:text-[#ffe088] transition-colors">
                NayePankh
              </span>
              <span className="text-[9px] text-text-muted font-bold tracking-widest mt-1">
                FOUNDATION
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs uppercase font-bold tracking-widest text-primary hover:text-[#ffe088] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleForward('certificates')}
              className="text-xs uppercase font-bold tracking-widest text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              Our Certificates <ExternalLink size={12} className="opacity-70" />
            </button>
            <button
              onClick={() => handleForward('newspaper')}
              className="text-xs uppercase font-bold tracking-widest text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              Newspaper Recognition <ExternalLink size={12} className="opacity-70" />
            </button>
          </nav>

          {/* CTA & Mobile Burger */}
          <div className="flex items-center gap-4">
            <button
              id="header-donate-btn"
              onClick={() => handleForward('donate')}
              className="relative overflow-hidden group bg-linear-to-r from-primary to-[#e6be44] text-[#0a0a0a] font-sans text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded hover:shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold">
                Donate Now
                <Heart size={13} className="fill-[#0a0a0a]" />
              </span>
            </button>

            <button
              id="mobile-burger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-text-cream hover:text-primary transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="md:hidden bg-[#0c0c0c] border-b border-primary/10 py-4 px-4 animate-fade-in absolute w-full left-0 top-20 shadow-2xl">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2.5 px-4 text-xs font-bold uppercase text-primary hover:bg-white/5 rounded transition-all"
            >
              Home
            </button>
            <button
              onClick={() => {
                handleForward('certificates');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2.5 px-4 text-xs font-bold uppercase text-text-muted hover:text-primary hover:bg-white/5 rounded transition-all flex items-center justify-between"
            >
              <span>Our Certificates</span>
              <ExternalLink size={12} />
            </button>
            <button
              onClick={() => {
                handleForward('newspaper');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2.5 px-4 text-xs font-bold uppercase text-text-muted hover:text-primary hover:bg-white/5 rounded transition-all flex items-center justify-between"
            >
              <span>Newspaper Recognition</span>
              <ExternalLink size={12} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
