import React from "react";
import "../../css/Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  const allProducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

  // Create a set to store unique categories
  const uniqueCategories = new Set();

  // Filter out duplicates and add categories to the set
  const uniqueProducts = allProducts.filter(product => {
    if (!uniqueCategories.has(product.category)) {
      uniqueCategories.add(product.category);
      return true;
    }
    return false;
  });
  // Sort the unique products by category
  uniqueProducts.sort((a, b) => a.category.localeCompare(b.category));

  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        {uniqueProducts.map((product, index) => (
          <Input
            key={index}
            handleChange={handleChange}
            value={product.category}
            title={product.category}
            name="test"
          />  
        ))}
      </div>
    </div>
  );
};

export default Category;
