import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import style from "./Sidebar.module.css";
import { FaFacebook } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <ul>
        <li>
          <a target="_blank" href="https://www.facebook.com/Ilias.shop">
            <FaFacebook style={{ color: "white" }} />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/ilias.shop/">
            <AiFillInstagram style={{ color: "white" }} />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
