import React from "react";

export default function StatsSection() {
  return (
    <>
      <section className="stats-sec padding-top padding-bottom" id="stats-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 stats-heading-area text-center">
              <span className="sub-heading">
                Lorem ipsum is simply dummy text{" "}
              </span>
              <h4 className="heading">AGENCY STATS & FACTS</h4>
              <p className="text">
                Lorem ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum has been the industry’s standard dummy.
                Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum
                is simply dummy text of the printing and typesetting.
              </p>
            </div>
          </div>
          <div className="row circular-wrap text-center">
            <div className="col-12 col-lg-4 wow bounceIn">
              <div id="circle" className="circle" data-value="0.77">
                <h6 className="counter-num">257%</h6>
              </div>
              <h4 className="darkcolor">Increase in Sales year on year</h4>
            </div>
            <div className="col-12 col-lg-4 wow bounceIn">
              <div id="circletwo" className="circle" data-value="0.96">
                <h6 className="counter-num">96%</h6>
              </div>
              <h4 className="darkcolor">Recommendation rate over the year</h4>
            </div>
            <div className="col-12 col-lg-4 wow bounceIn">
              <div id="circlethree" className="circle" data-value="0.75">
                <h6 className="counter-num">317%</h6>
              </div>
              <h4 className="darkcolor">New ventures we became part of</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
