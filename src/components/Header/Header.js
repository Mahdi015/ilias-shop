import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import img from "./logo.png";
import pimg from "./TissuB.png";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";

import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [cartLength, setcartLength] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);
  const [dropdownVisible, setdropdownVisible] = useState(true);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state }));
  const { wishlist } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();
  useEffect(() => {
    let total = 0;
    setcartLength(cart.length);
    cart.map((c) => {
      total += c.price * c.count;
    });
    setcartTotal(total);
    setdropdownVisible(true);
  }, [cart]);
  if (window.location.href.includes("admin")) {
    return null;
  }
  const deleteProduct = (id) => {
    let cart = [];
    if (typeof window != "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product.id === id) {
          cart.splice(i, 1);
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  const handlebuttonClick = (path) => {
    setdropdownVisible(false);
    if (path === "cart") {
      navigate(`/cart`);
    } else {
      navigate(`/checkout`);
    }
    const timer = setTimeout(() => {
      setdropdownVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  };
  return (
    <div className={styles.headercontainer}>
      <div className={styles.srachcontainer}>
        <span>
          <BsSearch />
          <input placeholder="recherce..." type="search" />
        </span>
      </div>

      <div className={styles.logocontainer}>
        <a href="/" target="_self">
          <img src={img} />
        </a>
      </div>

      <div className={styles.infocontainer}>
        <Badge
          badgeContent={wishlist ? wishlist.length : "0"}
          color="warning"
          sx={{
            "& .MuiBadge-badge": { fontSize: 11, height: 18 },
            p: 0,
            ["@media (max-width:780px)"]: {
              p: 0,
            },
          }}
        >
          <a href="/wishlist" style={{ paddingRight: "0" }}>
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
                  whiteSpace: "nowrap",
                }}
              >
                Favoris
              </span>
            </div>
          </a>
        </Badge>

        <div className={styles.cartdropdowndiv}>
          <Badge
            badgeContent={cartLength ? cartLength : "0"}
            color="warning"
            sx={{
              "& .MuiBadge-badge": { fontSize: 11, height: 18 },
              p: 0,
              ["@media (max-width:780px)"]: {
                p: 0,
              },
            }}
          >
            <a style={{ paddingRight: "0" }}>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {" "}
                <AiOutlineShoppingCart
                  style={{ cursor: "pointer" }}
                  size={"1.4em"}
                />{" "}
                <span style={{ marginLeft: "0.5rem" }}>
                  <span
                    style={{
                      cursor: "pointer",
                      userSelect: "none",
                      WebkitUserSelect: "none",
                    }}
                  >
                    {cartTotal ? `${cartTotal} TND` : "0.00 TND"}
                  </span>

                  {dropdownVisible && dropdownVisible == true && (
                    <div className={styles.cartdropdown}>
                      <ul>
                        <div style={{ maxHeight: "230px", overflow: "auto" }}>
                          {cart && cart.length !== 0 ? (
                            cart.map((p, i) => (
                              <li id={i}>
                                <div className={styles.cartdropdownitem}>
                                  <div className={styles.productcartdetails}>
                                    <h4
                                      style={{
                                        fontWeight: "400",
                                        color: "#666",
                                      }}
                                    >
                                      <a
                                        style={{
                                          padding: 0,
                                          fontWeight: 400,
                                          fontSize: ".9rem",
                                        }}
                                        href={`/p/${p.slug}`}
                                      >
                                        {p.title}
                                      </a>
                                    </h4>
                                    <span
                                      style={{
                                        color: "#999",
                                        fontSize: "13px",
                                      }}
                                    >
                                      {p.count} * {p.price} TND
                                    </span>
                                  </div>
                                  <figure
                                    className={styles.productimgcontainer}
                                  >
                                    <a
                                      href={`/p/${p.slug}`}
                                      style={{ padding: 0 }}
                                    >
                                      <img
                                        src={
                                          p.selectedcolorimg &&
                                          p.selectedcolorimg
                                        }
                                      />
                                    </a>
                                  </figure>
                                  <button>
                                    <GrClose
                                      onClick={() => deleteProduct(p.id)}
                                    />
                                  </button>
                                </div>
                              </li>
                            ))
                          ) : (
                            <li
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <h4
                                style={{
                                  color: "#666",
                                  fontSize: ".9rem",
                                  marginTop: ".5rem",
                                  fontWeight: "400",
                                  letterSpacing: "1px",
                                }}
                              >
                                No products in cart
                              </h4>
                            </li>
                          )}
                        </div>
                        {cart && cart.length !== 0 && (
                          <>
                            <div className={styles.dropdowncarttotal}>
                              <span>Total</span>
                              <span>TND {cartTotal}</span>
                            </div>
                            <div className={styles.dropdownbuttons}>
                              <button
                                onClick={() => handlebuttonClick("cart")}
                                className={styles.viewcartbutton}
                              >
                                Voir Panier
                              </button>
                              <button
                                onClick={() => handlebuttonClick("checkout")}
                                className={styles.checkoutbutton}
                              >
                                Commander
                              </button>
                            </div>
                          </>
                        )}
                      </ul>
                    </div>
                  )}
                </span>
              </div>
            </a>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
