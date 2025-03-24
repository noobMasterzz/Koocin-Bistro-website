import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import HomeBg from '../assets/Home bg photo.jpg';

function Home() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HomeBg})` }}>
        <div className="hero-content">
          <h1>Welcome to Koocina Bistro</h1>
          <p>At Koocina Bistro, we blend tradition with innovation to create culinary masterpieces. Indulge in the extraordinary.</p>
          <button className="cta-button" onClick={handleMenuClick}>
            View Our Menu
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Special Dishes</h2>
          <p>Discover our chef's signature creations</p>
        </div>
        <div className="feature">
          <h2>Fresh Ingredients</h2>
          <p>We use only the finest local ingredients</p>
        </div>
        <div className="feature">
          <h2>Cozy Atmosphere</h2>
          <p>Perfect ambiance for any occasion</p>
        </div>
      </section>

      <section className="about-preview">
        <h2>Our Story</h2>
        <p>
          At Koocina Bistro, we believe in creating memorable dining experiences through 
          exceptional food, warm hospitality, and a welcoming atmosphere.
        </p>
        <button className="secondary-button" onClick={handleAboutClick}>
          Learn More
        </button>
      </section>
    </div>
  );
}

export default Home; 