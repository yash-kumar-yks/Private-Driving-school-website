import React from 'react';
import './Header.css';
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png"
function Header() {
    let toggle = false;


    return (
        <div className='conatiner-Header'>

            <div className="logo_div">
                <img alt="logo" src={logo} />
            </div>


            <div className='Right-Panel-Header'>

                <div className='Login_info_Header'>
                    <span>
                        <FaPhoneAlt />
                        <a href="">1800 1234 12</a>
                    </span>
                    <input placeholder="Search Here" />
                    <button className="buttons" > LOGIN </button>

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