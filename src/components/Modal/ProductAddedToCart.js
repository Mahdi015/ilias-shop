import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styles from "./ProductAddedToCart.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 5,
  outline: "none",

  "@media (max-width: 780px)": {
    height: "100%",
    width: "100%",
    padding: "32px 20px 32px 20px",
  },
};

export default function ProductAddedToCart({
  ProductAddedToCartModal,
  setProductAddedToCartModal,
}) {
  const navigate = useNavigate();
  const handleClose = () => setProductAddedToCartModal(false);
  const [cartTotal, setcartTotal] = useState(0);

  const { cart } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    let total = 0;

    cart.map((c) => {
      total += c.price * c.count;
    });
    setcartTotal(total);
  }, [cart]);
  return (
    <div>
      <Modal
        disableScrollLock={true}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ProductAddedToCartModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={ProductAddedToCartModal}>
          <Box sx={style}>
            <div className={styles.close}>
              <AiFillCloseCircle
                style={{ cursor: "pointer" }}
                onClick={() => handleClose()}
                size={"1.3em"}
              />
            </div>
            <div className={styles.container}>
              <h3>Product Added To Cart !</h3>
              <div className={styles.imgcontainer}>
                <img
                  className={styles.scaleupcenter}
                  src="https://res.cloudinary.com/ds5eqdcxk/image/upload/v1654711715/mark_pmh6na.png"
                />
              </div>
              {cart && cart.length !== 0 && (
                <>
                  <h4>You have {cart.length} product in your cart</h4>
                  <h4>Total:{cartTotal} TND</h4>
                </>
              )}
              <div className={styles.btnscontainer}>
                <button
                  onClick={() => navigate("/shopcollection")}
                  className={styles.shopmorebtn}
                >
                  Continuer mes achats
                </button>
                <button
                  onClick={() => navigate("/checkout")}
                  className={styles.checkoutbtn}
                >
                  Passer à la caisse
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
