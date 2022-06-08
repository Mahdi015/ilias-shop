import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import style from "./Product.module.css";
import { useNavigate } from "react-router-dom";
import AddToCartModal from "../Modal/AddToCartModal";
import _ from "lodash";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { MdAddShoppingCart } from "react-icons/md";
import ProductAddedToCart from "../Modal/ProductAddedToCart";
import Tooltip from "@mui/material/Tooltip";

const Product = ({ p, i }) => {
  const [AddToCartModalOpen, setAddToCartModalOpen] = useState(false);
  const [ProductAddedToCartModal, setProductAddedToCartModal] = useState(false);
  const [tool, settool] = useState("");
  const navigate = useNavigate();
  const { images } = p;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    let cart = [];

    if (typeof window !== "undefined") {
      //Get cart from loclal
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      if (cart.length !== 0) {
        let mawjoud = false;
        cart.map((x, i) => {
          if (x._id === p._id) {
            mawjoud = true;
            cart[i].count += 1;
            return;
          }
        });
        {
          mawjoud === false &&
            cart.push({
              _id: p._id,
              title: p.title,
              price: p.price,
              images: p.images,
              color: "",
              count: 1,
            });
        }
      } else {
        cart.push({
          _id: p._id,
          title: p.title,
          price: p.price,
          images: p.images,
          color: "",
          count: 1,
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
      toast.success("Produit Ajouté à La Cart !");
    }
  };

  const handleAddtToWishlist = () => {
    let wishlistbag = [];
    if (typeof window !== "undefined") {
      //Get cart from loclal
      if (localStorage.getItem("wishlist")) {
        wishlistbag = JSON.parse(localStorage.getItem("wishlist"));
      }
      //Add new cart
      wishlistbag.push({
        ...p,
      });
      //remove duplicate
      let unique = _.uniqWith(wishlistbag, _.isEqual);
      //save to local storage
      localStorage.setItem("wishlist", JSON.stringify(unique));

      //Add to redux state

      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: unique,
      });
      settool("Ajoutée");
      toast.success("Produit Ajouté à La Wishlist !");
    }
  };
  return (
    <>
      <AddToCartModal
        AddToCartModalOpen={AddToCartModalOpen}
        setAddToCartModalOpen={setAddToCartModalOpen}
        setProductAddedToCartModal={setProductAddedToCartModal}
        p={p}
      />
      <ProductAddedToCart
        ProductAddedToCartModal={ProductAddedToCartModal}
        setProductAddedToCartModal={setProductAddedToCartModal}
      />

      <div key={i} className={style.container}>
        <img
          className={style.imgcontainer}
          onClick={() => navigate(`/p/${p.slug}`)}
          src={images && images[0].url}
        />
        <div style={{ top: "50px" }} className={style.icon}>
          <AiOutlineShoppingCart onClick={() => setAddToCartModalOpen(true)} />
        </div>
        <div style={{ top: "100px" }} className={style.icon}>
          <AiOutlineEye onClick={() => navigate(`/p/${p.slug}`)} />
        </div>
        <div className={style.icon}>
          {" "}
          <Tooltip title={tool}>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <AiOutlineHeart onClick={() => handleAddtToWishlist()} />
            </span>
          </Tooltip>
        </div>
        <div className={style.productname}>
          <h3 style={{ fontWeight: "500", color: "#333" }}>{p.title}</h3>
        </div>
        <div className={style.info}>
          <div className={style.button}>
            <button onClick={() => setAddToCartModalOpen(true)}>
              <MdAddShoppingCart style={{ marginRight: "5px" }} /> Add To Cart
            </button>
          </div>
        </div>
        {/* <div className={style.price}>
          <span>{p.price} TND</span>
        </div> */}
        <div className={style.pinfo}>
          <div className={style.left}>
            <div style={{ display: "flex", marginRight: "2px" }}>
              <div
                style={{ backgroundColor: "#45458F" }}
                className={style.coloroption}
              ></div>
              <div
                style={{ backgroundColor: "#86AD91" }}
                className={style.coloroption}
              ></div>
              <div
                style={{ backgroundColor: "#CD7551" }}
                className={style.coloroption}
              ></div>
            </div>
            <span className={style.sp}></span>
            <div style={{ display: "flex", marginRight: "2px" }}>
              <div className={style.sizeoption}>
                <span>S</span>
              </div>
              <div className={style.sizeoption}>
                <span>X</span>
              </div>
              <div className={style.sizeoption}>
                <span>L</span>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <span style={{ fontWeight: "500", color: "#333" }}>
              {p.price} TND{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
