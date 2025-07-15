import { Button } from "@/components/ui/button";
import advocatePortrait from "@/assets/advocate-portrait.jpg";
// import legalHeroBg from "@/assets/legal-hero-bg.jpg"; // Remove local image
import { Link } from "react-router-dom";
import { Scale, Gavel, Landmark } from 'lucide-react';

const legalHeroBg = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#181C23',
        backgroundImage: `linear-gradient(120deg, rgba(22, 39, 69, 0.98) 60%, rgba(255,152,0,0.10) 100%), url(${legalHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Subtle legal pattern overlay (optional, can be removed if not wanted) */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(135deg, rgba(255,184,28,0.03) 0 2px, transparent 2px 40px)',
        mixBlendMode: 'overlay',
      }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-7 leading-tight">
              End Your <span className="bg-gradient-to-r from-[#FFB347] via-[#FF9800] to-[#FFB347] bg-clip-text text-transparent">Legal Battles</span>
              <br className="hidden md:block" />
              <span className="block text-2xl md:text-3xl font-semibold text-[#FFD580] mt-2 tracking-wide">In Court and On Contracts</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm Gauri Saraswat, a corporate lawyer – Your Strategic Legal Partner for Corporate Battles, IBC Recovery and Bulletproof Contracts. With 15+ years of litigation, insolvency resolutions and risk-proof contracting, I've protected 100+ businesses from costly legal disasters.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-gradient-to-r from-[#FFB347] to-[#FF9800] text-lg px-8 py-6 font-semibold shadow-lg hover:from-[#FF9800] hover:to-[#FFB347] hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-orange-300 border-0" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#FFB347] text-[#FF9800] text-lg px-8 py-6 font-semibold shadow-md hover:bg-[#FFB347]/10 hover:text-orange-700 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-orange-300"
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-3 bg-[#23272F]/80 rounded-xl px-5 py-3 shadow border border-[#FFB347]/30 min-w-[170px]">
                <Gavel className="w-8 h-8 text-[#FFB347]" />
                <div>
                  <div className="text-2xl font-bold text-[#FFB347]">15+</div>
                  <div className="text-sm text-gray-200 font-medium">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#23272F]/80 rounded-xl px-5 py-3 shadow border border-[#FFB347]/30 min-w-[170px]">
                <Landmark className="w-8 h-8 text-[#FFB347]" />
                <div>
                  <div className="text-2xl font-bold text-[#FFB347]">50 Cr+</div>
                  <div className="text-sm text-gray-200 font-medium">Clients Savings</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#23272F]/80 rounded-xl px-5 py-3 shadow border border-[#FFB347]/30 min-w-[170px]">
                <Scale className="w-8 h-8 text-[#FFB347]" />
                <div>
                  <div className="text-2xl font-bold text-[#FFB347]">100+</div>
                  <div className="text-sm text-gray-200 font-medium">Startups Helped</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Gold ring and soft shadow for rectangular image */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#FFB347] to-[#FF9800] opacity-80 blur-lg z-0" />
              <img
                src={advocatePortrait}
                alt="Advocate Gauri Saraswat"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-[#FFB347] z-10 bg-white"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-5 backdrop-blur-lg bg-white/60 shadow-xl border-2 border-[#FFB347] z-20 flex items-center gap-3">
                <Scale className="w-12 h-8 text-[#FF9800]" />
                <div>
                  <p className="text-base font-bold text-gray-900">Advocate Gauri Saraswat</p>
                  <p className="text-xs text-muted-foreground">Expert in Contract Law & (IBC) Insolvency and Bankruptcy Code Litigation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-10 h-14 border-2 border-[#FFB347] rounded-full flex justify-center items-start bg-[#181C23]/80 shadow-lg">
          <svg className="w-6 h-6 text-[#FF9800] mt-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;