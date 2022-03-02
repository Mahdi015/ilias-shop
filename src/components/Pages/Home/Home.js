import React from "react";
import { Sidebar, Slider } from "../..";
import Product from "../../Product/Product";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Slider />
      <Sidebar />
      <span className={style.text1}>New Arrivals</span>
      <div className={style.nexarrivals}>
        <Product />
        <Product />
        <Product />

        <Product />
      </div>
    </div>
  );
};
export default Home;
