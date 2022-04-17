import React from "react";
import { FiSend } from "react-icons/fi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./registermodal.module.css";

const FormOne = ({
  onSignInSubmit,
  currentStep,
  mobileNumber,
  setmobileNumber,
}) => {
  if (currentStep !== 1) {
    return null;
  }
  return (
    <form onSubmit={onSignInSubmit}>
      <div id="sign-in-button"></div>
      <span
        style={{
          color: "#FF3A3F",
          fontSize: "11px",
          paddingRight: "0.6rem",
        }}
      >
        Enter your phone number
      </span>
      <PhoneInput
        className={styles.phoneinput}
        placeholder="Enter phone number"
        value={mobileNumber}
        defaultCountry="TN"
        international
        onChange={(value) => setmobileNumber(value)}
      />
      <button className={styles.phonebtn} type="submit">
        <span
          style={{
            fontSize: "19px",
            marginRight: "0.5rem",
          }}
        >
          Send
        </span>
        <span>
          <FiSend size={"0.7em"} />
        </span>
      </button>
      <span
        style={{
          fontWeight: "200",
          fontSize: "14px",
        }}
      >
        By logging in, you accept the terms and conditions and the privacy
        policy{" "}
      </span>
      <a href="#">
        Already have an account ?
        <span style={{ color: "#c96", fontSize: "14px" }}> Login</span>
      </a>
    </form>
  );
};

export default FormOne;
