import { Link } from "react-router-dom";
import legalHeroBg from "@/assets/legal-hero-bg.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "\uD83D\uDCBC" },
    { name: "WhatsApp", href: "https://wa.me/9891324664", icon: "\uD83D\uDCAC" },
    { name: "Email", href: "mailto:legal@gaurisaraswat.com", icon: "\uD83D\uDCEC" },
  ];

  return (
    <footer
      className="relative border-t border-border/30 overflow-hidden"
      style={{
        backgroundImage: `url(${legalHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Light orange overlay background */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(255, 152, 0, 0.18)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 font-heading">
              Advocate Gauri Saraswat
            </h3>
            <p className="text-white text-sm leading-relaxed mb-4">
              Strategic legal solutions for modern businesses. Expert counsel in contract law, 
              fintech disputes, IBC litigation, and AI governance.
            </p>
            <p className="text-xs text-white">
              Bar Council Registration: <span className="text-[#ffff00]">[Registration Number]</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white hover:text-[#ffff00] transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <p className="text-sm text-white flex items-center">
                <span className="mr-2">\uD83D\uDCDE</span> 
                <a href="https://wa.me/9891324664" target="_blank" rel="noopener noreferrer" className="text-[#ffff00] hover:underline">+91 98913 24664 (WhatsApp)</a>
              </p>
              <p className="text-sm text-white flex items-center">
                <span className="mr-2">📧</span> <span className="text-[#ffff00]">legal@gaurisaraswat.com</span>
              </p>
              <p className="text-sm text-white flex items-center">
                <span className="mr-2">📍</span> <span className="text-[#ffff00]">[Office Address]</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 glow-gold-hover"
                  aria-label={social.name}
                >
                  <span className="text-lg text-white">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white text-center md:text-left">
            © {currentYear} <span className="text-[#ffff00]">Advocate Gauri Saraswat</span> · All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-white hover:text-[#ffff00] transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white hover:text-[#ffff00] transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;