import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p style={{color:"white"}}>We are a company dedicated to providing the best services.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p >Email: contact@company.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p style={{ color:"wheat"}}>&copy; 2024 Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
