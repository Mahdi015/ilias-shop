import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { userLogout } from "../../functions/auth";
import { useNavigate } from "react-router-dom";
import img from "./logo-fashion-store.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";

const Navbar = ({ setOpen, setLoginOpen, setmobileMenu, mobileMenu }) => {
  const [cartLength, setcartLength] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);
  const [dropdownVisible, setdropdownVisible] = useState(true);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state }));
  const { wishlist } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
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

  const handleOpen = () => {
    setOpen(true);
  };
  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

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

  const logout = () => {
    userLogout()
      .then((res) => {
        if (res.data.ok) {
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontent}>
        <div className={styles.navbarlink}>
          <button
            onClick={() => setmobileMenu(!mobileMenu)}
            className={styles.mobilemenu}
          >
            <AiOutlineMenu />
          </button>
          <a href="/" id={window.location.pathname == "/" ? styles.active : ""}>
            Home
          </a>
          <a
            href="/shopcollection"
            id={
              window.location.pathname == "/shopcollection" ? styles.active : ""
            }
          >
            NOUVEAUTÉS
          </a>
          <a href="#">garçon</a>
          <a href="#">Fille</a>

          <div className={styles.logocontainer}>
            <img onClick={() => navigate("/")} src={img} />
          </div>
        </div>

        {/* {user && user.length != 0 ? (
          <div className={styles.infocontainer}>
            <div className={styles.profiledropdown}>
              <a id={window.location.pathname == "/a" ? styles.active : ""}>
                {" "}
                <span>{user.name}</span>
              </a>
              <ul>
                <li>
                  <a href="#">Profile</a>
                </li>
                {user && user.isAdmin ? (
                  <li>
                    <a href="/admindashboard">Admin Dashboard</a>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <a onClick={() => logout()}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <> */}
        {/* {" "} 
              <a
                id={window.location.pathname == "/a" ? styles.active : ""}
                onClick={() => handleLoginOpen()}
              >
                {" "}
                <span style={{ whiteSpace: "nowrap" }}>SE CONNECTEZ</span>
              </a>
              <a
                id={window.location.pathname == "/a" ? styles.active : ""}
                onClick={() => handleOpen()}
              >
                {" "}
                <span style={{ whiteSpace: "nowrap" }}>INSCRIVEZ</span>
              </a> */}

        {/* <div className={styles.infocontainer}> */}
        <div className={styles.infocontainer}>
          {user && user.length != 0 ? (
            <div className={styles.profiledropdown}>
              <a style={{ paddingRight: "0" }}>
                {" "}
                <span>{user.name}</span>
              </a>
              <ul>
                <li>
                  <a href="#">Profile</a>
                </li>
                {user && user.isAdmin ? (
                  <li>
                    <a href="/admindashboard">Admin Dashboard</a>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <a onClick={() => logout()}> Logout </a>
                </li>
              </ul>
            </div>
          ) : (
            <a style={{ paddingRight: "0" }}>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <AiOutlineUser
                  onClick={() => setLoginOpen(true)}
                  style={{ cursor: "pointer" }}
                  size={"1.5em"}
                />
              </div>
            </a>
          )}

          <Badge
            badgeContent={wishlist ? wishlist.length : "0"}
            color="warning"
            sx={{
              "& .MuiBadge-badge": { fontSize: 11, height: 18 },
              p: 0.6,
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
                }}
              >
                <AiOutlineHeart size={"1.4em"} />
              </div>
            </a>
          </Badge>

          <div className={styles.cartdropdowndiv}>
            <Badge
              badgeContent={cartLength ? cartLength : "0"}
              color="warning"
              sx={{
                "& .MuiBadge-badge": { fontSize: 11, height: 18 },
                p: 0.6,
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
                    <span style={{ cursor: "pointer" }}>
                      {cartTotal ? `${cartTotal} TND` : "0.00 TND"}
                    </span>

                    {dropdownVisible && dropdownVisible == true && (
                      <div className={styles.cartdropdown}>
                        <ul>
                          <div
                            style={{
                              maxHeight: "230px",
                              overflow: "auto",
                            }}
                          >
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
        {/* </>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
