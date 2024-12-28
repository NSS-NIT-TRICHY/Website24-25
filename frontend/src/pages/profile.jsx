
import React from "react";
import styles from "./profile.module.css";  
import Navbar from "../components/navbar";

const Profile = ({ username, rollNo, phoneNumber, department }) => {
  const certificates = [
    { name: "NSS Blood Camp", date: "12/10/23" },
    { name: "Coding Bootcamp", date: "15/11/23" },
  ];

  return (
    
    <div className={styles.container}>
       <Navbar />
      <div className={styles.profileContainer}>
        <div className={styles.profileSection}>
          <form className={styles.profileForm}>
            <div className={styles.formGroup}>
              <label>Username-</label>
              <input
                type="text"
                value={username}
                readOnly
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Roll Number-</label>
                <input
                  type="text"
                  value={rollNo}
                  readOnly
                />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number-</label>
                <input
                  type="text"
                  value={phoneNumber}
                  readOnly
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Department-</label>
              <input
                type="text"
                value={department}
                readOnly
              />
            </div>
          </form>
        </div>
      </div>

      <h2>Certificates</h2>
      <div className={styles.certificatesSection}>
        <table>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={index}>
                <td>{cert.name}</td>
                <td>{cert.date}</td>
                <td>
                  <a href="#">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
