import React from "react";
import Volunteer_details from "../components/Volunteer_stories.jsx";
import styles from "./home.module.css";
import Logo1 from "../assets/logos/NSS-Logo.png";
import Logo2 from "../assets/logos/Thanjavur_medical_college.jpg"
import Logo3 from "../assets/logos/Kauvery_hospital.jpeg"
import Logo4 from "../assets/logos/Group_pic.jpg"
import Navbar from "../components/navbar.jsx"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.title_logo}>
        <div className={styles.titles}>
          <div className={styles.title}>NSS NIT TRICHY</div>
          <div className={styles.title2}>Not Me, But You</div>
          <div className={styles.buttons}>
            <button className={styles.button_1}><a href="/Login" className={styles.link_1}>Login</a></button>
            <button className={styles.button_2}><a href="/Register" className={styles.link_2}>Register</a></button>
          </div>
        </div>
        <img src={Logo1} alt="" className={styles.club_logo} />
      </div>

      {/*Sponsers*/}
      <div className={styles.sponsers}>
        <img src={Logo2} alt="" className={styles.sponsers_1}/>
        <img src={Logo3} alt="" className={styles.sponsers_2} />
      </div>

      {/*Places Served*/}
      <div className={styles.places}>
        <div className={styles.places_1}>
           <div className={styles.places_1_1}>20+</div>
           <div className={styles.places_1_2}>Orphanages</div>
        </div>
        <div className={styles.places_1}>
          <div className={styles.places_1_1}>20+</div>
          <div className={styles.places_1_2}>Orphanages</div>
        </div>
        <div className={styles.places_1}>
          <div className={styles.places_1_1}>20+</div>
          <div className={styles.places_1_2}>Orphanages</div>
        </div>
      </div>

      {/*About us part*/}
      <div className={styles.about_us}>
        <div className={styles.about_us_title}>About Us</div>
        <div className={styles.about_us_content}>
            <div className={styles.content}>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Animi explicabo incidunt nobis vero distinctio, optio aut 
                 pariatur labore a in corrupti temporibus quibusdam odio voluptatibus cumque possimus
                 , sed nihil quisquam.
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, dolore. Odio quia sunt veritatis.
                 Dolorem et veniam culpa earum assumenda amet rem voluptas molestias obcaecati, qui nostrum commodi! Quia, alias.
                 Animi explicabo incidunt nobis vero distinctio, optio aut 
                 pariatur labore a in corrupti temporibus quibusdam odio voluptatibus cumque possimus
                 , sed nihil quisquam.
                 Animi explicabo incidunt nobis vero distinctio, optio aut 
                 pariatur labore a in corrupti temporibus quibusdam odio voluptatibus cumque possimus
                 , sed nihil quisquam.
                </p>
                <button className={styles.learn_more_button}><a href="/About_us" className={styles.learn_more_link}>Learn more</a></button>
            </div>
            <div className={styles.image}>
              <div className={styles.image_outline}>
                <img src={Logo4} alt="" className={styles.image_link}/>
              </div>
            </div>
        </div>
      </div>

      {/* Volunteer Stories */}
      <div className={styles.stories}>
        <Volunteer_details/>
        <Volunteer_details/>   
        <Volunteer_details/>
        <Volunteer_details/>     
        <Volunteer_details/>
        <Volunteer_details/>  
        <Volunteer_details/>
      </div> 
    </>
  );
};

export default Home;