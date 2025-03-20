import React from 'react'
import styles from "./Services.module.css"
import Arrow from "../../assets/Services/Arrow.mp4"
import { Slide } from "react-awesome-reveal";
export default function Services() {
    return (
        <>
            <div id='services'>
            <div className={styles.container}>
                        <div className={styles.heading}>
                            <h3>WHAT I CAN DO </h3>
                            <h2>Services</h2>
                        </div>
                    </div>
                <section className={styles.skills}>

                    <div className={styles.skill_section}>
                    <Slide direction="left">
                        <p id='left'>Web</p>
                    </Slide>
                        <span className={`${styles.video_wrapper} ${styles.video_visible}`}>
                            <video
                                // preload="none"
                                autoPlay
                                loop
                                playsInline
                                poster="https://davidhaz.com/images/web_development_placeholder.webp"
                            >
                                <source
                                    src={Arrow}
                                    type="video/mp4"
                                />
                            </video>
                        </span>
                        <Slide direction="right">
                        <p id='right'>Development</p>
                        </Slide>
                        
                    </div>

                    <div className={styles.skill_section}>
                        <Slide direction="left">
                            <p>App</p>
                        </Slide>
                        
                        <span className={`${styles.video_wrapper} ${styles.video_visible}`}>
                            <video
                                // preload="none"
                                autoPlay
                                loop
                                playsInline
                                poster="https://davidhaz.com/images/3d_web_experiences_placeholder.webp"
                            >
                                <source
                                    src="https://davidhaz.com/videos/3d_web_experiences.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </span>
                        <Slide direction="right">
                        <p>Development</p>
                        </Slide>
                    </div>

                    <div className={styles.skill_section}>
                        <Slide direction="left">
                            <p>Data</p>
                        </Slide>
                        <span className={`${styles.video_wrapper} ${styles.video_visible}`}>
                            <video
                                // preload="none"
                                autoPlay
                                loop
                                playsInline
                                poster="https://davidhaz.com/images/interface_design_placeholder.webp"
                            >
                                <source
                                    src="https://davidhaz.com/videos/interface_design.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </span>
                        <Slide direction="right">
                            <p>Analysis</p>
                        </Slide>
                    </div>

                    <div className={styles.skill_section}>
                        <Slide direction="left">
                            <p>Creative</p>
                        </Slide>
                        
                        <span className={`${styles.video_wrapper} ${styles.video_visible}`}>
                            <video
                                // preload="none"
                                autoPlay
                                loop
                                playsInline
                                poster="https://davidhaz.com/images/creative_coding_placeholder.webp"
                            >
                                <source
                                    src="https://davidhaz.com/videos/creative_coding.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </span>
                        <Slide direction="right">
                        <p>Coding</p>
                        </Slide>
                    </div>

                    <div className={styles.skill_section}>
                        <Slide direction="left">
                            <p>Solid</p>
                        </Slide>
                        
                        <span className={`${styles.video_wrapper} ${styles.video_visible}`}>
                            <video
                                // preload="none"
                                autoPlay
                                loop
                                playsInline
                                poster="https://davidhaz.com/images/solid_engineering_placeholder.webp"
                            >
                                <source
                                    src="https://davidhaz.com/videos/solid_engineering.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </span>
                        <Slide direction="right">
                            <p>Engineering</p>
                        </Slide>
                        
                    </div>
                </section>
            </div>
        </>
    )
}
