import React from 'react'
import './App.css';
import {Link} from "react-router-dom"
function Navlink() {
  return (
    <div>
        <nav>
            <Link to="/" className='navitems'>Home</Link>
            <Link to="/cart" className='navitems'>Cart</Link>
            <Link to="/checkout" className='navitems'>Checkout</Link>
        </nav>
      
    </div>
  )
}
export default Navlink;
