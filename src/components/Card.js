import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaShoppingBag } from "react-icons/fa";


import '../css/Products.css'

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <section className='card'>
            <img src={img}
                alt='No Images' className='card-img' />
            <div className='card-details'>
                <h3 className='card-title'>{title}</h3>
                <section className='card-reviews'>
                    <span style={{color: "#DED132"}}>{star}{star}{star}{star}</span>
                    <span className='total-reviews'>{reviews}</span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <del>{prevPrice}</del> ${newPrice}
                    </div>
                    <div className='bag'>
                        <FaShoppingBag className='bag-icon' />
                    </div>
                </section>
            </div>
        </section>
  )
}

export default Card
