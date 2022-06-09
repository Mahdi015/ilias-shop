import React, { useState, useEffect } from "react";
import style from "./ProductPage.module.css";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { getAllProducts, getProduct } from "../../../functions/products";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ProductCarousel from "./ProductCarousel";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import _ from "lodash";
import Skeleton from "@mui/material/Skeleton";

const Product = () => {
  const [value, setvalue] = useState("");
  const [product, setproduct] = useState("");
  const [products, setproducts] = useState([]);
  const [selectedColor, setselectedColor] = useState("");
  const [selectedSize, setselectedSize] = useState("");
  const [imgcolorselected, setimgcolorselected] = useState("");

  const [qt, setqt] = useState(1);
  const [selectedColordiv, setselectedColordiv] = useState("");
  const dispatch = useDispatch();

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
  useEffect(() => {
    if (selectedColor.length !== 0) {
      images.map((i) => {
        if (i.name.includes(selectedColor)) {
          setimgcolorselected(i.url);
        }
      });
    }
  }, [selectedColor]);
  const allImage =
    images &&
    images.length !== 0 &&
    images.map((i) => ({
      src: i.url,
    }));
  const handleSizeChange = (e) => {
    setselectedSize(e.target.value);
  };
  const handleColorSlect = (c, i) => {
    setselectedColor(c);
    setselectedColordiv(i);
    console.log(selectedColordiv);
    console.log(i);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (selectedColor.length !== 0) {
      let cart = [];

      if (typeof window !== "undefined") {
        //Get cart from loclal
        if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
        }
        if (cart.length !== 0) {
          let mawjoud = false;
          cart.map((x, i) => {
            if (
              x._id === product._id &&
              x.color === selectedColor &&
              x.size === selectedSize
            ) {
              mawjoud = true;
              cart[i].count += qt;
              return;
            }
          });
          {
            mawjoud === false &&
              cart.push({
                _id: product._id,
                title: product.title,
                price: product.price,
                images: product.images,
                color: selectedColor,
                size: selectedSize,
                count: qt,
                slug: product.slug,
                selectedcolorimg: imgcolorselected,
                id: new Date().getTime(),
              });
          }
        } else {
          cart.push({
            _id: product._id,
            title: product.title,
            price: product.price,
            images: product.images,
            color: selectedColor,
            size: selectedSize,
            count: qt,
            slug: product.slug,
            selectedcolorimg: imgcolorselected,
            id: new Date().getTime(),
          });
        }
        //remove duplicate
        let unique = _.uniqWith(cart, _.isEqual);
        //save to local storage
        localStorage.setItem("cart", JSON.stringify(unique));
        //Add to redux state

        dispatch({
          type: "ADD_TO_CART",
          payload: unique,
        });
        toast.success("Product Added To Cart !");
        setqt(1);
        setselectedSize("");
        setselectedColordiv("");
      }
    } else {
      toast.error("Please Select Color !");
      return;
    }
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imgcontainer}>
          {/* <img src={images && images[0].url} /> */}
          {images && images.length !== 0 ? (
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
              thumbnailWidth="80px"
              thumbnailHeight="80px"
              hasThumbnailsAtMax={true}
              isAutoPlaying={true}
              canAutoPlay
              autoPlayInterval={5000}
            />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="65%"
                height="300px"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "65%",
                  marginTop: "1rem",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="70px"
                  height="50px"
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="70px"
                  height="50px"
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="70px"
                  height="50px"
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="70px"
                  height="50px"
                />
              </div>
            </div>
          )}
        </div>

        <div className={style.infocontainer}>
          {title ? <h1>{title}</h1> : <Skeleton width="200px" variant="text" />}
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
              fontSize: "1.5rem",
            }}
          >
            {price}
            <span style={{ fontSize: ".9375rem", marginLeft: ".3rem" }}>
              TND
            </span>
          </span>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form onSubmit={handleAddToCart}>
            <div className={style.filtercontainer}>
              <div className={style.filter}>
                <h1 style={{ margin: 0 }}>Color:</h1>

                {colors &&
                  colors.length !== 0 &&
                  colors.map((c, i) => (
                    <div
                      key={i}
                      className={style.filtercolor}
                      style={{ backgroundColor: `${c}` }}
                      onClick={() => handleColorSlect(c, i)}
                      id={i == parseInt(selectedColordiv) ? style.active : ""}
                    ></div>
                  ))}
              </div>
              <div className={style.filter}>
                <h1 style={{ margin: 0 }}>Taille:</h1>
                <select
                  onChange={(e) => handleSizeChange(e)}
                  required
                  value={selectedSize}
                  className={style.filtersize}
                >
                  <option value="" defaultChecked>
                    CHOISIR LA TAILLE
                  </option>

                  {size &&
                    size.length !== 0 &&
                    size.map((s) => <option value={s}>{s}</option>)}
                </select>
              </div>

              <div className={style.filter}>
                <h1 className={style.noselect} style={{ margin: 0 }}>
                  Qty:
                </h1>
                <div className={style.amountcontainer}>
                  <GrFormSubtract
                    onClick={() => setqt(qt - 1)}
                    style={{ cursor: "pointer" }}
                  />
                  <span
                    className={style.noselect}
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "#333",
                    }}
                  >
                    {qt}
                  </span>
                  <GrFormAdd
                    onClick={() => setqt(qt + 1)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <div className={style.addcontainer}>
              <button type="submit">
                <BsCartPlus />
                <span
                  className={style.noselect}
                  style={{
                    display: "block",
                    marginTop: "0.2rem",
                    marginLeft: "0.3rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  AJOUTER AU PANIER
                </span>
              </button>
              <span className={`${style.wishlistspan} ${style.noselect}`}>
                <AiOutlineHeart
                  style={{
                    color: "#c96",
                    marginRight: ".5rem",
                  }}
                  size={"1.2em"}
                />{" "}
                Ajouter aux favoris
              </span>
            </div>
          </form>
        </div>
      </div>

      <div className={style.youmayalsolike}>
        <div className={style.textcontainer}>
          <div className={style.spancontainer}>
            <span>VOUS AIMEREZ AUSSI</span>
            <div className={style.sm_border}></div>
          </div>
        </div>
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};

export default Product;
