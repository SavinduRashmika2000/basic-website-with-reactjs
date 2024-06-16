import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assects/logo.png'
import cart_icon from '../Assects/cart_icon.png'

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}>Men {menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kid")}}>Kids {menu==="kid"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" /> 
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar