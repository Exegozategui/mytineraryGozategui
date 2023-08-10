import React from 'react'
import "./styles.css";
import { Link as Anchor } from "react-router-dom";
function Footer() {
  return (
    <footer className='container'>
        <div className="footer-content">
            <h4 >My Tinerary!</h4>
            <p>Find the perfect destination</p>
            
        </div>
        <div className="footer-bottom">
            <p> 2023 copyright © <a href="#">GozaDevs</a>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><Anchor to="" className="nav-link">Home</Anchor></li>
                        <li><Anchor to="Cities" className="nav-link">Cities</Anchor></li>
                        <li><a  href='' >Contact</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
  )
}

export default Footer

          