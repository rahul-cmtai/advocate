import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "Corporate & Commercial Advisory",
      description:
        "Legal support across business structuring, contract negotiation, and regulatory compliance. Helping businesses build strong foundations and scale with legal clarity.",
      services: [
        "Incorporation & restructuring",
        "Shareholder & co-founder agreements",
        "ESOPs, MoUs & employment contracts",
        "General legal counsel for startups & SMEs",
      ],
      icon: "\uD83D\uDCC4", // 📄
    },
    {
      title: "Insolvency, IBC & Financial Regulation",
      description:
        "Comprehensive legal solutions for businesses facing financial stress or regulatory hurdles. Informed by experience at the Insolvency and Bankruptcy Board of India (IBBI).",
      services: [
        "IBC strategy & NCLT representation",
        "Forensic audit & fraudulent transaction review",
        "SARFAESI & recovery matters",
        "RBI/SEBI/MCA regulatory compliance",
      ],
      icon: "\u2696\uFE0F", // ⚖️
    },
    {
      title: "Contract Law, Tech & Data Compliance",
      description:
        "Drafting robust, scalable legal frameworks for SaaS, IP, platform operations, and privacy compliance in tech-first businesses.",
      services: [
        "SaaS & software licensing",
        "NDAs, IP, and commercial contracts",
        "AI governance & data privacy (GDPR/PDP Bill)",
        "Platform terms, disclaimers & cloud contracts",
      ],
      icon: "\uD83D\uDCDC", // 📜
    },
    {
      title: "Dispute Resolution & Criminal Defense",
      description:
        "Strategic representation in commercial disputes and criminal cases—including white-collar offenses and sensitive litigation—across jurisdictions.",
      services: [
        "Cheque bounce & commercial disputes",
        "POCSO, IPC 376 & criminal defense",
        "Bail & FIR quashing",
        "Consumer & contract enforcement cases",
      ],
      icon: "\u2694\uFE0F", // ⚔️
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-large text-foreground mb-4">
            Core <span className="text-orange-accent">Practice Areas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Legal expertise tailored for startups, corporates, and innovation-led businesses
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
                    {`${index + 1}. ${area.title}`}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-orange-accent mb-2">Key Services:</p>
                    <ul className="space-y-1">
                      {area.services.map((service, serviceIndex) => (
                        <li
                          key={serviceIndex}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-[hsl(var(--orange))] rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
              <Link to="/services">Learn More</Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;