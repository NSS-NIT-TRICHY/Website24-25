import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password || !userType) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true); 

    try {
      const response = await fetch("./login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          userType,
        }),
      });

      const data = await response.json();
      setIsLoading(false); 

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setIsLoading(false); 
      setErrorMessage("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); 
  };

  return (
    <div className={styles.logincontainer}>
      <div className={styles.loginbox}>
        <h1 className={styles.logintitle}>HELLO!!</h1>
        {errorMessage && <p className={styles.errormessage}>{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className={styles.formgroup}>
            <label htmlFor="userType" className={styles.formlabel}>
              Choose a User Type
            </label>
            <select
              id="userType"
              className={styles.formselect}
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="username" className={styles.formlabel}>
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className={styles.forminput}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="password" className={styles.formlabel}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={styles.forminput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formfooter}>
            <a
              href="#"
              className={styles.forgotlink}
              onClick={handleForgotPassword}
            >
              Forgot password? Click here
            </a>
          </div>
          <button type="submit" className={styles.loginbutton} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;