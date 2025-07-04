import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyChooseMe from "@/components/WhyChooseMe";
import PracticeAreas from "@/components/PracticeAreas";
import TestimonialSection from "@/components/TestimonialSection";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhyChooseMe />
      <PracticeAreas />
      <TestimonialMarquee />
      <TestimonialSection />
      
      {/* Final CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="cta-card glass-card p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto glow-orange-hover">
            <h2 className="cta-heading heading-large text-foreground mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
              Ready to take control of your <span className="text-orange-accent">legal roadmap?</span>
            </h2>
            <p className="cta-text text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Transform legal challenges into strategic advantages. Let's discuss how I can help protect and grow your business.
            </p>
            <Button 
              size="lg" 
              className="cta-button btn-gold mobile-cta-btn text-base md:text-lg w-full sm:w-auto" 
              asChild
            >
              <Link to="/contact">Schedule a Strategy Call</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
