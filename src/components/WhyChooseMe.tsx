import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const WhyChooseMe = () => {
  const features = [
    {
      title: "15+ Years Experience",
      description: "Extensive experience in corporate law, dispute resolution, and legal consulting across diverse industries.",
      icon: "⚖️"
    },
    {
      title: "IBC & NCLT Litigation Expert",
      description: "Specialized expertise in Insolvency and Bankruptcy Code with proven track record in NCLT proceedings.",
      icon: "🏛️"
    },
    {
      title: "Trusted by Startups",
      description: "Helping innovative companies navigate complex legal landscapes from incorporation to scaling.",
      icon: "🚀"
    },
    {
      title: "AI Law & Data Privacy Advisor",
      description: "Forward-thinking counsel on emerging technologies, AI governance, and data protection regulations.",
      icon: "🤖"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-large text-foreground mb-4">
            Why Choose <span className="text-orange-accent">My Legal Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining traditional legal excellence with modern business understanding
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
                className="glass-card p-6 text-center group cursor-pointer min-h-[300px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_0_24px_8px_rgba(255,115,0,0.5)]"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;