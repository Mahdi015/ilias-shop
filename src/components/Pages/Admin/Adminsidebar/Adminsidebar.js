import React, { useState } from "react";
import style from "./Adminsidebar.module.css";
import { MdOutlineDashboard } from "react-icons/md";
import {
  AiFillShopping,
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineGift,
} from "react-icons/ai";
import { SiShopify } from "react-icons/si";

import { FiUsers } from "react-icons/fi";

import { useEffect } from "react";

const Adminsidebar = () => {
  const [dropdowna, setdropdowna] = useState(false);

  useEffect(() => {
    if (window.location.href.includes("product")) {
      setdropdowna(true);
    }
  }, []);
  return (
    <div className={style.adminsidebar}>
      <div className={style.sidebarcontainer}>
        <ul>
          <li className={style.menutitle}>Menu</li>
          <li className={style.menuitem}>
            <a
              href="/admindashboard"
              id={
                window.location.pathname == "/admindashboard"
                  ? style.active
                  : ""
              }
            >
              <MdOutlineDashboard size={"1.2em"} />
              <span style={{ marginLeft: "0.25rem" }}>Dashboard</span>
            </a>
          </li>
          <li className={style.menuitem}>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setdropdowna(!dropdowna)}
            >
              <AiFillShopping size={"1.2em"} />
              <span style={{ marginLeft: "0.25rem" }}>Products</span>
              {dropdowna ? (
                <span
                  style={{
                    display: "flex",
                    marginLeft: "6rem",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => setdropdowna(false)}
                >
                  <AiOutlineUp />
                </span>
              ) : (
                <span
                  style={{
                    display: "flex",
                    marginLeft: "6rem",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => setdropdowna(true)}
                >
                  <AiOutlineDown />
                </span>
              )}
            </a>
            {dropdowna ? (
              <ul
                className={style.dropdownul}
                style={{
                  opacity: "1",
                  transform: "scaleY(1)",
                  visibility: "visible",
                  position: "static",
                }}
              >
                <li className={style.menuitemdropdown}>
                  <a
                    id={
                      window.location.pathname == "/admindashboard/addproducts"
                        ? style.active
                        : ""
                    }
                    href="/admindashboard/addproducts"
                  >
                    <span>Add Product</span>
                  </a>
                </li>
                <li className={style.menuitemdropdown}>
                  {" "}
                  <a
                    href="/admindashboard/listproducts"
                    id={
                      window.location.pathname == "/admindashboard/listproducts"
                        ? style.active
                        : ""
                    }
                  >
                    <span>List Products</span>
                  </a>
                </li>
              </ul>
            ) : (
              <ul
                className={style.dropdownul}
                style={{
                  opacity: "0",
                  transform: "scaleY(0)",
                  visibility: "hidden",
                  position: "absolute",
                }}
              ></ul>
            )}
          </li>
          <li className={style.menuitem}>
            <a
              href="/admindashboard/listusers"
              id={
                window.location.pathname == "/admindashboard/listusers"
                  ? style.active
                  : ""
              }
            >
              <FiUsers size={"1.2em"} />
              <span style={{ marginLeft: "0.25rem" }}>Customers</span>
            </a>
          </li>
          <li className={style.menuitem}>
            <a
              href="/admindashboard/listorders"
              id={
                window.location.pathname == "/admindashboard/listorders"
                  ? style.active
                  : ""
              }
            >
              <SiShopify size={"1.2em"} />
              <span style={{ marginLeft: "0.25rem" }}>Orders</span>
            </a>
          </li>
          <li className={style.menuitem}>
            <a href="#">
              <AiOutlineGift size={"1.2em"} />
              <span style={{ marginLeft: "0.25rem" }}>Coupons</span>
            </a>
          </li>
        </ul>
        {/* <div className={style.btn}>
          <button>Login</button>
        </div> */}
      </div>
    </div>
  );
};

export default Adminsidebar;
