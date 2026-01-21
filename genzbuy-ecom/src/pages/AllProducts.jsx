import '../pages/AllProducts.css';
import App from './FilterSection.jsx'
import { seasoncardimg } from '../components/imgColl.jsx';
import { Link } from 'react-router-dom';

function AllProducts() {
  return (
    <div className="page-container">
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
          {/* carousel for banners */}
          <div id="allproductcarousel" className="allproductcarousel carousel slide p-1" data-bs-ride="carousel">
            <div className="carousel-inner2 rounded-4">
              <img src="/images/ban12.webp" className="carl-img carousel-item active" alt="Banner 2" />
            </div>
          </div>
        </div>
        {/* <div className="catcontainer"> */}
        <div className="main-content-wrapper">
          <div className="leftDiv">
            <App />
          </div>
          <div className="rightdiv">
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
        <nav className="page-footer" aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item active">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default AllProducts;