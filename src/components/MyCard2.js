import React from 'react';
import { Button as MyButton ,Card, CardGroup, Col} from 'react-bootstrap';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import '../css/MyImage.css'

const MyCard2 = ({id, img, title, star, reviews, prevPrice, newPrice, amount, handleClickOnCart, category}) => {
    const item = {id, img, title, star, reviews, prevPrice, newPrice, amount, category};  
    
    
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (e) => {
      setSnackPack((prev) => [...prev, { e, key: new Date().getTime() }]);
      console.log(`title: ${title} and id: ${item.amount}`)
      handleClickOnCart(item, 1);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };


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

      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              <div style={{color: 'white'}}>Added To cart</div>
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />

    </>
  );
}

export default MyCard2;
