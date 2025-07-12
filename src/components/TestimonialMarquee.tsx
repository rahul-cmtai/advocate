import Marquee from "react-fast-marquee";
import { Card } from "@/components/ui/card";

interface TestimonialProps {
  text: string;
  name: string;
  role?: string;
}

const testimonials: TestimonialProps[] = [
  {
    text: "Gauri's subject-matter expertise is commendable. She has the knowledge and skills to provide the best legal solutions. Her professionalism and dedication are unmatched.",
    name: "Shivendra Sahai Srivastava",
    role: "@Adobe | Customer and Employee Experience"
  },
  {
    text: "Gauri has excellent command in Corporate Matters. I found her confident, punctual, well-read, and knowledgeable. Her attention to detail and craftsmanship skills are highly developed.",
    name: "Dushyant Tiwari",
    role: "Advocate-on-Record at Supreme Court of India"
  },
  {
    text: "Gauri has been my legal advisor for years, helping me close tough business deals and legal battles. Her knowledge of corporate law and business scenarios is exceptional.",
    name: "Nishant Manchanda",
    role: "Business Operations & Supply Chain"
  },
  {
    text: "I have worked with Gauri on several transactions and highly recommend her for contract drafting and vetting. Her expertise in legal documentation is outstanding.",
    name: "Subhash Bhutoria",
    role: "Forbes India Leading Individual Lawyer"
  },
  {
    text: "Gauri is a thorough and knowledgeable legal professional. She is a good listener who brings out the best legal solutions. Her deliverables are clear and well-conceptualized.",
    name: "Ashwani Shukla",
    role: "Supplier Management & Strategic Sourcing"
  },
  {
    text: "Working with Gauri has been a great experience. Her insights are always valuable and she demonstrates in-depth knowledge of her domain. A truly proficient professional.",
    name: "Shubham J.",
    role: "BD, Projects & NSO"
  },
  {
    text: "Gauri's mentorship at Investment Bankers Forum shows why she is among industry great leaders. Her guidance in compliance and legal matters is invaluable and highly respected.",
    name: "Syed Ali Jafri, ACSI, ICA",
    role: "CISI IOC Trainer | Surveillance"
  }
];

const TestimonialCard = ({ text, name, role }: TestimonialProps) => {
  return (
    <Card className="testimonial-card p-8 mx-4 my-2 w-96 h-80 flex flex-col justify-between bg-background/50 backdrop-blur-sm border-2 border-orange-accent/20 hover:border-orange-accent/40 transition-all duration-300">
      <div className="flex-1">
        <div className="text-4xl text-orange-accent mb-4 font-serif">"</div>
        <p className="text-foreground font-medium leading-relaxed text-base">{text}</p>
      </div>
      <div className="border-t border-border/50 pt-4 mt-6">
        <p className="text-orange-accent font-semibold text-lg">{name}</p>
        {role && <p className="text-muted-foreground text-sm mt-1">{role}</p>}
      </div>
    </Card>
  );
};

const TestimonialMarquee = () => {
  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="heading-large text-foreground mb-2">
          Client <span className="text-orange-accent">Testimonials</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear what my clients have to say about their experience working with me
        </p>
      </div>
      
      <Marquee
        gradient={true}
        gradientColor="rgb(245, 245, 245)"
        gradientWidth={50}
        speed={80}
        pauseOnHover={true}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </Marquee>
    </section>
  );
};

export default TestimonialMarquee; 