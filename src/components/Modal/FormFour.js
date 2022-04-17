import React, { useState } from "react";
import styles from "./registermodal.module.css";
import img from "./vector.png";
const FormFour = ({ currentStep, setLoginOpen, setOpen }) => {
  const [code, setcode] = useState("");

  if (currentStep !== 4) {
    return null;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    setOpen(false);
    setLoginOpen(true);
  };

  return (
    <form>
      <span
        style={{
          color: "#666",
          fontSize: "16px",
        }}
      >
        Your account has been successfully created you can login now
      </span>
      <img src={img} style={{ width: "250px", height: "250px" }} />
      <button
        style={{ width: "280px" }}
        className={styles.phonebtn}
        onClick={(e) => handleLogin(e)}
      >
        <span
          style={{
            fontSize: "19px",
            marginRight: "0.5rem",
          }}
        >
          Login
        </span>
      </button>
    </form>
  );
};

export default FormFour;
