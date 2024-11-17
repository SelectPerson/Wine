import React from 'react';

const Header = () => {
  return (
    <header className="container header">
      <div className="header-left">
        <nav className="header-nav">
          <a href="#">
            About Narmada
          </a>

          <a href="">
            Our Wines
          </a>

          <a href="#">
            FAQs
          </a>
        </nav>
      </div>

      <div className="header-right">
        <div className="header-icons">
          <a href="#" target={"_blank"}>

          </a>

          <a href="#" target={"_blank"}>

          </a>

          <a href="#" target={"_blank"}>

          </a>
        </div>

        <button className="header-button">
          Our Wine Club
        </button>
      </div>
    </header>
  );
};

export default Header;