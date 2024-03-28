import React, { useEffect, useState } from "react";

import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./data/Data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [myCart, setMyCart] = useState(
    localStorage.getItem("myCart") ? JSON.parse(localStorage.getItem("myCart")) : []
  ); // items
  //const [itemCount, setItemCount] = useState(0);
  const [totalItemsInCart, setTotalItemsInCart] = useState(
    localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')).length : 0
  );  


  useEffect(() => {
    // Save products data to localStorage
    localStorage.setItem("products", JSON.stringify(products));
    setMyCart(localStorage.getItem("myCart") ? JSON.parse(localStorage.getItem("myCart")) : [])
    console.log('Refreshed....');
    setTotalItemsInCart(localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')).length : 0)
  }, []);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));
    console.log(`Local: ${localStorage.getItem("myCart")}`);
    setTotalItemsInCart(localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')).length : 0)
  }, [myCart]);

  const handleClickOnCart = (item, counter) => {
    console.log(`Item APP: ${item.amount}`);
    setMyCart(prevCart => {
      if (!prevCart.some(cartItem => cartItem.id === item.id)) {
        // If the item is not already in the cart, add it with the specified counter
        return [...prevCart, { ...item, amount: counter }];
      } else {
        // If the item is already in the cart, find its index in the array
        const index = prevCart.findIndex(cartItem => cartItem.id === item.id);
        // Create a copy of the item with the updated amount
        const updatedItem = { ...prevCart[index], amount: prevCart[index].amount + counter };
        // Create a new array with the updated item
        const updatedCart = [...prevCart];
        updatedCart[index] = updatedItem;
        return updatedCart;
      }
    });
    
    setTotalItemsInCart(localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')).length : 0)
    
  };
  

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
        ({ category, color, company, newPrice, title, amount }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice, amount }) => (
        <Card
          id={id}
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
          handleClickOnCart={handleClickOnCart}
          myCart={myCart}
          amount={amount}
        />
      )
    );
  }

  const result = filteredProducts(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} 
        totalItemsInCart={totalItemsInCart } />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
