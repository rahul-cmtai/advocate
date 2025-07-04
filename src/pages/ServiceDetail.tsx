import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getDocument } from "@/lib/firebase";
import { Check } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import legalHeroBg from "@/assets/legal-hero-bg.jpg";

interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  longDescription?: string;
  icon?: string;
  imageUrl?: string;
  features?: string[];
  pricing?: string;
  createdAt: any;
}

// Add back the original services data to ensure it works properly
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

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      if (!id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // First try to get from Firestore
        const serviceData = await getDocument('services', id);
        if (serviceData) {
          // Map Firestore data to Service type, providing defaults for missing fields
          const data = serviceData as Partial<Service>;
          setService({
            id: data.id || id,
            title: data.title || 'Untitled Service',
            description: data.description || 'No description available.',
            shortDescription: data.shortDescription || '',
            longDescription: data.longDescription || '',
            icon: data.icon || '📋',
            imageUrl: data.imageUrl || '',
            features: data.features || [],
            pricing: data.pricing || '',
            createdAt: data.createdAt || null,
          });
        } else {
          // If not found in Firestore, try to get from original data
          const originalService = originalServices.find(s => s.id === id);
          if (originalService) {
            setService({ ...originalService, createdAt: null });
          } else {
            setNotFound(true);
          }
        }
      } catch (error) {
        console.error('Error fetching service:', error);
        // If error occurred, try to get from original data
        const originalService = originalServices.find(s => s.id === id);
        if (originalService) {
          setService({ ...originalService, createdAt: null });
        } else {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  // Fallback services for testing
  const fallbackServices = [
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

  // If Firestore service is not found, try to use a fallback service
  useEffect(() => {
    if (notFound && id) {
      const fallbackService = fallbackServices.find(s => s.id === id);
      if (fallbackService) {
        setService(fallbackService as any);
        setNotFound(false);
      }
    }
  }, [notFound, id]);

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto py-24 px-4 min-h-screen">
          <Card className="glass-card p-10 max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/4 mb-8"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-full mb-8"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-3 bg-muted rounded w-full"></div>
              ))}
            </div>
          </Card>
        </div>
        <Footer />
      </>
    );
  }

  if (notFound || !service) {
    return (
      <>
        <Navigation />
        <div className="container mx-auto py-24 px-4 min-h-screen text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Service Not Found</h2>
          <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Navigation />
      {/* Service Details Banner - Modern, dynamic, with gradient and glassmorphism */}
      <div className="relative w-full bg-black py-32 md:py-44 flex items-center justify-center shadow-md overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0" style={{backgroundImage: `url(${legalHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter: 'brightness(0.85) contrast(1.1)'}} />
        {/* Gradient and noise overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-yellow-400/30 to-background/60 opacity-80 z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10 z-20" />
        <h1 className="relative z-30 text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg uppercase animate-fade-in font-display">
          {service?.title || 'Service Details'}
        </h1>
      </div>
      <main>
        {/* Service Hero Section - Glassmorphism, shimmer, and animation */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Service Image with shimmer and gradient overlay */}
              <div className="md:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-card animate-fade-in-up">
                  {service?.imageUrl ? (
                    <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 to-primary/10">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  ) : (
                    <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center animate-pulse">
                      <span className="text-7xl md:text-8xl text-primary drop-shadow-lg">{service?.icon || '📋'}</span>
                    </div>
                  )}
                </div>
              </div>
              {/* Service Info - glassmorphism, modern font, subtle animation */}
              <div className="md:w-1/2 w-full animate-fade-in-up delay-100">
                <div className="glass-card p-8 rounded-2xl shadow-xl backdrop-blur-md bg-white/70 dark:bg-black/40">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500 font-display">{service?.title}</h1>
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-muted-foreground font-medium">{service?.description}</p>
                  </div>
                  {service?.pricing && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-yellow-500 mb-2">Investment:</h3>
                      <p className="text-xl font-semibold text-yellow-400">{service.pricing}</p>
                    </div>
                  )}
                  <Button size="lg" className="w-full md:w-auto animate-bounce bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg">
                    Request Consultation
                  </Button>
                  <div className="mt-6">
                    <Link to="/services" className="inline-block text-primary hover:underline font-semibold transition-colors duration-200">
                      ← Back to Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Detailed Description - glassmorphism, modern font */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto glass-card p-8 rounded-2xl shadow-lg animate-fade-in-up delay-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display text-yellow-500">About This Service</h2>
              {service?.longDescription ? (
                <div className="prose prose-lg max-w-none" style={{ whiteSpace: 'pre-wrap' }}>
                  {service.longDescription}
                </div>
              ) : (
                <p className="text-muted-foreground">{service?.description}</p>
              )}
            </div>
          </div>
        </section>
        {/* Features Section - animated, glassmorphism */}
        {service?.features && service.features.length > 0 && (
          <section className="py-10 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto glass-card p-8 rounded-2xl shadow-lg animate-fade-in-up delay-300">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-display text-yellow-500">Services Included</h2>
                <div className="grid gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card/80 rounded-lg shadow hover:scale-[1.02] transition-transform duration-200">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        {/* CTA Section - more engaging, glassmorphism, modern font */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl shadow-xl animate-fade-in-up delay-400">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display text-yellow-500">Ready to Get Started?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Contact us today to discuss your case and learn how we can help you achieve the best possible outcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg animate-bounce">
                  <Link to="/contact">Contact Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Back to Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Floating Request Consultation Button for mobile */}
        <div className="fixed bottom-6 left-0 w-full flex justify-center z-50 md:hidden animate-fade-in-up delay-500">
          <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-xl w-11/12 max-w-md animate-bounce">
            Request Consultation
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail; 