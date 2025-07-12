import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "Contract Drafting & Negotiation",
      description: "Comprehensive contract drafting and review tailored to your commercial goals, helping protect your interests and reduce risk.",
      services: ["SaaS Agreements", "Non-Disclosure & Confidentiality Agreements (NDAs)", "Employment & Consultant Contracts", "Shareholder & Co-founder Agreements", "IP Licensing & Technology Transfer Agreements", "Vendor & Commercial Contracts"],
      icon: "📄"
    },
    {
      title: "Fintech Compliance",
      description: "Legal advisory for fintech companies operating in complex and evolving regulatory frameworks, with a focus on compliance and risk mitigation.",
      services: ["RBI & SEBI Regulatory Compliance", "SARFAESI Proceedings & Recovery Strategy", "Banking & NBFC Dispute Resolution", "Payment Gateway Legal Structuring", "KYC/AML & Data Protection Advisory"],
      icon: "💳"
    },
    {
      title: "Insolvency & Bankruptcy Code (IBC)",
      description: "Specialized consultancy backed by prior experience with the Insolvency and Bankruptcy Board of India (IBBI). Providing strategic and results-driven representation in insolvency and restructuring matters.",
      services: ["Representation before NCLT & Appellate Forums", "Fraudulent Transaction Analysis", "Corporate Debt Restructuring", "Stakeholder Representation (IP, Debtor, Creditor)", "Transaction Audit & Forensic Report Review"],
      icon: "⚖️"
    },
    {
      title: "AI Legal Governance & Tech Law",
      description: "Proactive legal counsel for AI-driven and tech-focused businesses to ensure innovation stay compliant and protected in a digital-first world.",
      services: ["AI Governance & Risk Advisory", "GDPR & Indian Data Privacy Compliance", "Platform Terms, Disclaimers & Licensing", "Intellectual Property Protection & Assignment", "SaaS, Software Licensing & Cloud Service Contracts"],
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
            Specialized Legal Services for Modern Businesses and Innovation-Driven Entrepreneurs
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