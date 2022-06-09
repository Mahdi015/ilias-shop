import React from "react";
import img from "./0.png";
import style from "./Checkout.module.css";
const OrderConfirmation = () => {
  return (
    <div className={style.occontainer}>
      <img src="https://res.cloudinary.com/ds5eqdcxk/image/upload/v1654711049/0_ve2kyv.png" />
      <h3>Your order has benn placed !</h3>
      <p>We"ll be in touch with you soon to confirm your order</p>
    </div>
  );
};

export default OrderConfirmation;
