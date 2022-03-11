import React from "react";
import style from "./ProductPage.module.css";
import img from "../../../images/product.png";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

const Product = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.imgcontainer}>
        <img src={img} />
      </div>
      <div className={style.infocontainer}>
        <h1>Product</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <span>20$</span>
        <div className={style.filtercontainer}>
          <div className={style.filter}>
            <h1>Color</h1>
            <div
              className={style.filtercolor}
              style={{ backgroundColor: "blue" }}
            ></div>
            <div
              className={style.filtercolor}
              style={{ backgroundColor: "black" }}
            ></div>
            <div
              className={style.filtercolor}
              style={{ backgroundColor: "gray" }}
            ></div>
          </div>
          <div className={style.filter}>
            <h1>Size </h1>
            <select className={style.filtersize}>
              <option className={style.filtersizeoption}>XS</option>
              <option className={style.filtersizeoption}>S</option>
              <option className={style.filtersizeoption}>M</option>
              <option className={style.filtersizeoption}>L</option>
            </select>
          </div>
        </div>
        <div className={style.addcontainer}>
          <div className={style.amountcontainer}>
            <GrFormSubtract style={{ cursor: "pointer" }} />
            <span>1</span>
            <GrFormAdd style={{ cursor: "pointer" }} />
          </div>
          <button>ADD TO CARD</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
