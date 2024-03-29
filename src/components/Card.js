import React from 'react'
import { FaShoppingBag } from "react-icons/fa";


import '../css/Products.css'

const Card = ({id, img, title, star, reviews, prevPrice, newPrice, amount, handleClickOnCart, category}) => {
  
  const item = {id, img, title, star, reviews, prevPrice, newPrice, amount, category};  

  const handleClick = (e) => {
    console.log(`title: ${title} and id: ${item.amount}`)
    handleClickOnCart(item, 1);
  }  

  return (
    <section className='card'>
            <img src={img}
                alt='No Images' className='card-img' />
            <div className='card-details'>
                <h3 className='card-title'>{title}</h3>
                <h4>{category}</h4>
                <section className='card-reviews'>
                    <span style={{color: "#DED132"}}>{star}{star}{star}{star}</span>
                    <span className='total-reviews'>{reviews}</span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <del>{prevPrice}</del> ${newPrice}
                    </div>
                    <div className='bag'>
                        <FaShoppingBag className='bag-icon' onClick={handleClick} />
                    </div>
                </section>
            </div>
        </section>
  )
}

export default Card
