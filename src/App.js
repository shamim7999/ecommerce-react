import React, { useState } from "react";

import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./data/Data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter
  const handleInputChange = (e) => {
    console.log(`Input: ${e.target.value}`);
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // Radio Filter
  const handleChange = (e) => {
    console.log(`Here: ${e.target.value}`);
    setSelectedCategory(e.target.value);
  };

  // Button Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredProducts(products, selected, query) {
    let filteredProducts = products;

    // Filter By Input
    if (query) {
      filteredProducts = filteredItems;
    }

    // Filter by Select
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredProducts(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
