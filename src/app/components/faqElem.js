import React from 'react';
import IconNote from "@/app/components/icons/note";

const FaqElem = ({ icon, title, subtitle }) => {
  return (
    <div className="faq-elem">
        <div className="faq-elem__left">
          <div className="faq-elem__icon">
            {icon}
          </div>
        </div>

        <div className="faq-elem__right">
          <div className="faq-elem__title">
            {title}
          </div>

          <div className="faq-elem__subtitle">
            {subtitle}
          </div>
        </div>
    </div>
  );
};

export default FaqElem;