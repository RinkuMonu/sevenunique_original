import React from "react";
// import vision from "../../assest/Images/vision.svg";
// import mission from "../../assest/Images/mission.svg";
import RefundPolicy from "../../assest/Images/RefundPolicy.1171c3947160ac48d9a102bde0027f89.svg";
// import aboutUs from "../../assest/Images/aboutus.jpg";
import MainAnimation from "../../component/mainPageAnimation/mainAnimation"; // Import Sections component
// import Button from "react-bootstrap/Button";

function RP() {
  return (
    <>
      <section className="main-bg">
        <MainAnimation />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-5">
              <h1 className="home_heading mb-3">Refund Policy </h1>{" "}
              {/* <p className="home-para">
                            It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p> */}{" "}
            </div>{" "}
            <div className="col-lg-6 col-md-6 banner-main-image d-flex justify-content-center">
              <img src={RefundPolicy} alt="webdevelopement" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <div className="container my-5">
        Refund Policy Once a User chooses to avail any service plan / offer
        announced by FinUnique TECH SOLUTIONS PVT LTD and agrees to buy that
        plan / offer by due payment for that plan / offer to FinUnique TECH
        SOLUTIONS PVT LTD, such payment by User shall not be refunded by
        FinUnique TECH SOLUTIONS PVT LTD under any circumstances
        whatsoever.Please note that such act of buying FinUnique TECH SOLUTIONS
        PVT LTD’ s plan is irreversible process under the applicable law. <br />{" "}
        <br /> Post receipt of payment from the User for the above - mentioned
        plan, FinUnique TECH SOLUTIONS PVT LTD shall create User ID in its
        system ONLY post successful KYC verification of such User.If the User is
        unable to get successful KYC done, FinUnique TECH SOLUTIONS PVT LTD
        shall not be able to create User ID of such User.Thus, in order to avail
        FinUnique TECH SOLUTIONS PVT LTD services on its portal, User has to
        mandatorily get his successful KYC verification done. <br /> <br /> Post
        User Id creation, while availing various services on FinUnique TECH
        SOLUTIONS PVT LTD portal, a transaction which has failed for any reason
        directly attributable to FinUnique TECH SOLUTIONS PVT LTD and FinUnique
        TECH SOLUTIONS PVT LTD has received corresponding confirmation from the
        payment gateway, will be automatically refunded to User’ s bank account
        within 3 - 21 working days from the date of transaction and a
        confirmation mail will be sent to User’ s email id registered with
        FinUnique TECH SOLUTIONS PVT LTD. <br /> <br /> Please note that only
        the actual transaction amount will be refunded excluding payment gateway
        charges and all applicable taxes.However, for cases where User has
        received a successful completion confirmation but not received services,
        User is required to submit a complaint by sending an e - mail to
        customer care Email ID given on this website.FinUnique TECH SOLUTIONS
        PVT LTD shall enquire the matter after receiving the complaint from the
        User and based on the enquiry FinUnique TECH SOLUTIONS PVT LTD may
        refund the payment.In all cases, FinUnique TECH SOLUTIONS PVT LTD’ s
        liability will be restricted to providing User a valid refund to the
        extent of corresponding payment received by FinUnique TECH SOLUTIONS PVT
        LTD with respect to a particular transaction.FinUnique TECH SOLUTIONS
        PVT LTD shall not be responsible for any other claim or consequential
        liability arising out of failed services on our system. <br /> <br />{" "}
        The User shall be responsible for the mobile number or DTH account
        number for which they purchase the prepaid recharge and all charges that
        result from those purchases.They are also responsible for the
        information relating to data card and toll - tag recharge and all
        charges that result from those purchases.FinUnique TECH SOLUTIONS PVT
        LTD is not responsible for any purchase of prepaid recharge for an
        incorrect mobile number or DTH account number or incorrect toll or data
        card information. <br /> <br /> User accepts that this refund policy is
        subject to all the terms and conditions as stated in the Agreement of
        the User / business associate / retailer / distributor with FinUnique
        TECH SOLUTIONS  PVT  LTD{" "}
      </div>{" "}
    </>
  );
}

export default RP;
