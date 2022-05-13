import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styles from "./AddTOCartModal.module.css";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { GrFormAdd, GrFormSubtract, GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import _ from "lodash";
const style = {
  position: "absolute",
  right: "0",
  //   transform: "translate(-50%, -50%)",
  width: "481px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  height: "100%",
  outline: "none",
  overflow: "auto",

  "@media (max-width: 780px)": {
    height: "100%",
    width: "100%",
    padding: "32px 0 32px 0",
  },
};

export default function AddToCartModal({
  AddToCartModalOpen,
  setAddToCartModalOpen,
  p,
}) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [value, setvalue] = useState("");
  const [selectedColor, setselectedColor] = useState("");
  const [selectedColordiv, setselectedColordiv] = useState("");
  const [selectedColorImg, setselectedColorImg] = useState("");

  const [selectedSize, setselectedSize] = useState("");
  const [qt, setqt] = useState(1);

  const handleClose = () => setAddToCartModalOpen(false);
  const ratingChanged = (newRating) => {
    setvalue(newRating);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (selectedColorImg.length !== 0) {
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
              x._id === p._id &&
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
                _id: p._id,
                title: p.title,
                price: p.price,
                images: p.images,
                color: selectedColor,
                size: selectedSize,
                count: qt,
                slug: p.slug,
                selectedcolorimg: selectedColorImg,
                id: new Date().getTime(),
              });
          }
        } else {
          cart.push({
            _id: p._id,
            title: p.title,
            price: p.price,
            images: p.images,
            color: selectedColor,
            size: selectedSize,
            count: qt,
            slug: p.slug,
            selectedcolorimg: selectedColorImg,
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
      }
    } else {
      toast.error("Please Select Color !");
      return;
    }
  };
  const { images, size, colors } = p;
  const handleSizeChange = (e) => {
    setselectedSize(e.target.value);
  };

  const handleColorSelect = (ig, i) => {
    const { name } = ig;
    // console.log(name.split("_")[1].split(".")[0]);
    setselectedColorImg(ig.url);
    setselectedColor(name.split("_")[1].split(".")[0]);
    setselectedColordiv(i);
    console.log(selectedColordiv);
    // setselectedColordiv(i);
  };

  return (
    <div>
      <Modal
        disableScrollLock={true}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={AddToCartModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={AddToCartModalOpen}>
          <Box sx={style}>
            <form onSubmit={(e) => handleAddToCart(e)}>
              <div className={styles.addtocartheader}>
                <span style={{ fontWeight: "600", letterSpacing: "1.1px" }}>
                  {p.title}
                </span>
                <span style={{ cursor: "pointer" }}>
                  <GrClose
                    onClick={() => setAddToCartModalOpen(false)}
                    size={"1.1em"}
                  />
                </span>
              </div>
              <div className={styles.addtocartcontent}>
                <div className={styles.imggcontainer}>
                  {" "}
                  <img
                    src={
                      images && selectedColorImg.length !== 0
                        ? selectedColorImg
                        : images[0]?.url
                    }
                  />
                </div>
                <div className={styles.pricecontainer}>
                  <span
                    style={{
                      color: "#c96",
                      lineHeight: "1.25",
                      fontWeight: "400",
                      fontSize: "1.9rem",
                    }}
                  >
                    {p.price} TND
                  </span>
                  <ReactStars
                    count={5}
                    value={value}
                    onChange={ratingChanged}
                    size={28}
                    activeColor="#ffd700"
                  />
                </div>

                <div className={styles.colorcontainer}>
                  <span
                    style={{
                      color: "#777",
                      fontWeight: "400",
                      fontSize: "1.2rem",
                    }}
                  >
                    Color:
                  </span>

                  <div className={styles.colors}>
                    {images &&
                      images.length > 1 &&
                      images.map((ig, i) => (
                        <div
                          onClick={() => handleColorSelect(ig, i)}
                          className={styles.color}
                          key={i}
                          id={
                            i == parseInt(selectedColordiv) ? styles.active : ""
                          }
                        >
                          <img src={ig.url}></img>
                        </div>
                      ))}
                  </div>
                </div>

                <div className={styles.sizecontainer}>
                  <span
                    style={{
                      color: "#777",
                      fontWeight: "400",
                      fontSize: "1.2rem",
                    }}
                  >
                    Size:
                  </span>
                  <div className={styles.sizecontainerbox}>
                    <select
                      value={selectedSize}
                      required
                      className={style.filtersize}
                      onChange={(e) => handleSizeChange(e)}
                    >
                      <option value={""} className={style.filtersizeoption}>
                        Select a size
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
                </div>

                <div className={styles.amountcontainer}>
                  <span
                    style={{
                      color: "#777",
                      fontWeight: "400",
                      fontSize: "1.2rem",
                    }}
                  >
                    Quantity:
                  </span>
                  <div className={styles.amountbox}>
                    <div className={styles.quantityprepend}>
                      <button type="button">
                        <span className={styles.iconspan}>
                          {" "}
                          <GrFormSubtract onClick={() => setqt(qt - 1)} />
                        </span>
                      </button>
                    </div>
                    <input
                      type="number"
                      min="1"
                      max="10000"
                      required
                      defaultValue="1"
                      value={qt}
                    />
                    <div className={styles.quantityappend}>
                      <button type="button">
                        <span className={styles.iconspan}>
                          <GrFormAdd onClick={() => setqt(qt + 1)} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.addtocartbutton}>
                  <button type="submit">ADD TO CARD</button>
                </div>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
