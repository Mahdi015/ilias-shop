import React, { useState, useEffect } from "react";
import style from "./Checkout.module.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { user, cart } = useSelector((state) => ({ ...state }));
  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map((c) => {
      total += c.price * c.count;
    });
    setcartTotal(total);
  }, [cart]);
  return (
    <div className={style.wrapper}>
      {user && user.length !== 0 ? (
        <div className={style.userleftcontainer}>
          <div className={style.userinfocontainer}>
            <h3>Delivery Adresse</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#666" }}>Feriani Mahdi</span>
              <span style={{ color: "#666" }}>Sakiete Ezitte Rue tunis 10</span>
              <span style={{ color: "#666" }}>Sakiete Ezite 3021</span>
              <span style={{ color: "#666" }}>Sfax</span>
              <span style={{ color: "#666" }}>22890202</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "3rem",
              }}
              className={style.updateadressebtn}
            >
              <button style={{ width: "60%" }}>Update</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.leftcontainer}>
          <div className={style.logindiv}>
            <span style={{ marginRight: "3px" }}>
              Login to save your infos{" "}
            </span>
            <a href="#" style={{ marginRight: "3px" }}>
              {" "}
              Login{" "}
            </a>
            <span style={{ marginRight: "3px" }}>Don't have account ? </span>
            <a href="#" style={{ marginRight: "3px" }}>
              {" "}
              Register
            </a>
          </div>
          <div className={style.formcontainer}>
            <form>
              <h2>Instant Order</h2>
              <div className={style.formrow}>
                <div className={style.inputgroup}>
                  <label>First Name *</label>
                  <input type="text" required />
                </div>
                <div className={style.inputgroup}>
                  <label>First Name *</label>
                  <input type="text" required />
                </div>
              </div>
              <div className={style.formrow}>
                <div className={style.inputgroup}>
                  <label>Street address *</label>
                  <input type="text" required />
                  <input type="text" required />
                </div>
              </div>
              <div className={style.formrow}>
                <div className={style.inputgroup}>
                  <label>Town / City *</label>
                  <input type="text" required />
                </div>
                <div className={style.inputgroup}>
                  <label>State / County *</label>
                  <input type="text" required />
                </div>
              </div>
              <div className={style.formrow}>
                <div className={style.inputgroup}>
                  <label>Postcode / ZIP *</label>
                  <input type="text" required />
                </div>
                <div className={style.inputgroup}>
                  <label>Phone *</label>
                  <input type="text" required />
                </div>
              </div>
              <div className={style.inputgroup}>
                <label>Order notes (optional)</label>
                <textarea
                  style={{ width: "870px", height: "166px" }}
                  cols="30"
                  rows="4"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      )}
      <div
        style={user ? { marginTop: "0" } : { marginTop: "5.5rem" }}
        className={style.rightcontainer}
      >
        {" "}
        <h3>Your Order</h3>
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "start" }}>Product</th>
              <th style={{ textAlign: "end" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.length !== 0 &&
              cart.map((p) => (
                <tr style={{ color: "#666" }}>
                  <td>
                    <a href={`/p/${p.slug}`}>{p.title}</a>
                  </td>
                  <td style={{ textAlign: "end" }}>{p.price * p.count} TND</td>
                </tr>
              ))}

            <tr style={{ color: "#333" }}>
              <td>Subtotal: </td>
              <td style={{ textAlign: "end" }}>{cartTotal} TND</td>
            </tr>
            <tr style={{ color: "#666" }}>
              <td>Shipping</td>
              <td style={{ textAlign: "end" }}>7 TND</td>
            </tr>
            <tr
              style={{
                color: "#c96",
                fontSize: "1.1rem",
              }}
              className={style.total}
            >
              <td style={{ borderBottom: "none" }}>Total</td>
              <td style={{ textAlign: "end", borderBottom: "none" }}>
                {cartTotal + 7} TND
              </td>
            </tr>
          </tbody>
        </table>
        <div className={style.button}>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
