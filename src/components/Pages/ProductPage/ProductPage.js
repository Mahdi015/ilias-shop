import React, { useState, useEffect } from "react";
import style from "./ProductPage.module.css";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { getAllProducts, getProduct } from "../../../functions/products";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ProductCarousel from "./ProductCarousel";

const Product = () => {
  const [value, setvalue] = useState("");
  const [product, setproduct] = useState("");
  const [products, setproducts] = useState([]);

  const ratingChanged = (newRating) => {
    setvalue(newRating);
  };
  const { images, title, price, colors, size } = product;
  const { slug } = useParams();
  const fetchProduct = () => {
    getProduct(slug).then((res) => {
      setproduct(res.data);
    });
  };

  const fetchAllProducts = () => {
    getAllProducts(4000).then((res) => {
      setproducts(res.data);
    });
  };
  useEffect(() => {
    {
      slug && fetchProduct();
    }
    fetchAllProducts();
  }, [slug]);
  const allImage =
    images &&
    images.length !== 0 &&
    images.map((i) => ({
      src: i.url,
    }));
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imgcontainer}>
          {/* <img src={images && images[0].url} /> */}
          {images && images.length !== 0 && (
            <Carousel
              hasMediaButton={false}
              images={allImage}
              style={{
                height: 550,
                width: "100%",
                backgroundColor: "transparent",
                marginLeft: "50px",
              }}
              objectFit="contain"
              thumbnailWidth="11%"
              thumbnailHeight="11%"
              hasThumbnailsAtMax={true}
              isAutoPlaying={true}
              canAutoPlay
              autoPlayInterval={5000}
            />
          )}
        </div>

        <div className={style.infocontainer}>
          <h1>{title}</h1>
          <div className={style.reviewcontainer}>
            {" "}
            <ReactStars
              count={5}
              value={value}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <span
              style={{
                fontSize: "13px",
                letterSpacing: "-.01em",
                marginLeft: ".5rem",
                color: "#ccc",
                fontWeight: "500",
              }}
            >
              (0 Reviews)
            </span>
          </div>
          <span
            style={{
              color: "#c96",
              lineHeight: "1.25",
              fontWeight: "400",
              fontSize: "1.9rem",
            }}
          >
            {price} TND
          </span>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={style.filtercontainer}>
            <div className={style.filter}>
              <h1>Color:</h1>

              {colors &&
                colors.length !== 0 &&
                colors.map((c) => (
                  <div
                    className={style.filtercolor}
                    style={{ backgroundColor: `${c}` }}
                  ></div>
                ))}
            </div>
            <div className={style.filter}>
              <h1>Size:</h1>
              <select className={style.filtersize}>
                <option defaultChecked className={style.filtersizeoption}>
                  Select size
                </option>

                {size &&
                  size.length !== 0 &&
                  size.map((s) => (
                    <option value={s} className={style.filtersizeoption}>
                      {s}
                    </option>
                  ))}
              </select>
            </div>

            <div className={style.filter}>
              <h1>Qty:</h1>
              <div className={style.amountcontainer}>
                <GrFormSubtract style={{ cursor: "pointer" }} />
                <span style={{ fontSize: "18px", fontWeight: "500" }}>1</span>
                <GrFormAdd style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
          <div className={style.addcontainer}>
            <button>ADD TO CARD</button>
          </div>
        </div>
      </div>

      <div className={style.youmayalsolike}>
        <div className={style.textcontainer}>
          <div className={style.spancontainer}>
            <span>You May Also Like</span>
            <div className={style.sm_border} style={{ left: "85px" }}></div>
          </div>
        </div>
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};

export default Product;
