/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Header = () => {
  return (
    <header className="showcase">
      <div className="container">
        <nav>
          <div>
            <a href="#">
              <i className="fa fa-mobile-alt" /> Get the App
            </a>
          </div>
          <div className="right-menu">
            <a href="#">Log in</a>
            <a href="#">Sign up</a>
          </div>
        </nav>
        <div className="hero-text">
          <img src="/images/logo.webp" width={300} />
          <h1>
            Discover the best food &amp; drinks in{" "}
            <span className="bold-place">Himatnagar</span>
          </h1>
          <div className="search-bar">
            <div className="search-3">
              <i className="fa fa-map-marker-alt" />
              <input type="text" placeholder="Himatnagar" />
              <i className="fa fa-caret-down" />
            </div>
            <div className="search-2">
              <i className="fas fa-search" />
              <input
                type="text"
                className="search-right"
                placeholder="Search for restaurant"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
