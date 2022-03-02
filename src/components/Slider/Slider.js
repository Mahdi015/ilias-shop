import React, { useEffect, useState } from "react";
import style from "./Slider.module.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import img0 from "../../images/test.png";
const Slider = () => {
  const [vwValue, setvwValue] = useState("-100vw");
  const [index, setindex] = useState(0);
  useEffect(() => {
    switch (index) {
      case 0: {
        return setvwValue("0");
      }
      case 1: {
        return setvwValue("-100vw");
      }
      case 2: {
        return setvwValue("-200vw");
      }
    }
  }, [index]);
  const handleRight = () => {
    {
      setindex(index < 2 ? index + 1 : 0);
    }
    console.log(index);
  };
  const handleLeft = () => {
    console.log(index);
    {
      setindex(index > 0 ? index - 1 : 2);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.rightarrow}>
        <BsFillArrowRightCircleFill
          onClick={() => handleRight()}
          size={"2em"}
        />
      </div>
      <div
        style={{ transform: `translatex(${vwValue})` }}
        className={style.wrapper}
      >
        <div className={style.slide}>
          <div className={style.imgContainer}>
            <img src={img0} />
          </div>
          <div className={style.infoContainer}>
            <h1>Ilias Shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className={style.slide}>
          <div className={style.imgContainer}>
            <img src={img0} />
          </div>
          <div className={style.infoContainer}>
            <h1>Ilias Shop2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className={style.slide}>
          <div className={style.imgContainer}>
            <img src={img0} />
          </div>
          <div className={style.infoContainer}>
            <h1>Ilias Shop3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className={style.leftarrow}>
        <BsFillArrowLeftCircleFill onClick={() => handleLeft()} size={"2em"} />
      </div>
    </div>
  );
};

export default Slider;
