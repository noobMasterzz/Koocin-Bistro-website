import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate scroll on page change
    });
  }, [pathname]);

  return null;
}

export default ScrollToTopOnMount; 