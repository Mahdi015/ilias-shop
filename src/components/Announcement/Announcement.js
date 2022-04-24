import React from "react";
import style from "./Announcement.module.css";
import { BiPhoneCall } from "react-icons/bi";

const Announcement = () => {
  if (window.location.href.includes("admin")) {
    return null;
  }
  return (
    <div className={style.announcement}>
      <span className={style.phonespan} style={{ flex: "0.5" }}>
        {" "}
        <BiPhoneCall /> Call: +0123 456 789{" "}
      </span>
      <span> Ilias Shop Children's Clothing Store / Tunisia-Sfax</span>
    </div>
  );
};

export default Announcement;
