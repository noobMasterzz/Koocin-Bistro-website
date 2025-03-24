import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    setSubmitStatus('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-section">
          <div className="info-card">
            <h2>Visit Us</h2>
            <p>123 Restaurant Street</p>
            <p>Foodie City, FC 12345</p>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.4958222515989!2d121.01787078154089!3d14.637513285087396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b70044b96e99%3A0x84875fb2e6f68862!2sKoocina%20Bistro!5e1!3m2!1sen!2sph!4v1742803546870!5m2!1sen!2sph"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>

          <div className="info-card">
            <h2>Business Hours</h2>
            <div className="hours-grid">
              <div className="day">Monday - Friday</div>
              <div className="time">11:00 AM - 10:00 PM</div>
              <div className="day">Saturday</div>
              <div className="time">10:00 AM - 11:00 PM</div>
              <div className="day">Sunday</div>
              <div className="time">10:00 AM - 9:00 PM</div>
            </div>
          </div>

          <div className="info-card">
            <h2>Get in Touch</h2>
            <p>📞 Phone: (123) 456-7890</p>
            <p>📧 Email: @koocinabistro.com</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">Tiktok</a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-card">
            <h2>Send us a Message</h2>
            {submitStatus && <div className="success-message">{submitStatus}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 