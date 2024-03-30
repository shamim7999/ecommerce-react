import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewSidebar from '../sidebar/NewSidebar'


import '../css/CartButton.css'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NewNav = ({handleChange, query, handleInputChange, totalItemsInCart}) => {

  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
        <NewSidebar handleChange={handleChange}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={handleInputChange}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success mx-2">Search</Button>
            
            <Link to="/cart">
              <button className="cart-button">
              <span className="cart-icon"><AiOutlineShoppingCart /></span>
              <span className="cart-text">
                {totalItemsInCart}
              </span>
            </button>
            </Link>

            
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNav;