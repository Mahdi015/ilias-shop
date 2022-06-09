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
      <h1 style={{ textAlign: "center", fontWeight: "300" }}>Panier</h1>
      <div className={style.top}>
        <button style={{ width: "250px" }} className={style.checkoutbtn}>
          Continuer vos achats
        </button>
        {/* <div className={style.toptexts}>
          <span>Shopping Bag({cart && cart.length})</span>
          <span>Your Whishlist (0)</span>
        </div> */}
      </div>
      {cart && cart.length !== 0 ? (
        <div className={style.bottom}>
          <div className={style.info}>
            <table>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th style={{ width: "400px" }}>Produit</th>
                  <th style={{ width: "120px" }}>Prix</th>
                  <th style={{ width: "120px" }}>Quantité</th>
                  <th style={{ width: "88px" }}>Totale</th>
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
            <h3
              style={{
                fontWeight: "500",
                marginBottom: "2rem",
                borderBottom: "0.1rem solid #ccc",
                color: "#333",
                paddingBottom: "0.7rem",
              }}
            >
              SAC DE COURSES
            </h3>

            <div className={style.orderitem}>
              <h3 style={{ fontWeight: "400" }}>Sous-total</h3>
              <h3 style={{ fontWeight: "400" }}>
                {" "}
                {cartTotal && `${cartTotal} TND`}
              </h3>
            </div>
            <div className={style.orderitem}>
              <h3>Livraison</h3>
              <h3> 7 TND</h3>
            </div>
            <div className={style.orderitem}>
              <h3>Discount</h3>
              <h3>5 TND</h3>
            </div>
            <div style={{ margin: "1rem 0" }} className={style.orderitem}>
              <h3 style={{ fontWeight: "500", color: "#c96" }}>Total</h3>
              <h3 style={{ fontWeight: "500", color: "#c96" }}>
                {cartTotal && `${cartTotal + 12} TND`}
              </h3>
            </div>
            <button
              style={{ width: "100%" }}
              onClick={() => navigate("/checkout")}
              className={style.checkoutbtn}
            >
              Commander
            </button>

            <button className={style.continushopbtn}>
              Continuer vos achats
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
