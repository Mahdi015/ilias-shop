import React from "react";
import style from "./Cart.module.css";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleCartProduct = ({ p }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { images, title, count, price, size, color, slug } = p;
  const addCount = () => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((pr) => {
        if (pr._id === p._id && pr.size === size && pr.color === color) {
          pr.count += 1;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  const subCount = () => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((pr) => {
        if (pr._id === p._id && pr.size === size && pr.color === color) {
          pr.count -= 1;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  const deleteProduct = (id) => {
    let cart = [];
    if (typeof window != "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product.id === id) {
          cart.splice(i, 1);
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  return (
    <tr style={{ position: "relative" }}>
      <td>
        <div className={style.product}>
          <figure className={style.productmedia}>
            <a style={{ display: "block" }} href="#">
              <img src={p.selectedcolorimg && p.selectedcolorimg} />
            </a>
          </figure>

          <a href="#">
            {" "}
            <span onClick={() => navigate(`/p/${slug}`)}>
              {title}, {color}, {size}
            </span>
          </a>
        </div>
      </td>
      <td className={style.pprice}>
        <div className={style.ppricediv}>{price} TND</div>
      </td>
      <td>
        <div className={style.productquantity}>
          <div className={style.quantityui}>
            <div className={style.quantityprepend}>
              <button>
                <span className={style.iconspan}>
                  {" "}
                  <GrFormSubtract onClick={() => subCount()} />
                </span>
              </button>
            </div>
            <input type="number" min="1" max="10000" required value={count} />
            <div className={style.quantityappend}>
              <button>
                <span className={style.iconspan}>
                  <GrFormAdd onClick={() => addCount()} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className={style.pricediv}>
          <span
            style={{
              color: "#c96",
              fontWeight: "400",
              fontSize: "1.1rem",
              lineHeight: "1.25",
            }}
          >
            {price * count} TND
          </span>
        </div>
      </td>
      <td>
        <div className={style.deletediv}>
          <span className={style.iconspan}>
            {" "}
            <AiOutlineDelete
              onClick={() => deleteProduct(p.id)}
              size={"1.1em"}
              style={{ cursor: "pointer" }}
            />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default SingleCartProduct;
