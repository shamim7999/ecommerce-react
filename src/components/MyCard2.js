import React, { useState } from 'react';
import { Button as MyButton ,Card, CardGroup, Col} from 'react-bootstrap';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import '../css/MyImage.css'
import DefaultToast from './DefaultToast';

const MyCard2 = ({id, img, title, star, reviews, prevPrice, newPrice, amount, handleClickOnCart, category}) => {
    const item = {id, img, title, star, reviews, prevPrice, newPrice, amount, category};  
    
    
  
  const [showToast, setShowToast] = useState(false);


  const handleClick = () => {
      handleClickOnCart(item, 1);
      setShowToast(true);
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
            <MyButton onClick={handleClick} variant="success">Add to Cart</MyButton>{' '}
            </Card.Footer>
          </Card>
        </CardGroup>

        
      </Col>

      <DefaultToast
                show={showToast}
                setShow={setShowToast}
                variant={"success"}
                title="Success!"
                body="Item added to Cart."
            />

    </>
  );
}

export default MyCard2;
