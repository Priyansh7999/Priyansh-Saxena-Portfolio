import React from 'react'
import styles from "./Project.module.css"
import { FaFolder, FaGithub } from "react-icons/fa";
import trip_planner from "../../assets/project/TripPlanner.png"
import WeatherApp from "../../assets/project/WeatherApp.png"
import Netflix from "../../assets/project/Netflix.png"
import Blinkit from "../../assets/project/Blinkit.png"
import HyperCity from "../../assets/project/HyperCity.png"
import UnrealEngine5 from "../../assets/project/UnrealEngine5.png"
import PasswordGenerator from "../../assets/project/PasswordGenerator.png"
import { Fade } from "react-awesome-reveal";
import { motion } from 'motion/react';
export default function Project_Component({ activeField }) {
    const cards = [
        {
            name: "Trip Planner",
            class: "web",
            description: "Trip Planner is a web application that allows users to plan their trips and find the best deals on hotels, flights, and car rentals.",
            technologies: ["React JS", "Node js", "CSS", "Firebase"],
            src: trip_planner,
            github: "https://github.com/Priyansh7999/Trip-Advisor",
            live: "https://trip-advisor-anzz.vercel.app/"
        },
        {
            name: "Weather App",
            class: "app",
            description: "Weather App is a mobile application that allows users to get real-time weather information for any location with a simple and user-friendly interface and also get the weather forecast for the next 3 days.",
            technologies: ["React Native", "Expo", "CSS", "Open Weather API"],
            src: WeatherApp, 
            github: "https://github.com/Priyansh7999/Weather-App-React-Native-Expo",
            live: "https://github.com/Priyansh7999/Weather-App-React-Native-Expo"
        },
        {
            name: "Netflix Clone",
            class: "web",
            description: "Netflix Clone is a web application that allows users to browse, get information about, and watch movies and TV shows online.",
            technologies: ["React JS", "CSS", "IMDB API"],
            src: Netflix, 
            github: "https://github.com/Priyansh7999/NetFlix-Clone",
            live: "https://netflix-clone-bay-gamma.vercel.app/"
        },
        {
            name: "Blinkit Data Analysis",
            class: "data",
            description: "Blinkit Data Analysis Dashboard is an interactive data visualization project showcasing sales performance, customer insights, and product trends for a fictional Blinkit app.",
            technologies: ["Excel"],
            src: Blinkit,
            github: "https://github.com/Priyansh7999/Blinkit-Data-Analysis",
            live: "https://github.com/Priyansh7999/Blinkit-Data-Analysis"
        },
        {
            name: "HyperCity Store Data Analysis",
            class: "data",
            description: "HyperCity Store Data Analysis Dashboard is an interactive data visualization project showcasing sales performance, customer insights, and product trends for a fictional HyperCity Store app.",
            technologies: ["Excel"],
            src: HyperCity,
            github:"https://github.com/Priyansh7999/HyperCity-Store-Data-Analysis",
            live:"https://github.com/Priyansh7999/HyperCity-Store-Data-Analysis"
        },
        {
            name: "Password Generator",
            class: "web",
            description: "Password Generator is a web application that generates a random password based on user input for security purposes.",
            technologies: ["HTML", "CSS", "JavaScript"],
            src: PasswordGenerator,
            github: "https://github.com/Priyansh7999/PASSWORD_GENERATOR",
            live: "https://password-generator-kappa-three-76.vercel.app/"
        },
        {
            name: "Unreal Engine 5 clone",
            class: "web",
            description: "Unreal Engine 5 clone is the Homepage clone of the Unreal Engine 5 website. It provides a user-friendly interface for exploring the features and capabilities of the game engine.",
            technologies: ["HTML", "CSS", "JavaScript", "Animation On Scroll"],
            src: UnrealEngine5,
            github: "https://github.com/Priyansh7999/Unreak_Engine_5",
            live: "https://unreak-engine-5.vercel.app/"
        }
    
    ];
    const filteredCards = cards.filter(card => card.class === activeField);

    return (
    <>
    <div className={styles.cards}>
        {
            filteredCards.length > 0 ? (
                filteredCards.map((card, index) => {
                    return (
                        <>
                            <motion.div animate={{rotate: 360}} id='box' className={activeField === 'web' || activeField === 'data' ? styles.box : styles.boxx}>
                                <Fade>
                                    <div className={styles.image}>
                                        <img src={card.src} alt="" />
                                    </div>
                                </Fade>
                                <div className={styles.content}>
                                    <div className={styles.buttons}>
                                        <button onClick={() => window.open(card.live, "_blank")}><FaFolder /></button>
                                        <button onClick={() => window.open(card.github, "_blank")}><FaGithub /></button>
                                    </div>
                                    <div className={styles.text}>
                                        <h3>{card.name}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                    <div className={styles.technologies}>
                                        <p>Technologies</p>
                                        <ul>
                                            {
                                                card.technologies.map((technology, index) => {
                                                    return (
                                                        <li key={index}>{technology}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        
                        </>
                    )
                })
            ) : (
                <p>No projects available for this category.</p> // Optional message if no cards match the active field
            )
        }
    </div>  
    </>
    )

}
