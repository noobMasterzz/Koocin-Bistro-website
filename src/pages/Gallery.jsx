import { useState } from 'react';
import '../styles/Gallery.css';

const galleryItems = [
  {
    id: 1,
    category: 'interior',
    image: '/gallery/interior-1.jpg',
    title: 'Main Dining Area',
    description: 'Our spacious and elegant main dining room'
  },
  {
    id: 2,
    category: 'food',
    image: '/gallery/dish-1.jpg',
    title: 'Signature Steak',
    description: 'Premium cut beef with seasonal vegetables'
  },
  {
    id: 3,
    category: 'interior',
    image: '/gallery/interior-2.jpg',
    title: 'Private Dining Room',
    description: 'Perfect for intimate gatherings and special occasions'
  },
  {
    id: 4,
    category: 'food',
    image: '/gallery/dish-2.jpg',
    title: 'Fresh Seafood Platter',
    description: 'A selection of the day\'s freshest seafood'
  },
  {
    id: 5,
    category: 'events',
    image: '/gallery/event-1.jpg',
    title: 'Corporate Events',
    description: 'Hosting a successful business dinner'
  },
  {
    id: 6,
    category: 'food',
    image: '/gallery/dish-3.jpg',
    title: 'Dessert Selection',
    description: 'Handcrafted desserts made fresh daily'
  },
  {
    id: 7,
    category: 'events',
    image: '/gallery/event-2.jpg',
    title: 'Wedding Reception',
    description: 'Celebrating special moments with loved ones'
  },
  {
    id: 8,
    category: 'interior',
    image: '/gallery/interior-3.jpg',
    title: 'Bar Area',
    description: 'Extensive selection of wines and craft cocktails'
  },
  {
    id: 9,
    category: 'food',
    image: '/gallery/dish-4.jpg',
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