import React from "react";

export default function ContactSection() {
  return (
    <>
      <section
        className="contact-sec padding-top padding-bottom"
        id="contact-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <h4 className="heading text-center text-lg-left">GET IN TOUCH</h4>
              <form
                className="row contact-form wow fadeInLeft"
                id="contact-form-data"
              >
                <div className="col-sm-12" id="result"></div>
                <div className="col-12 col-md-5">
                  <input
                    type="text"
                    name="userName"
                    placeholder="Your Name"
                    className="form-control"
                  />
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="Email Address *"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="userSubject"
                    placeholder="Subject"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-md-7">
                  <textarea
                    className="form-control"
                    name="userMessage"
                    placeholder="Your Message"
                    rows="6"
                  ></textarea>
                </div>
                <div className="col-12">
                  <a
                    href="javascript:void(0);"
                    className="btn purple-btn rounded-pill w-100 contact_btn"
                  >
                    <i
                      className="fa fa-spinner fa-spin mr-2 d-none"
                      aria-hidden="true"
                    ></i>
                    Send Message <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-5 text-center text-lg-left position-relative">
              <div className="contact-details wow fadeInRight">
                <h4 className="heading">OUR LOCATION</h4>
                <p className="text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered .
                </p>
                <ul>
                  <li>
                    <i className="las la-map-marker addr"></i>123 Park Avenue,
                    New York, United States
                  </li>
                  <li>
                    <i className="las la-phone-volume phone"></i>
                    <span>+1 631 1234 5678</span>
                    <span>+1 631 1234 5678</span>
                  </li>
                  <li>
                    <i className="las la-paper-plane email"></i>
                    email@website.com
                  </li>
                </ul>
              </div>
              <img
                src="./assets/creative-startup/img/contact-background.png"
                className="contact-background"
                alt="contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
