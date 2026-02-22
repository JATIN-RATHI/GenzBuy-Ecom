import React from 'react'
import './Account.css'

const Account = () => {
  return (
    <>
      <div className="accmodal modal-dialog modal-dialog-centered ">
        <div className="account">
            <button className="loginfieldclosebtn">&times;</button>
          <div className="leftdiv">
            <img src="/images/wrogn-logo-timeout.png" alt="Wrogn" className="modal-logo" style={{ width: "150px" }} />
            <p>Hey Fam! Log in to join the Wrogn Tribe!</p>
            <div className="allboxes">
              <div className="boxes">
                <img src="/images/carousel_icon.svg" alt="carousel" className='starimg' />
                <p className='boxpara'>Extra 5% OFF on prepaid payments</p>
              </div>
              <div className="boxes">
                <img src="/images/carousel_icon.svg" alt="carousel" className='starimg' />
                <p className='boxpara'>Free shipping for orders above ₹799</p>
              </div>
              <div className="boxes">
                <img src="/images/carousel_icon.svg" alt="carousel" className='starimg' />
                <p className='boxpara'>7-day stress-free return & exchange</p>
              </div>
            </div>
          </div>
          <div className="loginfield">
            <h5 className='loginfieldh5' style={{ marginTop: "10px",fontSize: "20px", fontWeight: "600" }}>Unlock</h5>
            <h5 className='loginfieldh5' style={{ fontSize: "20px", fontWeight: "600" }}>Superior Discounts</h5>
            <p className='loginfieldP' style={{ fontSize: "14px", color: "grey" }}>Enter mobile number to login</p>
            <div className="loginfieldinput">
              <span className="country-code" style={{ width: "17%" }}>+91</span>
              <input type="text" style={{ width: "80%",border: "none" }} placeholder="Enter Mobile Number" />
            </div>
            <div className="loginfieldcheckbox">
              {/* <input type="checkbox" id="notify" /> */}
              <input type="checkbox" id="notify" style={{ width: "11px", height: "11px" }} />
              <label className="notify" style={{ color: "grey", fontSize: "13px",marginBottom: "40px" }}>Notify me for any updates & offers</label>
            </div>
            <p className='loginfieldP'style={{ color: "grey", fontSize: "12px", textAlign: "center" }}>I accept that I have read & understood Gokwik's Privacy Policy and T&Cs.</p>
            <p className='loginfieldP'style={{ color: "grey",fontSize: "13px" }}>Trouble logging in?</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Account