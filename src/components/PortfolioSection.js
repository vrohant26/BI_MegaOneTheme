import React from "react";

export default function PortfolioSection() {
  return (
    <>
      <section
        className="portfolio-sec company-portfolio-section padding-top"
        id="company-portfolio-section"
      >
        <div className="container">
          <div className="section-heading">
            <div className="row">
              <div
                className="col-lg-6 wow fadeInUp text-center text-lg-left"
                data-wow-delay="300ms"
              >
                <h4 className="heading">
                  OUR <span>AMAZING PORTFOLIO</span>
                </h4>
              </div>
              <div className="col-md-12 pt-5">
                <div
                  id="js-filters-mosaic"
                  className="cbp-l-filters-button wow fadeInUp text-center text-lg-left"
                  data-wow-delay="350ms"
                >
                  <div
                    data-filter="*"
                    className="cbp-filter-item-active cbp-filter-item"
                  >
                    ALL
                  </div>
                  <div data-filter=".web" className="cbp-filter-item">
                    WEB DESIGN
                  </div>
                  <div data-filter=".logo" className="cbp-filter-item">
                    LOGO DESIGN
                  </div>
                  <div data-filter=".mobile" className="cbp-filter-item">
                    MOBILE APP
                  </div>
                  <div data-filter=".development" className="cbp-filter-item">
                    DEVELOPMENT
                  </div>
                </div>

                <div id="js-grid-mosaic" className="cbp cbp-l-grid-mosaic">
                  <div className="cbp-item web logo">
                    <a
                      href="creative-startup/img/p1.jpg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="./assets/creative-startup/img/p1.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">Creative</h4>
                          <p className="p-hover-des">35 WP Anniversary</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="cbp-item mobile web">
                    <a
                      href="creative-startup/img/p2.jpg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="./assets/creative-startup/img/p2.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">Web Design</h4>
                          <p className="p-hover-des">35 WP Anniversary</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="cbp-item print logo development web mobile">
                    <a
                      href="creative-startup/img/p3.jpg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="./assets/creative-startup/img/p3.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">Logo Design</h4>
                          <p className="p-hover-des">35 WP Anniversary</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="cbp-item logo development">
                    <a
                      href="creative-startup/img/p4.jpg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="./assets/creative-startup/img/p4.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">Development</h4>
                          <p className="p-hover-des">35 WP Anniversary</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  id="js-loadMore-lightbox-gallery"
                  className="cbp-l-loadMore-button text-data wow fadeInUp"
                  data-wow-delay="650ms"
                >
                  <div className="row portfolio-foot-detail text-data-inner">
                    <div className="col-7 col-lg-4 offset-lg-6 text-left pl-4">
                      <span className="p-text">We've Completed More Then</span>
                      <h4 className="p-num">530</h4>
                      <span className="p-text">
                        Projects for Our amazing Clients
                      </span>
                    </div>
                    <div className="col-5 col-lg-2 d-flex justify-content-end align-items-center">
                      <button className="btn green-btn rounded-pill">
                        VIEW ALL<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
