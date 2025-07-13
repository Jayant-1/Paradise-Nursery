import React, { useState } from "react";
import { categories, plants } from "../data/plants";
import "./ProductPage.css";

const ProductPage = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPlants =
    selectedCategory === "All"
      ? plants
      : plants.filter((plant) => plant.category === selectedCategory);

  return (
    <div className="product-page">
      <div className="container">
        <h1 className="page-title">Our Plant Collection</h1>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="plants-grid">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <div className="plant-image">
                <span className="plant-emoji">{plant.image}</span>
              </div>
              <div className="plant-info">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <div className="plant-price">${plant.price}</div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(plant)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
