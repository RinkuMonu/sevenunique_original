import React from "react";
import "./style.css";
import logoWhite from "../../../../assests/logo_old.png";

const footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="widget company-intro-widget">
                <a href="index.html" className="site-logo">
                  <img src={logoWhite} alt="logo" />{" "}
                  {/* <h1 className='text-white'>7unique</h1> */}{" "}
                </a>{" "}
                <p>
                  Our mission is to digitally empower these communities by
                  providing accessible banking and financial services, driving
                  meaningful and impactful change across the nation.{" "}
                </p>{" "}
                <ul className="company-footer-contact-list p-0">
                  <li className="list-unstyled">
                    <i className="fas fa-phone"> </i>9660-339514{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <i className="fas fa-envelope"> </i>
                    info @finunique.in{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget course-links-widget">
                <h5 className="widget-title"> Services links </h5>{" "}
                <ul className="courses-link-list p-0">
                  <li className="list-unstyled">
                    <a href="/Services">
                      <i className="fa fa-long-arrow-alt-right"> </i>DTH
                      Recharge{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/Services">
                      <i className="fa fa-long-arrow-alt-right"> </i>Electricity
                      Bill Payment{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/Services">
                      <i className="fa fa-long-arrow-alt-right"> </i>Water Bill
                      Payment{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/Services">
                      <i className="fa fa-long-arrow-alt-right"> </i>Gas Bill
                      Payment{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/Services">
                      <i className="fa fa-long-arrow-alt-right"> </i>Credit Card
                      Bill Payment{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/Services">
                      <i className="fa fa-long-arrow-alt-right"> </i>FasTag{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget course-links-widget">
                <h5 className="widget-title"> Usefull links </h5>{" "}
                <ul className="courses-link-list p-0">
                  <li className="list-unstyled">
                    <a href="/Aboutus">
                      <i className="fa fa-long-arrow-alt-right"> </i>About Us{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/ContactUs">
                      <i className="fa fa-long-arrow-alt-right"> </i>Contact Us{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/Privacy Policy">
                      <i className="fa fa-long-arrow-alt-right"> </i>Privacy
                      Policy{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/Terms And Conditions">
                      <i className="fa fa-long-arrow-alt-right"> </i>Terms And
                      Conditions{" "}
                    </a>{" "}
                  </li>{" "}
                  <li className="list-unstyled">
                    <a href="/Refund Policy">
                      <i className="fa fa-long-arrow-alt-right"> </i>Refund
                      Policy{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <h5 className="widget-title"> Social Links </h5>{" "}
                <div className="footer-newsletter">
                  <p> Get Latest Updates & Services </p>{" "}
                  <ul className="d-flex align-items-center justify-content-between p-0 mt-4">
                    <li className="list-unstyled text-white">
                      <i className="fab fa-instagram footer-social-icons"> </i>{" "}
                    </li>{" "}
                    <li className="list-unstyled text-white">
                      <i className="fab fa-facebook footer-social-icons"> </i>{" "}
                    </li>{" "}
                    <li className="list-unstyled text-white">
                      <i className="fab fa-linkedin footer-social-icons"> </i>{" "}
                    </li>{" "}
                    <li className="list-unstyled text-white">
                      <i className="fab fa-whatsapp footer-social-icons"> </i>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-sm-left">
              <span className="copy-right-text">
                {" "}
                ©2019 <a href="#"> finunique </a> All Rights Reserved.{" "}
              </span>{" "}
            </div>{" "}
            <div className="col-md-6 col-sm-6">
              <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li className="list-unstyled">
                  <a href="/Terms And Conditions"> Terms & Conditions </a>{" "}
                </li>{" "}
                <li className="list-unstyled">
                  <a href="#"> Privacy Policy </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default footer;
