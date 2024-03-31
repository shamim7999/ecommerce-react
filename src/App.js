import React, { useEffect, useState } from "react";

import Products from "./products/Products";
import products from "./data/Data";
import NewNav from "./navigation/NewNav";
import MyCard2 from "./components/MyCard2";
import UncontrolledExample from "./components/Carousel";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [myCart, setMyCart] = useState(
    localStorage.getItem("myCart")
      ? JSON.parse(localStorage.getItem("myCart"))
      : []
  ); // items
  //const [itemCount, setItemCount] = useState(0);
  const [totalItemsInCart, setTotalItemsInCart] = useState(
    localStorage.getItem("myCart")
      ? JSON.parse(localStorage.getItem("myCart")).length
      : 0
  );

  useEffect(() => {
    // Save products data to localStorage
    localStorage.setItem("products", JSON.stringify(products));
    setMyCart(
      localStorage.getItem("myCart")
        ? JSON.parse(localStorage.getItem("myCart"))
        : []
    );
    console.log("Refreshed....");
    setTotalItemsInCart(
      localStorage.getItem("myCart")
        ? JSON.parse(localStorage.getItem("myCart")).length
        : 0
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));
    console.log(`Local: ${localStorage.getItem("myCart")}`);
    setTotalItemsInCart(
      localStorage.getItem("myCart")
        ? JSON.parse(localStorage.getItem("myCart")).length
        : 0
    );
  }, [myCart]);

  const handleClickOnCart = (item, counter) => {
    console.log(`Item APP: ${item.amount}`);
    setMyCart((prevCart) => {
      if (!prevCart.some((cartItem) => cartItem.id === item.id)) {
        return [...prevCart, { ...item, amount: counter }];
      } else {
        const index = prevCart.findIndex((cartItem) => cartItem.id === item.id);
        const updatedItem = {
          ...prevCart[index],
          amount: prevCart[index].amount + counter,
        };
        const updatedCart = [...prevCart];
        updatedCart[index] = updatedItem;
        return updatedCart;
      }
    });

    setTotalItemsInCart(
      localStorage.getItem("myCart")
        ? JSON.parse(localStorage.getItem("myCart")).length
        : 0
    );
  };

  // Input Filter
  const handleInputChange = (e) => {
    console.log(`Input: ${e.target.value}`);
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  // Radio Filter
  const handleChange = (value) => {
    console.log(`Here: ${value}`);
    setSelectedCategory(value);
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
          newPrice.toString() === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({
        id,
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        amount,
        category,
      }) => (
        <MyCard2
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
          category={category}
        />
      )
    );
  }

  const result = filteredProducts(products, selectedCategory, query);

  return (
    <>
      <NewNav
        handleChange={handleChange}
        query={query}
        handleInputChange={handleInputChange}
        totalItemsInCart={totalItemsInCart}
      />
      <UncontrolledExample />
      <Products result={result} style={{ marginTop: "100px" }} />
    </>
  );
};

export default App;
