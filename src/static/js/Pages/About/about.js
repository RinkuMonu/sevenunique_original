import React from "react";
import vision from "../../assest/Images/vision.c206394d9a3274e5f70bafebfe323a56.svg";
import mission from "../../assest/Images/mission.a48482f1ae4de34d840ce5bd20559daf.svg";
import value from "../../assest/Images/value.d27e5616348a4850eb9d74ccc74561f9.svg";
import indexmain from "../../assest/Images/indexmain.svg";
import WhoWeAre from "../../assest/Images/WhoWeAre.svg";
import MainAnimation from "../../component/mainPageAnimation/mainAnimation"; // Import Sections component
import Button from "react-bootstrap/Button";

function about() {
  return (
    <>
      <section className="main-bg">
        <MainAnimation />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-5">
              <h1 className="home_heading mb-3">
                {" "}
                Discover Our Unique Journey: About Us{" "}
              </h1>{" "}
              <p className="home-para">
                FinUnique provides banking and financial services, including
                Broadband, Broadband Postpaid cable, creditcardpay, Digital,
                Voucher, DTH, Electricity, EMI, Payment, Fastag, Gas, Insurance,
                Postpaid, Prepaid, Water, Hotel booking, bus booking, IRCTC,
                movie ticket and etc..{" "}
              </p>{" "}
              <Button className="button"> Start Now </Button>{" "}
            </div>{" "}
            <div className="col-lg-7 col-md-6 banner-main-image d-flex justify-content-center">
              <img src={indexmain} alt="webdevelopement" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-6">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src={WhoWeAre}
                alt=""
              />
            </div>{" "}
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3"> Who Are We ? </h2>{" "}
                  <p className="lead fs-4 text-secondary mb-3">
                    FinUnique Tech Solutions Pvt Ltd.was founded in 2023 as a
                    digital payment platform.Our company 's head office is in
                    Jaipur.We have great payment services, 3000 + distributors,
                    and over 50000 + retailers that have already joined us; this
                    figure is rapidly growing, and we have registered our
                    presence in over Pan India.{" "}
                  </p>{" "}
                  <p className="mb-5">
                    Our company 's goal is to create a digital network that will
                    allow even small retailers to become digitally self -
                    reliant.We are also working to connect cities, semi - urban,
                    and remote rural areas to the mainstream economy.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* mision vision value */}
        <div className="container py-5">
          <div className="row gy-4 gy-md-0 gx-xxl-5X">
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-md-3 text-primary">
                  <img src={mission} alt="mission" />
                </div>{" "}
                <div className="col-md-9">
                  <h4 className="mb-3"> Mission </h4>{" "}
                  <p className="text-secondary mb-0">
                    We aim to create a digital network to become digitally self
                    - reliant, empower even the smallest retailer, and foster a
                    thriving ecosystem of connectivity.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-md-3 text-primary">
                  <img src={value} alt="vision" />
                </div>{" "}
                <div className="col-md-9">
                  <h4 className="mb-3"> Values </h4>{" "}
                  <p className="text-secondary mb-0">
                    <b className="text-black"> Innovation : </b> We are
                    constantly innovating our services to deliver the best
                    services to our users.
                    <br />
                    <b className="text-black"> Integrity: </b> Our motto is to
                    provide the best services with accuracy and confidence on
                    time.
                    <br />
                    <b className="text-black"> Cooperation: </b> We make special
                    efforts to strengthen and support our relationships
                    with our customers.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-md-3 text-primary">
                  <img src={vision} alt="vision" />
                </div>{" "}
                <div className="col-md-9">
                  <h4 className="mb-3"> Vision </h4>{" "}
                  <p className="text-secondary mb-0">
                    To become a one - stop digital payment and banking point and
                    superior distribution channel to improve India 's
                    monetization infrastructure, specifically in the
                    unorganized  retail  sector.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}

export default about;
