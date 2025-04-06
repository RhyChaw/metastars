import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../assets/logo.jpeg';
import { Menu, X } from 'lucide-react'; // Using Lucide icons for hamburger

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleAbout = () => setAboutOpen(!aboutOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <a href="/">
                    <img src={Logo} alt="Metta Stars Foundation" className={styles.noOverflow} />
                </a>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>

            <ul className={`${styles.navbarLinks} ${menuOpen ? styles.active : ''}`}>
                <li><a href="/">Home</a></li>

                <li className={styles.dropdown}>
                    <button className={styles.dropdownBtn} onClick={toggleAbout}>
                        About
                    </button>
                    <ul className={`${styles.dropdownMenu} ${aboutOpen ? styles.subActive : ''}`}>
                        <li><a href="/spirituality">Spirituality</a></li>
                        <li><a href="/financial-literacy">Financial Literacy</a></li>
                        <li><a href="/mental-health">Mental Health</a></li>
                        <li><a href="/aboutMS">Metta Stars</a></li>
                        <li><a href="/team">The Team</a></li>
                    </ul>
                </li>

                <li><a href="/fill-form">Join Us</a></li>
                <li><a href="/blogs">Blogs</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
