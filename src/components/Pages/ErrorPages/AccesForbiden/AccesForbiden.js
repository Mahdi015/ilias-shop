import React from "react";
import img from "./forbidenn.jpg";
import style from "./AccesForbiden.module.css";
const AccesForbiden = () => {
  return (
    <div className={style.container}>
      <div className={style.errorcode}>403</div>

      <div className={style.imgcontainer}>
        <img src={img} />
      </div>
      <h2>access forbidden</h2>
      <p>Sorry, you don't have permission to access this page</p>
      <button>
        <a href="/">Back To Home</a>
      </button>
    </div>
  );
};

export default AccesForbiden;
