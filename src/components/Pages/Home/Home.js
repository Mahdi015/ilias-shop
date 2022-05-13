import React from "react";
import { Sidebar, Slider } from "../..";
import Product from "../../Product/Product";
import style from "./Home.module.css";
import { RiTruckLine, RiRefund2Line, RiHeadphoneLine } from "react-icons/ri";
import { getAllProducts } from "../../../functions/products";
import MessengerCustomerChat from "react-messenger-customer-chat";
// import { testcors } from "../../../functions/auth";

import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Home = ({ AddToCartModalOpen, setAddToCartModalOpen }) => {
  const [products, setproducts] = useState([]);

  const fetchAllProducts = () => {
    getAllProducts(4).then((res) => {
      setproducts(res.data);
    });
  };
  useEffect(() => {
    fetchAllProducts();

    // testcors().then((res) => {
    //   console.log(res.data);
    // });
  }, []);

  return (
    <div>
      {/* {JSON.stringify(products[0].images[0])} */}
      <Slider />

      {/* <Sidebar /> */}

      <div className={style.textcontainer}>
        <div className={style.spancontainer}>
          <span>Trending</span>
          <div className={style.sm_border} style={{ left: "40px" }}></div>
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
            <Stack spacing={0.5}>
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
          <span>New Arrivals</span>
          <div className={style.sm_border} style={{ left: "60px" }}></div>
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
            <Stack spacing={0.5}>
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
      <MessengerCustomerChat pageId="256707057867239" appId="173038394999956" />
    </div>
  );
};
export default Home;
