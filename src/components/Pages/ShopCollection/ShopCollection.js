import React, { useState, useEffect } from "react";
import style from "./ShopCollection.module.css";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Product from "../../Product/Product";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { filterAll, getAllProducts } from "../../../functions/products";
import { CircularProgress } from "@mui/material";

const ShopCollection = () => {
  const [collectionFilter, setcollectionFilter] = useState(true);
  const [chosedColor, setchosedColor] = useState("");
  const [loading, setloading] = useState(false);
  const [ok, setok] = useState(false);
  const [filtersOn, setfiltersOn] = useState(false);
  const [selectedColordiv, setselectedColordiv] = useState("");
  const [priceFilter, setpriceFilter] = useState(true);
  const [checkbooxFilter, setcheckbooxFilter] = useState(true);
  const [sizeFilter, setsizeFilter] = useState(true);
  const [value1, setValue1] = React.useState([0, 200]);
  const [products, setproducts] = useState([]);
  const [colors, setcolors] = useState([
    { color: "blue", hex: "#45458F" },
    { color: "white", hex: "#FFFFFF" },
    { color: "green", hex: "#86AD91" },
    { color: "pink", hex: "#F9BB9C" },
    { color: "brown", hex: "#CD7551" },
    { color: "yellow", hex: "#F2E349" },
  ]);
  const minDistance = 10;
  const handleChange1 = (event, newValue, activeThumb) => {
    setloading(true);
    setfiltersOn(true);
    setTimeout(() => {
      setok(true);
    }, 700);
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const fetchAllProducts = () => {
    setloading(true);

    getAllProducts(1000).then((res) => {
      setloading(false);

      setproducts(res.data);
    });
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (chosedColor.length !== 0) {
      setloading(true);
      filterAll(chosedColor, value1).then((res) => {
        setloading(false);
        setproducts(res.data);
      });
    }
  }, [chosedColor]);

  useEffect(() => {
    if (ok) {
      filterAll(chosedColor, value1).then((res) => {
        setloading(false);
        setproducts(res.data);
        setok(false);
      });
    }
  }, [ok]);

  const handleColorSlect = (c, i) => {
    setchosedColor(c);
    setfiltersOn(true);
    setselectedColordiv(i);
  };

  const resetFilter = () => {
    setfiltersOn(false);
    fetchAllProducts();
    setValue1([0, 200]);
    setchosedColor("");
    setselectedColordiv("");
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          fontWeight: "400",
          margin: "2rem 0 2rem 0",
        }}
      >
        Shop Collection
      </h1>
      <div className={style.container}>
        <div className={style.filterpanel}>
          <h2
            style={{
              fontWeight: "400",
              coloe: "#333",
              marginBottom: "0.8rem",
            }}
          >
            Filter Par
          </h2>
          {filtersOn && (
            <div className={style.resetbutton}>
              <button onClick={() => resetFilter()}>Reset Filter</button>
            </div>
          )}
          <hr />
          <div className={style.filteritem}>
            <span>Catégories</span>
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
            <span>Prix</span>
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
                  sx={{ color: "#c96", width: "280px" }}
                  disableSwap
                  max={200}
                />
              </Box>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{value1[0]} TND</span>
                <span>{value1[1]} TND</span>
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
                {colors.map((c, i) => (
                  <div
                    onClick={() => handleColorSlect(c.color, i)}
                    key={i}
                    id={i == parseInt(selectedColordiv) ? style.active : ""}
                    style={{ backgroundColor: c.hex }}
                    className={style.coloroption}
                  ></div>
                ))}
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
            <span>Size</span>
            {sizeFilter && sizeFilter == true ? (
              <GrFormSubtract
                onClick={() => setsizeFilter(false)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <GrFormAdd
                onClick={() => setsizeFilter(true)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          {sizeFilter && sizeFilter == true ? (
            <div
              style={{
                opacity: "1",
                transform: "scaleY(1)",
                visibility: "visible",
                position: "static",
              }}
              className={style.filteroption}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={style.sizeoption}>
                  <span>S</span>
                </div>
                <div className={style.sizeoption}>
                  <span>X</span>
                </div>
                <div className={style.sizeoption}>
                  <span>M</span>
                </div>
                <div className={style.sizeoption}>
                  <span>XS</span>
                </div>
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
          {products && products.length !== 0 ? (
            products.map((p, i) => (
              <div className={style.pcontainer}>
                {" "}
                <Product p={p} i={i} />
              </div>
            ))
          ) : (
            <>
              {loading ? (
                <CircularProgress />
              ) : (
                <h3 style={{ color: "#333", fontWeight: "500" }}>
                  Aucun produit trouvé
                </h3>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopCollection;
