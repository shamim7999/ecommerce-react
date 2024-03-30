import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='text-center'>
        <h1>Your Order has been received.</h1>
        <Link to="/">
            <button type="button" className="btn btn-lg btn-primary mt-2 mx-3">
                  
                    Return To Home Page
                  
              </button>
        </Link>
    </div>
  )
}

export default Success;
