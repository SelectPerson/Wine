import React from 'react';
import CustomButton from "@/app/components/custom-button";
import IconNote from "@/app/components/icons/note";
import IconLocationGray from "@/app/components/icons/location-gray";
import IconMark from "@/app/components/icons/mark";
import FaqElem from "@/app/components/faqElem";

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-inner container">
        <div className="faq__title">
          FAQs
        </div>

        <div className="faq__list">
          <FaqElem
            title={"When will my order arrive?"}
            subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."}
            icon={<IconNote/>}
          />

          <FaqElem
            title={"Can I ship wine to multiple locations?"}
            subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."}
            icon={<IconLocationGray/>}
          />

          <FaqElem
            title={"Are there any special offers for holiday purchases?"}
            subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."}
            icon={<IconMark/>}
          />
        </div>

        <div className="faq__button">
          <CustomButton
            text="Return to shopping"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;