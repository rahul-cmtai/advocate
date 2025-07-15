import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer";
import logo from "@/assets/logo1.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Details", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-14 w-14 object-contain" />
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
            
            <Button asChild className="btn-orange">
              <a href="https://wa.me/9891324664" target="_blank" rel="noopener noreferrer">Book Consultation</a>
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
                    <Button asChild className="btn-orange w-full mt-4">
                      <a href="https://wa.me/9891324664" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                    </Button>
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