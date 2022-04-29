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

const Product = ({ p, i }) => {
  const [AddToCartModalOpen, setAddToCartModalOpen] = useState(false);
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
      toast.success("Product Added To Cart !");
    }
  };
  return (
    <>
      <AddToCartModal
        AddToCartModalOpen={AddToCartModalOpen}
        setAddToCartModalOpen={setAddToCartModalOpen}
        p={p}
      />
      <div key={i} className={style.container}>
        <img
          className={style.imgcontainer}
          onClick={() => navigate(`/p/${p.slug}`)}
          src={images && images[0].url}
        />
        <div className={style.info}>
          <div style={{ top: "50px" }} className={style.icon}>
            <AiOutlineShoppingCart onClick={() => handleAddToCart()} />
          </div>
          <div style={{ top: "100px" }} className={style.icon}>
            <AiOutlineEye onClick={() => navigate(`/p/${p.slug}`)} />
          </div>
          <div className={style.icon}>
            {" "}
            <AiOutlineHeart />
          </div>
          <div className={style.button}>
            <button onClick={() => setAddToCartModalOpen(true)}>
              <MdAddShoppingCart style={{ marginRight: "5px" }} /> Add To Cart
            </button>
          </div>
        </div>
        <div className={style.price}>
          <span>{p.price} TND</span>
        </div>
      </div>
    </>
  );
};

export default Product;
