import React from "react";
import style from "./Cart.module.css";
import img from "../../../images/product.png";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";

const Cart = () => {
  return (
    <div className={style.wrapper}>
      <h1 style={{ textAlign: "center", fontWeight: "300" }}>Your Bag</h1>
      <div className={style.top}>
        <button className={style.topbutton}>Continue Shopping</button>
        <div className={style.toptexts}>
          <span>Shopping Bag(2)</span>
          <span>Your Whishlist (0)</span>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.info}>
          <div className={style.product}>
            <div className={style.productdetails}>
              <img src={img} />
              <div className={style.details}>
                <div className={style.pname}>
                  <h3 style={{ marginRight: "3px" }}>Product Name: </h3>{" "}
                  <span style={{ lineHeight: "25px" }}> Maryoul</span>
                </div>

                <div className={style.pid}>
                  <h4 style={{ marginRight: "3px" }}>Product Id:</h4>{" "}
                  <span>6858965</span>
                </div>

                <div className={style.pcolor}>
                  <h4 style={{ marginRight: "3px" }}>Color:</h4>{" "}
                  <div className={style.productcolor}></div>
                </div>
                <div className={style.psize}>
                  <h4 style={{ marginRight: "3px" }}>Size:</h4> <span>M</span>
                </div>
              </div>
            </div>
            <div className={style.pricedetails}>
              <div className={style.productamountcontainer}>
                <GrFormAdd style={{ cursor: "pointer" }} />
                <h2 style={{ fontWeight: "lighter" }}>2</h2>
                <GrFormSubtract style={{ cursor: "pointer" }} />
              </div>
              <h2 style={{ fontWeight: "lighter" }}>$20</h2>
            </div>
            <div className={style.removeitem}>
              <AiFillCloseCircle style={{ cursor: "pointer" }} />
            </div>
          </div>
          <hr style={{ backgroundColor: "rgba(0,0,0,0.151)", height: "1px" }} />
          <div className={style.product}>
            <div className={style.productdetails}>
              <img src={img} />
              <div className={style.details}>
                <div className={style.pname}>
                  <h3 style={{ marginRight: "3px" }}>Product Name: </h3>{" "}
                  <span style={{ lineHeight: "25px" }}> Maryoul</span>
                </div>

                <div className={style.pid}>
                  <h4 style={{ marginRight: "3px" }}>Product Id:</h4>{" "}
                  <span>6858965</span>
                </div>

                <div className={style.pcolor}>
                  <h4 style={{ marginRight: "3px" }}>Color:</h4>{" "}
                  <div className={style.productcolor}></div>
                </div>
                <div className={style.psize}>
                  <h4 style={{ marginRight: "3px" }}>Size:</h4> <span>M</span>
                </div>
              </div>
            </div>
            <div className={style.pricedetails}>
              <div className={style.productamountcontainer}>
                <GrFormAdd style={{ cursor: "pointer" }} />
                <h2 style={{ fontWeight: "lighter" }}>2</h2>
                <GrFormSubtract style={{ cursor: "pointer" }} />
              </div>
              <h2 style={{ fontWeight: "lighter" }}>$20</h2>
            </div>
            <div className={style.removeitem}>
              <AiFillCloseCircle style={{ cursor: "pointer" }} />
            </div>
          </div>
          <hr style={{ backgroundColor: "rgba(0,0,0,0.151)", height: "1px" }} />{" "}
        </div>
        <div className={style.summary}>
          <h2 style={{ fontWeight: "300", marginBottom: "2rem" }}>
            Order summary
          </h2>
          <div className={style.orderitem}>
            <h3 style={{ fontWeight: "300" }}>SubTotal</h3>
            <h3 style={{ fontWeight: "300" }}>$20</h3>
          </div>
          <div className={style.orderitem}>
            <h3 style={{ fontWeight: "300" }}>Sipping Cost</h3>
            <h3 style={{ fontWeight: "300" }}>$5</h3>
          </div>
          <div className={style.orderitem}>
            <h3 style={{ fontWeight: "300" }}>Discount</h3>
            <h3 style={{ fontWeight: "300" }}>$5</h3>
          </div>
          <div className={style.orderitem}>
            <h3 style={{ fontWeight: "600" }}>Total</h3>
            <h3 style={{ fontWeight: "600" }}>$40</h3>
          </div>
          <button style={{ width: "100%" }} className={style.topbutton}>
            Chekout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
