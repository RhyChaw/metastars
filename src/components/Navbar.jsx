import React from 'react';
import './Navbar.css'; // Make sure to create a CSS file for styling
import Logo from '../assets/logo.jpeg'; // Make sure to import the logo image

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Metta Stars Foundation" height={250} width={150}/>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#join-us">Join us</a></li>
                <li><a href="#contact-us">Contact us</a></li>
                <li><a href="/blogs">Blogs</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;