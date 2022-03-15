import React from "react";
import styles from "./Header.module.css";
import img from "./logo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.srachcontainer}>
        <span>
          <BsSearch />
          <input placeholder="Search product..." type="search" />
        </span>
      </div>

      <div className={styles.logocontainer}>
        <a href="/" target="_self">
          <img src={img} />
        </a>
      </div>

      <div className={styles.infocontainer}>
        <a href="#">
          <div
            style={{
              alignItems: "center",
              display: "flex",
              marginRight: "0.8rem",
            }}
          >
            <AiOutlineHeart size={"1.4em"} />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "13px",
                lineHeight: "13px",
              }}
            >
              My Wishlist
            </span>
          </div>
        </a>
        <a href="#">
          <div style={{ alignItems: "center", display: "flex" }}>
            {" "}
            <AiOutlineShoppingCart size={"1.4em"} />{" "}
            <span style={{ marginLeft: "0.5rem" }}>$0.00</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
