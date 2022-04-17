import React, { useEffect, useState } from "react";
import style from "./Cart.module.css";
import SingleCartProduct from "./SingleCartProduct";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  const [cartTotal, setcartTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let total = 0;
    cart.map((c) => {
      total += c.price * c.count;
    });
    setcartTotal(total);
  }, [cart]);
  return (
    <div className={style.wrapper}>
      <h1 style={{ textAlign: "center", fontWeight: "300" }}>Your Bag</h1>
      <div className={style.top}>
        <button className={style.topbutton}>Continue Shopping</button>
        <div className={style.toptexts}>
          <span>Shopping Bag({cart && cart.length})</span>
          <span>Your Whishlist (0)</span>
        </div>
      </div>
      {cart && cart.length !== 0 ? (
        <div className={style.bottom}>
          <div className={style.info}>
            <table>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th style={{ width: "400px" }}>Product</th>
                  <th style={{ width: "120px" }}>Price</th>
                  <th style={{ width: "120px" }}>Quantity</th>
                  <th style={{ width: "88px" }}>Total</th>
                  <th
                    style={{
                      width: "38px",
                      paddingRight: "0",
                      paddingLeft: "0",
                      textAlign: "right",
                    }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {cart && cart.map((p) => <SingleCartProduct p={p} />)}
              </tbody>
            </table>
          </div>
          <div className={style.summary}>
            <h2 style={{ fontWeight: "300", marginBottom: "2rem" }}>
              Order summary
            </h2>
            <div className={style.orderitem}>
              <h3 style={{ fontWeight: "300" }}>SubTotal</h3>
              <h3 style={{ fontWeight: "300" }}>
                {" "}
                {cartTotal && `${cartTotal} TND`}
              </h3>
            </div>
            <div className={style.orderitem}>
              <h3 style={{ fontWeight: "300" }}>Sipping Cost</h3>
              <h3 style={{ fontWeight: "300" }}>7 TND</h3>
            </div>
            <div className={style.orderitem}>
              <h3 style={{ fontWeight: "300" }}>Discount</h3>
              <h3 style={{ fontWeight: "300" }}>5 TND</h3>
            </div>
            <div className={style.orderitem}>
              <h3 style={{ fontWeight: "600" }}>Total</h3>
              <h3 style={{ fontWeight: "600" }}>
                {cartTotal && `${cartTotal + 12} TND`}
              </h3>
            </div>
            <button
              style={{ width: "100%" }}
              onClick={() => navigate("/checkout")}
              className={style.topbutton}
            >
              Chekout
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>CART EMPTY</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
