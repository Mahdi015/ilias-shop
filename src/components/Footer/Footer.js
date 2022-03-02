import React from "react";
import style from "./Footer.module.css";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <hr
        style={{
          width: "100%",
          height: "2.5px",
          background: "black",
          margin: "25px 0px",
        }}
      ></hr>
      <div className={style.container}>
        <div className={style.logo}>
          <a href="#">
            <h1>Ilias Shop</h1>
          </a>
        </div>
        <div className={style.info}>
          <div className={style.leftinfo}>
            <ul>
              <li>Home</li>
              <li>Shop Collection</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={style.centerinfo}>
            <a href="#">
              {" "}
              <FaFacebookF style={{ margin: "0 1rem" }} />
            </a>
            <a href="#">
              {" "}
              <AiOutlineInstagram style={{ margin: "0 1rem" }} />
            </a>
            <a href="#">
              <FaTiktok style={{ margin: "0 1rem" }} />
            </a>
          </div>
          <div className={style.rightinfo}>
            <ul>
              <li>Payment Methods</li>
              <li>Store Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className={style.copyright}>
          <h4>Copyright © 2022 Ilias Shop </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
