import React, { useState } from 'react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row gx-5">
          <aside className="col-lg-6">
            {/* Image gallery */}
          </aside>
          <main className="col-lg-6">
            <div className="ps-lg-3">
              <h4 className="title text-dark">
                Quality Men's Hoodie for Winter, Men's Fashion <br />
                Casual Hoodie
              </h4>
              {/* Rating, orders, stock */}
              <div className="mb-3">
                <span className="h5">$75.00</span>
                <span className="text-muted">/per box</span>
              </div>
              <p>
                Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.
              </p>
              {/* Details */}
              <div className="row">
                {/* Type, Color, Material, Brand */}
              </div>
              <hr />
              {/* Size, Quantity */}
              <div className="row mb-4">
                {/* Size dropdown */}
                {/* Quantity input */}
              </div>
              {/* Buttons */}
              <button className="btn btn-warning shadow-0"> Buy now </button>
              <button className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </button>
              <button className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg"></i> Save </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
