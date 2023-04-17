import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      {/*Left side */}
      <div className={css.h_sides}>
        <span>Skin Protection Cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>Seek What you want with us and be amazed by our services.</span>
        </div>
      </div>

      {/*middle*/}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="heroimg" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best signup offers</span>

            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/*right*/}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5M</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
