import React from "react";

export default function Services() {
  return (
    <>
      <section className="about-sec " id="about-sec">
        <div className="about-overlay "></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 services-area padding-top padding-bottom">
              <div className="purple-overlay"></div>
              <div className="experience">
                <div className="row1">
                  <div className="experience-card mb-5">
                    <div className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/lightbulb.png"
                          alt="..."
                          width={80}
                        />
                      </div>

                      <h4 className="card-heading1 ">Brand Stategy</h4>
                    </div>
                    <div className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/growth.png"
                          alt="..."
                          width={80}
                        />
                      </div>
                      <h4 className="card-heading1">
                        Creative <br /> Nomenclature <br /> Development
                      </h4>
                    </div>
                    <div className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/research.png"
                          alt="..."
                          width={80}
                        />
                      </div>
                      <h4 className="card-heading1">Market Research</h4>
                    </div>
                  </div>
                </div>
                <div className="row2">
                  <div className="experience-card mb-5">
                    <div className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/engineering.png"
                          alt="..."
                          width={80}
                        />
                      </div>

                      <h4 className="card-heading1">Regulatory</h4>
                    </div>
                    <div className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/trademark.png"
                          alt="..."
                          width={80}
                        />
                      </div>

                      <h4 className="card-heading1">Trademarks</h4>
                    </div>
                    <div className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/face-detection.png"
                          alt="..."
                          width={80}
                        />
                      </div>

                      <h4 className="card-heading1">Visual Identity</h4>
                    </div>
                  </div>
                </div>
                {/* <a href="!#" className="btn mt-5 anim-btn rounded-pill">
                  VIEW MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a> */}
              </div>
            </div>
            <div className="col-12 col-lg-6 about-area padding-top padding-bottom text-center text-lg-left">
              <div className="about-content wow fadeInRight">
                <div className="about-inner-content">
                  <h4 className="heading">Branding Services</h4>
                  <p className="text">
                    Brand Institute provides a robust portfolio of brand
                    strategy/architecture, naming, research, regulatory and
                    design services. Wherever your product is in its lifecycle,
                    Brand Institute offers tailored, cutting-edge identity
                    solutions ensuring creativity, trademark risk awareness,
                    regulatory insight and resonant design execution.
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
