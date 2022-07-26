/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <section className="container">
      <div className="order-cat">
        <Link to="/order">
          <div className="hover">
            <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" />
            <div className="order-title-bg">
              <p className="order-title">Order Food Online</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Order;
