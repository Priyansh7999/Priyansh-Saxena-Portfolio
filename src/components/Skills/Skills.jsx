import React from 'react'
import styles from "./Skills.module.css"
import Skill_Icon from '../skills_icons/Skill_Icon';
import { Slide } from "react-awesome-reveal";

export default function Skills() {
    return (
        <div id='skills' className={styles.Skills}>
            <div className={styles.content1}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h3>My Skills</h3>
                        <h2>Technologies I Work With</h2>
                        <p>I've learned many technologies and am currently getting my hands dirty with React Native and Firebase. Here are a few technologies I've been working with recently:</p>
                    </div>
                    <div>
                        <Skill_Icon />
                    </div>
                </div>
            </div>

            <div className={styles.content2}>
                <Slide direction="right" duration={500}  >
                    <h1>Other Then Development</h1>
                        <p>I'm also deeply passionate about Data Structures and Algorithms (DSA)
                            constantly refining my problem-solving skills to optimize performance and efficiency. </p>
                        <h2>Explore My Projects and Code Contributions</h2>
                    </Slide>
                <Slide direction="left" cascade damping={0.2} duration={500}  >
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
                </Slide>
            </div>
        </div>
    )
}
