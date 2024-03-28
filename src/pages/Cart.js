import React, { useEffect, useState } from "react";

import "../css/Cart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("myCart"); // Retrieve cart items from localStorage
    if (storedCart) {
      setCartItems(JSON.parse(storedCart)); // Parse and set cart items
    }
  }, []); // Run once on component mount

  useEffect(() => {
    console.log(`Cart Cart: ${JSON.stringify(cartItems)}`);

    let totalPrice = 0;
    // Iterate through cart items and calculate total price
    cartItems.forEach(item => {
        totalPrice += item.amount * item.newPrice;
    });
    setTotalPrice(totalPrice);

  }, [cartItems]);

  const handleAdd = (e) => {
    const itemId = e.target.value;
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };


  const handleSub = (e) => {
    const itemId = e.target.value;
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.amount > 0) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
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
                  {cartItems.map(
                    (
                      item,
                      index // Map over cart items to render table rows dynamically
                    ) => (
                      <tr key={index}>
                        <td className="p-4">
                          <div className="media align-items-center">
                            <img
                              src={item.img}
                              className="d-block ui-w-40 ui-bordered mr-4"
                              alt=""
                            />{" "}
                            {/* Use item.image instead of static URL */}
                            <div className="media-body">
                              <a href="#" className="d-block text-dark">
                                {item.title}
                              </a>{" "}
                              {/* Use item.name instead of static text */}
                              <small>
                                {/* Render other details of the product dynamically */}
                                <span className="text-muted">Color:</span>
                                <span
                                  className="ui-product-color ui-product-color-sm align-text-bottom"
                                  style={{ background: "#000" }}
                                ></span>{" "}
                                &nbsp;
                                <span className="text-muted">
                                  Storage:{" "}
                                </span>{" "}
                                32GB &nbsp;
                                <span className="text-muted">
                                  Warranty:{" "}
                                </span>{" "}
                                Standard - 1 year &nbsp;
                                <span className="text-muted">
                                  Ships from:{" "}
                                </span>{" "}
                                China
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">
                          ${item.newPrice}
                        </td>{" "}
                        {/* Use item.price instead of static value */}
                        <td className="align-middle p-4">
                          <div className="text-center">
                            {/* You can implement add/subtract functionality here */}
                            <button
                              className="btn btn-primary mb-1"
                              value={item.id}
                              onClick={handleAdd}
                            >
                              +
                            </button>
                            <input
                              type="text"
                              className="form-control text-center"
                              value={item.amount}
                              readOnly
                            />
                            <button
                              className="btn btn-danger mt-1"
                              value={item.id}
                              onClick={handleSub}
                            >
                              -
                            </button>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">
                          ${(item.newPrice * item.amount).toFixed(2)}
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
                    )
                  )}
                </tbody>
              </table>
            </div>
            {/* / Shopping cart table */}

          <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
            <div className="mt-4">
              <label className="text-muted font-weight-normal">Promocode</label>
              <input type="text" placeholder="ABC" className="form-control" />
            </div>
            <div className="d-flex">
              <div className="text-right mt-4 mr-5">
                <label className="text-muted font-weight-normal m-0">Discount</label>
                <div className="text-large"><strong>$20</strong></div>
              </div>
              <div className="text-right mt-4">
                <label className="text-muted font-weight-normal m-0">Total price</label>
                <div className="text-large"><strong>{totalPrice}</strong></div>
              </div>
            </div>
          </div>

          <div className="float-right">
            <button type="button" className="btn btn-lg btn-default md-btn-flat mt-2 mr-3">Back to shopping</button>
            <button type="button" className="btn btn-lg btn-primary mt-2">Checkout</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
