import Marquee from "react-fast-marquee";
import { Card } from "@/components/ui/card";

interface TestimonialProps {
  text: string;
  name: string;
  role?: string;
}

const testimonials: TestimonialProps[] = [
  {
    text: "Advocate Gauri's legal counsel was instrumental in helping our business navigate complex regulatory issues.",
    name: "Rajiv Mehta",
    role: "Business Owner"
  },
  {
    text: "The level of personal attention and dedication to my case was exceptional. Highly recommend!",
    name: "Priya Singh",
    role: "Client"
  },
  {
    text: "Gauri simplified complicated legal matters into actionable steps that saved our company time and money.",
    name: "Anand Kumar",
    role: "CEO, TechStart Ltd."
  },
  {
    text: "Professional, knowledgeable, and truly cares about getting the best outcome for her clients.",
    name: "Neha Sharma",
    role: "Entrepreneur"
  },
  {
    text: "Her expertise in contract law helped us secure a deal that exceeded our expectations.",
    name: "Vikram Patel",
    role: "Business Development Manager"
  },
  {
    text: "Clear communication and strategic thinking - exactly what we needed for our legal challenges.",
    name: "Meera Kapoor",
    role: "Small Business Owner"
  }
];

const TestimonialCard = ({ text, name, role }: TestimonialProps) => {
  return (
    <Card className="testimonial-card p-6 mx-4 my-2 w-80 h-64 flex flex-col justify-between">
      <div>
        <div className="text-3xl text-orange-accent mb-2">"</div>
        <p className="text-foreground font-medium mb-4">{text}</p>
      </div>
      <div className="border-t border-border/50 pt-3">
        <p className="text-orange-accent font-semibold">{name}</p>
        {role && <p className="text-muted-foreground text-sm">{role}</p>}
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