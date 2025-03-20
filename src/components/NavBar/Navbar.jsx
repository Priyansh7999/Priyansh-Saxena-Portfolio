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
        <li className={styles.navItem}><a href="#services">Services</a></li>
        <li className={styles.navItem}><a href="#projects">Projects</a></li>
        <li className={styles.navItem}><a href="#contact">Contact</a></li>
      </ul>

      {/* Right Side Icons */}
      <div className={styles.icons}>
        <a href="https://github.com/Priyansh7999" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="GitHub" />
        </a>
        <a href="https://leetcode.com/u/priyansh7999/" target="_blank" rel="noopener noreferrer">
          <img src="https://preview.redd.it/i-have-been-leetcoding-for-a-while-but-what-does-the-v0-ucy9q7w40wtc1.jpg?width=720&format=pjpg&auto=webp&s=41e11a55faf86e0b7bbbddf934b906212caa0fa9" alt="LeetCode" />
        </a>
        <a href="https://www.codechef.com/users/priyansh799" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/512/codechef.png" alt="CodeChef" />
        </a>
        <a href="https://www.linkedin.com/in/priyansh-saxena-399799254/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" />
        </a>
        <a href="https://www.hackerrank.com/profile/221B280" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" />
        </a>
      </div>
    </nav>
  );
}
