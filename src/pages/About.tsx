import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import advocatePortrait from "@/assets/advocate-portrait.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Trophy, Briefcase, BookOpen, Award, Clock, Star } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2008",
      title: "Law Graduation",
      description: "Completed B.A. LL.B. (Hons.) from Aligarh Muslim University, building a strong foundation in constitutional, civil, and corporate legal frameworks.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      year: "2010",
      title: "LL.M in Corporate & Commercial Law",
      description: "Pursued LL.M. at Dr. Ram Manohar Lohiya National Law University, Lucknow, with a focus on corporate transactions, business regulations, and contract law—sharpening legal acumen in business-focused practice.",
      icon: <Award className="w-5 h-5" />
    },
    {
      year: "2010–2016",
      title: "Litigation & Early Regulatory Practice",
      description: "Started legal career under Senior Advocate Mr. Mahesh Chandra Saraswat, representing clients in criminal, civil, and commercial disputes across trial courts and administrative forums. Joined the Competition Commission of India (CCI) as a Law Expert, advising on anti-competitive agreements, market dominance cases, and regulatory policy.",
      details: [
        "Briefed Commission members on cases pending before judicial bodies",
        "Conducted legal research into competition trends and sectoral impact"
      ],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "2016–2020",
      title: "Public Sector & Insolvency Law Experience",
      description: "Served in key legal and research roles with prominent regulatory authorities:",
      details: [
        "Research Officer, Central Electricity Regulatory Commission (CERC) - Drafted legal responses for pending cases before the Supreme Court, High Courts, and Electricity Appellate Tribunal",
        "Research Associate, Insolvency and Bankruptcy Board of India (IBBI) - Contributed to formulation of legal responses and regulatory insights under the IBC, created framework for analyzing fraudulent transactions during insolvency proceedings"
      ],
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: "2020–Present",
      title: "Independent Counsel & Corporate Legal Consultant",
      description: "Founded and now lead a corporate legal consultancy serving startups, growth-stage companies, and established corporates across India and globally.",
      details: [
        "Advising on corporate structuring, co-founder/shareholder agreements, commercial contracts, ESOPs, and GDPR/data protection",
        "Representing clients in high-stakes matters across forums, including Tata Steel Limited and Agilus Diagnostics Limited",
        "Providing strategic counsel in IBC matters, NCLT/NCLAT representation, SARFAESI matters, and technology law",
        "Drafted and negotiated international contracts, including software license agreements, distribution deals, and cross-border MoUs"
      ],
      icon: <Star className="w-5 h-5" />
    },
    {
      year: "2021–Present",
      title: "Thought Leadership & LegalTech Advocacy",
      description: "Recognized speaker and commentator on legal innovation, business law, and compliance strategy.",
      details: [
        "Guest lectures at BVIMR, training programs with International Business Intelligence",
        "Legal podcasts & webinars on AI law, contracting excellence, and IBC trends",
        "Featured in SuperLawyer and Investopedia for insights on legal risk and business growth"
      ],
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const supportPoints = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Corporate & Transactional Advisory",
      description: "Legal structuring, business formation, shareholder arrangements, ESOPs, and general counsel services"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Contract Drafting & Commercial Agreements",
      description: "SaaS contracts, licensing, NDAs, employment agreements, co-founder deals, and MoUs tailored for scale and compliance"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Insolvency & Restructuring (IBC)",
      description: "IBC strategy, NCLT representation, fraudulent transaction analysis, and corporate debt resolution, backed by IBBI experience"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Fintech & Regulatory Compliance",
      description: "Advisory on RBI, SEBI, SARFAESI, and digital payments—plus GDPR and Indian data privacy frameworks"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Dispute Resolution & Criminal Defense",
      description: "Litigation in commercial disputes, cheque dishonour cases, and defense in complex criminal matters including POCSO and white-collar crime"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeInUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardHoverVariants = {
    hover: { 
      y: -5, 
      boxShadow: "0 10px 25px rgba(234, 179, 8, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
            
            {/* Left - Image with animations */}
            <motion.div 
              className="flex justify-center lg:justify-start lg:col-span-1"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className="relative max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                {/* Animated background glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange-accent/30 to-primary/20 rounded-2xl blur-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                ></motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-orange-accent opacity-70 rounded-tl-lg"
                  initial={{ opacity: 0, x: -20, y: -20 }}
                  animate={{ opacity: 0.7, x: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-primary opacity-70 rounded-br-lg"
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  animate={{ opacity: 0.7, x: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                ></motion.div>
                
                {/* Main image */}
                <motion.div
                  variants={imageVariants}
                  className="relative"
                >
                  <img
                    src={advocatePortrait}
                    alt="Advocate Gauri Saraswat"
                    className="relative w-64 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl shadow-2xl border-4 border-primary/30 glow-gold-hover"
                  />
                  
                  {/* Experience badge */}
                  <motion.div 
                    className="absolute -top-5 -right-5 bg-orange-accent text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      delay: 0.8
                    }}
                  >
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold">15+</div>
                      <div className="text-[10px] sm:text-xs">Years</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content with animations */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className="heading-display text-foreground mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                Meet <span className="text-orange-accent">Gauri Saraswat, Advocate</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-black font-semibold mb-4"
                variants={itemVariants}
              >
                Litigation | IBC & Contract Specialist | Regulatory & Technology Law Advisor
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed"
                variants={itemVariants}
              >
                I am a corporate lawyer with over 15+ years of experience helping businesses, startups, and institutions 
                navigate complex legal and regulatory landscape. My practice is focused on delivering business-aligned 
                legal solutions across corporate law, contractual obligations, insolvency matters and technology regulations.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed"
                variants={itemVariants}
              >
                My background includes serving at the Insolvency and Bankruptcy Board of India (IBBI), advising on complex 
                financial matters, drafting high-stakes commercial agreements, and representing clients in forums across India. 
                I combine legal precision with business understanding to help clients reduce risk, stay compliant, and grow with clarity.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed"
                variants={itemVariants}
              >
                Having worked with both private and public sector clients, I've advised on matters ranging from company 
                structuring and shareholder agreements to data privacy, financial regulations, and high-value disputes 
                in addition to my appearances before Supreme Court of India. My prior role at the Insolvency and Bankruptcy 
                Board of India (IBBI) allowed me to contribute to critical regulatory work in the IBC framework, further 
                deepening my understanding of corporate insolvency and stakeholder protection.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed"
                variants={itemVariants}
              >
                Beyond my practice, I am a regular speaker and legal educator, passionate about demystifying the law 
                for business leaders, legal professionals, and students.
              </motion.p>

              <motion.div variants={itemVariants}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                  <Button size="lg" className="btn-gold sm:mr-4 w-full sm:w-auto" asChild>
                    <Link to="/contact">📞 Contact Now</Link>
                  </Button>
                  <Button size="lg" className="btn-outline-orange w-full sm:w-auto" asChild>
                    <Link to="/services">📑 View Services</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas Section */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="heading-medium text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-accent">🛡️</span> Core Areas of Legal Expertise
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground mt-2">
              A multi-disciplinary practice grounded in law, shaped by experience, and aligned with business impact
            </motion.p>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-orange-accent to-primary rounded-full mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* 1. Corporate & Transactional Advisory */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 }, boxShadow: "0 10px 30px rgba(255, 152, 0, 0.15)" }}
            >
              <Card className="glass-card p-6 glow-orange-hover h-full">
                <div className="flex items-start gap-4 mb-2">
                  <div className="flex-shrink-0 bg-orange-accent p-3 rounded-full text-white text-2xl">📁</div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">1. Corporate & Transactional Advisory</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      From incorporation to investment, I advise businesses on structuring, stakeholder arrangements, governance, and strategic operations.
                    </p>
                    <div className="text-sm text-black font-semibold mb-1">Scope Includes:</div>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Business setup & restructuring</li>
                      <li>Shareholder, co-founder & board advisory</li>
                      <li>ESOPs, governance frameworks</li>
                      <li>Retainer counsel services for startups and SMEs</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 2. Contract Drafting & Commercial Transactions */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 }, boxShadow: "0 10px 30px rgba(255, 152, 0, 0.15)" }}
            >
              <Card className="glass-card p-6 glow-orange-hover h-full">
                <div className="flex items-start gap-4 mb-2">
                  <div className="flex-shrink-0 bg-orange-accent p-3 rounded-full text-white text-2xl">📄</div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">2. Contract Drafting & Commercial Transactions</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      Expertly crafted agreements that balance legal precision with business needs. Supporting scale, compliance, and investor readiness.
                    </p>
                    <div className="text-sm text-black font-semibold mb-1">Scope Includes:</div>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>SaaS, IP & licensing contracts</li>
                      <li>Vendor, services & consultancy agreements</li>
                      <li>Employment frameworks & confidentiality clauses</li>
                      <li>Cross-border MoUs & technology deals</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 3. Insolvency, IBC & Financial Regulation */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 }, boxShadow: "0 10px 30px rgba(255, 152, 0, 0.15)" }}
            >
              <Card className="glass-card p-6 glow-orange-hover h-full">
                <div className="flex items-start gap-4 mb-2">
                  <div className="flex-shrink-0 bg-orange-accent p-3 rounded-full text-white text-2xl">⚖️</div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">3. Insolvency, IBC & Financial Regulation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      Advisory and litigation informed by policy-level insights from IBBI. Focused on high-stakes matters in restructuring and regulatory compliance.
                    </p>
                    <div className="text-sm text-black font-semibold mb-1">Scope Includes:</div>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>NCLT/NCLAT proceedings</li>
                      <li>Insolvency resolution strategies</li>
                      <li>Transaction audit & forensic review</li>
                      <li>SARFAESI actions & RBI/SEBI compliance</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 4. Tech Law, Data Privacy & AI Compliance */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 }, boxShadow: "0 10px 30px rgba(255, 152, 0, 0.15)" }}
            >
              <Card className="glass-card p-6 glow-orange-hover h-full">
                <div className="flex items-start gap-4 mb-2">
                  <div className="flex-shrink-0 bg-orange-accent p-3 rounded-full text-white text-2xl">🤖</div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">4. Tech Law, Data Privacy & AI Compliance</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      Legal support for emerging technology companies navigating evolving laws in India and abroad.
                    </p>
                    <div className="text-sm text-black font-semibold mb-1">Scope Includes:</div>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>AI law & ethical governance</li>
                      <li>GDPR & Indian data protection frameworks</li>
                      <li>Platform terms & digital risk review</li>
                      <li>SaaS/cloud contracts & IP protection</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* 5. Dispute Resolution & Criminal Defense */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 }, boxShadow: "0 10px 30px rgba(255, 152, 0, 0.15)" }}
              className="md:col-span-2 mx-auto max-w-xl"
            >
              <Card className="glass-card p-6 glow-orange-hover h-full">
                <div className="flex items-start gap-4 mb-2">
                  <div className="flex-shrink-0 bg-orange-accent p-3 rounded-full text-white text-2xl">⚔️</div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">5. Dispute Resolution & Criminal Defense</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      Strategic litigation services in both commercial and criminal matters, including white-collar crimes, POCSO, and contractual enforcement.
                    </p>
                    <div className="text-sm text-black font-semibold mb-1">Scope Includes:</div>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Cheque bounce, breach of contract & consumer claims</li>
                      <li>Criminal defense</li>
                      <li>Bail, FIR quashing, and trial strategy</li>
                      <li>Cross-jurisdictional litigation management</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-muted/50 overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUpVariants}
          >
            <h2 className="heading-large text-foreground mb-4">
              Career <span className="text-orange-accent">Timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Journey of Legal Expertise, Policy-Level Insight & Business-Focused Advisory
            </p>

            {/* Decorative element */}
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-orange-accent to-primary rounded-full mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerVariants}
          >
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative flex items-start mb-12 last:mb-0"
                variants={fadeInUpVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                initial="hidden"
                custom={index}
              >
                {/* Timeline Line */}
                <motion.div 
                  className="absolute left-6 top-12 w-0.5 bg-border"
                  style={{ height: index === timeline.length - 1 ? 0 : '100%' }}
                  initial={{ height: 0 }}
                  whileInView={{ height: index === timeline.length - 1 ? 0 : '100%' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
                
                {/* Timeline Dot */}
                <motion.div 
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-8 relative z-10 shadow-[var(--glow-gold)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + (index * 0.1) 
                  }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 rounded-full bg-orange-accent opacity-30"
                    style={{
                      animation: `pulse 2s infinite ${index * 0.5}s`
                    }}
                  ></div>
                  <span className={item.year.split('–').pop().length > 4 ? "text-[10px] sm:text-xs truncate" : ""}>
                    {item.year.split('–').pop()}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex-1"
                  whileHover="hover"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <motion.div variants={cardHoverVariants}>
                    <Card className="glass-card p-6 glow-orange-hover">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-orange-accent/20 p-2 rounded-full text-orange-accent">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground font-heading">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      {item.details && (
                        <div className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-accent rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Legal Philosophy */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="glass-card p-8 md:p-12 glow-orange-hover relative overflow-hidden">
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-accent/20 to-primary/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 90, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              ></motion.div>

              <motion.div 
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-orange-accent/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, -90, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
              ></motion.div>

              <motion.h2 
                className="heading-medium text-foreground mb-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My Legal <span className="text-orange-accent">Philosophy</span>
              </motion.h2>
              
              <motion.blockquote 
                className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed font-heading mb-6 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-5xl text-orange-accent absolute -top-6 -left-2 opacity-20">"</span>
                "Law should enable growth, not limit it."
                <span className="text-5xl text-orange-accent absolute -bottom-10 -right-2 opacity-20">"</span>
              </motion.blockquote>
              
              <motion.p 
                className="text-lg text-orange-accent font-semibold mb-6 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                This belief is at the heart of every legal strategy I design.
              </motion.p>
              
              <motion.div 
                className="space-y-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I approach the law not as a barrier, but as a tool to empower innovation, manage risk, and support long-term business growth. My goal is to deliver proactive legal counsel—advice that not only addresses current issues but anticipates future challenges and unlocks new opportunities.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By combining deep legal expertise with a practical understanding of business, I craft solutions that are not just compliant, but commercially strategic. Whether drafting complex agreements or navigating regulatory frameworks, I focus on making the law work for your business—not the other way around.
                </p>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-muted/30 overflow-hidden relative">
        {/* Background decorative elements */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-accent/10 to-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 45, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary/10 to-orange-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -30, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
        ></motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-4xl font-bold mb-8">
              Credentials & <span className="text-orange-accent">Recognition</span>
            </h2>
            <div className="mb-8">
              <span className="text-2xl font-bold text-black flex items-center gap-2">
                <span role="img" aria-label="brain">🧠</span> Thought Leadership & Public Engagements
              </span>
            </div>
            <ul className="list-disc pl-8 space-y-4 text-black text-lg">
              <li>
                <span className="font-bold">Guest Speaker</span> at <span className="italic">“Shaping Your Legal Future”</span>, Bharati Vidyapeeth University (2025)
              </li>
              <li>
                <span className="font-bold">Podcast Guest:</span> <span className="italic">"Decoding Business Laws – Koffee @TEIF"</span>
              </li>
              <li>
                <span className="font-bold">Facebook Live Host:</span> <span className="italic">Complexities of Law Relating to Senior Citizens</span>
              </li>
              <li>
                <span className="font-bold">Speaker,</span> <span className="italic">Contracting Excellence & Advanced Negotiation</span>, International Business Intelligence (2025)
              </li>
              <li>
                <span className="font-bold">Lecturer,</span> <span className="italic">Corporate Law Conclave</span>, BVIMR (2024)
              </li>
              <li>
                <span className="font-bold">Trainer,</span> <span className="italic">Workforce Planning & Talent Management</span>, International Business Intelligence (2024)
              </li>
              <li>
                <span className="font-bold">Speaker,</span> <span className="italic">Commercial Agreements Webinar</span>, Scripta Lex Law Firm (2021)
              </li>
              <li>
                <span className="font-bold">Judge,</span> <span className="italic">Intra Moot Court Competition</span>, Scripta Lex Law Firm (2021)
              </li>
              <li>
                <span className="font-bold">Speaker,</span> <span className="italic">Certified Course on IBC & Role of Insolvency Professionals</span>, LawInsider (2022)
              </li>
              <li>
                <span className="font-bold">Interviewee,</span> <span className="italic">SuperLawyer</span>: Legal Compliance & Business Growth (2024)
              </li>
              <li>
                <span className="font-bold">Featured,</span> <span className="italic">Investopedia</span>: Legal Advisory for Indian Businesses (2024)
              </li>
            </ul>
            <div className="text-center mt-10">
              <Button className="btn-gold" asChild>
                <a href="/contact">
                  📞 Connect
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;