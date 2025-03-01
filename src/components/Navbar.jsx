import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/logo.jpeg'; // Ensure the logo image is in the correct path
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Metta Stars Foundation" height={80} width={60} />
            </div>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/fill-form">Join us</a></li>
                <li><a href="/blogs">Blogs</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
