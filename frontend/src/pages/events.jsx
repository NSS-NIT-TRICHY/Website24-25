import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/navbar.jsx";
import EventCard from "../components/eventCard";
import styles from "./events.module.css";

const Events = () => {
    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <div className={styles.events_list}>
                <EventCard />
                <EventCard />
                <EventCard />
            </div>

            <div className={styles.event_details}>
                <div className={styles.event_info}>
                    <div className={styles.text_placeholder}>
                        <div className={styles.placeholder}></div>
                        <h2>NSS Blood Camp</h2>
                    </div>
                    <div className={styles.event_content}>
                        <p><FaCalendarAlt size={20} color="#fff"/> 12/10/24</p>
                        <p><FaMapMarkerAlt size={20} color="#fff"/> NITT Hospital</p>
                        <p><FaClock size={20} color="#fff"/> 9:00am - 5:00pm</p>
                    </div>
                </div>

                <div className={styles.register_box}>
                    <h3>Register for the Event:</h3>
                    <button className={styles.register_btn}>Register</button>
                </div>
                <div className={styles.event_description}>
                    <h3>About the Event</h3>
                    <p>A Blood Donation Camp is a community-driven 
                        initiative aimed at saving lives by collecting blood from willing donors.</p>
                    <h3>Objectives</h3>
                    "Save Lives: Blood collected is used to save patients undergoing surgeries.",
                    "Raise Awareness: Educating people about the importance of blood donation.",
                    "Promote Health: Encouraging a healthy lifestyle for eligible donors."
                </div>
            </div>
        </div>
        </>        
    )
}

export default Events;