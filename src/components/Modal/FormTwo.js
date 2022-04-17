import React, { useState } from "react";
import styles from "./registermodal.module.css";

const FormTwo = ({ currentStep, setcurrentStep, verifyCode }) => {
  const [code, setcode] = useState("");

  if (currentStep !== 2) {
    return null;
  }
  const handleCodeChange = (e) => {
    setcode(e.target.value);
  };
  return (
    <form>
      <span
        style={{
          color: "#666",
          fontSize: "16px",
        }}
      >
        Number Verification
      </span>
      <span
        style={{
          color: "#666",
          fontSize: "14px",
          fontWeight: "200",
        }}
      >
        code has been sent to your phone number{" "}
      </span>
      <span
        style={{
          color: "#FF3A3F",
          fontSize: "11px",
          paddingRight: "7.5rem",
          marginTop: "2rem",
        }}
      >
        Enter your Verification Number
      </span>
      <input
        value={code}
        onChange={(e) => handleCodeChange(e)}
        className={styles.codeinput}
        type="number"
        placeholder="verification code"
        required
      />
      <button
        style={{ width: "280px" }}
        className={styles.phonebtn}
        onClick={(e) => verifyCode(code, e)}
      >
        <span
          style={{
            fontSize: "19px",
            marginRight: "0.5rem",
          }}
        >
          Next
        </span>
      </button>
      <button
        type="submit"
        className={styles.phonebtn}
        style={{ width: "280px" }}
        onClick={() => setcurrentStep(currentStep - 1)}
      >
        <span
          style={{
            fontSize: "19px",
            marginRight: "0.5rem",
          }}
        >
          Previous
        </span>
      </button>
    </form>
  );
};

export default FormTwo;
