import React from "react";

export default function Services() {
  return (
    <section className="slider-area " id="Services-Section">
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
                  <span>Branding Services</span>
                </h4>
                <p className="slide-text">
                  Brand Institute provides a robust portfolio of brand
                  strategy/architecture, naming, research, regulatory and design
                  services. Wherever your product is in its lifecycle, Brand
                  Institute offers tailored, cutting-edge identity solutions
                  ensuring creativity, trademark risk awareness, regulatory
                  insight and resonant design execution.
                </p>
                <a
                  href="#about-sec"
                  className="btn anim-btn rounded-pill scroll"
                >
                  READ MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  <span>Brand Strategy</span>
                </h4>
                <p className="slide-text">
                  With the support of our global team of experts, we will
                  propose a unique solution, tailored to your business
                  challenge. Brand Institute offers a suite of brand strategy
                  services to complement our naming, market research, design and
                  regulatory capabilities. These services enable our clients to
                  make insight- and data-driven decisions to build their brands,
                  expand their portfolio and grow their company in a competitive
                  marketplace where disruptive innovation, brand acquisition and
                  complexity are on the rise.
                </p>
                <a
                  href="#about-sec"
                  className="btn anim-btn rounded-pill scroll"
                >
                  READ MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>

            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  <span>Market Research</span>
                </h4>
                <p className="slide-text">
                  Successful brands convey a sense of trust and reliability
                  through inherent core values which, over time, build brand
                  loyalty and equity. Market Research experts can create fully
                  customizable qualitative and quantitative surveys to fit your
                  needs.
                </p>
                <a
                  href="#about-sec"
                  className="btn anim-btn rounded-pill scroll"
                >
                  READ MORE <span></span>
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
              <img src="./assets/creative-startup/img/slide1.jpg" />
            </div>
            <div className="img-slide">
              <img src="./assets/creative-startup/img/slide1.jpg" />
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
  );
}
