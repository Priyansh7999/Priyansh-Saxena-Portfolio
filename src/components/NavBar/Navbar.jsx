import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function Navbar() { const [isOpen, setIsOpen] = useState(false);
  useGSAP(()=>{
    gsap.from("#navbar", { 
      y: -50,
      duration: 1,
      delay: 0.5,
      opacity: 0.5,
    });
  })
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar" className={styles.navbar}>
      {/* Left Side - Logo */}
      <div className={styles.logo}>PS</div>

      {/* Hamburger Menu (Mobile) */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Center Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li className={styles.navItem}><a href="#about">About</a></li>
        <li className={styles.navItem}><a href="#skills">Skills</a></li>
        <li className={styles.navItem}><a href="#experience">Experience</a></li>
        <li className={styles.navItem}><a href="#services">Services</a></li>
        <li className={styles.navItem}><a href="#projects">Projects</a></li>
        <li className={styles.navItem}><a href="#contact">Contact</a></li>
      </ul>

      {/* Right Side Icons */}
      <div className={styles.icons}>
        <a href="https://github.com/Priyansh7999" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/priyansh-saxena-399799254/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
}
