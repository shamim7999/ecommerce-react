import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaShoppingBag } from "react-icons/fa";

import '../css/Products.css'
import Card from '../components/Card';

const Products = () => {
  return (
    <>
      <section className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default Products
