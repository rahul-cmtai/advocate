import React from 'react';
import AdminSidebar from './AdminSidebar';
import RequireAdminAuth from '@/components/ui/require-admin-auth';
import { motion } from 'framer-motion';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  return (
    <RequireAdminAuth>
      <div className="min-h-screen bg-background">
        <AdminSidebar />
        
        <main className="transition-all duration-300 min-h-screen md:ml-[70px] pt-12 md:pt-0">
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <header className="mb-4 md:mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h1>
                <div className="h-1 w-12 md:w-16 bg-primary mt-2 rounded-full"></div>
              </header>
              
              <div className="pt-2">
                {children}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </RequireAdminAuth>
  );
};

export default AdminLayout; 