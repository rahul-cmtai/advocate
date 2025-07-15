import { Card } from "@/components/ui/card";
import advocatePortrait from "@/assets/advocate-portrait.jpg";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="py-8 md:py-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Side: Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative pt-6 md:pt-8 pb-2 md:pb-2 pl-6 md:pl-8 pr-6 md:pr-8 mx-auto lg:mx-0 max-w-md w-full">
              {/* Main image with effects */}
              <div className="relative z-10 overflow-hidden rounded-xl">
                <img
                  src={advocatePortrait}
                  alt="Advocate Gauri Saraswat"
                  className="w-full object-cover rounded-xl shadow-2xl h-[350px] md:h-[460px]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <p className="text-xl md:text-2xl font-medium font-heading">
                    "Law should enable growth,<br /> not limit it."
                  </p>
                  <p className="text-xs md:text-sm mt-2 text-white/80">This philosophy drives every strategy I craft</p>
                </div>

                {/* Floating elements - positioned for better visibility */}
                <div
                  className="absolute top-2 md:top-4 right-2 md:right-4 bg-orange-accent text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-base md:text-xl font-bold shadow-lg"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex items-center justify-center h-full w-full"
                  >
                    15+
                  </motion.div>
                </div>

                <div className="absolute bottom-[95px] md:bottom-[120px] left-0 bg-primary text-primary-foreground rounded-r-lg py-1 md:py-2 px-3 md:px-4 shadow-lg text-sm md:text-base">
                  Expert Advice
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 md:w-20 h-16 md:h-20 border-t-3 md:border-t-4 border-l-3 md:border-l-4 border-orange-accent opacity-70 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 md:w-20 h-16 md:h-20 border-b-3 md:border-b-4 border-r-3 md:border-r-4 border-primary opacity-70 rounded-br-lg"></div>
            </div>
          </motion.div>

          {/* Right Side: Testimonial Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="quote-card glass-card p-6 md:p-8 lg:p-12 relative transform hover:scale-[1.01] transition-all duration-300 border-[1px] border-orange-accent/20">
              {/* Testimonial Content */}
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed font-heading mb-6 md:mb-8">
                  Transforming complex legal challenges into clear, actionable solutions — with strategy, not stress.
                </blockquote>

                <div className="border-t border-border/50 pt-4 md:pt-6 flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground mb-1">
                      My approach to legal consulting
                    </p>
                    <p className="text-orange-accent font-semibold text-lg md:text-xl">
                      — Gauri Saraswat Corporate Lawyer
                    </p>
                  </div>

                  {/* Decorative stars */}
                  {/* <div className="flex space-x-1 mt-4 md:mt-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.span 
                        key={star} 
                        className="text-primary text-lg md:text-xl"
                        initial={{ opacity: 0.3, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: star * 0.1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 2
                        }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Decorative graphic element */}
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 opacity-10 text-4xl md:text-6xl">⚖️</div>
            </Card>

            {/* Additional decorative element */}
            <div className="mt-4 md:mt-8 ml-6 md:ml-12 hidden sm:block">
              <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-orange-accent to-primary rounded-full"></div>
              <div className="w-6 md:w-8 h-1 bg-gradient-to-r from-orange-accent to-primary rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;