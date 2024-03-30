import React from 'react';
import { Card, CardGroup, Col} from 'react-bootstrap';

const MyCard2 = ({id, img, title, star, reviews, prevPrice, newPrice, amount, handleClickOnCart, category}) => {
    const item = {id, img, title, star, reviews, prevPrice, newPrice, amount, category};  
    return (
    <>
      <Col md={6} lg={3}>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{category}</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Col>
    </>
  );
}

export default MyCard2;
