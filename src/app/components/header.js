import React from 'react';
import IconInstagram from "@/app/components/icons/instagram";
import IconTwitter from "@/app/components/icons/twitter";
import IconYoutube from "@/app/components/icons/youtube";

const Header = () => {
  return (
    <header className="container header">
      <div className="header__left">
        <nav className="header__nav">
          <a href="#" className="header__elem">
            About Narmada
          </a>

          <a href="" className="header__elem">
            Our Wines
          </a>

          <a href="#" className="header__elem">
            FAQs
          </a>
        </nav>
      </div>

      <div className="header__right">
        <div className="header-icons">
          <a className="header-icons__elem icon-border" href="#">
            <IconInstagram/>
          </a>

          <a className="header-icons__elem icon-border" href="#">
            <IconTwitter/>
          </a>

          <a className="header-icons__elem icon-border" href="#">
            <IconYoutube/>
          </a>
        </div>

        <button className="header__button">
          Our Wine Club
        </button>
      </div>
    </header>
  );
};

export default Header;