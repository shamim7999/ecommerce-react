import React, { useState, useEffect } from "react";

import "../css/Cart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState({}); /// Ids
  const [products, setProducts] = useState([]); /// Filtered Product matches with ids in cartItems

  useEffect(() => {
    const storedCart = localStorage.getItem("myCart"); // Product Ids
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  
    const storedProducts = localStorage.getItem('products');
    let parsedProducts = [];
    if (storedProducts) {
      parsedProducts = JSON.parse(storedProducts);
    }
  
    // Filter products based on their IDs matching the IDs in cartItems
    const filteredProducts = parsedProducts.filter(product => {
      // Check if the product's ID exists in cartItems
      return Object.keys(cartItems).includes(product.id);
    });
  
    // Do something with filteredProducts
  
  }, []);
  useEffect(() => {
    // Update localStorage whenever cartItems change
    //localStorage.setItem('myCart', JSON.stringify(cartItems));
    console.log("here for update");
    console.log("Cart Items:", cartItems);
    console.log("Products:", products);
  }, [cartItems, products]);

  const handleAdd = (e) => {
    console.log(`here ${e.target.value} should Add`);
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      updatedCartItems[e.target.value] =
        (prevCartItems[e.target.value] || 0) + 1;
      return updatedCartItems;
    });
    console.log(cartItems);
  };

  const handleSubtraction = (e) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[e.target.value] > 0) {
        updatedCartItems[e.target.value] -= 1;
      }
      return updatedCartItems;
    });
  };

  return (
    <div>
      <div className="container px-3 my-5 clearfix">
        {/* Shopping cart table */}
        <div className="card">
          <div className="card-header">
            <h2>Shopping Cart</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    {/* Set columns width */}
                    <th
                      className="text-center py-3 px-4"
                      style={{ minWidth: "400px" }}
                    >
                      Product Name &amp; Details
                    </th>
                    <th
                      className="text-right py-3 px-4"
                      style={{ width: "100px" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-center py-3 px-4"
                      style={{ width: "120px" }}
                    >
                      Quantity
                    </th>
                    <th
                      className="text-right py-3 px-4"
                      style={{ width: "100px" }}
                    >
                      Total
                    </th>
                    <th
                      className="text-center align-middle py-3 px-0"
                      style={{ width: "40px" }}
                    >
                      <a
                        href="#"
                        className="shop-tooltip float-none text-light"
                        title=""
                        data-original-title="Clear cart"
                      >
                        <i className="ino ion-md-trash"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(cartItems).map((itemId) => (
                    <tr key={itemId}>
                      <td className="p-4">
                        <div className="media align-items-center">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            className="d-block ui-w-40 ui-bordered mr-4"
                            alt=""
                          />
                          <div className="media-body">
                            <a href="#" className="d-block text-dark">
                              Product {itemId}
                            </a>
                            {/* Render other details of the product here */}
                          </div>
                        </div>
                      </td>
                      <td className="text-right font-weight-semibold align-middle p-4">
                        $57.51
                      </td>
                      <td className="align-middle p-4">
                        <div className="text-center">
                          <button
                            className="btn btn-primary mb-1"
                            value={itemId}
                            onClick={handleAdd}
                          >
                            +
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={cartItems[itemId]} // prints quantity
                            readOnly
                          />
                          <button
                            className="btn btn-danger mt-1"
                            value={itemId}
                            onClick={handleSubtraction}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="text-right font-weight-semibold align-middle p-4">
                        ${(57.55 * cartItems[itemId]).toFixed(2)}
                      </td>
                      <td className="text-center align-middle px-0">
                        <a
                          href="#"
                          className="shop-tooltip close float-none text-danger"
                          title=""
                          data-original-title="Remove"
                        >
                          ×
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* / Shopping cart table */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
