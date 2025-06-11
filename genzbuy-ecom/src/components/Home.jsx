import React from "react";
import logo from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import "../components/Home.css"; 

const Home = () => {
return (
    // <div className="container">
        <div className="home">
            <div className="navbar">
               <img src={logo3} alt="Logo" className="logo"/>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="btn-links">
                    <a href="/login">Login</a>
                    <a href="/signup">Sign Up</a>
                </div>
           </div>
        </div>      
    // </div>
)};
export default Home;
