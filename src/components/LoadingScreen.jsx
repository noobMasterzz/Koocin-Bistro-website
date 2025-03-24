import '../styles/LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img 
          src="/Koocina Bistro logo.jpg" 
          alt="Koocina Bistro" 
          className="loading-logo"
        />
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen; 