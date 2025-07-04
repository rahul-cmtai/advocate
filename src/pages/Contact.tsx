import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-display text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your legal needs? I'm here to help you navigate complex legal challenges with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-8 glow-gold-hover">
                <h2 className="text-2xl font-semibold text-foreground mb-6 font-heading">
                  Send Me a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Your full name" 
                        className="mt-2 bg-muted/50 border-border/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="mt-2 bg-muted/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX" 
                        className="mt-2 bg-muted/50 border-border/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="issue" className="text-foreground">Legal Issue Type</Label>
                      <Select>
                        <SelectTrigger className="mt-2 bg-muted/50 border-border/50">
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="contract">Contract Drafting/Review</SelectItem>
                          <SelectItem value="fintech">Fintech & Banking</SelectItem>
                          <SelectItem value="ibc">IBC & Insolvency</SelectItem>
                          <SelectItem value="ai">AI & Technology Law</SelectItem>
                          <SelectItem value="other">Other Legal Matter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your legal requirements in detail..."
                      rows={6}
                      className="mt-2 bg-muted/50 border-border/50"
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-gold w-full">
                    Submit
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-card p-6 glow-gold-hover">
                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  Direct Contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground text-sm">+91 [Phone Number]</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl">💬</span>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">Quick consultation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl">📧</span>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">legal@gaurisaraswat.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-medium text-foreground">Office</p>
                      <p className="text-muted-foreground text-sm">
                        [Office Address]<br />
                        [City, State - PIN]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl">💼</span>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-muted-foreground text-sm">Professional network</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 glow-gold-hover">
                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  Office Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">By Appointment</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">Emergency consultations</span> available 24/7 for urgent legal matters.
                  </p>
                </div>
              </Card>

              <Card className="glass-card p-6 glow-gold-hover">
                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  Response Time
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Email Queries</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone Calls</p>
                    <p className="text-sm text-muted-foreground">Same day return</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Consultation Requests</p>
                    <p className="text-sm text-muted-foreground">Within 48 hours</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-foreground mb-4">
              Visit My <span className="text-primary">Office</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of the business district for your convenience
            </p>
          </div>

          <Card className="glass-card p-8 glow-gold-hover">
            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-muted-foreground">Interactive map would be embedded here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  [Office Address] - Easily accessible by metro and road
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Contact;