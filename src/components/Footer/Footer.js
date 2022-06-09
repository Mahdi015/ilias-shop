import React from "react";
import style from "./Footer.module.css";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  if (window.location.href.includes("admin")) {
    return null;
  }
  return (
    <>
      {/* <hr
        style={{
          width: "100%",
          height: "2.5px",
          background: "black",
          margin: "25px 0px",
        }}
      ></hr> */}
      <div className={style.container}>
        <div className={style.logo}>
          <a href="#">
            <h1>Ilias Shop</h1>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div className={style.info}>
            <div className={style.leftinfo}>
              <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/shopcollection")}>Nouveauté</li>
                <li onClick={() => navigate("/contact-us")}>Contact</li>
              </ul>
            </div>
            <div className={style.centerinfo}>
              <a href="https://www.facebook.com/Ilias.shop" target="_blank">
                {" "}
                <FaFacebookF style={{ margin: "0 1rem" }} />
              </a>
              <a href="https://www.instagram.com/ilias.shop/" target="_blank">
                {" "}
                <AiOutlineInstagram style={{ margin: "0 1rem" }} />
              </a>
              <a href="https://www.tiktok.com/@iliasshop" target="_blank">
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
          <div className={style.hr}></div>
        </div>

        <div className={style.newslettercontainer}>
          <h1>Newsletter</h1>
          <h4>Inscrivez-vous à notre newsletter</h4>
          <div className={style.newsletterui}>
            <input type="text" placeholder="Entrer votre Email" />
            <button>S'inscrire</button>
          </div>
        </div>
        <div className={style.copyright}>
          <h4>Copyright © 2022 Ilias Shop</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
