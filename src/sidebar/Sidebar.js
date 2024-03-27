import React from 'react'
import { FaCartPlus } from "react-icons/fa";


import '../css/Sidebar.css'
import Category from './category/Category'
import Colors from './color/Colors'
import Price from './price/Price'

const Sidebar = ({handleChange}) => {
  return (
    <>
        <section className='sidebar'>
            <div className='logo-container'>
                <h1><FaCartPlus/></h1>
            </div>
            <Category handleChange={handleChange} />
            <Colors handleChange={handleChange} />
            <Price handleChange={handleChange} />
        </section>
    </>
  )
}

export default Sidebar
