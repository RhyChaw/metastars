import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../assets/logo.jpeg';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <a href="/">
                    <img src={Logo} alt="Metta Stars Foundation" className={styles.noOverflow} />
                </a>
            </div>

            <ul className={styles.navbarLinks}>
                <li><a href="/">Home</a></li>

                <li className={styles.dropdown}>
                    <a href="#" className={styles.dropdownBtn}>About</a>
                    <ul className={styles.dropdownMenu}>
                        <li><a href="/spirituality">Spirituality</a></li>
                        <li><a href="/financial-literacy">Financial Literacy</a></li>
                        <li><a href="/mental-health">Mental Health</a></li>
                        <li><a href="/aboutMS"> Metta Stars</a></li>
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
 