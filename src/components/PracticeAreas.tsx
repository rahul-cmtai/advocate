import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "Contract Drafting",
      description: "Comprehensive contract drafting and review for SaaS agreements, NDAs, licensing deals, and commercial contracts.",
      services: ["SaaS Agreements", "NDAs & Confidentiality", "Licensing Contracts", "Employment Agreements"],
      icon: "📄"
    },
    {
      title: "Fintech Compliance",
      description: "Navigate complex fintech regulations, RBI compliance, SARFAESI actions, and banking dispute resolution.",
      services: ["RBI Compliance", "SARFAESI Actions", "Banking Disputes", "Payment Gateway Legal"],
      icon: "💳"
    },
    {
      title: "Insolvency (IBC)",
      description: "Expert representation in IBC proceedings, NCLT matters, and corporate restructuring with proven success.",
      services: ["IBC Proceedings", "NCLT Representation", "Corporate Restructuring", "Fraud Resolution"],
      icon: "⚖️"
    },
    {
      title: "AI Legal Governance",
      description: "Cutting-edge legal counsel for AI startups, data privacy compliance, and emerging technology regulations.",
      services: ["AI Compliance", "Data Privacy Laws", "IP Protection", "Tech Startup Legal"],
      icon: "🤖"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-large text-foreground mb-4">
            Core <span className="text-orange-accent">Practice Areas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized legal services tailored for modern businesses and innovative entrepreneurs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {practiceAreas.map((area, index) => (
            <Card 
              key={index}
              className="glass-card glow-orange-hover p-8 group"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3 font-heading">
                    {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-orange-accent mb-2">Key Services:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {area.services.map((service, serviceIndex) => (
                        <li 
                          key={serviceIndex}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-[hsl(var(--orange))] rounded-full mr-2"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-card p-8 max-w-2xl mx-auto glow-orange-hover">
            <h3 className="text-2xl font-semibold text-foreground mb-4 font-heading">
              Ready to Secure Your Legal Foundation?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert legal guidance tailored to your business needs
            </p>
            <Button size="lg" className="btn-gold" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;