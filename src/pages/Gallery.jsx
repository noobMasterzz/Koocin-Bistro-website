import { useState } from 'react';
import '../styles/Gallery.css';
import Gallery1 from '../assets/gallery-images/main dining area1.jpg';
import Gallery2 from '../assets/gallery-images/lechon belly.jpg';
import Gallery3 from '../assets/gallery-images/main dining area2.jpg';
import Gallery4 from '../assets/gallery-images/seafood.jpg';
import Gallery5 from '../assets/gallery-images/partyEvent.jpg';
import Gallery6 from '../assets/gallery-images/dessert.jpg';
import Gallery7 from '../assets/gallery-images/bday.jpg';
import Gallery8 from '../assets/gallery-images/chefs-special.jpg';

const galleryItems = [
  {
    id: 1,
    category: 'interior',
    image: Gallery1,
    title: 'Main Dining Area',
    description: 'Our spacious and elegant main dining room'
  },
  {
    id: 2,
    category: 'food',
    image: Gallery2,
    title: 'Lechon Belly',
    description: 'Premium Lechon Belly with tender skin and juicy meat'
  },
  {
    id: 3,
    category: 'interior',
    image: Gallery3,
    title: 'Private Dining Room',
    description: 'Perfect for intimate gatherings and special occasions'
  },
  {
    id: 4,
    category: 'food',
    image: Gallery4,
    title: 'Fresh Seafood Platter',
    description: 'A selection of the day\'s freshest seafood'
  },
  {
    id: 5,
    category: 'events',
    image: Gallery5,
    title: 'Party Events',
    description: 'Hosting a successful party dinner'
  },
  {
    id: 6,
    category: 'food',
    image: Gallery6,
    title: 'Dessert Selection',
    description: 'Handcrafted desserts made fresh daily'
  },
  {
    id: 7,
    category: 'events',
    image: Gallery7,
    title: 'Birthday',
    description: 'Celebrating birthday with your loved ones'
  },
  {
    id: 8,
    category: 'food',
    image: Gallery8,
    title: 'Chef\'s Special',
    description: 'Seasonal tasting menu highlights'
  }
];

function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Take a visual journey through our restaurant</p>
      </div>

      <div className="gallery-container">
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'interior' ? 'active' : ''}`}
            onClick={() => setFilter('interior')}
          >
            Interior
          </button>
          <button 
            className={`filter-btn ${filter === 'food' ? 'active' : ''}`}
            onClick={() => setFilter('food')}
          >
            Food
          </button>
          <button 
            className={`filter-btn ${filter === 'events' ? 'active' : ''}`}
            onClick={() => setFilter('events')}
          >
            Events
          </button>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => handleImageClick(item)}
            >
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="gallery-item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery; 