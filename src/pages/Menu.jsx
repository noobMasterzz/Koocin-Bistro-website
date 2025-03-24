import { useState, useEffect } from 'react';
import '../styles/Menu.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { optimizeImage, preloadImages } from '../utils/imageOptimizer';
// Import placeholder image for now
import placeholderImage from '../assets/menu-images/food1.jpg';
import placeholderImage2 from '../assets/menu-images/food2.jpg';


const menuItems = {
  appetizers: [
    {
      name: "Bruschetta",
      description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
      price: "₱180",
      image: placeholderImage
    },
    {
      name: "Calamari",
      description: "Crispy fried squid rings served with marinara sauce",
      price: "₱250",
      image: placeholderImage2
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and our homemade Caesar dressing",
      price: "₱220",
      image: placeholderImage
    }
  ],
  mainCourses: [
    {
      name: "Grilled Salmon",
      description: "Fresh salmon fillet with seasonal vegetables and lemon butter sauce",
      price: "₱450",
      image: placeholderImage2
    },
    {
      name: "Beef Tenderloin",
      description: "Premium cut with red wine reduction sauce and truffle mashed potatoes",
      price: "₱550",
      image: placeholderImage
    },
    {
      name: "Chicken Marsala",
      description: "Pan-seared chicken breast in Marsala wine sauce with mushrooms",
      price: "₱380",
      image: placeholderImage2
    }
  ],
  desserts: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
      price: "₱180",
      image: placeholderImage
    },
    {
      name: "Crème Brûlée",
      description: "Vanilla bean custard with caramelized sugar top",
      price: "₱160",
      image: placeholderImage2
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center and vanilla ice cream",
      price: "₱200",
      image: placeholderImage
    }
  ],
  beverages: [
    {
      name: "Signature Cocktail",
      description: "Our special blend of premium spirits and fresh ingredients",
      price: "₱250",
      image: placeholderImage2
    },
    {
      name: "Wine Selection",
      description: "Curated selection of fine wines from around the world",
      price: "₱280",
      image: placeholderImage
    },
    {
      name: "Craft Beer",
      description: "Selection of local and international craft beers",
      price: "₱180",
      image: placeholderImage2
    }
  ]
};

const CarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function MenuSection({ title, items }) {
  const [optimizedImages, setOptimizedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        const imageUrls = items.map(item => item.image);
        await preloadImages(imageUrls);
        
        const optimized = {};
        for (const item of items) {
          try {
            const optimizedSrc = await optimizeImage(item.image);
            optimized[item.name] = optimizedSrc;
          } catch (err) {
            console.error(`Failed to optimize image for ${item.name}:`, err);
            optimized[item.name] = item.image; // Fallback to original image
          }
        }
        setOptimizedImages(optimized);
      } catch (err) {
        console.error('Failed to load images:', err);
        setError('Failed to load menu images');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [items]);

  if (error) {
    return (
      <section className="menu-section">
        <h2>{title}</h2>
        <div className="error-message">{error}</div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="menu-section">
        <h2>{title}</h2>
        <div className="loading-message">Loading menu items...</div>
      </section>
    );
  }

  return (
    <section className="menu-section">
      <h2>{title}</h2>
      <Slider {...CarouselSettings}>
        {items.map((item, index) => (
          <div key={index} className="menu-item-wrapper">
            <div className="menu-item">
              <div className="menu-item-image">
                <img 
                  src={optimizedImages[item.name] || item.image} 
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

function Menu() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="menu-page">
        <div className="menu-header">
          <h1>Our Menu</h1>
          <p>Loading menu items...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Experience our carefully curated selection of dishes</p>
      </div>

      <div className="menu-container">
        <MenuSection title="Appetizers" items={menuItems.appetizers} />
        <MenuSection title="Main Courses" items={menuItems.mainCourses} />
        <MenuSection title="Desserts" items={menuItems.desserts} />
        <MenuSection title="Beverages" items={menuItems.beverages} />
      </div>
    </div>
  );
}

export default Menu; 