import React from "react";
import "./style.css";
import MainAnimation from "../../component/mainPageAnimation/mainAnimation";
import contactmain from "../../assest/Images/contactmain.b5432eebe1165c84ace34c0fd7da2284.svg";
import Button from "react-bootstrap/Button";

function Contact() {
    return (
        <>
            <section className="main-bg">
                <MainAnimation />
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <h1 className="home_heading mb-3">
                                THE CORNERSTONE OF CONNECTIVITY: Why Contact Pages are Vital for Every Business
                            </h1>
                        </div>
                        <div className="col-lg-7 col-md-6 banner-main-image d-flex justify-content-center">
                            <img src={contactmain} alt="web development" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="contactus">
                <section className="py-3 py-md-5 py-xl-8">
                    <div className="container">
                        <div className="row align-items-center d-flex">
                            <div className="col-12 col-md-10 col-lg-8">
                                <h3 className="fs-5 mb-2 text-secondary text-uppercase">Contact</h3>
                                <h6 className="display-10 mb-4 mb-md-5 mb-xl-4">
                                    They facilitate inquiries, feedback, and issue resolution, fostering customer satisfaction and trust. Please get in touch.
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
                            <div className="col-12 col-lg-6">
                                <div className="border overflow-hidden">
                                    <form action="#!">
                                        <div className="row gy-3 gy-xl-3 p-4 p-xl-5">
                                            <div className="col-12">
                                                <label htmlFor="fullname" className="form-label">
                                                    Full Name <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className="form-control" id="fullname" name="fullname" required />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="email" className="form-label">
                                                    Email <span className="text-danger">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                            <path d="..." />
                                                        </svg>
                                                    </span>
                                                    <input type="email" className="form-control" id="email" name="email" required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                            <path d="..." />
                                                        </svg>
                                                    </span>
                                                    <input type="tel" className="form-control" id="phone" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="subject" className="form-label">
                                                    Subject <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className="form-control" id="subject" name="subject" required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message" className="form-label">
                                                    Message <span className="text-danger">*</span>
                                                </label>
                                                <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <Button className="button btn-lg" type="submit">Send Message</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <div className="mb-4 mb-md-5">
                                            <div className="mb-3 icon-contact">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
                                                    <path d="..." />
                                                </svg>
                                            </div>
                                            <h4 className="mb-2">Office</h4>
                                            <hr className="w-50 mb-3 border-dark-subtle" />
                                            <address className="m-0 text-secondary">
                                            P.NO 97, Dakshinpuri Shri Kishanpura, Opposite to Somya Sky Apartments,
                                            Jagatpura, Jaipur, Rajasthan - 302017
                                            </address>
                                        </div>

                                        <div className="row mb-sm-4 mb-md-5">
                                            <div className="col-12 col-sm-6">
                                                <div className="mb-4 mb-sm-0">
                                                    <div className="mb-3 icon-contact">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                                                            <path d="..." />
                                                        </svg>
                                                    </div>
                                                    <h4 className="mb-2">Phone</h4>
                                                    <hr className="w-75 mb-3 border-dark-subtle" />
                                                    <p className="mb-0">
                                                        <a className="link-secondary text-decoration-none" href="tel:+15057922430">9660-339514</a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-6">
                                                <div className="mb-4 mb-sm-0">
                                                    <div className="mb-3 icon-contact">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                                            <path d="..." />
                                                        </svg>
                                                    </div>
                                                    <h4 className="mb-2">Email</h4>
                                                    <hr className="w-75 mb-3 border-dark-subtle" />
                                                    <p className="mb-0">
                                                        <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">info@7unique.in</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Contact;

