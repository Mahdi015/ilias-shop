import React from "react";
import styles from "./Navbar.module.css";
// import SearchBar from "material-ui-search-bar";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../functions/auth";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setOpen, setLoginOpen, setmobileMenu, mobileMenu }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  if (window.location.href.includes("admin")) {
    return null;
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleLoginOpen = () => {
    setLoginOpen(true);
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
        </div>
        <div className={styles.navbarbuttons}>
          {user && user.length != 0 ? (
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
          ) : (
            <>
              {" "}
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
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
