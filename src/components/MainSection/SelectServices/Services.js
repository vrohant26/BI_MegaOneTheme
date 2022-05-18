import React, { useState, useRef } from "react";
import ServicesInfo from "./ServicesInfo";
import { services } from "../../../Data";

export default function Services() {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [sendData, setsendData] = useState(services[0]);

  const brandstrategy = () => {
    setsendData(services[0]);
    executeScroll();
  };

  const cnd = () => {
    setsendData(services[1]);
    executeScroll();
  };

  const marketresearch = () => {
    setsendData(services[2]);
    executeScroll();
  };

  const regulatory = () => {
    setsendData(services[3]);
    executeScroll();
  };

  const trademark = () => {
    setsendData(services[4]);
    executeScroll();
  };

  const visualidentity = () => {
    setsendData(services[5]);
    executeScroll();
  };

  return (
    <>
      <section className="about-sec " id="services-sec">
        <div className="about-overlay "></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 services-area padding-top padding-bottom">
              <div className="purple-overlay"></div>

              <div className="experience">
                <h4 className="text-center card-heading mb-5">
                  Select Services
                </h4>
                <div className="row1">
                  <div className="experience-card mb-5">
                    <div onClick={brandstrategy} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="/assets/creative-startup/img/lightbulb.png"
                          alt="..."
                          width={80}
                        />
                      </div>

                      <h4 className="card-heading1 ">Brand Stategy</h4>
                    </div>
                    <div onClick={cnd} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="/assets/creative-startup/img/growth.png"
                          alt="..."
                          width={80}
                        />
                      </div>
                      <h4 className="card-heading1">
                        Creative <br /> Nomenclature <br /> Development
                      </h4>
                    </div>
                    <div onClick={marketresearch} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="/assets/creative-startup/img/research.png"
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
                    <div onClick={regulatory} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="/assets/creative-startup/img/engineering.png"
                          alt="..."
                          width={80}
                        />
                      </div>

                      <h4 className="card-heading1">Regulatory</h4>
                    </div>
                    <div onClick={trademark} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="/assets/creative-startup/img/trademark.png"
                          alt="..."
                          width={80}
                        />
                      </div>

                      <h4 className="card-heading1">Trademarks</h4>
                    </div>
                    <div onClick={visualidentity} className="service-card">
                      <div className="icon-holder">
                        <img
                          src="/assets/creative-startup/img/face-detection.png"
                          alt="..."
                          width={80}
                        />
                      </div>

                      <h4 className="card-heading1">Visual Identity</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={myRef}
              className="col-12  col-lg-6 about-area  text-center text-lg-left"
            >
              <ServicesInfo data={sendData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
