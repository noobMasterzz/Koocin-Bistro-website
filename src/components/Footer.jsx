import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 Phone: (123) 456-7890</p>
          <p>📧 Email: info@koocinabistro.com</p>
          <p>📍 Address: 123 Restaurant Street, Foodie City</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/Koosina" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Tiktok</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Koocina Bistro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 