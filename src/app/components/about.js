import React from 'react';
import CustomButton from "@/app/components/custom-button";
import winesImage from "@/app/images/bg/wines-min.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <div className="about-inner container">
        <div className="about__content">
          <div className="about__title">
            Discover the Perfect Holiday Wine Trio
          </div>

          <div className="about__subtitle">
            This holiday season, treat yourself and your loved ones to carefully curated wine collections that add
            sophistication and joy to every celebration. Each package is crafted with Narmada’s signature passion and
            artistry, capturing the true spirit of the holidays in every bottle.
          </div>

          <div className="about__button">
            <CustomButton text={"Shop now"}/>
          </div>
        </div>


        <div className="about__image">
          <Image src={winesImage} alt={"Wines"}/>
        </div>
      </div>
    </div>
  );
};

export default About;