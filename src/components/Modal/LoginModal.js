import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styles from "./registermodal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { userLogin, setCookie, testCookie } from "../../functions/auth";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 5,
  outline: "none",

  "@media (max-width: 780px)": {
    height: "100%",
    width: "100%",
    padding: "32px 0 32px 0",
  },
};

export default function LoginModal({ LoginOpen, setLoginOpen }) {
  const navigate = useNavigate();
  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setpassword] = useState("");
  const [currentStep, setcurrentStep] = useState(1);
  const handleClose = () => setLoginOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(mobileNumber, password)
      .then((res) => {
        console.log(res.data);
        setCookie(res.data.acessToken).then((resp) => {
          console.log(resp.data);
          window.location.reload();
          setLoginOpen(false);
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <Modal
        disableScrollLock={true}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={LoginOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={LoginOpen}>
          <Box sx={style}>
            <div className={styles.close}>
              <AiFillCloseCircle
                style={{ cursor: "pointer" }}
                onClick={() => handleClose()}
                size={"1.3em"}
              />
            </div>
            <div className={styles.registercontainer}>
              <span>Login</span>
              <div className={styles.sm_border}></div>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginTop: "1rem",
                }}
              >
                <span
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "0.5rem",
                  }}
                >
                  Phone Number
                </span>
                {/* <span style={{ color: "#FF4A57", fontSize: "12px" }}>
            {formErrors.name}
          </span> */}
                {/* <input
                  name="phonenumber"
                  value={mobileNumber}
                  onChange={(e) => setmobileNumber(e.target.value)}
                  className={styles.logininput}
                  type="text"
                  required
                /> */}

                <PhoneInput
                  className={styles.logininput}
                  placeholder="Enter phone number"
                  value={mobileNumber}
                  defaultCountry="TN"
                  international
                  onChange={(value) => setmobileNumber(value)}
                />

                <span
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "0.5rem",
                  }}
                >
                  Password *
                </span>
                {/* <span style={{ color: "#FF4A57", fontSize: "12px" }}>
            {formErrors.name}
          </span> */}
                <input
                  name="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className={styles.logininput}
                  type="password"
                  required
                />
                <div className={styles.loginui}>
                  <button type="submit">LOG IN</button>
                  <FormControlLabel
                    sx={{ fontSize: "10px" }}
                    control={
                      <Checkbox sx={{ fontSize: "10px" }} color="default" />
                    }
                    label="Remember Me"
                  />

                  <a href="#">Forgot Your Password ?</a>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
