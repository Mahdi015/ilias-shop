import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import img from "../../images/product.png";
import style from "./Product.module.css";
const Product = () => {
  return (
    <div className={style.container}>
      <div className={style.circle}></div>
      <img className={style.imgcontainer} src={img} />
      <div className={style.info}>
        <div className={style.icon}>
          <FaShoppingCart />
        </div>
        <div className={style.icon}>
          <BsSearch />
        </div>
        <div className={style.icon}>
          {" "}
          <AiFillHeart />
        </div>
      </div>
      <div className={style.price}>
        <span>20$</span>
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
