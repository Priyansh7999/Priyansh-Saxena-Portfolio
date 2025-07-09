import React from 'react';
import styles from "./Experience.module.css";
import { Slide, Fade } from "react-awesome-reveal";

export default function Experience() {
    return (
        <section id="experience" className={styles.wrapper}>
            <Fade cascade>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h3>WORK EXPERIENCE</h3>
                        <h2>Places Where I've Worked</h2>
                    </div>

                    <div className={styles.experienceCard}>
                        <Slide direction="up" triggerOnce>
                            <h4>Linkites Infotech PVT. LTD. | <span>Frontend Intern</span> | <span>June 2025 - Ongoing</span></h4>
                            <ul>
                                <li>
                                    Collaborated in a team environment, contributing reusable UI components and structured reports while meeting deadlines.
                                </li>
                                <li>
                                    Gained practical exposure to component-based development, state management, and secure authentication flows.
                                </li>
                                <li>
                                    Built responsive designs using modern libraries ensuring smooth performance across all screen sizes.
                                </li>
                                <li>
                                    Participated in sprint planning and code reviews, adhering to Agile practices and team collaboration.
                                </li>
                            </ul>
                        </Slide>
                    </div>
                </div>
            </Fade>
        </section>
    );
}
