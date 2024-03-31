import React from 'react';
import { Button, Card, CardGroup, Col} from 'react-bootstrap';

import '../css/MyImage.css'

const MyCard2 = ({id, img, title, star, reviews, prevPrice, newPrice, amount, handleClickOnCart, category}) => {
    const item = {id, img, title, star, reviews, prevPrice, newPrice, amount, category};  
    
    const handleClick = (e) => {
      console.log(`title: ${title} and id: ${item.amount}`)
      handleClickOnCart(item, 1);
      alert(`${title} added to cart`);
    } 
    
    return (
    <>
      <Col md={6} lg={3}>
        <CardGroup>
          <Card>
            <Card.Img className='myImage' variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <small className="text-muted">{category}</small>
              <h5><del>${prevPrice}</del> &nbsp; &nbsp; ${newPrice} </h5>
            </Card.Body>
            <Card.Footer>
            <Button onClick={handleClick} variant="success">Add to Cart</Button>{' '}
            </Card.Footer>
          </Card>
        </CardGroup>
      </Col>

      

    </>
  );
}

export default MyCard2;
