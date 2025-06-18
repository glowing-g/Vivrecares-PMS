import React from "react";
import './App.css';
import logo from './logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 VivreCares. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;