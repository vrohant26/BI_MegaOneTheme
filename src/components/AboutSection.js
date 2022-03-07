import React from "react";

export default function AboutSection() {
  return (
    <>
      <section className="about-sec" id="about-sec">
        <div className="about-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 services-area padding-top padding-bottom">
              <div className="purple-overlay"></div>
              <div className="row no-gutters wow fadeInLeft">
                <div className="col-12 col-lg-6 services text-center">
                  <div className="service-card">
                    <div className="icon-holder">
                      <i className="lni lni-briefcase"></i>
                    </div>
                    <h4 className="card-heading">Make Business</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 services text-center">
                  <div className="service-card">
                    <div className="icon-holder">
                      <i className="lni lni-bulb"></i>
                    </div>
                    <h4 className="card-heading">Agency Ideas</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 services text-center">
                  <div className="service-card">
                    <div className="icon-holder">
                      <i className="lni lni-heart"></i>
                    </div>
                    <h4 className="card-heading">Our Hardwork</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 services text-center">
                  <div className="service-card">
                    <div className="icon-holder">
                      <i className="las la-wallet"></i>
                    </div>
                    <h4 className="card-heading">Make Money</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 about-area padding-top padding-bottom text-center text-lg-left">
              <div className="about-content wow fadeInRight">
                <div className="about-inner-content">
                  <h4 className="heading">
                    WE ARE <span>DIGITAL AGENCY</span>
                  </h4>
                  <p className="text">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy. Lorem Ipsum has been the industry’s standard dummy.
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy. Lorem Ipsum has been the industry’s standard dummy.
                  </p>
                  <p className="text">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy. Lorem Ipsum has been the industry’s standard dummy.
                  </p>
                  <a href="#about-sec" className="btn anim-btn rounded-pill">
                    LEARN MORE <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
