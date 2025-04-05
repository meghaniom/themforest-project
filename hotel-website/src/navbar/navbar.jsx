import React from "react";
import "./navbar.css";
import logo from "../assets/img/logo.png";
import nightmood from "../assets/img/night-mode.png";

const Navbar = () => {

  return (
    <>
      <div className="navbar-outer">
        <div className="navbar-innner">
          <div className="item1-outer">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="itel-list">
            <li>
              {" "}
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>{" "}
            </li>

            <li>
              <a href=""> page</a>
            </li>
            <li>
              <a href=""> Blog</a>
            </li>
            <li>
              <a href="">Conact</a>
            </li>
          </ul>
          <div className="item-booking-online">
            <div className="mood-icon-img">
              <img src={nightmood} alt="" />
            </div>
            <div className="booking-online">
              <a href="">Booking online</a>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
