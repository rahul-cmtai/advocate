import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Attractive SVG Logo with Black and Orange */}
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="25" fill="#FF7F50" stroke="#111" strokeWidth="2.5"/>
              <text x="50%" y="56%" textAnchor="middle" fill="#111" fontSize="25" fontWeight="bold" fontFamily="'Segoe UI',sans-serif" dy=".3em">GS</text>
              {/* Justice Scales Icon (Black) */}
              <g>
                <path d="M28 17v16" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 33c0 4 3.2 7.2 8 7.2s8-3.2 8-7.2" stroke="#111" strokeWidth="1.7"/>
                <path d="M17.5 33c0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3" stroke="#111" strokeWidth="1.2"/>
                <path d="M38.5 33c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.9-4.3-4.3" stroke="#111" strokeWidth="1.2"/>
                <circle cx="28" cy="17" r="1.7" fill="#111"/>
              </g>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-foreground hover:text-orange-accent transition-smooth font-medium",
                  location.pathname === item.path && "text-orange-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <Button className="btn-orange">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button & Drawer */}
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="sm" className="text-foreground p-2">
                  {/* Hamburger Menu Icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
                    <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
                    <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
                  </svg>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="pt-8 rounded-b-none rounded-t-xl top-0 left-0 right-0 max-w-full h-auto !bottom-auto">
                <div className="flex flex-col items-center gap-6 mt-6">
                  {navItems.map((item) => (
                    <DrawerClose asChild key={item.name}>
                      <Link
                        to={item.path}
                        className={cn(
                          "text-2xl font-medium text-foreground hover:text-orange-accent transition-smooth",
                          location.pathname === item.path && "text-orange-accent"
                        )}
                      >
                        {item.name}
                      </Link>
                    </DrawerClose>
                  ))}
                  <DrawerClose asChild>
                    <Button className="btn-orange w-full mt-4">Book Consultation</Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;