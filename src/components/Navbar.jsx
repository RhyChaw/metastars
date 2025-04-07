import React, { useState } from 'react';
import styles from '../compStyling/Navbar.module.css';
import Logo from '../assets/logo.jpeg';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setAboutOpen(false); // close dropdown when toggling main menu
    };

    const toggleAbout = () => {
        setAboutOpen(!aboutOpen);
    };

    const closeAllMenus = () => {
        setMenuOpen(false);
        setAboutOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <a href="/" onClick={closeAllMenus}>
                    <img src={Logo} alt="Metta Stars Foundation" className={styles.noOverflow} />
                </a>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>

            <ul className={`${styles.navbarLinks} ${menuOpen ? styles.active : ''}`}>
                <li><a href="/" onClick={closeAllMenus}>Home</a></li>

                <li className={styles.dropdown}>
                    <button className={styles.dropdownBtn} onClick={toggleAbout}>
                        About {aboutOpen ? '▲' : '▼'}
                    </button>
                    <ul className={`${styles.dropdownMenu} ${aboutOpen ? styles.subActive : ''}`}>
                        <li><a href="/spirituality" onClick={closeAllMenus}>Spirituality</a></li>
                        <li><a href="/financial-literacy" onClick={closeAllMenus}>Financial Literacy</a></li>
                        <li><a href="/mental-health" onClick={closeAllMenus}>Mental Health</a></li>
                        <li><a href="/aboutMS" onClick={closeAllMenus}>Metta Stars</a></li>
                        <li><a href="/team" onClick={closeAllMenus}>The Team</a></li>
                    </ul>
                </li>

                <li><a href="/fill-form" onClick={closeAllMenus}>Join Us</a></li>
                <li><a href="/blogs" onClick={closeAllMenus}>Blogs</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
