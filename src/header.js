import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'; 
import user from './user-icon.svg'; 
import LoginModal from "./LoginModal";

function Header() {

    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">
                <img src={logo} alt="Vivre Cares Logo" className="logo" />
                </a>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/clinics">Clinics</Link></li>
                <li><a href="#contact">Contact Us</a></li>
                <li>
                    <a onClick={() => setIsOpen(true)}> <img src={user} className="user-icon"></img></a>
                    <LoginModal open={isOpen} onClose={() => setIsOpen(false)}>
                    </LoginModal>
                </li>
            </ul>
        </nav>
    );
}

export default Header;