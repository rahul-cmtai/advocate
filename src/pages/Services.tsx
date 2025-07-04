import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { getCollection } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  icon?: string;
  imageUrl?: string;
  features?: string[];
  pricing?: string;
}

// Fallback service data if Firestore services are not available
const originalServices = [
  {
    id: "1",
    title: "Contract Drafting & Review",
    description: "Comprehensive contract services ensuring your agreements are ironclad and business-friendly.",
    icon: "📄",
    features: [
      "SaaS and Software Licensing Agreements",
      "Non-Disclosure and Confidentiality Agreements",
      "Employment and Consulting Contracts",
      "Partnership and Joint Venture Agreements",
      "Terms of Service and Privacy Policies",
      "Commercial and Supply Agreements"
    ],
    pricing: "Starting from ₹15,000"
  },
  {
    id: "2",
    title: "Fintech & Banking Disputes",
    description: "Navigate complex financial regulations and resolve banking disputes effectively.",
    icon: "💳",
    features: [
      "RBI Compliance and Regulatory Advice",
      "SARFAESI Action Defense",
      "Cheque Bounce and Payment Disputes",
      "Payment Gateway Legal Issues",
      "Digital Banking Compliance",
      "Cryptocurrency Legal Framework"
    ],
    pricing: "Case-based pricing"
  },
  {
    id: "3",
    title: "IBC & Fraud Resolution",
    description: "Expert representation in insolvency proceedings and corporate restructuring matters.",
    icon: "⚖️",
    features: [
      "IBC Proceedings and Applications",
      "NCLT Representation",
      "Corporate Insolvency Resolution Process",
      "Liquidation Proceedings",
      "Fraudulent Trading Cases",
      "Asset Recovery and Restructuring"
    ],
    pricing: "Consultation required"
  },
  {
    id: "4",
    title: "LegalTech & AI Governance",
    description: "Cutting-edge legal counsel for AI startups and technology companies.",
    icon: "🤖",
    features: [
      "AI and Machine Learning Compliance",
      "Data Protection and Privacy Laws",
      "Intellectual Property Protection",
      "Technology Transfer Agreements",
      "Startup Legal Framework",
      "Emerging Technology Regulations"
    ],
    pricing: "Starting from ₹25,000"
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="p-0">
        {service.imageUrl ? (
          <div className="h-48 overflow-hidden">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
            {service.icon && (
              <div className="text-4xl text-primary">
                <i className={service.icon}></i>
              </div>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-muted-foreground mb-4">
          {service.shortDescription || service.description}
        </p>
        {service.pricing && (
          <p className="font-medium text-primary">{service.pricing}</p>
        )}
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate(`/services/${service.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        
        // Try to get services from Firestore
        const servicesData = await getCollection('services');
        
        if (servicesData.length > 0) {
          // Sort services alphabetically by title
          const sortedServices = [...servicesData].sort((a, b) => 
            a.title.localeCompare(b.title)
          );
          
          setServices(sortedServices);
          setFilteredServices(sortedServices);
        } else {
          // If no Firestore data, use original data
          setServices(originalServices);
          setFilteredServices(originalServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        // If error, use original data as fallback
        setServices(originalServices);
        setFilteredServices(originalServices);
      } finally {
        setLoading(false);
      }
    };
    
    fetchServices();
  }, []);

  // Filter services based on search term
  useEffect(() => {
    if (!services.length) return;
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      const filtered = services.filter(service => 
        service.title.toLowerCase().includes(search) || 
        service.shortDescription?.toLowerCase().includes(search) || 
        service.description.toLowerCase().includes(search) ||
        service.features?.some(feature => feature.toLowerCase().includes(search)) ||
        service.pricing?.toLowerCase().includes(search)
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  }, [services, searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display text-foreground mb-6">
              Tailored <span className="text-primary">Legal Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Strategic legal guidance designed for innovators, entrepreneurs, and forward-thinking businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Controls */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search services..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="h-48 bg-muted" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id || index} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No Services Found</h3>
              <p className="text-muted-foreground">
                {searchTerm ? 'Try adjusting your search term.' : 'Check back soon for new services.'}
              </p>
              {searchTerm && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-large text-foreground mb-4">
              How I <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined process designed for efficiency and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Initial Consultation", desc: "Understand your legal needs and business objectives" },
              { step: "02", title: "Strategic Planning", desc: "Develop a tailored legal strategy for your situation" },
              { step: "03", title: "Implementation", desc: "Execute the legal solution with precision and care" },
              { step: "04", title: "Ongoing Support", desc: "Provide continued guidance and legal maintenance" }
            ].map((item, index) => (
              <Card key={index} className="glass-card p-6 text-center glow-gold-hover">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4 mx-auto shadow-[var(--glow-gold)]">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-heading">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card p-12 text-center max-w-3xl mx-auto glow-gold-hover">
            <h2 className="heading-medium text-foreground mb-6">
              Need help with your next <span className="text-primary">deal or dispute?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business faces unique legal challenges. Let's discuss how I can help you navigate yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gold">
                Get Legal Help Now
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-gold">
                View Case Studies
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-heading">
              Transparent <span className="text-primary">Pricing</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I believe in transparent, value-based pricing. Every case is unique, and I provide detailed cost estimates 
              after understanding your specific requirements during our initial consultation.
            </p>
            <Button className="btn-gold">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;