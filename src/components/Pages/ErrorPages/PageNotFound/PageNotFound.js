import React from "react";
import style from "../AccesForbiden/AccesForbiden.module.css";
import img from "./error1.svg";

const PageNotFound = () => {
  return (
    <div className={style.container}>
      <div className={style.errorcode}>404</div>
      <div className={style.imgcontainer}>
        <img src={img} />
      </div>
      <h2>Page not found.</h2>
      <p>
        Sorry, we couldn't find that page. Continue browsing or go back to
        homepage.
      </p>
      <button>
        <a href="/">Back To Home</a>
      </button>
    </div>
  );
};

export default PageNotFound;
