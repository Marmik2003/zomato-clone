/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
    <section className="footer-bar">
        <div className="container">
          <div className="footer-lang">
            <img className="footer-logo" src="/images/zomato-black-logo.webp" />
            <div className="btn-lang-top">
              <a className="lang-btn" href="#">
                {/* <img src="/images/india-flag.jpg" height="13px" /> */} India{" "}
                <small>
                  <i className="fa fa-chevron-down" />
                </small>
              </a>
              <a className="lang-btn" href="#">
                {" "}
                <i className="fa fa-globe" /> English{" "}
                <small>
                  <i className="fa fa-chevron-down" />
                </small>
              </a>
            </div>
          </div>
          <div className="footer-last-links">
            <ul>
              <li>
                <h4 className="footer-list-title">COMPANY</h4>
              </li>
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Work with Us</a>
              </li>
              <li>
                <a href="#">Investor relations</a>
              </li>
              <li>
                <a href="#">Report Fraud</a>
              </li>
            </ul>
            <ul>
              <li>
                <h4 className="footer-list-title">ZOMAVERSE</h4>
              </li>
              <li>
                <a href="#">Zomato</a>
              </li>
              <li>
                <a href="#">Feeding India</a>
              </li>
              <li>
                <a href="#">Hyperpure</a>
              </li>
              <li>
                <a href="#">Zomaland</a>
              </li>
            </ul>
            <ul>
              <li>
                <h4 className="footer-list-title">FOR RESTAURANTS</h4>
              </li>
              <li>
                <a href="#">Partner With Us</a>
              </li>
              <li>
                <a href="#">Apps For You</a>
              </li>
              <li>
                <a href="#">Zomato for Work</a>
              </li>
            </ul>
            <ul>
              <li>
                <h4 className="footer-list-title">Learn More</h4>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
            <div>
              <h4 className="footer-list-title">SOCIAL LINKS</h4>
              <div className="footer-social-icons">
                <a href="#">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div>
                <img
                  src="/images/app-store1.webp"
                  width="137px"
                  className="py-2"
                />
                <img src="/images/app-store2.webp" width="137px" />
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>
              <small>
                By continuing past this page, you agree to our Terms of Service,
                Cookie Policy, Privacy Policy and Content Policies. All
                trademarks are properties of their respective owners. 2008-2022
                © Zomato™ Ltd. All rights reserved.
              </small>
            </p>
          </div>
        </div>
      </section>
  )
}

export default Footer