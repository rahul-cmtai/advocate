import React, { useState, useEffect } from 'react';
import AdminSidebar, { SIDEBAR_WIDTH, SIDEBAR_COLLAPSED } from './AdminSidebar';
import RequireAdminAuth from '@/components/ui/require-admin-auth';
import { motion } from 'framer-motion';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

// No need to redefine these constants as they're imported from AdminSidebar

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Listen for sidebar state changes and screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On desktop, sidebar is open by default
      // On mobile, sidebar is closed by default
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Set initial state
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <RequireAdminAuth>
      {/* Use flex for side-by-side layout */}
      <div className="min-h-screen bg-background flex">
        {/* Sidebar (fixed) */}
        <div className="fixed top-0 left-0 h-screen z-40">
          <AdminSidebar onToggle={(isOpen) => setSidebarOpen(isOpen)} />
        </div>
        {/* Main content with left margin for sidebar */}
        <motion.main
          className="transition-all duration-300 min-h-screen flex-1 pt-16 md:pt-0 w-full"
          animate={{
            marginLeft: isMobile ? "0px" : (sidebarOpen ? `${SIDEBAR_WIDTH}px` : `${SIDEBAR_COLLAPSED}px`),
            width: isMobile ? "100%" : "auto"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <header className="mb-4 md:mb-6 mt-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h1>
                <div className="h-1 w-12 md:w-16 bg-primary mt-2 rounded-full"></div>
              </header>
              <div className="pt-2">{children}</div>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </RequireAdminAuth>
  );
};

export default AdminLayout; 