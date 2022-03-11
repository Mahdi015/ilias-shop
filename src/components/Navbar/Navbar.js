import React from "react";
import styles from "./Navbar.module.css";
// import SearchBar from "material-ui-search-bar";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontent}>
        <div className={styles.navbarlink}>
          <a href="/">Home</a>
          <a href="/shopcollection">Shop Collection</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.navbarbuttons}>
          <a href="#">
            {" "}
            <span>Login</span>
          </a>
          <a href="#">
            {" "}
            <span>Register</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
