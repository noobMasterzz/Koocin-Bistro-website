import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: 'instant'
        });
      }
    } catch (error) {
      console.error('Failed to scroll:', error);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTopOnMount; 