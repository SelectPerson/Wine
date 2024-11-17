import React from 'react';
import ButtonInfo from "@/app/components/button-info";
import Image from "next/image";
import IconArrow from "@/app/components/icons/arrow";

import wineRoom from "@/app/images/bg/wine-room.png";
import classNames from "classnames";

const Info = ({ bg, position = "left" }) => {
  const positionInfo = classNames("info", `info--${position}`)

  return (
    <div className={positionInfo}>
      <div className="info__bg">
        <Image src={wineRoom} alt={"BG"}/>
      </div>

      <div className="container info-inner">
        <div className="info-left">
          <div className="info__title">
            Heritage Reds Collection
          </div>

          <div className="info__subtitle">
            A taste of tradition with bold and elegant Bordeaux inspired reds that pair perfectly with festive dinners
            and cozy evenings.
          </div>

          <div className="info__list">
            <div className="info__elem">
              <ButtonInfo text={"Cabernet Franc Reserve"}/>
            </div>

            <div className="info__elem">
              <ButtonInfo text={"Yash Vir"}/>
            </div>

            <div className="info__elem">
              <ButtonInfo text={"Mélange"}/>
            </div>
          </div>

          <button className="info__price">
            $141.00

            <IconArrow/>
          </button>
        </div>

        <div className="info-right">

        </div>
      </div>
    </div>
  );
};

export default Info;