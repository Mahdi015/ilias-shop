import React, { useState, useEffect } from "react";
import { creatUser } from "../../functions/auth";
import styles from "./registermodal.module.css";

const FormThree = ({ currentStep, setcurrentStep, mobileNumber }) => {
  useEffect(() => {
    const initialValues = {
      name: "",
      password: "",
      confirmpassword: "",
      city: "",
      adresse: "",
      zipcode: "",
      mobileNumber: mobileNumber,
    };
    setformValues(initialValues);
  }, [mobileNumber]);
  const [formValues, setformValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formErrors);
  };
  const validate = (values) => {
    const errors = {};
    if (values.password !== values.confirmpassword) {
      errors.passwordnotmatch = "Password do not match!";
    }
    if (values.password.length < 5) {
      errors.passwordlength = "password must be at least 6 characters long";
    }
    if (!values.name) {
      errors.name = "Please enter your name";
    }
    if (!values.adresse) {
      errors.adresse = "Please enter your adresse";
    }
    if (!values.city) {
      errors.city = "Please enter your city";
    }

    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      creatUser(formValues)
        .then((res) => {
          setcurrentStep(4);
          console.log(res.data);
          setIsSubmit(false);
        })
        .catch((err) => {
          if (err.response.status == 400) {
            console.log("duplicate");
          }
          console.log(err.response);
        });
      console.log(formValues);
    } else {
      console.log("zab");
      setIsSubmit(false);
    }
  }, [isSubmit]);
  if (currentStep !== 3) {
    return null;
  }

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          color: "#666",
          fontSize: "16px",
          marginBottom: "1rem",
        }}
      >
        Personal informations
      </span>

      <div className={styles.formcontainer}>
        <div className={styles.formrow} style={{ marginRight: "1rem" }}>
          <span
            style={{
              color: "#666",
              fontSize: "12px",
            }}
          >
            Username ( phone Number)
          </span>
          <input
            value={mobileNumber}
            className={styles.codeinput}
            readOnly
            style={{ marginBottom: "0.6rem" }}
          />
          <span
            style={{
              color: "#666",
              fontSize: "11px",
            }}
          >
            Name*
          </span>
          <span style={{ color: "#FF4A57", fontSize: "12px" }}>
            {formErrors.name}
          </span>
          <input
            name="name"
            value={formValues.name}
            onChange={(e) => handleChange(e)}
            className={styles.codeinput}
            type="text"
            required
            style={{ marginBottom: "0.6rem" }}
          />
          <span
            style={{
              color: "#666",
              fontSize: "12px",
            }}
          >
            Password*
          </span>
          <span style={{ color: "#FF4A57", fontSize: "12px" }}>
            {formErrors.passwordlength}
          </span>
          <input
            name="password"
            value={formValues.password}
            onChange={(e) => handleChange(e)}
            className={styles.codeinput}
            style={{ marginBottom: "0.6rem" }}
            type="password"
            required
          />

          <span
            style={{
              color: "#666",
              fontSize: "12px",
            }}
          >
            Confirm Password*
          </span>
          <span style={{ color: "#FF4A57", fontSize: "12px" }}>
            {formErrors.passwordnotmatch}
          </span>
          <input
            name="confirmpassword"
            value={formValues.confirmpassword}
            onChange={(e) => handleChange(e)}
            className={styles.codeinput}
            type="password"
            style={{ marginBottom: "0.6rem" }}
            required
          />
        </div>

        <div className={styles.formrow}>
          <span
            style={{
              color: "#666",
              fontSize: "12px",
            }}
          >
            Adresse*
          </span>
          <span style={{ color: "#FF4A57", fontSize: "12px" }}>
            {formErrors.adresse}
          </span>
          <input
            name="adresse"
            value={formValues.adresse}
            onChange={(e) => handleChange(e)}
            className={styles.codeinput}
            type="text"
            style={{ marginBottom: "0.6rem" }}
            required
          />

          <span
            style={{
              color: "#666",
              fontSize: "12px",
            }}
          >
            City*
          </span>
          <span style={{ color: "#FF4A57", fontSize: "12px" }}>
            {formErrors.city}
          </span>
          <input
            name="city"
            value={formValues.city}
            onChange={(e) => handleChange(e)}
            className={styles.codeinput}
            type="text"
            style={{ marginBottom: "0.6rem" }}
            required
          />

          <span
            style={{
              color: "#666",
              fontSize: "12px",
            }}
          >
            Zip Code
          </span>

          <input
            name="zipcode"
            value={formValues.zipcode}
            onChange={(e) => handleChange(e)}
            className={styles.codeinput}
            type="text"
            style={{ marginBottom: "0.6rem" }}
          />
          <button
            style={{
              width: "280px",
              marginTop: "1rem",
              height: "44px",
              backgroundColor: "#cd9d6c",
              color: "white",
            }}
            className={styles.phonebtn}
            onClick={(e) => handleSubmit(e)}
          >
            <span
              style={{
                fontSize: "19px",
                marginRight: "0.5rem",
              }}
            >
              Sign Up
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormThree;
