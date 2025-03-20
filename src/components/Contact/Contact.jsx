import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
    // State to handle form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Send email function
    const sendMessage = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .send(
                "service_yylwaco",  // Replace with your Email.js Service ID
                "template_6j5abz9", // Replace with your Email.js Template ID
                formData,
                "NIKeymeVsJZ_mbyiq"      // Replace with your Email.js Public Key
            )
            .then(
                (response) => {
                    setResponseMessage("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" }); // Reset form
                },
                (error) => {
                    console.error("Failed to send email:", error);
                    setResponseMessage("Failed to send message. Please try again.");
                }
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className={styles.container} id="contact">
            <div className={styles.heading}>
                <h3>Have a project? or just looking to hire?</h3>
                <h2>Let's Work Together</h2>
                <p>
                    Feel free to reach out if you're looking to hire, just want to connect or see
                    if we can build something amazing together.
                </p>
            </div>
            <div className={styles.contant}>
                <div className={styles.text}>
                    <p>
                        I’m interested in freelance opportunities – especially ambitious or large
                        projects. However, if you have other requests or questions, don’t hesitate
                        to use the form.
                    </p>
                    <h3>Gmail: priyanshsaxena7999@gmail.com</h3>
                </div>

                {/* Contact Form */}
                <form className={styles.form} onSubmit={sendMessage}>
                    <div className={styles.inputs}>
                        <div className={styles.input}>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.message}>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className={styles.submit}>
                        <button
                            type="submit"
                            disabled={isSending}
                            className={isSending ? styles.sending : ""}
                        >
                            <i className={isSending ? styles.showIcon : ""}><FaCheck /></i>
                            {isSending ? "Sending..." : "Submit"}
                        </button>
                    </div>


                    {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}
                </form>
            </div>
        </div>
    );
}
