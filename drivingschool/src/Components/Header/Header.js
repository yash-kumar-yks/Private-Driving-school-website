import React from "react";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="conatiner-Header">
      <div className="logo_div">
        <Link to={`/`}>
          <img alt="logo" src={logo} />
        </Link>
      </div>

      <div className="Right-Panel-Header">
        <div className="Login_info_Header">
          <span className="contact">
            <FaPhoneAlt color="white" />
            <a className="WebisteName" href="">1800 1234 1234</a>
          </span>
          <input placeholder="Search Here" className="input" />

          <button className="buttonss"> LOGIN </button>
        </div>
        <div className="Header_buttons">
          <h3 className="Headers">ABOUT US</h3>
          <h3 className="Headers">WHY US</h3>
          <h3 className="Headers"> COURSES</h3>
          <h3 className="Headers"> SCHOOL LOCATOR</h3>
          <h3 className="Headers"> MOCK LLR TEST</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
