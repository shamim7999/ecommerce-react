import React, { useEffect, useState } from "react";

import "../css/Cart.css";
import { Link } from "react-router-dom";

const MakeOrder = () => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')) : []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log(`Cart Cart: ${JSON.stringify(cartItems)}`);

    let totalPrice = 0;
    // Iterate through cart items and calculate total price
    cartItems.forEach(item => {
        totalPrice += item.amount * item.newPrice;
    });
    setTotalPrice(totalPrice);

  }, [cartItems]);

  
  return (
    <div>
      <div className="container px-3 my-5 clearfix">
        {/* Shopping cart table */}
        <div className="card">
          <div className="card-header">
            <h2>Order Now!</h2>
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
                            
                            <input
                              type="text"
                              className="form-control text-center"
                              value={item.amount}
                              readOnly
                            />
                            
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">
                          ${(item.newPrice * item.amount).toFixed(2)}
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
                <div className="text-large"><strong>$0</strong></div>
              </div>
              <div className="text-right mt-4">
                <label className="text-muted font-weight-normal m-0">Total price</label>
                <div className="text-large"><strong>{totalPrice}</strong></div>
              </div>
            </div>
          </div>

          <div className="float-right">
            <Link to="/">
                <button type="button" className="btn btn-lg btn-danger mt-2"> 
                        Back to Shopping  
                </button>
            </Link>
            <button type="button" className="btn btn-lg btn-primary mt-2 mx-3">Order Now!</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;
