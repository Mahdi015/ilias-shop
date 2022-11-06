import React from "react";
import { Slider } from "../..";
import img from "./test1.jpg";
import img2 from "./test2.jpg";
import img3 from "./test3.png";
import img4 from "./test4.png";

import Product from "../../Product/Product";
import style from "./Home.module.css";
import { RiTruckLine, RiRefund2Line, RiHeadphoneLine } from "react-icons/ri";
import { getAllProducts } from "../../../functions/products";
import MessengerCustomerChat from "react-messenger-customer-chat";
// import { testcors } from "../../../functions/auth";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Home = ({ AddToCartModalOpen, setAddToCartModalOpen }) => {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();
  const fetchAllProducts = () => {
    getAllProducts(4).then((res) => {
      setproducts(res.data);
    });
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <Slider />
      <div className={style.staticproducts__container}>
        <div
          className={style.genreCard}
          onClick={() => navigate("/shopcollection/boys")}
        >
          <img src={img4} />
          <div className={style.cardDetails}>
            <h4>Garcon</h4>
            <a>Shop Now</a>
          </div>
        </div>
        <div
          className={style.genreCard}
          onClick={() => navigate("/shopcollection/girls")}
        >
          <img src={img3} />
          <div className={style.cardDetails}>
            <h4>Fille</h4>
            <a>Shop Now</a>
          </div>
        </div>
      </div>

      <div className={style.textcontainer}>
        <div className={style.spancontainer}>
          <span>NOS MEILLEURES VENTES</span>
          <div className={style.sm_border} id={style.top}></div>
        </div>
      </div>
      <div className={style.nexarrivals}>
        {products && products.length !== 0 ? (
          products.map((p, i) => (
            <div className={style.pcontainer}>
              <Product p={p} i={i} />
            </div>
          ))
        ) : (
          <>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={250}
                height={170}
              />
              <Skeleton height={60} variant="text" animation="wave" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={250}
                height={170}
              />
              <Skeleton height={60} variant="text" animation="wave" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={250}
                height={170}
              />
              <Skeleton height={60} variant="text" animation="wave" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={250}
                height={170}
              />
              <Skeleton height={60} variant="text" animation="wave" />
            </Stack>
          </>
        )}
      </div>

      <div className={style.infobar}>
        <div className={style.infobarcontainer}>
          <div className={style.infobarelement}>
            <span className={style.spannn}>
              <RiTruckLine size={"2.5em"} />
            </span>
            <span
              className={style.span1}
              style={{
                color: "white",
                fontWeight: "600",
                letterSpacing: "0.1em",
              }}
            >
              Payment & Delivery
            </span>
            <span
              className={style.span2}
              style={{
                color: "#777",
                fontWeight: "300",
              }}
            >
              Free shipping for orders over $50
            </span>
          </div>
          <div className={style.infobarelement}>
            <span className={style.spannn}>
              <RiRefund2Line size={"2.5em"} />
            </span>
            <span
              className={style.span1}
              style={{
                color: "white",
                fontWeight: "600",
                letterSpacing: "0.1em",
              }}
            >
              Return & Refund
            </span>
            <span
              className={style.span2}
              style={{
                color: "#777",
                fontWeight: "300",
              }}
            >
              Free 100% money back guarantee
            </span>
          </div>
          <div className={style.infobarelement}>
            <span className={style.spannn}>
              <RiHeadphoneLine size={"2.5em"} />
            </span>
            <span
              className={style.span1}
              style={{
                color: "white",
                fontWeight: "600",
                letterSpacing: "0.1em",
              }}
            >
              Quality Support
            </span>
            <span
              className={style.span2}
              style={{
                color: "#777",
                fontWeight: "300",
              }}
            >
              Alway online feedback 24/7
            </span>
          </div>
        </div>
      </div>

      <div className={style.textcontainer}>
        <div className={style.spancontainer}>
          <span>NOUVELLES ARRIVRES</span>
          <div className={style.sm_border}></div>
        </div>
      </div>

      <div className={style.nexarrivals}>
        {products && products.length !== 0 ? (
          products.map((p, i) => <Product p={p} i={i} />)
        ) : (
          <>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={250}
                height={170}
              />
              <Skeleton height={60} variant="text" animation="wave" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={250}
                height={170}
              />
              <Skeleton height={60} variant="text" animation="wave" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={250}
                height={170}
              />
              <Skeleton height={60} variant="text" animation="wave" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={250}
                height={170}
              />
              <Skeleton height={60} variant="text" animation="wave" />
            </Stack>
          </>
        )}
      </div>
      <MessengerCustomerChat pageId="102803091812112" appId="173038394999956" />
    </div>
  );
};
export default Home;
