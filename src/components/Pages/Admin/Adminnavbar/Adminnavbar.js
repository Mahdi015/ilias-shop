import React from "react";
import style from "./Adminnavbar.module.css";
import logo from "./logof.png";
import adminimg from "./admin.png";
import { useSelector } from "react-redux";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const Adminnavbar = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className={style.navbar}>
      <div className={style.navbarcontainer}>
        <div className={style.navbarleft}>
          <div className={style.navbarlogo}>
            <a style={{ display: "block" }} href="/admindashboard">
              <img src={logo} />
            </a>
          </div>

          <div className={style.menutogglebtn}>
            <span style={{ color: "#636e75" }}>
              <HiOutlineMenuAlt1 size={"2em"} />
            </span>
          </div>
        </div>
        <div className={style.navbarright}>
          <div style={{ marginRight: "1rem" }} className={style.admindropdown}>
            <button>
              <img src={adminimg} />
              <span>{user && user.length !== 0 && user.name}</span>
              <AiOutlineDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminnavbar;
