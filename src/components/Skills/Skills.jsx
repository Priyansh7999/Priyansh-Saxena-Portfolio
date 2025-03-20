import React from 'react'
import styles from "./Skills.module.css"
import Skill_Icon from '../skills_icons/Skill_Icon';
export default function Skills() {
    return (
        <div id='skills'>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h3>MY SKILLS</h3>
                    <h2>Technologies I Work With</h2>
                    <p>I've learned many technologies and am currently getting my hands dirty with React Native and Firebase. Here are a few technologies I've been working with recently:</p>
                </div>
                <div>
                    <Skill_Icon />
                </div>
            </div>
        </div>
    )
}
