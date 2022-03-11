import React from "react";

export default function SliderSection() {
  return (
    <>
      <section className="slider-area">
        <div className="bg-overlay"></div>
        <div className="container position-relative">
          <div className="inner-bg-overlay"></div>
          <div className="row">
            <div
              className="slider-detail col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
              data-wow-delay=".8s"
            >
              <div className="slider-slide">
                <div className="slider-inner-content">
                  <h4 className="slide-heading">
                    The World's <span>#1 Naming Company</span>
                  </h4>
                  <p className="slide-text">
                    Why do companies choose Brand Institute? Our people, our
                    process and a proven track record of exceptional results.
                  </p>
                  <a
                    href="#about-sec"
                    className="btn anim-btn rounded-pill scroll"
                  >
                    LEARN MORE <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
              <div className="slider-slide">
                <div className="slider-inner-content">
                  <h4 className="slide-heading">
                    MODREN <span>CREATIVE STUDIO</span>
                  </h4>
                  <p className="slide-text">
                    Lorem Ipsum has been the industry’s standard dummy. Lorem
                    ipsum is simply dummy text of the printing and typesetting.
                    Lorem Ipsum has been the industry’s standard dummy.
                  </p>
                  <a
                    href="#about-sec"
                    className="btn anim-btn rounded-pill scroll"
                  >
                    LEARN MORE <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
              <div className="slider-slide">
                <div className="slider-inner-content">
                  <h4 className="slide-heading">
                    STARTUP <span>MODERN WORKS</span>
                  </h4>
                  <p className="slide-text">
                    Lorem Ipsum has been the industry’s standard dummy. Lorem
                    Ipsum has been the industry’s standard dummy. Lorem ipsum is
                    simply dummy text of the printing and typesetting.
                  </p>
                  <a
                    href="#about-sec"
                    className="btn anim-btn rounded-pill scroll"
                  >
                    LEARN MORE <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="slider-img col-12 col-lg-6 wow fadeInRight"
              data-wow-delay=".8s"
              data-depth="0.1"
            >
              <div className="img-slide">
                <img src="./assets/creative-startup/img/slide1.jpg" />
              </div>
              <div className="img-slide">
                <img src="./assets/creative-startup/img/slide2.jpg" />
              </div>
              <div className="img-slide">
                <img src="./assets/creative-startup/img/slide3.jpg" />
              </div>
            </div>
          </div>
          <div className="slider-arrows">
            <a
              href="javascript:void(0);"
              className="slider-arr slider-arr-up"
              id="slider-arr-up"
            >
              <i className="fas fa-angle-up"></i>
            </a>
            <a
              href="javascript:void(0);"
              className="slider-arr slider-arr-down"
              id="slider-arr-down"
            >
              <i className="fas fa-angle-down"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
