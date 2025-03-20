import React from 'react';
import { FaHtml5, FaJsSquare, FaReact, FaGithub, FaPython } from 'react-icons/fa';
import { DiCss3, DiMysql, DiPostgresql } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandReactNative, TbBrandCpp } from 'react-icons/tb';
import { IoLogoFirebase } from 'react-icons/io5';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { SiFramer, SiPandas, SiNumpy } from 'react-icons/si';
import styles from "./Skill_Icon.module.css";
export default function Skill_Icon() {
    return (
        <div className={styles.skills_container}>
            {/* Development Section */}
            <div className={styles.skill_section}>
                <h3>Development</h3>
                <div className={styles.skills}>
                    <div className={styles.text}>
                        <FaHtml5 />
                        <p>HTML5</p>
                    </div>
                    <div className={styles.text}>
                        <DiCss3 />
                        <p>CSS3</p>
                    </div>
                    <div className={styles.text}>
                        <RiTailwindCssFill />
                        <p>Tailwind CSS</p>
                    </div>
                    <div className={styles.text}>
                        <FaJsSquare />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.text}>
                        <FaReact />
                        <p>React.JS</p>
                    </div>
                    <div className={styles.text}>
                        <TbBrandReactNative />
                        <p>React Native</p>
                    </div>
                    <div className={styles.text}>
                        <TbBrandCpp />
                        <p>C++</p>
                    </div>
                    <div className={styles.text}>
                        <IoLogoFirebase />
                        <p>Firebase</p>
                    </div>
                </div>
            </div>

            {/* Data Analytics Section */}
            <div className={styles.skill_section}>
                <h3>Data Analytics</h3>
                <div className={styles.skills}>
                    <div className={styles.text}>
                        <FaPython />
                        <p>Python</p>
                    </div>
                    <div className={styles.text}>
                        <SiPandas />
                        <p>Pandas</p>
                    </div>
                    <div className={styles.text}>
                        <SiNumpy />
                        <p>Numpy</p>
                    </div>
                    <div className={styles.text}>
                        <PiMicrosoftExcelLogoFill />
                        <p>Excel</p>
                    </div>
                </div>
            </div>

            {/* Other Section */}
            <div className={styles.skill_section}>
                <h3>Other</h3>
                <div className={styles.skills}>
                    <div className={styles.text}>
                        <FaGithub />
                        <p>GitHub</p>
                    </div>
                    <div className={styles.text}>
                        <SiFramer />
                        <p>Framer Motion</p>
                    </div>
                    <div className={styles.text}>
                        <DiMysql />
                        <p>MySQL</p>
                    </div>
                    <div className={styles.text}>
                        <DiPostgresql />
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
