import React from 'react';
import App from './FilterData.jsx';
import { bottomWearImages } from '../components/imgColl.jsx'
const BottomWear = () => {
  return (
    <>
      <div className="samehome">
        <div className="navbar">
          <div className="nav-links">
            <img src="/images/wrogn-logo.png" alt="Logo" className="logo" />
            <a href="/">EOSS</a>
            <a href="/products">EXCLUSIVE</a>
            <a href="/about">ALL PRODUCTS</a>
            <a href="/contact">TOPWEAR</a>
            <a href="/contact">BOTTOMWEAR</a>
            <a href="/contact">FOOTWEAR</a>
            <a href="/contact">FRESH ARRIVALS</a>
            <a href="/contact">ESSENTIALS</a>
          </div>
          <div className="btn-links">
            <form className="searchbar d-flex" role="search">
              <input className="searchbar form-control me-2" type="search" placeholder="SEARCH" aria-label="Search" />
            </form>
            <img src="./images/icons8-account.gif" alt="User Icon" className="user-icon" />
            <img src="./images/icons8-shopping-bag.gif" alt="Cart Icon" className="cart-icon" />
          </div>
        </div>
        {/* carousel for banners */}
        <div id="allproductcarousel" className="allproductcarousel carousel slide p-1" data-bs-ride="carousel">
          <div className="carousel-inner2 rounded-4">
            <img src="/images/ban12.webp" className="carl-img carousel-item active" alt="Banner 2" />
          </div>
        </div>
      </div> 
      <div className="rightdiv">
        <div className="cards-wrapper d-flex flex-wrap justify-content-space-between" >
          {bottomWearImages.map((item) => (
            <div className="card" key={item.id}>
                <div className="img">
                  <img src={`${item.url}`} className=" w-100 h-100 rounded-3"/>
                </div>
                <div className="card-body p-1">
                  <div className="card-text">
                    <p className="p1">₹1,439</p>
                    <p className="p2"><s>₹2,399</s></p>
                    <p className="p3">(40% OFF)</p>
                  </div>
                  <h5 className="card-title">{item.name}</h5>
                  <a href="#" className="btn border border-dark rounded">Add To Bag</a>
                </div>
            </div>
          ))}
        </div>
      </div>
      <App />
    </>
  );
};

export default BottomWear;