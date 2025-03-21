import React from 'react';
import { FaHtml5, FaJsSquare, FaReact, FaGithub, FaPython } from 'react-icons/fa';
import { DiCss3, DiMysql, DiPostgresql } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandReactNative, TbBrandCpp } from 'react-icons/tb';
import { IoLogoFirebase } from 'react-icons/io5';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { SiFramer, SiPandas, SiNumpy } from 'react-icons/si';
import styles from "./Skill_Icon.module.css";
import { Icon } from "@iconify/react";
export default function Skill_Icon() {
    return (
        <div className={styles.skills_container}>
            {/* Languages Section */}
            <div className={styles.skill_section}>
                <h3>Languages</h3>
                <div className={styles.skills}>
                    <div className={styles.text}>
                        <Icon icon="vscode-icons:file-type-js-official" />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="logos:c-plusplus" />
                        <p>C++</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="logos:python" />
                        <p>Python</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="logos:java" />
                        <p>Java</p>
                    </div>
                </div>
            </div>
            {/* Frontend Section */}
            <div className={styles.skill_section}>
                <h3>Frontend</h3>
                <div className={styles.skills}>
                    <div className={styles.text}>
                        <Icon icon="vscode-icons:file-type-html" />
                        <p>HTML5</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="vscode-icons:file-type-css" />
                        <p>CSS3</p>
                    </div>
                    <div className={styles.text}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" viewBox="0 0 48 48">
                            <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                        </svg>
                        <p>Tailwind CSS</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="logos:react" />
                        <p>React</p>
                    </div>
                    <div className={styles.text}>
                        <TbBrandReactNative color='#61DAFB' />
                        <p>React Native</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="logos:nodejs" />
                        <p>Node.JS</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="logos:express" />
                        <p>Express.JS</p>
                    </div>

                </div>
            </div>
            {/* Data Analytics Section */}
            <div className={styles.skill_section}>
                <h3>Data Analytics</h3>
                <div className={styles.skills}>
                    <div className={styles.text}>
                        <Icon icon="logos:python" />
                        <p>Python</p>
                    </div>
                    <div className={styles.text}>
                        <SiPandas color='lightblue' />
                        <p>Pandas</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="logos:numpy" />
                        <p>Numpy</p>
                    </div>
                    <div className={styles.text}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" viewBox="0 0 48 48">
                            <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path><path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path><path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path><path fill="#17472a" d="M14 24.005H29V33.055H14z"></path><g><path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path><path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path><path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path><path fill="#129652" d="M29 24.005H44V33.055H29z"></path></g><path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path><path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
                        </svg>
                        <p>Excel</p>
                    </div>
                </div>
            </div>

            {/* Database Section */}
            <div className={styles.skill_section}>
                <h3>Database</h3>
                <div className={styles.skills}>
                    <div className={styles.text}>
                        <Icon icon="logos:mysql" />
                        <p>MySQL</p>
                    </div>
                    <div className={styles.text}>
                        <Icon icon="logos:postgresql" />
                        <p>PostgreSQL</p>
                    </div>
                    <div className={styles.text}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" viewBox="0 0 48 48">
                            <path fill="#ff8f00" d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"></path><path fill="#ffa000" d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"></path><path fill="#ff6f00" d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"></path><path fill="#ffc400" d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"></path>
                        </svg>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>

            {/* Misc Section */}
            <div className={styles.skill_section}>
                <h3>Misc</h3>
                <div className={styles.skills}>
                    <div className={styles.text} style={{ color: "white" }}>
                        <Icon icon="logos:git" />
                        <p>Git</p>
                    </div>
                    <div className={styles.text}>
                        <FaGithub color='white' />
                        <p>GitHub</p>
                    </div>

                    <div className={styles.text}>
                        <SiFramer color='yellow' />
                        <p>Framer<br />Motion</p>
                    </div>
                    <div className={styles.text}>
                        <img style={{ color: "white", backgroundColor: "white", paddingBottom: "2px", borderRadius: "5px" }} src="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png" width={40} alt="" />
                        <p> vercel</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
