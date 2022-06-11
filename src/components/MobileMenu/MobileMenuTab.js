import React, { useRef } from "react";
import style from "./MobileMenu.module.css";
import { AiOutlineClose, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
const MobileMenuTab = ({ mobileMenu, setmobileMenu }) => {
  const menuArea = useRef(null);
  const menuControl = (e) => {
    if (menuArea.current && !menuArea.current.contains(e.target)) {
      setmobileMenu(false);
    }
  };
  document.addEventListener("mousedown", menuControl);
  return (
    <div
      style={mobileMenu ? { visibility: "visible" } : {}}
      className={style.mobilemenuwrapper}
      ref={menuArea}
    >
      <span style={{ color: "white" }} className={style.closemobilemenu}>
        <AiOutlineClose onClick={() => setmobileMenu(false)} />
      </span>
      <div className={style.menucontent}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shopcollection">Nouveauté</a>{" "}
          </li>
          <li>
            <a href="/cart">My Cart</a>{" "}
          </li>
          <li>
            <a href="/wishlist">Favoris</a>{" "} 
          </li>
          <li>
            <a href="/aboutus">About us</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>

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
          <div className={style.hr}></div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuTab;
