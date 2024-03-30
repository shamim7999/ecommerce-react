import React from 'react'

import '../css/Products.css'
import { Row } from 'react-bootstrap'

const Products = ({result}) => {
  return (
    <>
      <Row>
        {result} 
      </Row>
    </>
  )
}

export default Products
