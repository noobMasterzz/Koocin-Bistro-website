import '../styles/Menu.css';
// Import placeholder image for now
import placeholderImage from '../assets/menu-images/food1.jpg';

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
      image: placeholderImage
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
      description: "Fresh salmon fillet with lemon butter sauce, served with roasted vegetables",
      price: "₱580",
      image: placeholderImage
    },
    {
      name: "Beef Tenderloin",
      description: "8oz beef tenderloin with red wine reduction, served with mashed potatoes",
      price: "₱750",
      image: placeholderImage
    },
    {
      name: "Chicken Marsala",
      description: "Pan-seared chicken breast in marsala wine sauce with mushrooms",
      price: "₱450",
      image: placeholderImage
    }
  ],
  desserts: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
      price: "₱220",
      image: placeholderImage
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: "₱250",
      image: placeholderImage
    },
    {
      name: "Crème Brûlée",
      description: "Rich vanilla custard topped with caramelized sugar",
      price: "₱200",
      image: placeholderImage
    }
  ],
  beverages: [
    {
      name: "House Wine",
      description: "Red or white wine selection",
      price: "₱180/glass",
      image: placeholderImage
    },
    {
      name: "Craft Cocktails",
      description: "Ask your server for our seasonal cocktail selection",
      price: "₱250",
      image: placeholderImage
    },
    {
      name: "Fresh Juices",
      description: "Selection of seasonal fresh fruit juices",
      price: "₱120",
      image: placeholderImage
    }
  ]
};

function Menu() {
  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Experience our carefully curated selection of dishes</p>
      </div>

      <div className="menu-container">
        <section className="menu-section">
          <h2>Appetizers</h2>
          <div className="menu-items">
            {menuItems.appetizers.map((item, index) => (
              <div key={index} className="menu-item">
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="menu-section">
          <h2>Main Courses</h2>
          <div className="menu-items">
            {menuItems.mainCourses.map((item, index) => (
              <div key={index} className="menu-item">
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="menu-section">
          <h2>Desserts</h2>
          <div className="menu-items">
            {menuItems.desserts.map((item, index) => (
              <div key={index} className="menu-item">
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="menu-section">
          <h2>Beverages</h2>
          <div className="menu-items">
            {menuItems.beverages.map((item, index) => (
              <div key={index} className="menu-item">
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Menu; 