import React from 'react'
import {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

import '../css/Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({query, handleInputChange}) => {
  return (
    <nav>
      <div className='nav-container'>
        <input onChange={handleInputChange} type='text' className='search-input' placeholder='Enter your search shoes' />
      </div>
      <div className='profile-container'>
        <a href='#'>
            <FiHeart className='nav-icons' />
        </a>
        <Link to="/cart">
          <AiOutlineShoppingCart className='nav-icons' />
        </Link>
        <a href='#'>
            <AiOutlineUserAdd className='nav-icons' />
        </a>
        
        
      </div>
    </nav>
  )
}

export default Nav
