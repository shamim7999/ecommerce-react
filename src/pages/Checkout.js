import React, { useEffect, useState } from "react";

import "../css/Checkout.css";
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

  
  const handleClearCart = () => {
    console.log(`In Checkout to clear Cart`);
    // Clear the cartItems
    setCartItems([]);
    // Clear local storage
    localStorage.removeItem('myCart');
    console.log(`Cart Items ${cartItems}`);
}


  return (
    <div class="container px-3 my-5 clearfix">
  <div class="card">
    <div class="card-header">
      <h2>Order Now!</h2>
    </div>
    <div class="card-body">
      <div class="row">
        {/*Left side: Ordered items*/}
        <div class="col-md-6">
          <div class="table-responsive">
            <table class="table table-bordered m-0">
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
                 {/*Dynamically generated content will go here*/}
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
        </div>
        {/*Right side: Customer information*/}
        <div class="col-md-6">
          <div class="customer-info">
            <h3>Customer Information</h3>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" />
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <textarea class="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
            <div className="mt-4">
              {/*<label className="text-muted font-weight-normal">Promocode</label>
              <input type="text" placeholder="ABC" className="form-control" />*/}
            </div>
            <div className="d-flex">
              <div className="text-right mt-4 mr-5">
                <label className="text-muted font-weight-normal m-0"></label>
                <div className="text-large"><strong>{/*0%*/}</strong></div>
              </div>
              <div className="text-right mt-4">
                <label className="text-muted font-weight-normal m-0">Total price</label>
                <div className="text-large"><strong>&nbsp; &nbsp; &nbsp;{totalPrice}</strong></div>
              </div>
            </div>
          </div>

          <div className="float-right">
          <Link to="/">
                <button type="button" className="btn btn-lg btn-danger mt-2"> 
                        Back to Shopping  
                </button>
            </Link>
            <Link to="/success">
              <button onClick={handleClearCart} type="button" className="btn btn-lg btn-primary mt-2 mx-3">
                  
                    Order Now!
                  
              </button>
            </Link>
          </div>
    </div>
  </div>
</div>

  );
};

export default MakeOrder;
