/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const GetApp = () => {
  return (
    <section className="zom-app">
      <img
        src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png"
        width="300px"
        height="60px"
        alt="zomato-app"
      />
      <div className="zom-app-right">
        <h1>Get the Zomato App</h1>
        <p>
          We will send you a link, open it on your phone to download the app
        </p>
        <div className="radio-btn">
          <label htmlFor="email">
            <input type="radio" id="email" name="app" defaultValue="email" />
            Email
          </label>
          <label htmlFor="phone">
            <input type="radio" id="phone" name="app" defaultValue="phone" />
            Phone
          </label>
        </div>
        <div className="email-phone">
          <input type="text" placeholder="Email" />
          <a className="btn-share" href="#">
            Share App Link
          </a>
        </div>
        <p className="small-text">
          <small>Download app from</small>
        </p>
        <div className="app-store">
          <div className="app-image">
            <img src="/images/app-store1.webp" />
          </div>
          <div className="app-image">
            <img src="/images/app-store2.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
