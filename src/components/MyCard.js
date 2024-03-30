import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const MyCard = () => {
  return (
    <Row>
      <Col md={6} lg={3}>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Category</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Col>
      <Col md={6} lg={3}>
        {/* Repeat the same structure for other cards */}
      </Col>
      {/* Repeat this for other 3 cards */}
    </Row>
  );
}

export default MyCard;
