import React from "react";

import Healthcare from "./Healthcare";
import Consumer from "./Consumer";
import Coopid from "./Coopid";
import SponsersSection from "../SponsersSection";
import StatsSection from "../StatsSection";
import TeamSection from "../TeamSection";
import Services from "../Services";
// import TestimonialSection from "../TestimonialSection";
// import PressRoom from "../PressRoom";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

export default function SliderSection() {
  const [healthcare, setHealthcare] = React.useState(true);
  // const [covid, setCovid] = React.useState(false);
  const [consumer, setConsumer] = React.useState(false);
  const [coopid, setCoopid] = React.useState(false);

  const ShowHealthcare = () => {
    setHealthcare(true);
    setConsumer(false);
    // setCovid(false);
    setCoopid(false);
  };
  // const ShowCovid = () => {
  // setCovid(true);
  //   setCoopid(false);
  //   setConsumer(false);
  //   setHealthcare(false);
  // };
  const ShowConsumer = () => {
    setConsumer(true);
    setHealthcare(false);
    // setCovid(false);
    setCoopid(false);
  };
  const ShowCoopid = () => {
    setCoopid(true);
    setConsumer(false);
    setHealthcare(false);
    // setCovid(false);
  };

  return (
    <>
      <section className="slider-area" id="slider-area">
        <div className="bg-overlay"></div>
        <div className="container main position-relative ">
          <div className="inner-bg-overlay "></div>
          <div className="row mb-5">
            <div
              className="slider-detail col-12 col-lg-6 text-center  text-lg-left wow fadeInLeft"
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
              className="slider-img col-12 col-lg-6 wow fadeInRight "
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
        <div className="cities text-center">
          <a href="http://"> BASEL </a> | <a href="http://"> BOSTON </a> |
          <a href="http://"> CHICAGO </a> | <a href="http://"> DALLAS </a> |
          <a href="http://"> FRANKFURT </a> |<a href="http://"> LONDON </a> |
          <a href="http://"> LOS ANGELES </a> | <a href="http://"> MIAMI</a> |
          <a href="http://"> MONTREAL </a> | <a href="http://"> NEW YORK</a> |
          <a href="http://"> MUMBAI </a> <br /> <a href="http://"> OTTAWA </a> |
          <a href="http://"> RALEIGH-DURHAM </a> |
          <a href="http://"> ROCKVILLE </a> |
          <a href="http://"> SAN FRANCISCO </a> |
          <a href="http://"> SAN JUAN </a>| <a href="http://">SÃO PAULO </a> |
          <a href="http://"> SEOUL </a> |<a href="http://"> TOKYO </a> |
          <a href="http://"> TORONTO </a>
        </div>
      </section>
      <section className="about-sec " id="about-sec">
        <div className="about-overlay "></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 services-area padding-top padding-bottom">
              <div className="purple-overlay"></div>

              <div className="experience">
                <h4 className="text-center card-heading mb-5">
                  Select Therapeutic Category Experience
                </h4>
                <div className="row1">
                  <div className="experience-card mb-5">
                    <div onClick={ShowHealthcare} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/healthcare.png"
                          alt="..."
                          width={100}
                        />
                      </div>

                      <h4 className="card-heading">Healthcare</h4>
                    </div>
                    <div onClick={ShowHealthcare} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/mask.png"
                          alt="..."
                          width={100}
                        />
                      </div>
                      <h4 className="card-heading">Covid-19</h4>
                    </div>
                  </div>
                </div>
                <div className="row2 ">
                  <div className="experience-card mb-5">
                    <div onClick={ShowConsumer} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/people.png"
                          alt="..."
                          width={100}
                        />
                      </div>

                      <h4 className="card-heading">Consumer</h4>
                    </div>
                    <div onClick={ShowCoopid} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="./assets/creative-startup/img/office-building.png"
                          alt="..."
                          width={100}
                        />
                      </div>

                      <h4 className="card-heading">Corporate ID</h4>
                    </div>
                  </div>
                </div>
                <a href="!#" className="btn mt-5 anim-btn rounded-pill">
                  VIEW MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-7 about-area padding-top padding-bottom text-center text-lg-left">
              <div className="about-content wow fadeInRight">
                <div className="about-inner-content">
                  <div className="mb-5"></div>
                  {healthcare ? <Healthcare /> : null}
                  {consumer ? <Consumer /> : null}
                  {coopid ? <Coopid /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                src="./assets/creative-startup/img/85-FDA-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>EMA</span>
              <img
                src="./assets/creative-startup/img/75-EMA-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Health Canada</span>
              <img
                src="./assets/creative-startup/img/95-HC-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Japan's MHLW</span>
              <img
                src="./assets/creative-startup/img/74-JAPAN-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Anvisa</span>
              <img
                src="./assets/creative-startup/img/74-ANVISA-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Russia</span>
              <img
                src="./assets/creative-startup/img/65-RUSSIA-removebg-preview.png"
                alt="country"
              />
            </div>
            {/* </div> */}
            {/* <div className="row2   mb-3"> */}
            <div className="box">
              <span>India</span>
              <img
                src="./assets/creative-startup/img/70-India-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>China</span>
              <img
                src="./assets/creative-startup/img/74-China-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>Korea</span>
              <img
                src="./assets/creative-startup/img/77-Korea-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>USAN</span>
              <img
                src="./assets/creative-startup/img/73-USAN-removebg-preview.png"
                alt="country"
              />
            </div>
            <div className="box">
              <span>INN</span>
              <img
                src="./assets/creative-startup/img/78-INN-removebg-preview.png"
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
      <SponsersSection />
      <StatsSection />
      <TeamSection />
      <Services />
      {/* <PressRoom /> */}
      {/* <TestimonialSection /> */}

      {AddLibrary("./assets/creative-startup/js/script.js")}
    </>
  );
}
