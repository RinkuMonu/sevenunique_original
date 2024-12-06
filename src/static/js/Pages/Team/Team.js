import React from "react";
import "./style.css"; // Import CSS file containing keyframes
import MainAnimation from "../../component/mainPageAnimation/mainAnimation";
import team_main from "../../assest/Images/team_main.08b9d34380e5a4094d7b48c0f7f1d027.svg";
import Button from "react-bootstrap/Button";
import team from "../../assest/Images/team.bad6a185eff149b10b81.jpg";

function Team() {
  return (
    <>
      <section className="main-bg">
        <MainAnimation />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-md-5">
              <h1 className="home_heading mb-3"> THE BACKBONE OF SUCCESS </h1>{" "}
              <p className="home-para">
                Teamwork is the engine driving success in every company, fueling
                collaboration, innovation, and efficiency.Together, individuals
                leverage diverse skills to tackle challenges effectively,
                achieving superior results.It fosters a supportive culture where
                every member feels valued, leading to heightened productivity
                and morale.Embracing teamwork isn 't just beneficial— it 's
                essential for sustained growth and success.{" "}
              </p>{" "}
              <Button className="button"> Start Now </Button>{" "}
            </div>{" "}
            <div className="col-lg-6 col-md-6 banner-main-image d-flex justify-content-center">
              <img src={team_main} alt="webdevelopement" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="team my-4">
        <div className="container">
          <span> meet our </span>{" "}
          {/* <h2 className="text-black fw-bold">Team</h2> */}{" "}
          <p>
            At FinUnique, we welcome reputed banks and non - financial
            institutions.Join us and help us build a fast network to deliver
            quality services to our consumers.{" "}
          </p>{" "}
          <span className="bg-watermark"> team </span>{" "}
          {/* <div className="cards">
                        <div className="card">
                          <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Franklin Carlson"
                          />
                          <div className="card-content">
                            <h3>franklin carlson</h3>
                            <p>UX Designer</p>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Antonia Moore"
                          />
                          <div className="card-content">
                            <h3>antonia moore</h3>
                            <p>product designer</p>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Travis Lynch"
                          />
                          <div className="card-content">
                            <h3>travis lynch</h3>
                            <p>web developer</p>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}{" "}
          <div className="container overflow-hidden teams-card">
            <div className="row gy-4 gy-lg-0 gx-xxl-5">
              <div className="col-12 col-md-6 col-lg-3 ">
                <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                  <div className="card-body p-0">
                    <figure className="m-0 p-0">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src={team}
                        alt="Flora Nyra"
                      />
                      <figcaption className="m-0 p-4">
                        <h4 className="mb-1"> Flora Nyra </h4>{" "}
                        <p className="text-secondary mb-0"> Product Manager </p>{" "}
                      </figcaption>{" "}
                    </figure>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-12 col-md-6 col-lg-3 team-card-down">
                <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                  <div className="card-body p-0">
                    <figure className="m-0 p-0">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src={team}
                        alt="Evander Mac"
                      />
                      <figcaption className="m-0 p-4">
                        <h4 className="mb-1"> Evander Mac </h4>{" "}
                        <p className="text-secondary mb-0"> Art Director </p>{" "}
                      </figcaption>{" "}
                    </figure>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-12 col-md-6 col-lg-3 team-card-down">
                <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                  <div className="card-body p-0">
                    <figure className="m-0 p-0">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src={team}
                        alt="Taytum Elia"
                      />
                      <figcaption className="m-0 p-4">
                        <h4 className="mb-1"> Taytum Elia </h4>{" "}
                        <p className="text-secondary mb-0">
                          Investment Planner{" "}
                        </p>{" "}
                      </figcaption>{" "}
                    </figure>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-12 col-md-6 col-lg-3 ">
                <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                  <div className="card-body p-0">
                    <figure className="m-0 p-0">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src={team}
                        alt="Wylder Elio"
                      />
                      <figcaption className="m-0 p-4">
                        <h4 className="mb-1"> Wylder Elio </h4>{" "}
                        <p className="text-secondary mb-0">
                          {" "}
                          Financial Analyst{" "}
                        </p>{" "}
                      </figcaption>{" "}
                    </figure>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}

export default Team;
