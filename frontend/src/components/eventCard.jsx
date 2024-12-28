import React from "react";
import styles from "./eventCard.module.css"

const EventCard = () => {
    return (
        <div className={styles.event_card} data-event="1">
        <div className={styles.title_placeholder}>
          <div className={styles.sec_placeholder}></div>
          <div className={styles.event_card_title_container}>
            <h4>NSS Blood Camp</h4>
            <p><i className="fas fa-calendar-alt"></i> 12/10/24</p>
          </div>
        </div>
        <div className={styles.event_details_p}>
          <p><i className="fas fa-users"></i> 200 Registered</p>
          <p><i className="fas fa-hourglass-half"></i> 8 days left</p>
        </div>
      </div>
    )
}

export default EventCard;