import React from "react";

export default function TestimonialSection() {
  return (
    <>
      <div
        className="testimonial-sec padding-top position-relative"
        id="testimonial-sec"
      >
        <div className="right-overlay"></div>
        <div className="container">
          <div className="testimonial-area padding-top padding-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center text-center text-lg-left">
                  <div className="testimonial-details wow fadeInLeft">
                    <h4 className="heading">
                      SATISFIED <span>CUSTOMERS</span>
                    </h4>
                    <p className="text">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry’s standard
                      dummy.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-1">
                  <div className="testimonial-carousel wow fadeInRight">
                    <div className="testimonial-box owl-carousel owl-theme">
                      <div className="item text-center">
                        <div className="icon-holder">
                          <i className="fas fa-quote-right"></i>
                        </div>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce vitae egestas mi, vel dapibus diam. Mauris
                          malesuada, nisl non rutrum commodo, sem magna laoreet
                          tellus, eu euismod dolor enim et mi. In at tempor
                          purus.
                        </p>
                        <div className="img-holder">
                          <img
                            src="/assets/creative-startup/img/test1.jpg"
                            alt="..."
                          />
                        </div>
                        <h4 className="user-name">Sara Williams</h4>
                      </div>
                      <div className="item text-center">
                        <div className="icon-holder">
                          <i className="fas fa-quote-right"></i>
                        </div>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce vitae egestas mi, vel dapibus diam. Mauris
                          malesuada, nisl non rutrum commodo, sem magna laoreet
                          tellus, eu euismod dolor enim et mi. In at tempor
                          purus.
                        </p>
                        <div className="img-holder">
                          <img
                            src="/assets/creative-startup/img/test2.jpg"
                            alt="..."
                          />
                        </div>
                        <h4 className="user-name">Julia Miltese</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
