import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    customSubject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubjectChange = (value: string) => {
    setForm({ ...form, subject: value, customSubject: "" });
  };

  const handleCustomSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, customSubject: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const finalSubject = form.subject === "Other" ? form.customSubject : form.subject;
      await addDoc(collection(db, "contactLeads"), {
        ...form,
        subject: finalSubject,
        createdAt: Timestamp.now(),
      });
      setSuccess("Your message has been sent successfully!");
      setForm({ name: "", email: "", phone: "", subject: "", customSubject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

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
          {success ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] py-16">
              <div className="max-w-xl w-full bg-background/80 rounded-xl shadow-lg p-10 text-center border border-border/50">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold mb-4 text-foreground font-heading">Thank You!</h2>
                <p className="text-lg text-muted-foreground mb-2">Your message has been received. I appreciate you reaching out and will get back to you as soon as possible.</p>
                <p className="text-md text-muted-foreground">For urgent matters, feel free to use the direct contact details below or check your email for confirmation.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="glass-card p-8 glow-gold-hover">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 font-heading">
                    Send Me a Message
                  </h2>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="Your full name" 
                          className="mt-2 bg-muted/50 border-border/50"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          className="mt-2 bg-muted/50 border-border/50"
                          value={form.email}
                          onChange={handleChange}
                          required
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
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="issue" className="text-foreground">Legal Issue Type</Label>
                        <Select value={form.subject} onValueChange={handleSubjectChange}>
                          <SelectTrigger className="mt-2 bg-muted/50 border-border/50">
                            <SelectValue placeholder="Select issue type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Contract Drafting/Review">Contract Drafting/Review</SelectItem>
                            <SelectItem value="Fintech & Banking">Fintech & Banking</SelectItem>
                            <SelectItem value="IBC & Insolvency">IBC & Insolvency</SelectItem>
                            <SelectItem value="AI & Technology Law">AI & Technology Law</SelectItem>
                            <SelectItem value="Other Legal Matter">Other Legal Matter</SelectItem>
                            <SelectItem value="Other">Other (Custom)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {form.subject === "Other" && (
                      <div>
                        <Label htmlFor="customSubject" className="text-foreground">Custom Subject *</Label>
                        <Input 
                          id="customSubject" 
                          type="text" 
                          placeholder="Please specify your legal issue..." 
                          className="mt-2 bg-muted/50 border-border/50"
                          value={form.customSubject}
                          onChange={handleCustomSubjectChange}
                          required={form.subject === "Other"}
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe your legal requirements in detail..."
                        rows={6}
                        className="mt-2 bg-muted/50 border-border/50"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {success && <div className="text-green-600 font-medium">{success}</div>}
                    {error && <div className="text-red-600 font-medium">{error}</div>}

                    <Button type="submit" size="lg" className="btn-gold w-full" disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
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
          )}
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