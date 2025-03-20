import React from 'react'
import styles from "./Services_componenets.module.css"
export default function Service_Componenets() {
  return (
    <div>
      <div className={styles.service}>
        <div className={styles.services_card}>
            <img src="https://gregsithole.com/static/media/service-2.360040db94db03a3ca860042e67c4912.svg" alt="" />
            <h2>Web Development</h2>
            <p>I use various web technologies to develop attractive,creative, interactive, responsive and functional website layouts.</p>
        </div>
        <div className={styles.services_card}>
            <img src="https://cdn-icons-png.freepik.com/256/5608/5608615.png?ga=GA1.1.2014582592.1742239431&semt=ais_hybrid" alt="" />
            <h2>Mobile App Development</h2>
            <p>I use various mobile app development technologies to develop attractive, creative, interactive, responsive and functional mobile app layouts.</p>
        </div>
        <div className={styles.services_card}>
            <img src="https://cdn-icons-png.freepik.com/256/2782/2782163.png?semt=ais_hybrid" alt="" />
            <h2>Data Analysis</h2>
            <p>I use various data analysis technologies to develop attractive, creative, interactive, responsive and functional data analysis layouts.</p>
        </div>
      </div>
    </div>
  )
}
