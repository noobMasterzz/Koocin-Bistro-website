import '../styles/About.css';
import OwnerPic from '../assets/about-images/owner-image.jpg';
import ChefPic from '../assets/about-images/dahlin bee.jpg';
import ManagerPic from '../assets/about-images/isay.jpg';


function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Koocina Bistro</h1>
        <p>A journey of flavors and memories</p>
      </div>

      <div className="about-container">
        <section className="story-section">
          <div className="content-wrapper">
            <h2>Our Story</h2>
            <p>
              Founded in 2024, Koocina Bistro emerged from a passion for creating exceptional dining experiences. 
              What started as a small family dream has blossomed into one of the most beloved restaurants in the area.
            </p>
            <p>
              Our commitment to quality ingredients, innovative recipes, and warm hospitality has made us 
              a favorite destination for both casual diners and food enthusiasts alike.
            </p>
          </div>
          <div className="image-wrapper story-image">
            <img src={OwnerPic} alt="Owner" />
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality</h3>
              <p>We source only the finest ingredients, partnering with local suppliers to ensure fresh, seasonal produce.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Our chefs constantly explore new flavors while respecting traditional cooking techniques.</p>
            </div>
            <div className="value-item">
              <h3>Hospitality</h3>
              <p>We believe in creating a warm, welcoming atmosphere where every guest feels like family.</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image chef-image">
                <img src={ChefPic} alt="Chef" />
              </div>
              <h3>Dahlin Bee</h3>
              <p className="role">Executive Chef</p>
              <p>With over 15 years of culinary experience, Chef Dahlin brings creativity and expertise to every dish.</p>
            </div>
            <div className="team-member">
              <div className="member-image manager-image">
                <img src={ManagerPic} alt="Manager" />
              </div>
              <h3>Isabella</h3>
              <p className="role">Restaurant Manager</p>
              <p>Isabella ensures that every visit to Koocina Bistro exceeds our guests' expectations.</p>
            </div>
          </div>
        </section>

        <section className="philosophy-section">
          <div className="content-wrapper">
            <h2>Our Philosophy</h2>
            <p>
              At Koocina Bistro, we believe that great food has the power to bring people together and create lasting memories. 
              Every dish we serve is crafted with care, using time-honored techniques and innovative approaches to deliver 
              unforgettable dining experiences.
            </p>
            <p>
              We're more than just a restaurant - we're a gathering place for friends and family, a venue for special 
              celebrations, and a proud member of our local community.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About; 