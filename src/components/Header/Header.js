import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <a href="/" target="_self">
        <span>ilias shop</span>
      </a>
    </div>
  );
};

export default Header;
