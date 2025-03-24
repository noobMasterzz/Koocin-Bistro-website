import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

// Lazy load pages with error handling and retry logic
const lazyLoad = (importFunc) => {
  return lazy(() =>
    importFunc().catch((error) => {
      console.error('Failed to load component:', error);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(importFunc());
        }, 1000);
      });
    })
  );
};

// Lazy load components with retry mechanism
const Home = lazyLoad(() => import('./pages/Home'));
const Menu = lazyLoad(() => import('./pages/Menu'));
const About = lazyLoad(() => import('./pages/About'));
const Gallery = lazyLoad(() => import('./pages/Gallery'));
const Contact = lazyLoad(() => import('./pages/Contact'));

// Route wrapper component for error handling
const RouteWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return children;
};

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Handle initial loading
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 500);

    // Handle window errors
    const handleError = (event) => {
      setError(event.error);
      console.error('Global error:', event.error);
    };

    window.addEventListener('error', handleError);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (isInitialLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong</h2>
        <p>Please try refreshing the page</p>
        <button 
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <ScrollToTopOnMount />
          <Navbar />
          <main className="main-content">
            <ErrorBoundary>
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <RouteWrapper>
                        <Home />
                      </RouteWrapper>
                    } 
                  />
                  <Route 
                    path="/menu" 
                    element={
                      <RouteWrapper>
                        <Menu />
                      </RouteWrapper>
                    } 
                  />
                  <Route 
                    path="/about" 
                    element={
                      <RouteWrapper>
                        <About />
                      </RouteWrapper>
                    } 
                  />
                  <Route 
                    path="/gallery" 
                    element={
                      <RouteWrapper>
                        <Gallery />
                      </RouteWrapper>
                    } 
                  />
                  <Route 
                    path="/contact" 
                    element={
                      <RouteWrapper>
                        <Contact />
                      </RouteWrapper>
                    } 
                  />
                  <Route 
                    path="*" 
                    element={
                      <RouteWrapper>
                        <Home />
                      </RouteWrapper>
                    } 
                  />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
