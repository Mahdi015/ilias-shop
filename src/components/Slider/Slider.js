import React, { useEffect, useState } from "react";
import style from "./Slider.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img0 from "../../images/test.png";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import wave from "./wave.svg";
const Slider = () => {
  const [vwValue, setvwValue] = useState("-100vw");
  const [index, setindex] = useState(1);
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
      {/* <img src={wave} className={style.wave} /> */}
      <div className={style.rightarrow}>
        <IoIosArrowForward onClick={() => handleRight()} size={"2em"} />
      </div>
      <div
        style={{ transform: `translatex(${vwValue})` }}
        className={style.wrapper}
      >
        <div className={style.slide}>
          <div className={style.imgContainer}>
            <img src={img3} />
          </div>
          <div className={style.infoContainer}>
            <h1>Ilias Shop</h1>
            <p>Vêtement , Accessoire Bébé Enfant ...</p>
            <button>Découvrez Maintenant !</button>
          </div>
        </div>

        <div className={style.slide}>
          <div className={style.imgContainer}>
            <img src={img0} />
          </div>
          <div className={style.infoContainer}>
            <h1>Ilias Shop</h1>
            <p>Vêtement , Accessoire Bébé Enfant ...</p>
            <button>Découvrez Maintenant !</button>
          </div>
        </div>
        <div className={style.slide}>
          <div className={style.imgContainer}>
            <img src={img1} />
          </div>
          <div className={style.infoContainer}>
            <h1>Ilias Shop</h1>
            <p>Vêtement , Accessoire Bébé Enfant ...</p>
            <button>Découvrez Maintenant !</button>
          </div>
        </div>
      </div>
      <div className={style.leftarrow}>
        <IoIosArrowBack onClick={() => handleLeft()} size={"2em"} />
      </div>
      <button className={style.phonebtn}>Shop Now</button>
    </div>
  );
};

export default Slider;
