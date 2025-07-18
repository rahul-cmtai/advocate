import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";
// import seedDatabase from "./lib/seedData";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Admin imports
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ContactLeads from "./pages/admin/ContactLeads";
import AdminServices from "./pages/admin/Services";
import AdminBlogs from "./pages/admin/Blogs";
import RequireAdminAuth from "./components/ui/require-admin-auth";
import FloatingButton from "./components/FloatingButton";

const queryClient = new QueryClient();

const App = () => {
  // Seed the database with initial data if collections are empty
  useEffect(() => {
    // seedDatabase();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<RequireAdminAuth><Dashboard /></RequireAdminAuth>} />
            <Route path="/admin/services" element={<RequireAdminAuth><AdminServices /></RequireAdminAuth>} />
            <Route path="/admin/blogs" element={<RequireAdminAuth><AdminBlogs /></RequireAdminAuth>} />
            <Route path="/admin/contact-leads" element={<RequireAdminAuth><ContactLeads /></RequireAdminAuth>} />
            
            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <FloatingButton />
    </QueryClientProvider>
  );
};

export default App;
