import React from "react";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store'
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch(); 
  const authState = useSelector((state) => state.auth); 
  const handleLogout=()=>{
dispatch(logout());
  }
  return (
    <div className="conatiner-Header">
      <div className="logo_div">
        <Link to={`/`}>
          <img alt="logo" src={logo} />
        </Link>
      </div>

      <div className="Right-Panel-Header">
        <div className="Login_info_Header">
          <span style={{width:"150px",margin:"19px"}} >
            <FaPhoneAlt color="white" />
            <a className="WebisteName" href="">1234 1234 1234</a>
          </span>
          <input placeholder="Search Here..." className="input" />
          
          <div>
          {authState.isAuthenticated ? (
            <div  className="button-container">
              <button className="buttonss">{authState.user.name}</button>
              <button className="buttonss" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="button-container">
            <Link to="/Login">
              <button className="buttonss">Login</button>
            </Link>

            <Link to="/Signup">
              <button className="buttonss">Signup</button>
            </Link>
            
            </div>
          )}
      </div>
          
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
