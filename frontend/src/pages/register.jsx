import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    rollNo: "",
    department: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    if (formData.rollNo.length !== 9) {
      newErrors.rollNo = "Roll number must be 9 digits.";
    }

    if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration Data:", formData);
      navigate("/"); 
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>

        <p className={styles.title}>Welcome!!!</p>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="username">
              Username (as per your ID card)
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="rollNo">
              Roll No (all 9 digits)
            </label>
            <input
              type="text"
              name="rollNo"
              id="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className={styles.input}
              required
            />
            {errors.rollNo && <p className={styles.error}>{errors.rollNo}</p>}
          </div>
        </div>
        <div className={styles.row}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="department">
            Department
          </label>
          <select
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
            className={styles.input}
            required
          >
            <option value="" disabled>
              Select Department
            </option>
            <option>Architecture</option>
            <option>Chemical</option>
            <option>Chemistry</option>
            <option>Civil</option>
            <option>CSE</option>
            <option>EEE</option>
            <option>ECE</option>
            <option>MBA</option>
            <option>Physics</option>
            <option>Mech</option>
            <option>Prod</option>
            <option>MME</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Mobile Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className={styles.input}
            value={formData.phoneNumber} />
        </div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              required
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;