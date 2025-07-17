import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  LogOut, 
  ChevronRight, 
  Menu, 
  X, 
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// Export these constants so they can be imported in AdminLayout
export const SIDEBAR_WIDTH = 240;
export const SIDEBAR_COLLAPSED = 70;

interface AdminSidebarProps {
  onToggle?: (isOpen: boolean) => void;
}

const AdminSidebar = ({ onToggle }: AdminSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Auto-close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);
  
  // Set initial state based on screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Notify parent component when sidebar state changes
  useEffect(() => {
    if (onToggle) {
      onToggle(isOpen);
    }
  }, [isOpen, onToggle]);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    navigate('/admin/login');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { 
      width: `${SIDEBAR_WIDTH}px`,
      transition: { duration: 0.3 }
    },
    closed: { 
      width: `${SIDEBAR_COLLAPSED}px`,
      transition: { duration: 0.3 }
    },
    mobile: {
      width: `${SIDEBAR_WIDTH}px`,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    mobileClosed: {
      width: `${SIDEBAR_WIDTH}px`,
      x: '-100%',
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  const menuItems = [
    { 
      name: 'Dashboard', 
      icon: <LayoutDashboard className="h-5 w-5" />, 
      path: '/admin/dashboard' 
    },
    { 
      name: 'Services', 
      icon: <Briefcase className="h-5 w-5" />, 
      path: '/admin/services' 
    },
    { 
      name: 'Blog Posts', 
      icon: <FileText className="h-5 w-5" />, 
      path: '/admin/blogs' 
    },
    { 
      name: 'Contact Leads', 
      icon: <MessageSquare className="h-5 w-5" />, 
      path: '/admin/contact-leads' 
    }
  ];

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed z-50 top-3 left-3 md:hidden bg-background/50 backdrop-blur-sm shadow-sm"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div 
        className="fixed top-0 left-0 h-screen bg-background/95 backdrop-blur-sm border-r border-border/50 shadow-xl z-40 flex flex-col overflow-hidden"
        variants={isMobile ? { open: sidebarVariants.mobile, closed: sidebarVariants.mobileClosed } : sidebarVariants}
        animate={isOpen ? 'open' : 'closed'}
        initial={isMobile ? 'mobileClosed' : 'closed'}
      >
        <div className="flex items-center justify-between p-4 border-b border-border/30">
          <motion.h2 
            className="font-bold text-lg tracking-tight text-orange-accent truncate"
            animate={{ opacity: (isOpen || isMobile) ? 1 : 0 }}
          >
            Admin Panel
          </motion.h2>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex"
            onClick={toggleSidebar}
          >
            <ChevronRight className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="px-2 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link 
                  key={item.path} 
                  to={item.path}
                  onClick={() => isMobile && setIsOpen(false)}
                  className={`flex items-center py-2 px-3 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted text-foreground'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {item.icon}
                  </div>
                  {/* Always show text on mobile, animate on desktop */}
                  {isMobile ? (
                    <span className="ml-3 whitespace-nowrap">{item.name}</span>
                  ) : (
                    <motion.span 
                      className="ml-3 whitespace-nowrap"
                      animate={{ 
                        opacity: isOpen ? 1 : 0,
                        x: isOpen ? 0 : -10
                      }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-border/30">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            {/* Always show text on mobile, animate on desktop */}
            {isMobile ? (
              <span className="ml-3">Logout</span>
            ) : (
              <motion.span 
                className="ml-3"
                animate={{ 
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -10
                }}
              >
                Logout
              </motion.span>
            )}
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default AdminSidebar; 