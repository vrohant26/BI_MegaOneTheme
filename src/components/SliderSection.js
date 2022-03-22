import React from "react";

export default function SliderSection() {
  return (
    <>
      <section className="slider-area" id="slider-area">
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
                <img src="./assets/creative-startup/img/slide1.jpg" alt="..." />
              </div>
              <div className="img-slide">
                <img src="./assets/creative-startup/img/slide2.jpg" alt="..." />
              </div>
              <div className="img-slide">
                <img src="./assets/creative-startup/img/slide3.jpg" alt="..." />
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
      </section>

      <div className="container pt-9">
        <div class="approvals">
          <h4 className="heading">
            OUR 2021 Rx BRAND NAME / USAN / INN <br /> 75% SHARE OF MARKET
            APPROVALS WORLDWIDE
          </h4>

          <div class="countries  wow fadeInRight">
            <div class="box">
              <span>FDA</span>
              <img
                src="	https://www.brandinstitute.com/images/85-FDA.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="	https://www.brandinstitute.com/images/75-EMA.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="	https://www.brandinstitute.com/images/95-HC.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="	https://www.brandinstitute.com/images/74-JAPAN.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="https://www.brandinstitute.com/images/74-JAPAN.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="https://www.brandinstitute.com/images/74-ANVISA.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="https://www.brandinstitute.com/images/65-RUSSIA.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="https://www.brandinstitute.com/images/70-INDIA.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="https://www.brandinstitute.com/images/77-KOREA.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="	https://www.brandinstitute.com/images/73-USAN.jpg"
                alt="country"
              />
            </div>
            <div class="box">
              <span>FDA</span>
              <img
                src="https://www.brandinstitute.com/images/78-INN.jpg"
                alt="country"
              />
            </div>
          </div>
          <div class="desc">
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
      </div>

      <div className="container pt-9">
        <div class="approvals">
          <h4 className="heading">
            Brand Institute is proud to have partnered on 31 COVID-19 products
            including the following brands!
          </h4>

          <div class="partners   wow fadeInRight">
            <div class="partners-logo">
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
        </div>
      </div>
    </>
  );
}
