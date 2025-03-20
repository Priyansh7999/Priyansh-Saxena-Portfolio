import React, { useState } from 'react'
import styles from "./Project.module.css"
import Project_Component from './Project_Component'

export default function Project() {
    const [Field,setField]=useState("web");
    return (
        <div id='projects'>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h3>MY PROJECTS</h3>
                    <h2>Some Things I Built</h2>
                </div>
                <div className={styles.types} id='project'>
                    <button className={styles.type_button} type="button" onClick={()=>setField("web")}>
                            <span className={styles.button_lg}>
                                <span className={styles.button_sl}></span>
                                <span className={styles.button_text}>Web Development</span>
                            </span>
                    </button>
                    <button className={styles.type_button} type="button" onClick={()=>setField("app")}>
                            <span className={styles.button_lg}>
                                <span className={styles.button_sl}></span>
                                <span className={styles.button_text}>App Development</span>
                            </span>
                    </button>
                    <button className={styles.type_button} type="button" onClick={()=>setField("data")}>
                            <span className={styles.button_lg}>
                                <span className={styles.button_sl}></span>
                                <span className={styles.button_text}>Data Analysis</span>
                            </span>
                    </button>
                </div>
                <div>
                    <Project_Component activeField={Field}/>
                </div>
            </div>
        </div>
    )
}
