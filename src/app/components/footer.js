import React from 'react';
import IconLogo from "@/app/components/icons/logo";
import IconEmail from "@/app/components/icons/email";
import IconInstagram from "@/app/components/icons/instagram";
import IconTwitter from "@/app/components/icons/twitter";
import IconYoutube from "@/app/components/icons/youtube";
import IconPhone from "@/app/components/icons/phone";
import IconLocation from "@/app/components/icons/location";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer__logo">
          <IconLogo/>
        </div>

        <div className="footer-menu">
          <div className="footer-menu__title footer__title">
            Site Menu
          </div>

          <div className="footer-menu__list">
            <a href="#" className="footer-menu__elem">
              About Narmada
            </a>

            <a href="#" className="footer-menu__elem">
              Our Wines
            </a>

            <a href="#" className="footer-menu__elem">
              Shipping Policy
            </a>

            <a href="#" className="footer-menu__elem">
              FAQs
            </a>
          </div>
        </div>

        <div className="footer-reach-us">
          <div className="footer-reach-us__title footer__title">
            Reach us
          </div>

          <div className="footer-reach-us__list">
            <div className="footer-reach-us__elem">
              <div className="footer-reach-us__icon">
                <IconEmail/>
              </div>

              <a href="#" className="footer-reach-us__text">
                info@narmadawinery.com
              </a>
            </div>

            <div className="footer-reach-us__elem">
              <div className="footer-reach-us__icon">
                <IconPhone/>
              </div>

              <a href="#" className="footer-reach-us__text">
                (123) 456-7890
              </a>
            </div>

            <div className="footer-reach-us__elem">
              <div className="footer-reach-us__icon">
                <IconLocation/>
              </div>

              <a href="#" className="footer-reach-us__text">
                43 Narmada Lane,<br />
                Amissville, VA 20106
              </a>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <div className="footer__title footer-social__title">
            Social
          </div>

          <div className="footer-social__list">
            <a className="footer-social__elem icon-border" href="#">
              <IconInstagram/>
            </a>

            <a className="footer-social__elem icon-border" href="#">
              <IconTwitter/>
            </a>

            <a className="footer-social__elem icon-border" href="#">
              <IconYoutube/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;