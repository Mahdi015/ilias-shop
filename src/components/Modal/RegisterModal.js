import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styles from "./registermodal.module.css";
import { Stepper, Step } from "react-form-stepper";
import firebase from "../../Firebase";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import { AiFillCloseCircle } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  outline: "none",

  "@media (max-width: 780px)": {
    height: "100%",
    width: "100%",
    padding: "32px 0 32px 0",
  },
};

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];
export default function RegisterModal({ Open, setOpen, setLoginOpen }) {
  const [mobileNumber, setmobileNumber] = useState("");
  const [currentStep, setcurrentStep] = useState(1);
  const handleClose = () => setOpen(false);
  const setCapatcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    setCapatcha();
    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(mobileNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setcurrentStep(2);
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };
  const verifyCode = (code, e) => {
    e.preventDefault();
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        setcurrentStep(3);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });
  };
  return (
    <div>
      <Modal
        disableScrollLock={true}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={Open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Open}>
          <Box sx={style}>
            <div className={styles.close}>
              <AiFillCloseCircle
                style={{ cursor: "pointer" }}
                onClick={() => handleClose()}
                size={"1.3em"}
              />
            </div>
            <div className={styles.registercontainer}>
              <span>Register</span>
              <div className={styles.sm_border}></div>
              <div className={styles.steper}>
                <Stepper
                  connectorStateColors={false}
                  activeStep={currentStep - 1}
                  label="a"
                >
                  <Step index={0} label="Enter Phone Number" />
                  <Step index={1} label="Enter Verification Number" />
                  <Step index={2} label="Enter Personal Informations" />
                  <Step index={3} label="Acount Created" />
                </Stepper>
              </div>
              <FormOne
                onSignInSubmit={onSignInSubmit}
                mobileNumber={mobileNumber}
                setmobileNumber={setmobileNumber}
                currentStep={currentStep}
              />
              <FormTwo
                currentStep={currentStep}
                setcurrentStep={setcurrentStep}
                verifyCode={verifyCode}
              />
              <FormThree
                currentStep={currentStep}
                setcurrentStep={setcurrentStep}
                mobileNumber={mobileNumber}
              />
              <FormFour
                currentStep={currentStep}
                setLoginOpen={setLoginOpen}
                setOpen={setOpen}
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

// Félicitations !

// Votre compte a été créé avec succès.Veuillez vérifier votre adresse e-mail pour obtenir la plupart des fonctionnalités et services de Tayara.
