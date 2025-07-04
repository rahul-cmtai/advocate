import { Button } from "@/components/ui/button";
import advocatePortrait from "@/assets/advocate-portrait.jpg";
import legalHeroBg from "@/assets/legal-hero-bg.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 13, 13, 0.8), rgba(13, 13, 13, 0.9)), url(${legalHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="heading-display text-white mb-6">
              Strategic Legal Solutions for 
              <span className="text-orange-accent"> Modern Businesses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Helping startups, innovators, and global clients protect and grow with expert legal counsel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-gold text-lg px-8 py-6" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-gold text-lg px-8 py-6"
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="text-orange-accent font-semibold mr-1">15+</span> Years Experience
              </div>
              <div className="flex items-center">
                <span className="text-orange-accent font-semibold mr-1">500+</span> Cases Won
              </div>
              <div className="flex items-center">
                <span className="text-orange-accent font-semibold mr-1">100+</span> Startups Helped
              </div>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--orange))]/20 to-transparent rounded-2xl blur-2xl"></div>
              <img
                src={advocatePortrait}
                alt="Advocate Gauri Saraswat"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-2 border-[hsl(var(--orange))]/30 glow-orange-hover"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-lg p-4">
                <p className="text-sm font-medium text-foreground">Advocate Gauri Saraswat</p>
                <p className="text-xs text-muted-foreground">Expert in Contract Law & IBC Litigation</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;