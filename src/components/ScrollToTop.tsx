import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'smooth' for smooth scrolling or 'instant' for immediate
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop; 