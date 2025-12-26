// import React from 'react';
import '../pages/AllProducts.css';
// import { seasoncardimg } from '../components/imgColl.jsx';
import App from '../pages/FilterData.jsx';
import { Link } from 'react-router-dom';
function AllProducts() {

  return (
    <>
      <div className="samehome">
        <div className="navbar">
          <div className="nav-links">
            <img src="/images/wrogn-logo.png" alt="Logo" className="logo" />
            <Link to="/">Home</Link>
            <Link to="/allproducts">All Products</Link>
            <Link to="/topwear">Top Wear</Link>
            <Link to="/bottomwear">Bottom Wear</Link>
            <Link to="/footwear">Footwear</Link>
            <Link to="/fresharrivals">Fresh Arrivals</Link>
            <Link to="/essentials">Essentials</Link>
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
        {/* <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner w-100%">
            <div className="carousel-item active p-relative mt-3"> */}
        <div className="cards-wrapper d-flex flex-wrap justify-content-space-between" >
          <div className="card">
            <div className="img">
              <img src="/images/ssncard1.webp" className=" w-100 h-100 rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="images/ssncard2.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard3.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard4.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard5.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard6.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard7.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard1.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard2.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard3.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard4.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard5.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard6.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard7.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="/images/ssncard1.webp" className="w-100 h-auto rounded-3" alt="..." />
            </div>
            <div className="card-body p-1">
              <div className="card-text">
                <p className="p1">₹1,439</p>
                <p className="p2"><s>₹2,399</s></p>
                <p className="p3">(40% OFF)</p>
              </div>
              <h5 className="card-title">Solid Stretch Slim Fit Shirt | Navy...</h5>
              <a href="#" className="btn border border-dark rounded">Add To Bag</a>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
        </div>
      </div> */}
      <App />
    </>
  );
}

export default AllProducts;