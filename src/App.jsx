import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

// Lazy load pages with error handling
const Home = lazy(() => 
  import('./pages/Home').catch(error => {
    console.error('Failed to load Home page:', error);
    return { default: () => <div>Error loading page</div> };
  })
);

const Menu = lazy(() => 
  import('./pages/Menu').catch(error => {
    console.error('Failed to load Menu page:', error);
    return { default: () => <div>Error loading page</div> };
  })
);

const About = lazy(() => 
  import('./pages/About').catch(error => {
    console.error('Failed to load About page:', error);
    return { default: () => <div>Error loading page</div> };
  })
);

const Gallery = lazy(() => 
  import('./pages/Gallery').catch(error => {
    console.error('Failed to load Gallery page:', error);
    return { default: () => <div>Error loading page</div> };
  })
);

const Contact = lazy(() => 
  import('./pages/Contact').catch(error => {
    console.error('Failed to load Contact page:', error);
    return { default: () => <div>Error loading page</div> };
  })
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Show loading screen for 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
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
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
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
