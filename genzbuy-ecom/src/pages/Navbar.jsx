import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Navbar.css';
const Navbar = () => {
  return (
    <>
     <div className="navbar">
          <div className="nav-links">
            <img src="/images/wrogn-logo.png" alt="Logo" className="logo" />
            <Link to="/">EOSS</Link>
            <Link to="/products">EXCLUSIVE</Link>
            <Link to="/about">ALL PRODUCTS</Link>
            <Link to="/contact">TOPWEAR</Link>
            <Link to="/contact">BOTTOMWEAR</Link>
            <Link to="/contact">FOOTWEAR</Link>
            <Link to="/contact">FRESH ARRIVALS</Link>
            <Link to="/contact">ESSENTIALS</Link>
          </div>
          <div className="btn-links">
            <form className="searchbar d-flex" role="search">
              <input className="searchbar form-control me-2" type="search" placeholder="SEARCH" aria-label="Search" />
            </form>
            <img src="./images/icons8-account.gif" alt="User Icon" className="user-icon" />
            <img src="./images/icons8-shopping-bag.gif" alt="Cart Icon" className="cart-icon" />
          </div>
        </div>
    </>
  )
}
export default Navbar;