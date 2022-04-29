import React, { useState, useEffect } from "react";
import style from "./ShopCollection.module.css";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Product from "../../Product/Product";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { getAllProducts } from "../../../functions/products";

const ShopCollection = () => {
  const [collectionFilter, setcollectionFilter] = useState(true);
  const [priceFilter, setpriceFilter] = useState(false);
  const [checkbooxFilter, setcheckbooxFilter] = useState(false);
  const [value1, setValue1] = React.useState([20, 37]);
  const minDistance = 10;
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  const [products, setproducts] = useState([]);

  const fetchAllProducts = () => {
    getAllProducts(1000).then((res) => {
      setproducts(res.data);
    });
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "300",
          margin: "2rem 0 2rem 0",
        }}
      >
        Shop Collection
      </h1>
      <div className={style.container}>
        <div className={style.filterpanel}>
          <h2
            style={{
              fontStyle: "italic",
              fontWeight: "400",
              marginBottom: "0.8rem",
            }}
          >
            Filter By
          </h2>
          <hr />
          <div className={style.filteritem}>
            <span>Collection</span>
            {collectionFilter && collectionFilter == true ? (
              <GrFormSubtract
                onClick={() => setcollectionFilter(false)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <GrFormAdd
                onClick={() => setcollectionFilter(true)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          {collectionFilter && collectionFilter == true ? (
            <div
              style={{
                opacity: "1",
                transform: "scaleY(1)",
                visibility: "visible",
                position: "static",
              }}
              className={style.filteroption}
            >
              <ul>
                <li>All</li>
                <li>T shirts</li>
                <li>Bodysuits</li>
              </ul>
            </div>
          ) : (
            <div style={{ opacity: "0" }} className={style.filteroption}></div>
          )}
          <hr
            style={{
              margin: "1rem 0 0.5rem 0",
              color: "gray",
              height: "0.5px",
            }}
          />
          <div className={style.filteritem}>
            <span>Price</span>
            {priceFilter && priceFilter == true ? (
              <GrFormSubtract
                onClick={() => setpriceFilter(false)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <GrFormAdd
                onClick={() => setpriceFilter(true)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          {priceFilter && priceFilter == true ? (
            <div
              style={{
                opacity: "1",
                transform: "scaleY(1)",
                visibility: "visible",
                position: "static",
              }}
              className={style.filteroption}
            >
              <Box
                sx={{
                  width: "190px",
                  marginLeft: "7px",
                  color: "black !important",
                }}
              >
                <Slider
                  getAriaLabel={() => "Minimum distance"}
                  value={value1}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  disableSwap
                />
              </Box>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>${value1[0]}</span>
                <span>${value1[1]}</span>
              </div>
            </div>
          ) : (
            <div style={{ opacity: "0" }} className={style.filteroption}></div>
          )}
          <hr
            style={{
              margin: "1rem 0 0.5rem 0",
              color: "gray",
              height: "0.5px",
            }}
          />
          <div className={style.filteritem}>
            <span>Color</span>
            {checkbooxFilter && checkbooxFilter == true ? (
              <GrFormSubtract
                onClick={() => setcheckbooxFilter(false)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <GrFormAdd
                onClick={() => setcheckbooxFilter(true)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          {checkbooxFilter && checkbooxFilter == true ? (
            <div
              style={{
                opacity: "1",
                transform: "scaleY(1)",
                visibility: "visible",
                position: "static",
              }}
              className={style.filteroption}
            >
              <div className={style.colors}>
                <div
                  style={{ backgroundColor: "#45458F" }}
                  className={style.coloroption}
                ></div>
                <div
                  style={{ backgroundColor: "#ffffff" }}
                  className={style.coloroption}
                ></div>
                <div
                  style={{ backgroundColor: "#86AD91" }}
                  className={style.coloroption}
                ></div>
                <div
                  style={{ backgroundColor: "#FFE5E9" }}
                  className={style.coloroption}
                ></div>
                <div
                  style={{ backgroundColor: "#F9BB9C" }}
                  className={style.coloroption}
                ></div>
                <div
                  style={{ backgroundColor: "#CD7551" }}
                  className={style.coloroption}
                ></div>
                <div
                  style={{ backgroundColor: "#FAFAEF" }}
                  className={style.coloroption}
                ></div>
              </div>
            </div>
          ) : (
            <div style={{ opacity: "0" }} className={style.filteroption}></div>
          )}
          <hr
            style={{
              margin: "1rem 0 0.5rem 0",
              color: "gray",
              height: "0.5px",
            }}
          />
        </div>

        <div className={style.productscotainer}>
          {products && products.length !== 0
            ? products.map((p, i) => <Product p={p} i={i} />)
            : ""}
        </div>
      </div>
    </>
  );
};

export default ShopCollection;
