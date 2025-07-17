import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: "⚖️",
    title: "15+ Years Experience",
    description: `Extensive experience in corporate law, contract drafting, and strategic legal advisory services across diverse industries.`
  },
  {
    icon: "🏛️",
    title: "IBC & NCLT Consultancy – Backed by IBBI Experience",
    description: `With two years of hands-on experience at the Insolvency and Bankruptcy Board of India (IBBI), I bring deep, policy-level understanding of the Insolvency and Bankruptcy Code (IBC).\n\nI provide strategic representation in NCLT proceedings, and advise on fraudulent transactions, and assist stakeholders with resolution strategies and compliance.`
  },
  {
    icon: "🤝",
    title: "Trusted by Startups",
    description: `Helping innovative companies navigate complex legal landscapes from incorporation to scaling and exit strategies. Expertise in co-founder agreements, ESOPs, and data-driven contract frameworks.`
  },
  {
    icon: "🛡️",
    title: "AI Law & Data Privacy Advisor",
    description: `Forward-looking legal counsel for businesses operating in the tech and AI space.\nSpecialized in:\n• AI Governance & Legal Risk\n• GDPR & Indian Data Privacy Compliance\n• SaaS, Software Licensing & Platform Policies\n• Intellectual Property & IP Assignment Agreements`
  }
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-large text-foreground mb-4">
            Why Choose My Legal Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold mb-2">
            Blending Legal Precision with Business Strategy
          </p>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto italic mb-2">
            ("I don't just advise - I engineer legal outcomes")
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            As a corporate lawyer with over 15 years of experience, I offer more than legal advice—I provide strategic legal solutions designed to empower businesses, manage risk, and drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 60
              }}
            >
              <Card
                className="glass-card p-4 sm:p-6 text-center group cursor-pointer h-full min-h-[320px] sm:min-h-[370px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(255,115,0,0.18)]"
              >
                <div className="flex flex-col flex-1 items-center justify-start">
                  <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 font-heading leading-snug">
                    {feature.title}
                  </h3>
                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed whitespace-pre-line text-left w-full mx-auto">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;