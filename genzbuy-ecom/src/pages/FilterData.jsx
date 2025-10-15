import React, { useState } from "react";
import "../pages/AllProducts.css"; // Import the CSS file
import '../pages/FilterData.css';

// Simple filter data
const FilterData = {
  categories: [
    { name: "Athleisure", count: 5 },
    { name: "Briefs", count: 23 }, 
    { name: "Caps", count: 7 },
    { name: "Cargos", count: 19 },
    { name: "Jackets", count: 26 },
    { name: "Jeans", count: 12 },
    { name: "Shirts", count: 34 },
    { name: "Shorts", count: 9 },
  ],
  colors: ["Black", "White", "Blue", "Red", "Green"],
  price: ["Under $25", "$25 - $50", "$50 - $100", "Over $100"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  fit: ["Regular", "Slim", "Relaxed"],
};

function App() {
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Show only 5 categories at first
  const visibleCategories = showAllCategories
    ? FilterData.categories
    : FilterData.categories.slice(0, 5);

  return (
    <div className="container2">
      <h3 className="viewAll">VIEW ALL</h3>
      <h2 className="title">Filters</h2>

      {/* Categories */}
      <div className="filter-group">
        <h3 className="catHead">Categories</h3>
        <ul>
          {visibleCategories.map((cat, index) => (
            <li className="color-option" key={index}>
              <label htmlFor={`cat-${index}`}>{cat.name} ({cat.count})</label>
              <input type="checkbox" id={`cat-${index}`} />
            </li>
          ))}
        </ul>
        {FilterData.categories.length > 5 && (
          <button
            className="show-btn"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* Colors */}
      <div className="filter-group">
        <h3 className="catHead">Colors</h3>
        <ul>
          {FilterData.colors.map((color, index) => (
            <li className="color-option" key={index}>
              <label htmlFor={`color-${index}`}>{color}</label>
              <input type="checkbox" id={`color-${index}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="filter-group">
        <h3 className="catHead">Price</h3>
        <ul>
          {FilterData.price.map((price, index) => (
            <li className="color-option" key={index}>
              <label htmlFor={`price-${index}`}>{price}</label>
              <input type="checkbox" id={`price-${index}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="filter-group">
        <h3 className="catHead">Price</h3>
        <ul>
          {FilterData.price.map((price, index) => (
            <li className="color-option" key={index}>
              <label htmlFor={`price-${index}`}>{price}</label>
              <input type="checkbox" id={`price-${index}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Sizes */}
      <div className="filter-group">
        <h3 className="catHead">Sizes</h3>
        <ul>
          {FilterData.sizes.map((size, index) => (
            <li className="color-option" key={index}>
              <label htmlFor={`size-${index}`}>{size}</label>
              <input type="checkbox" id={`size-${index}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Fit */}
      <div className="filter-group">
        <h3 className="catHead">Fit</h3>
        <ul>
          {FilterData.fit.map((fit, index) => (
            <li className="color-option" key={index}>
              <label htmlFor={`fit-${index}`}>{fit}</label>
              <input type="checkbox" id={`fit-${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
