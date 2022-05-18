import React, { useEffect, useCallback } from "react";
import StatsSection from "../StatsSection";
import TeamSection from "../TeamSection";
import Services from "./SelectServices/Services";
import Select from "./SelectExperience/SelectExperience";

import ContactSection from "../ContactSection/ContactSection";
import CityList from "./Cities/CityList";

export default function SliderSection() {
  const AddLibrary = useCallback((urlOfTheLibrary) => {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    AddLibrary("/assets/creative-startup/js/script.js");
    return () => {
      AddLibrary("");
    };
  }, [AddLibrary]);

  return (
    <>
      <section className="slider-area" id="slider-area">
        <div className="bg-overlay"></div>
        <div className="container main position-relative ">
          <div className="inner-bg-overlay "></div>
          <div className="row mb-5">
            <div
              className="slider-detail col-12 col-lg-6 text-center  text-lg-left "
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
                    The global leader
                    <span>in healthcare naming!</span>
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
                    Lorem epsum
                    <span>lorem Epsum</span>
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
              className="slider-img col-12 col-lg-6  "
              data-wow-delay=".8s"
              data-depth="0.1"
            >
              <div className="img-slide">
                <img src="/assets/creative-startup/img/slide1.jpg" alt="..." />
              </div>
              <div className="img-slide">
                <img src="/assets/creative-startup/img/slide2.jpg" alt="..." />
              </div>
              <div className="img-slide">
                <img src="/assets/creative-startup/img/slide3.jpg" alt="..." />
              </div>
            </div>
          </div>
          <div className="slider-arrows">
            <button className="slider-arr slider-arr-up" id="slider-arr-up">
              <i className="fas fa-angle-up"></i>
            </button>
            <button className="slider-arr slider-arr-down" id="slider-arr-down">
              <i className="fas fa-angle-down"></i>
            </button>
          </div>
        </div>
        <CityList />
      </section>

      <Select />

      <div className="container pt-9 ">
        <div className="approvals">
          <h4 className="heading">
            OUR 2021 Rx BRAND NAME / USAN / INN <br /> 75% SHARE OF MARKET
            APPROVALS WORLDWIDE
          </h4>

          <div className="countries  wow fadeInRight">
            {/* <div className="row1 "> */}
            <div className="box">
              <span>FDA</span>
              <img
                src="/assets/creative-startup/img/85-FDA-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>EMA</span>
              <img
                src="/assets/creative-startup/img/75-EMA-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Health Canada</span>
              <img
                src="/assets/creative-startup/img/95-HC-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Japan's MHLW</span>
              <img
                src="/assets/creative-startup/img/74-JAPAN-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Anvisa</span>
              <img
                src="/assets/creative-startup/img/74-ANVISA-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Russia</span>
              <img
                src="/assets/creative-startup/img/65-RUSSIA-removebg-preview.png"
                alt="country"
              />
            </div>
            {/* </div> */}
            {/* <div className="row2   mb-3"> */}
            <div className="box">
              <span>India</span>
              <img
                src="/assets/creative-startup/img/70-India-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>China</span>
              <img
                src="/assets/creative-startup/img/74-China-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Korea</span>
              <img
                src="/assets/creative-startup/img/77-Korea-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>USAN</span>
              <img
                src="/assets/creative-startup/img/73-USAN-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>INN</span>
              <img
                src="/assets/creative-startup/img/78-INN-removebg-preview.png"
                alt="country"
              />
            </div>
            {/* </div> */}
          </div>
          <div className="desc">
            <p>
              Brand Institute is the global leader in brand name and identity
              development. We partner with clients across industries and develop
              some of the world’s most iconic brands.
              <br />
              <br />
              In addition to being the leader in Consumer and B2B naming, Brand
              Institute is also the leader in pharmaceutical/healthcare-related
              name development, partnering on over 75% of drug names approved
              worldwide in 2021, and holding a majority share of market for drug
              name approvals for 16 consecutive years.
            </p>
          </div>
        </div>
        <div className="divider mt-5"></div>
      </div>

      <div className="container pt-9">
        <div className="approvals">
          <h4 className="heading">
            Brand Institute is proud to have partnered on 31 COVID-19 products
            including the following brands!
          </h4>

          <div className="partners   wow fadeInRight">
            <div className="partners-logo">
              <img
                src="	https://www.brandinstitute.com/images/comirnaty.png"
                alt="logo"
              />
              <img
                src="https://www.brandinstitute.com/images/yeliva.jpg"
                alt="logo"
              />
              <img
                src="https://www.brandinstitute.com/images/remdesivir.jpg"
                alt="logo"
              />
              <img
                src="	https://www.brandinstitute.com/images/idnow.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="divider mt-5"></div>
      </div>

      <div className="position-relative pt-9">
        <div className="container">
          <div>
            <div className="row">
              <div className="james col-12 col-lg-4 d-flex justify-content-center align-items-center text-center text-lg-left">
                <img
                  src="	https://www.brandinstitute.com/wp-content/uploads/2019/12/JamesDettore_-e1575998517618.png"
                  alt="..."
                />
              </div>
              <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center">
                <img
                  src="https://www.brandinstitute.com/images/covid-19-message_.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="divider mt-5"></div>
        </div>
      </div>

      <StatsSection />
      <TeamSection />
      <Services />

      <section
        className="portfolio-sec  company-portfolio-section padding-top "
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
            <div className="col-12 col-lg-3 d-flex  justify-content-center text-center text-lg-left">
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
                <a href="!#" className="btn mt-5 anim-btn rounded-pill">
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
                  src="/assets/creative-startup/img/blog1.png"
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

      <ContactSection />
    </>
  );
}
