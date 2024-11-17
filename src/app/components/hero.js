import React from 'react';
import IconLogo from "@/app/components/icons/logo";
import CustomButton from "@/app/components/custom-button";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-inner container">
        <div className="hero__logo">
          <IconLogo/>
        </div>

        <div className="hero__text">
          Celebrate the Season with Narmada Wines
        </div>

        <div className="hero__button">
          <CustomButton text={"Shop Now"}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;