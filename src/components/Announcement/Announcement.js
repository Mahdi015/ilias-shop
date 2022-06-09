import React from "react";
import style from "./Announcement.module.css";
import { BiPhoneCall } from "react-icons/bi";
import flag from "./fr.png";
import { Fr } from "react-flags-select";

const Announcement = ({ setOpen }) => {
  if (window.location.href.includes("admin")) {
    return null;
  }
  return (
    <div className={style.announcement}>
      <span className={style.phonespan} style={{ flex: "0.5" }}>
        {" "}
        <BiPhoneCall /> Call: +0123 456 789{" "}
      </span>{" "}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            marginRight: "1rem",
            fontSize: ".8.5rem",
            color: "#999",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          Nouveaux client ? / S'incrire
        </span>
        <div className={style.langselectdiv}>
          <select className={style.select}>
            <option defaultChecked value="">
              Francais
            </option>
          </select>
          <span className={style.flagspan}>
            {" "}
            <Fr fontSize={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
