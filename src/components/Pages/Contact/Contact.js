import React from "react";
import style from "./Contact.module.css";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.map}>
        <div className={style.gmap_canvas}>
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=sfax%20sakiete&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <div className={style.form}>
        <h3
          style={{
            color: "#333",
            fontWeight: "500",
            textAlign: "start",
            marginBottom: "2rem",
          }}
        >
          CONTACTEZ-NOUS
        </h3>
        <div className={style.formrow}>
          <div className={style.inputgroup}>
            <input
              type="text"
              required
              name="fname"
              placeholder="Nom"
              // onChange={(e) => handleChange(e)}
              // value={clientInfos.fname}
            />
          </div>
          <div className={style.inputgroup}>
            <input
              type="text"
              placeholder="Prenom"
              required
              name="fname"
              // onChange={(e) => handleChange(e)}
              // value={clientInfos.fname}
            />
          </div>
        </div>
        <div className={style.formrow}>
          <div className={style.inputgroup}>
            <input
              type="text"
              required
              placeholder="Email"
              name="fname"
              // onChange={(e) => handleChange(e)}
              // value={clientInfos.fname}
            />
          </div>
          <div className={style.inputgroup}>
            <input
              type="text"
              placeholder="Phone"
              required
              name="fname"
              // onChange={(e) => handleChange(e)}
              // value={clientInfos.fname}
            />
          </div>
        </div>
        <div className={style.formrow}>
          <div className={style.inputgroup}>
            <textarea
              required
              cols="28"
              rows="4"
              placeholder="Mesage"
              name="message"
              //   value={clientInfos.othernotes}
              //   onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>
        <button className={style.btn}>ENVOYER</button>

        <div className={style.contactinfo}>
          <div className={style.left}>
            <div className={style.info}>
              <AiFillPhone size={"1.4em"} style={{ color: "#c96" }} />
            </div>
            <span
              style={{
                color: "#333",
                fontWeigh: "600",
                marginLeft: ".5rem",

                whiteSpace: "nowrap",
              }}
            >
              +22 890 202{" "}
            </span>
          </div>
          <div className={style.left}>
            <div className={style.info}>
              <AiFillMail size={"1.4em"} style={{ color: "#c96" }} />
            </div>
            <span
              style={{
                color: "#333",
                fontWeigh: "600",
                marginLeft: ".5rem",

                whiteSpace: "nowrap",
              }}
            >
              Ferianimahdi93@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
