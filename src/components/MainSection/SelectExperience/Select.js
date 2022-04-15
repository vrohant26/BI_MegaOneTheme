import React, { useState, useRef } from "react";
import Consumer from "./Consumer";
import Coopid from "./Coopid";
import Healthcare from "./Healthcare";

export default function Select() {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const [healthcare, setHealthcare] = useState(true);
  // const [covid, setCovid] = React.useState(false);
  const [consumer, setConsumer] = useState(false);
  const [coopid, setCoopid] = useState(false);

  const ShowHealthcare = () => {
    setHealthcare(true);
    setConsumer(false);
    // setCovid(false);
    setCoopid(false);
    executeScroll();
  };

  const ShowConsumer = () => {
    setConsumer(true);
    setHealthcare(false);
    // setCovid(false);
    setCoopid(false);
    executeScroll();
  };
  const ShowCoopid = () => {
    setCoopid(true);
    setConsumer(false);
    setHealthcare(false);
    executeScroll();
    // setCovid(false);
  };

  return (
    <section className="about-sec mt-5" id="about-sec">
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

          <div
            ref={myRef}
            className="col-12 col-lg-7 about-area padding-top padding-bottom text-center text-lg-left"
          >
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
  );
}
