import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import img from "./logo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Header = () => {
  const [cartLength, setcartLength] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);
  const { cart } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    let total = 0;
    setcartLength(cart.length);
    cart.map((c) => {
      total += c.price * c.count;
    });
    setcartTotal(total);
  }, [cart]);
  if (window.location.href.includes("admin")) {
    return null;
  }

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

        <Badge
          badgeContent={cartLength ? cartLength : "0"}
          color="warning"
          sx={{
            "& .MuiBadge-badge": { fontSize: 11, height: 18 },
            p: 0.6,
          }}
        >
          <a href="/cart">
            <div style={{ alignItems: "center", display: "flex" }}>
              {" "}
              <AiOutlineShoppingCart size={"1.4em"} />{" "}
              <span style={{ marginLeft: "0.5rem" }}>
                {cartTotal ? `${cartTotal} TND` : "0.00 TND"}
              </span>
            </div>
          </a>
        </Badge>
      </div>
    </div>
  );
};

export default Header;
