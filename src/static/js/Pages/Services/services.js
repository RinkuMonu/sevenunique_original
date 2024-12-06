import React from "react";
import "./style.css"; // Import CSS file containing keyframes
import MainAnimation from "../../component/mainPageAnimation/mainAnimation"; // Import Sections component
import servicesmain from "../../assest/Images/servicesmain.95ce0df9563731a1910.svg";
import Button from "react-bootstrap/Button";

function services() {
  return (
    <>
      <section className="main-bg">
        <MainAnimation />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-5">
              <h1 className="home_heading mb-3">
                SERVICES for Your Business Needs{" "}
              </h1>{" "}
              <p className="home-para">
                You can quickly do Jio recharges, Airtel recharge, Vodafone
                recharge, Jio recharge, BSNL recharge, and MTNL recharges using
                the FinUnique Web. <br />
                You 'll also receive reminders for recharges on time before the
                due date so that you don 't run out of time to recharge.{" "}
              </p>{" "}
              <Button className="button"> Start Now </Button>{" "}
            </div>{" "}
            <div className="col-lg-6 col-md-6 banner-main-image d-flex justify-content-center">
              <img src={servicesmain} alt="webdevelopement" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* section which containe services */}
      <section className="my-5">
        <div className="container container-services">
          <h1> Our Services </h1>{" "}
          <p className="py-4">
            Retailers offer a safe and easy way to pay bills.You get the
            following recharge and bill payment facilities at FinUnique Store:
            Mobile Recharge(Prepaid and Postpaid): FinUnique supports all
            leading network providers and provides exclusive cashback offers and
            coupons on mobile recharges.{" "}
          </p>{" "}
          <div className="row row-services">
            <div className="service">
              {" "}
              {/* <i className="fas fa-laptop-code"></i> */}{" "}
              <i className="fas fa-wifi"> </i>{" "}
              <h3 className="fw-bold"> Broadband </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            {/* <div className="service">
                          <i className="fas fa-chart-line"></i>
                          <h3 className="fw-bold">Broadband Postpaid cable</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p>
                        </div> */}{" "}
            <div className="service">
              {" "}
              {/* <i className="fab fa-sketch"></i> */}{" "}
              <i className="fas fa-credit-card"> </i>{" "}
              <h3 className="fw-bold"> creditcardpay </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-database"></i> */}{" "}
              <i className="fas fa-ticket-alt"> </i>{" "}
              <h3 className="fw-bold"> Digital Voucher </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-mobile-alt"></i> */}{" "}
              <i className="fas fa-satellite-dish"> </i>{" "}
              <h3 className="fw-bold"> DTH </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-file-invoice"></i> */}{" "}
              <i className="fas fa-bolt"> </i>{" "}
              <h3 className="fw-bold"> Electricity </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-money-check-alt"></i> */}{" "}
              <i className="fas fa-money-check-alt"> </i>{" "}
              <h3 className="fw-bold"> EMI Payment </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-network-wired"></i> */}{" "}
              <i className="fas fa-tags"> </i>{" "}
              <h3 className="fw-bold"> Fastag </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-laptop-code"></i> */}{" "}
              <i className="fas fa-gas-pump"> </i>{" "}
              <h3 className="fw-bold"> Gas </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-chart-line"></i> */}{" "}
              <i className="fas fa-shield-alt"> </i>{" "}
              <h3 className="fw-bold"> Insurance </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fab fa-sketch"></i> */}{" "}
              <i className="fas fa-mobile-alt"> </i>{" "}
              <h3 className="fw-bold"> Postpaid </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-database"></i> */}{" "}
              {/* <i className="fas fa-mobile-alt"></i> */}{" "}
              <i className="fas fa-coins"> </i>{" "}
              <h3 className="fw-bold"> Prepaid </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-mobile-alt"></i> */}{" "}
              <i className="fas fa-tint"> </i>{" "}
              <h3 className="fw-bold"> Water </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-file-invoice"></i> */}{" "}
              <i className="fas fa-hotel"> </i>{" "}
              <h3 className="fw-bold"> Hotel booking </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-money-check-alt"></i> */}{" "}
              <i className="fas fa-bus"> </i>{" "}
              <h3 className="fw-bold"> bus booking </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-network-wired"></i> */}{" "}
              <i className="fas fa-train"> </i>{" "}
              <h3 className="fw-bold"> IRCTC </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
            <div className="service">
              {" "}
              {/* <i className="fas fa-network-wired"></i> */}{" "}
              <i className="fas fa-film"> </i>{" "}
              <h3 className="fw-bold"> movie  ticket </h3>{" "}
              {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Excepturi, quae?
                          </p> */}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}

export default services;
