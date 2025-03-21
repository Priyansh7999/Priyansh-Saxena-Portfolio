import React from 'react'
import styles from "./About.module.css"
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
export default function About() {
  return (
    <div className={styles.container} id='about'>

      <div className={styles.content1}>

        <div className={styles.heading}>
          <Slide direction="up">
            <h2>A Bit About Me</h2>
          </Slide>
        </div>

        <div className={styles.text}>
          <Fade>
            <p id='bio'>I'm a Web and App developer & Data Analyst. I specialize in Frontend Engineering,
              focusing on building high quality web experiences through clean code and thoughtful design.
              I'm passionate about deciphering challenging problems and creating exceptional digital experience.</p>
          </Fade>
        </div>
        <div className='profile'>
        <div>
          <p>Based on<br />India</p>
          <p>Specializing in<br />App & Web Development, Data Analysis</p>
        </div>
      </div>
      </div>

      <div className={styles.content2}>
        <div className={styles.experience}>
          <p><span>2+</span>Years of Learning</p>
        </div>  
        <div className='profile'>
          <p className='looking'>Currently looking for<br />Internship</p>
      </div>
      </div>
    </div>
  )
}

