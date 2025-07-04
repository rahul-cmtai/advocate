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
      description: "Graduated with honors from [Law University], specializing in corporate and commercial law",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      year: "2009-2015",
      title: "Experience at Leading Firms",
      description: "Gained extensive experience in corporate litigation, contract drafting, and client advisory services",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "2016-2020",
      title: "NCLT Case Wins",
      description: "Successfully represented clients in high-profile NCLT cases, establishing expertise in insolvency law",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: "2021-Present",
      title: "LegalTech Speaking & Innovation",
      description: "Leading voice in AI law and legal technology, helping startups navigate emerging regulations",
      icon: <Star className="w-5 h-5" />
    }
  ];

  const supportPoints = [
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "15+ Years Experience",
      description: "Solving complex legal challenges for businesses across India"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Industry Expertise",
      description: "Specialized in corporate, tech, and insolvency law"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Client-Focused Approach",
      description: "Strategic legal solutions that enable business growth"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left - Image with animations */}
            <motion.div 
              className="flex justify-center lg:justify-start"
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
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className="heading-display text-foreground mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                Meet <span className="text-orange-accent">Advocate Gauri Saraswat</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed"
                variants={itemVariants}
              >
                With over 15 years of dedicated legal practice, I specialize in transforming complex legal challenges 
                into strategic business advantages. My expertise spans corporate law, insolvency proceedings, 
                fintech compliance, and emerging technology regulations.
              </motion.p>

              {/* Support points */}
              <motion.div 
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                {supportPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 bg-muted/30 p-3 rounded-lg border border-border/50 hover:border-orange-accent/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10, 
                      backgroundColor: "rgba(255,255,255,0.1)",
                      boxShadow: "0 4px 12px rgba(234, 179, 8, 0.1)"
                    }}
                  >
                    <div className="flex-shrink-0 mt-1 bg-orange-accent p-2 rounded-full text-white">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                  <Button size="lg" className="btn-gold sm:mr-4 w-full sm:w-auto" asChild>
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button size="lg" className="btn-outline-orange w-full sm:w-auto" asChild>
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of legal excellence and continuous innovation
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
                  {item.year.slice(-2)}
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
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
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
                className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed font-heading mb-8 relative z-10"
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
                className="text-lg text-muted-foreground leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                This philosophy drives every legal strategy I craft for my clients. I believe in proactive legal counsel 
                that anticipates challenges, creates opportunities, and enables businesses to thrive in competitive markets. 
                My approach combines deep legal expertise with practical business understanding, ensuring solutions that 
                are both legally sound and commercially viable.
              </motion.p>
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
              Credentials & <span className="text-orange-accent">Recognition</span>
            </motion.h2>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-orange-accent to-primary rounded-full mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.div>
            
            <motion.p
              className="text-muted-foreground max-w-xl mx-auto mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Recognized legal expertise with professional credentials and specialized certifications
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { 
                icon: <motion.div 
                  className="text-5xl relative"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M50 10 L80 40 L50 70 L20 40 Z" 
                      fill="url(#goldGradient)"
                      stroke="#FFA500"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path 
                      d="M50 30 L65 45 L50 60 L35 45 Z" 
                      fill="white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                    <motion.path 
                      d="M30 75 L70 75 L70 90 L30 90 Z" 
                      fill="url(#goldGradient)"
                      stroke="#FFA500"
                      strokeWidth="2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#FFA500" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>,
                title: "Bar Council Registration", 
                description: "Registration No: [Number]",
                buttonText: "Verify Credentials"
              },
              { 
                icon: <motion.div 
                  className="text-5xl relative"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.rect 
                      x="25" y="20" width="50" height="60" rx="5"
                      fill="#4169E1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.circle 
                      cx="50" cy="40" r="15"
                      fill="white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                    <motion.path 
                      d="M38 65 H62 M38 73 H62"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    <motion.path 
                      d="M45 40 L48 43 L55 36"
                      stroke="#4169E1"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    />
                  </svg>
                </motion.div>, 
                title: "LinkedIn Profile", 
                description: "Connect for legal insights",
                link: "http://www.linkedin.com/in/gauri-saraswat-20b55017",
                buttonText: "Connect Now"
              },
              { 
                icon: <motion.div 
                  className="text-5xl relative"
                  animate={{ 
                    y: [0, -5, 0],
                    rotateY: [0, 10, 0, -10, 0]
                  }}
                  transition={{ 
                    y: {
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    },
                    rotateY: {
                      duration: 5, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                >
                  <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M30 70 L50 30 L70 70 L30 70 Z" 
                      fill="url(#orangeGradient)"
                      stroke="#FF8C00"
                      strokeWidth="2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.path 
                      d="M45 50 L55 50 L55 85 L45 85 Z" 
                      fill="url(#orangeGradient)"
                      stroke="#FF8C00"
                      strokeWidth="2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.circle 
                      cx="50" cy="20" r="10"
                      fill="#FFD700"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.8
                      }}
                    />
                    <defs>
                      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FF8C00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>, 
                title: "Certifications", 
                description: "Specialized legal training",
                buttonText: "View Certifications"
              }
            ].map((credential, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 },
                  boxShadow: "0 10px 30px rgba(255, 152, 0, 0.15)"
                }}
              >
                <Card className="glass-card credential-card p-8 text-center glow-orange-hover h-full flex flex-col justify-between">
                  <div>
                    <motion.div 
                      className="mb-6 credential-icon"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + (index * 0.1) 
                      }}
                      viewport={{ once: true }}
                    >
                      {credential.icon}
                    </motion.div>
                    <h3 className="font-semibold text-foreground text-xl mb-2">{credential.title}</h3>
                    <p className="text-muted-foreground mb-6">{credential.description}</p>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {credential.link ? (
                      <Button variant="outline" className="btn-outline-orange w-full" asChild>
                        <a href={credential.link} target="_blank" rel="noopener noreferrer">
                          {credential.buttonText}
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="btn-outline-orange w-full">
                        {credential.buttonText}
                      </Button>
                    )}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;