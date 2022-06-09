import React, { useState, useEffect } from "react";
import style from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { createOrderNoUser } from "../../../functions/user";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => ({ ...state }));
  const [cartTotal, setcartTotal] = useState(0);
  const initialValues = {
    fname: "mahdi",
    lname: "feriani",
    stadresse: "sfax sakieete ezitte",
    stadresse2: "",
    city: "sfax",
    zipcode: "3021",
    phone: "22890202",
    othernotes: "hi",
  };

  const [clientInfos, setclientInfos] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setclientInfos({ ...clientInfos, [name]: value });
    console.log(clientInfos);
  };
  useEffect(() => {
    let total = 0;
    cart.map((c) => {
      total += c.price * c.count;
    });
    setcartTotal(total + 7);
  }, [cart]);

  const handleCheckOut = (e) => {
    e.preventDefault();
    let cart = [];
    if (typeof window !== "undefined") {
      //Get cart from loclal
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
    }
    createOrderNoUser(cart, clientInfos, user, cartTotal)
      .then((res) => {
        toast.success("Order Sucsseed !");
        navigate(`/orderconfirmation/${res.data._id}`);
      })
      .catch((err) => {
        toast.error("Something Wrong !");
        console.log(err.data.message);
      });
  };
  return (
    <div className={style.wrapper}>
      {user && user.length !== 0 ? (
        <div className={style.userleftcontainer}>
          <div className={style.userinfocontainer}>
            <h3>Adresse de livraison</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#666" }}>{user.name}</span>
              <span style={{ color: "#666" }}>{user.adresse}</span>
              <span style={{ color: "#666" }}>{user.city}</span>
              <span style={{ color: "#666" }}>{user.mobileNumber}</span>
              <span style={{ color: "#666" }}>{user.zipcode}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "3rem",
              }}
              className={style.updateadressebtn}
            >
              <button style={{ width: "60%" }}>Mise à jour</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.leftcontainer}>
          <div className={style.logindiv}>
            <span style={{ marginRight: "3px" }}>
              Connectez-vous pour enregistrer vos informations{" "}
            </span>
            <a href="#" style={{ marginRight: "3px" }}>
              {" "}
              Login{" "}
            </a>
            <span style={{ marginRight: "3px" }}>
              vous n'avez pas de compte ?{" "}
            </span>
            <a href="#" style={{ marginRight: "3px" }}>
              {" "}
              Register
            </a>
          </div>
          <div className={style.formcontainer}>
            <form id="myform" onSubmit={(e) => handleCheckOut(e)}>
              <h2>Commande instantanée</h2>
              <div className={style.formrow}>
                <div className={style.inputgroup}>
                  <label>Prénom *</label>
                  <input
                    type="text"
                    required
                    name="fname"
                    onChange={(e) => handleChange(e)}
                    value={clientInfos.fname}
                  />
                </div>
                <div className={style.inputgroup}>
                  <label>Nom *</label>
                  <input
                    type="text"
                    required
                    name="lname"
                    onChange={(e) => handleChange(e)}
                    value={clientInfos.lname}
                  />
                </div>
              </div>
              <div className={style.formrow}>
                <div
                  style={{ alignItems: "start" }}
                  className={style.inputgroup}
                >
                  <label style={{ marginTop: "1rem" }}>
                    Numéro et nom de rue *
                  </label>
                  <div className={style.streetadrdiv}>
                    <input
                      type="text"
                      required
                      name="stadresse"
                      onChange={(e) => handleChange(e)}
                      value={clientInfos.stadresse}
                    />
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className={style.formrow}>
                <div className={style.inputgroup}>
                  <label>Ville *</label>
                  <input
                    type="text"
                    required
                    name="city"
                    onChange={(e) => handleChange(e)}
                    value={clientInfos.city}
                  />
                </div>
                <div className={style.inputgroup}>
                  <label>Pays/région *</label>
                  <input type="text" defaultValue="Tunisia" readOnly />
                </div>
              </div>
              <div className={style.formrow}>
                <div className={style.inputgroup}>
                  <label>Code postal *</label>
                  <input
                    type="text"
                    required
                    name="zipcode"
                    value={clientInfos.zipcode}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={style.inputgroup}>
                  <label>Téléphone *</label>
                  <input
                    type="text"
                    required
                    name="phone"
                    value={clientInfos.phone}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className={style.inputgroup}>
                <label>Autre Remarques</label>
                <textarea
                  required
                  cols="30"
                  rows="4"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  name="othernotes"
                  value={clientInfos.othernotes}
                  onChange={(e) => handleChange(e)}
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
        <h3>Votre commande</h3>
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
              cart.map((p, id) => (
                <tr id={id} style={{ color: "#666" }}>
                  <td>
                    <a href={`/p/${p.slug}`}>{p.title}</a>
                  </td>
                  <td style={{ textAlign: "end" }}>{p.price * p.count} TND</td>
                </tr>
              ))}

            <tr style={{ color: "#333" }}>
              <td>Sous-total: </td>
              <td style={{ textAlign: "end" }}>{cartTotal} TND</td>
            </tr>
            <tr style={{ color: "#666" }}>
              <td>Expédition</td>
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
                {cartTotal} TND
              </td>
            </tr>
          </tbody>
        </table>
        <div className={style.button}>
          {user && user.length !== 0 ? (
            <button onClick={(e) => handleCheckOut(e)}>Passez commande</button>
          ) : (
            <button form="myform" type="submit">
              Commander
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
