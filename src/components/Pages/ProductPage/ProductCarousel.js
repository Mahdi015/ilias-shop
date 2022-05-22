import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../../Product/Product";
import style from "./ProductPage.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    // slidesToSlide: 3, // optional, default to 1.
  },
  customBreakpoint: {
    breakpoint: { max: 1288, min: 1065 },
    items: 3,
    // slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1065, min: 648 },
    items: 2,
    // slidesToSlide: 2, // optional, default to 1.
  },

  mobile: {
    breakpoint: { max: 648, min: 0 },
    items: 1,
    // slidesToSlide: 1, // optional, default to 1.
  },
  // mobilesmaller: {
  //   breakpoint: { max: 386, min: 0 },
  //   items: 1,
  //   slidesToSlide: 1, // optional, default to 1.
  // },
};

const ProductCarousel = ({ products }) => {
  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={7000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobilesmaller"]}
        //   deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products && products.length !== 0 ? (
          products.map((p, i) => (
            <div className={style.pdiv}>
              {" "}
              <Product p={p} i={i} />
            </div>
          ))
        ) : (
          <div>gdfg</div>
        )}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
