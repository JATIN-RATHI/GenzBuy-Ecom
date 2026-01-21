import React, { useEffect, useState } from "react";
import "../components/Home.css";
import { imageBanner, imageBanner2, seasoncardimg } from "../components/imgColl.jsx";
import { Link } from "react-router-dom";
import { client } from "../ContentfulClient.js";

const Home = () => {
  const [fashion, setFashion] = useState();
  const [loading, setLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBanner(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [])
  const closeBanner = () => (setShowBanner(false));

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const entries = await client.getEntries({ content_type: "homePage" });
        console.log(entries);
        setLoading(false);
        setFashion(entries.items);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchdata();
    window.scrollTo(0, 0);
  }, [loading]);

  if (loading) return <p className="homepgp">Loading...</p>
  return (
    <>
    {/* 2. The Banner Markup */}
      {showBanner && (
        <div className="banner-overlay">
          <div className="banner-modal">
            <button className="close-btn" onClick={closeBanner}>&times;</button>
            <img src="/images/wrogn-logo-timeout.png" alt="Wrogn" className="modal-logo" />
            <h2 style={{ fontSize: "1.5rem" }}>Login Now & Enjoy Extra 10% Off</h2>
            <div className="input-group">
              <span className="country-code">+91</span>
              <input type="text" placeholder="Enter Mobile Number" />
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="notify" />
              <label className="notify" style={{color:"white"}}>Notify me for any updates & offers</label>
            </div>
            <button className="submit-btn">Submit</button>
            <p className="terms">By logging in, you're agreeing to our Privacy Policy Terms of Service</p>
          </div>
        </div>
      )}
      <div className="home">
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
            <div className="user-menu-container">
              <img src="./images/icons8-account.gif" alt="User Icon" className="usericon" />
              <div className="dropdown-menu">
                <ul>
                  <span className="dropdownmenu-profile">PROFILE</span>
                  <li><img src="./images/smallusericon.svg" alt="Account Icon" className="smallusericon" /><Link to="/account">ACCOUNT</Link></li>
                  <li><img src="./images/smallcartimage.svg" alt="Orders Icon" className="smallusericon" /><Link to="/orders">ORDERS</Link></li>
                  <li><img src="./images/smallstoreimage.svg" alt="Stores Icon" className="smallusericon" /><Link to="/stores">FIND STORE</Link></li>
                </ul>
                <div className="login-btn-container">
                  <button className="login-btn">Login</button>
                </div>
              </div>
            </div>
            <button className="carticonbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="./images/icons8-shopping-bag.gif" className="carticon" alt="Cart Icon" /></button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <img src="./images/empty-cart-animation.webp" alt="Empty Cart" className="emptycartimg" />
              </div>
            </div>
          </div>
        </div>
        {/* carousel for banners */}
        <div id="carouselExampleAutoplaying" className="carousel slide p-1" data-bs-ride="carousel">
          <div className="carousel-inner rounded-4">
            {imageBanner.map((item, index) => (
              console.log(item.fields),
              <div
                key={item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img src={item.url} className="d-block w-100" alt={item.name} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* video of virat */}
      <p className="para-1 fw-bold fs-4 d-flex justify-content-center">VIRAT HAS A MESSAGE FOR YOU</p>
      <div className="video-container">
        <video className="video" controls muted loop autoPlay>
          <source src="images/wrogn-video.mp4" type="video/mp4" />
        </video>
        <p className="para-2">VIRAT HAS A MESSAGE FOR YOU</p>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"> {/* SEASON'S TOP PICKS starting from here */}
          <div className="carousel-inner w-100%">
            <div className="carousel-item active p-relative mt-3">
              <p className="head3">SEASON'S TOP PICKS</p>

              <div className="rightdivcards cards-wrapper d-flex flex-wrap justify-content-space-between" >
                {seasoncardimg.map((item) => (
                  <div className="card" key={item.id}>
                    <div className="img">
                      <img src={`${item.url}`} className=" w-100 h-100 rounded-3" />
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
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"><img src="./images/prev-icon.png" id="prev" /></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"><img src="./images/next-icon.png" id="next" /></span>
          </a>
        </div>
      </div>
      <div className="categories p-3">   {/* trending categories starting from here */}
        <h1 className="head2"> TRENDING CATEGORIES </h1>
        <div className="cat-party d-flex justify-content-around">
          <img src="/images/trendCatg1.webp" className="border rounded-4 float-start " alt="..." style={{ width: "650px", height: "400px" }} />
          <img src="/images/trendCatg2.webp" className="border rounded-4 float-end " alt="..." style={{ width: "650px", height: "400px" }} />
        </div>
        <div className="cat-all d-flex justify-content-around p-3">
          <img src="/images/trendCatg3.webp" className="border rounded-4 float-start d-block" alt="..." style={{ width: "450px", height: "460px" }} />
          <img src="/images/trendCatg4.webp" className="border rounded-4 float-start d-block" alt="..." style={{ width: "450px", height: "460px" }} />
          <img src="/images/trendCatg5.webp" className="border rounded-4 float-start d-block" alt="..." style={{ width: "450px", height: "460px" }} />
        </div>
      </div>
      <div className="best-seller">
        <div className="categories p-4">
          <h3 className="head2">BEST SELLERS</h3>
          <div className="store-img d-flex justify-content-around m-3">
            <img src="/images/bscargo.webp" className="rounded-4 float-end border" alt="..." style={{ width: "332px", height: "430px" }} />
            <img src="/images/bsjeans.webp" className="rounded-4 float-end border" alt="..." style={{ width: "332px", height: "430px" }} />
            <img src="/images/bsshirt.webp" className="rounded-4 float-end border" alt="..." style={{ width: "332px", height: "430px" }} />
            <img src="/images/bstshirt.webp" className="rounded-4 float-end border" alt="..." style={{ width: "332px", height: "430px" }} />
          </div>
        </div>
      </div>

      {/* 2nd Carousel */}
      <div id="carouselExampleAutoplaying" className="carousel slide p-1" data-bs-ride="carousel">
        <div className="carousel-inner rounded-4 h-95 w-100 ">
          {imageBanner2.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={item.url} className="d-block w-100" alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      {/* wallpapers of wrogn  */}
      <div className="categories p-3">
        <h1 className="head2"> WROGN WALLPAPERS </h1>
        <div className="cat-all d-flex justify-content-around p-3">
          <img src="/images/ww1.webp" className="border rounded-4 float-start d-block" alt="..." style={{ width: "330px", height: "550px" }} />
          <img src="/images/ww2.webp" className="border rounded-4 float-start d-block" alt="..." style={{ width: "330px", height: "550px" }} />
          <img src="/images/ww3.webp" className="border rounded-4 float-start d-block" alt="..." style={{ width: "330px", height: "550px" }} />
        </div>
      </div>

      <div className="store">
        <div className="categories p-3">
          <div className="textwithimage">
            <p className="title1">GENZBUY STORE.<br /><span className="title2"> RIGHT PLACE.</span><br /><span className="title3">Find how close you’re to going wrogn!</span></p>
            <img src="/images/Big.webp" className="rounded-4 float-end rounded-4 border" alt="..." style={{ width: "650px", height: "400px" }} />
          </div>
          <div className="store-img d-flex justify-content-around m-3">
            <img src="/images/Big.webp" className="rounded-4 float-end border" alt="..." style={{ width: "560px", height: "450px" }} />
            <img src="/images/small1.webp" className="rounded-4 float-end border" alt="..." style={{ width: "400px", height: "450px" }} />
            <img src="/images/small2.webp" className="rounded-4 float-end border" alt="..." style={{ width: "400px", height: "450px" }} />
          </div>
        </div>
      </div>
      <div className="footer">
        <footer className="bg-dark text-white pt-5 pb-4">
          <div className="container text-center text-md-start">
            <div className="row text-center text-md-start">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-white">
                  GenzBuy
                </h5>
                <p className="text-secondary">
                  Discover the latest trends and timeless styles. Your ultimate
                  fashion destination.
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-white">
                  Quick Links
                </h5>
                <p className="mb-1">
                  <a href="#" className="text-white text-decoration-none">
                    About Us
                  </a>
                </p>
                <p className="mb-1">
                  <a href="#" className="text-white text-decoration-none">
                    Shop All
                  </a>
                </p>
                <p className="mb-1">
                  <a href="#" className="text-white text-decoration-none">
                    Shop All
                  </a>
                </p>
                <p className="mb-1">
                  <a href="#" className="text-white text-decoration-none">
                    New Arrivals
                  </a>
                </p>
                <p className="mb-1">
                  <a href="#" className="text-white text-decoration-none">
                    Sale
                  </a>
                </p>
                <p className="mb-1">
                  <a href="#" className="text-white text-decoration-none">
                    Blog
                  </a>
                </p>
              </div>

              <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-white">
                  Connect With Us
                </h5>
                <p className="mb-1">
                  <i className="fas fa-envelope me-2"></i> Email:{" "}
                  <a
                    href="mailto:info@genzbuy.com"
                    className="text-white text-decoration-none"
                  >
                    info@genzbuy.com
                  </a>
                </p>
                <p className="mb-1">
                  <i className="fas fa-phone me-2"></i> Phone:{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-white text-decoration-none"
                  >
                    +1 (234) 567-890
                  </a>
                </p>
                <div className="mt-4">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item me-3">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item me-3">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn-floating btn-sm text-white"
                        style={{ fontSize: "23px" }}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-lg-8">
                <p className="text-center text-secondary">
                  &copy; 2024 GenzBuy. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
