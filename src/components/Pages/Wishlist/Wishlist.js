import React from "react";
import { useSelector } from "react-redux";
import Product from "../../Product/Product";
import style from "./Wishlish.module.css";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => ({ ...state }));

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3 style={{ coloe: "#666", fontSize: "1.4rem", fontWeight: "600" }}>
          Mes favoris
        </h3>
      </div>
      <div style={{ marginTop: "4rem" }} className={style.nexarrivals}>
        {wishlist && wishlist.length !== 0
          ? wishlist.map((p, i) => (
              <div className={style.pcontainer}>
                <Product p={p} i={i} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Wishlist;
