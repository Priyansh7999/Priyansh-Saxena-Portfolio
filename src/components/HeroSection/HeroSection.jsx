import React from 'react'
import styles from "./HeroSection.module.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function HeroSection() {
    useGSAP(()=>{
        var tl= gsap.timeline();
        tl.from("#greet",{
            duration:0.5,
            y:-20,
            opacity:0,
        })
        tl.from("#name",{
            duration:0.5,
            y:-10,
            opacity:0,
            stagger:0.3,
        })
        tl.from("#description",{
            duration:0.5,
            y:20,
            scale:0,
        })

      })
    return (
        <div className={styles.container}>
            <div id='content' className={styles.content}>
                <h2 id='greet'>Hi there 👋🏽, I'm</h2>
                <h1 id='name'>Priyansh Saxena</h1>
                <p id='description'>Frontend Developer at heart, Software Engineer by passion—Building fun and functional digital experiences!</p>
                <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
                    <a href="/Priyansh_Saxena_WeV_Developer.pdf" target="_blank" rel="noopener noreferrer">
                        <button
                            className={styles.button}
                            type="button"
                        >
                            <span className={styles.button_lg}>
                                <span className={styles.button_sl}></span>
                                <span className={styles.button_text}>View Resume</span>
                            </span>
                        </button>
                    </a>
                    <a href="#contact">
                    <button id='button2' className={styles.button} type="button">
                        <span className={styles.button_lg}>
                            <span className={styles.button_sl}></span>
                            <span className={styles.button_text}><a href="#contact">HIRE ME</a></span>
                        </span>
                    </button>
                    </a>
                </div>

            </div>

        </div>
    )
}
