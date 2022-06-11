import React from "react";
import style from "./Announcement.module.css";
import { BiPhoneCall } from "react-icons/bi";
import { Fr } from "react-flags-select";
import { useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";

const Announcement = ({ setOpen }) => {
  const { user } = useSelector((state) => ({ ...state }));
  if (window.location.href.includes("admin")) {
    return null;
  }
  return (
    <div className={style.announcement}>
      <span className={style.phonespan} style={{ flex: "0.5" }}>
        {" "}
        <BiPhoneCall /> Tel: +216 890 202{" "}
        <span style={{ marginLeft: "1rem" }}>
          <IoLocationSharp /> Tunisia/Sfax
        </span>
      </span>{" "}
      <div style={{ display: "flex", alignItems: "center" }}>
        {user && user.length !== 0 ? (
          ""
        ) : (
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
        )}
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
