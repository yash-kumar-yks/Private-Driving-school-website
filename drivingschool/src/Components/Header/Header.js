import React from 'react';
import './Header.css';
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
function Header() {
    
    return (
        <div className='conatiner-Header'>

            <div className="logo_div">
                <img alt="logo" src={logo} />
            </div>


            <div className='Right-Panel-Header'>

                <div className='Login_info_Header'>
                    <span className='contact'>
                        <FaPhoneAlt color="white"/>
                        <a href="">1800 1234 1234</a>
                    </span>
                    <input placeholder="Search Here" className='input'/>

                
                <button className='buttons'> LOGIN </button>
               
                    

                </div>
                <div className="Header_buttons">

                    <h3>ABOUT US</h3>
                    <h3>WHY US</h3>
                    <h3> COURSES</h3>
                    <h3> SCHOOL LOCATOR</h3>
                    <h3> MOCK LLR TEST</h3>

                </div>

            </div>


        </div>
    );
}

export default Header