/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../components/Landing/Header";
import Order from "../components/Landing/Order";
import Localities from "../components/Landing/Localities";
import GetApp from "../components/Landing/GetApp";
import Footer from "../components/common/Footer";
import "../style.scss";

const Landing = () => {
  return (
    <>
      <Header />
      <Order />
      <Localities />
      <GetApp />
      <Footer />
    </>
  );
};

export default Landing;
