import React from 'react'
import Service_Componenets from './Service_Componenets'

export default function oldServices() {
  return (
    <div>
             <div className={styles.container}>
               <div className={styles.heading}>
                 <h3>WHAT I CAN DO </h3>
                 <h2>Services</h2>
               </div>
               <div>
                 <div className={styles.service}>
                 <Service_Componenets />
                 </div>
               </div>
             </div>
    </div>
  )
}
