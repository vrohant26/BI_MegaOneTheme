import React from "react";

export default function PressRoom() {
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
                  BRAND INSTITUTE <span>NEWS AND ARTICLES</span>
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
                    2022
                  </div>
                  <div data-filter=".web" className="cbp-filter-item">
                    2021
                  </div>
                  <div data-filter=".logo" className="cbp-filter-item">
                    2020
                  </div>
                  <div data-filter=".mobile" className="cbp-filter-item">
                    2019
                  </div>
                  <div data-filter=".development" className="cbp-filter-item">
                    2018
                  </div>
                  <div data-filter=".development" className="cbp-filter-item">
                    Older
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-sec" id="blog-sec">
        <div className="left-overlay"></div>
        <div className="container position-relative">
          <div className="blog-inner-overlay"></div>
          <div className="row blog-area">
            <div className="col-12 col-lg-3 d-flex align-items-center  text-center text-lg-left">
              <div className="blog-detail  wow fadeInLeft">
                <h5 className="heading">All News</h5>
                <ul className="list-group">
                  <li className="listItem activeNews">Featured News</li>

                  <li className="listItem">Press Releases</li>

                  <li className="listItem">News Letters</li>

                  <li className="listItem">HBSHAA Virtual Round Table</li>

                  <li className="listItem">Brand Insights Blog</li>

                  <li className="listItem">Fact Sheet for Media</li>
                </ul>
                <a href="#" className="btn mt-5 anim-btn rounded-pill">
                  VIEW MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            {/* <div className="col-12 col-lg-6"> */}
            <div className="col-12 col-lg-9">
              <div className="blog-img wow fadeInRight">
                {/* <img
                  src="./assets/creative-startup/img/blog1.png"
                  alt="blog-img"
                /> */}
                <div className="articles">
                  <div className="news-card">
                    <div className="date">Feb 22, 2022</div>
                    <div className="title">
                      <h5>
                        Maxim Biomedical's ClearDetect™ COVID-19 Antigen Home
                        Test Receives Emergency Use Authorization (EUA) from the
                        U.S. FDA
                      </h5>
                    </div>
                    <div className="sub-text">
                      <p>
                        Brand Institute is proud to announce its successful
                        partnership with Maxim Biomedical (MaximBio) in naming
                        their MaximBio ClearDetect™ COVID-19 Antigen Home Test.
                      </p>
                    </div>
                  </div>
                  <div className="news-card">
                    <div className="date">Feb 22, 2022</div>
                    <div className="title">
                      <h5>
                        Maxim Biomedical's ClearDetect™ COVID-19 Antigen Home
                        Test Receives Emergency Use Authorization (EUA) from the
                        U.S. FDA
                      </h5>
                    </div>
                    <div className="sub-text">
                      <p>
                        Brand Institute is proud to announce its successful
                        partnership with Maxim Biomedical (MaximBio) in naming
                        their MaximBio ClearDetect™ COVID-19 Antigen Home Test.
                      </p>
                    </div>
                  </div>
                  <div className="news-card">
                    <div className="date">Feb 22, 2022</div>
                    <div className="title">
                      <h5>
                        Maxim Biomedical's ClearDetect™ COVID-19 Antigen Home
                        Test Receives Emergency Use Authorization (EUA) from the
                        U.S. FDA
                      </h5>
                    </div>
                    <div className="sub-text">
                      <p>
                        Brand Institute is proud to announce its successful
                        partnership with Maxim Biomedical (MaximBio) in naming
                        their MaximBio ClearDetect™ COVID-19 Antigen Home Test.
                      </p>
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
