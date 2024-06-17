import React from 'react'
import './Footer.css'
import footer_logo from '../Assects/logo_big.png'
import instragram_icon from '../Assects/instagram_icon.png'
import pintester_icon from '../Assects/pintester_icon.png'
import whatsapp_icon from '../Assects/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
     </div>
     <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instragram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
     </div>
     <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
     </div>
    </div>
  )
}

export default Footer
