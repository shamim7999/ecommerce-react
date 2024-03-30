import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


import '../css//NewSidebar.css'

const NewSidebar = ({ handleChange }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const sortedUniqueCategories = [...uniqueCategories].sort();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Category
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Render unique categories with styles */}
          {sortedUniqueCategories.map((category, index) => (
            <div key={index} className="category-item">
              {category}
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NewSidebar;
