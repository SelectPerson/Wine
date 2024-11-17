import React from 'react';
import IconBottle from "@/app/components/icons/bottle";

const ButtonInfo = ({ text }) => {
  return (
    <button className="button-info">
      <IconBottle />

      <div className="button-info__text">
        {text}
      </div>
    </button>
  );
};

export default ButtonInfo;