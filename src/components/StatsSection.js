import React from "react";

export default function StatsSection() {
  return (
    <>
      <section className="stats-sec padding-top padding-bottom" id="stats-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 stats-heading-area text-center">
              <span className="sub-heading">Brand Institute is</span>
              <h4 className="heading">
                The global leader in healthcare naming!
              </h4>
              <p className="text">
                Including nonproprietary (USAN/INN) names, drug brand names,
                medical device names, OTC product names, and COVID-19 vaccines,
                repurposed drugs, and diagnostics! We name over 75% of
                nonproprietary (USAN/INN) and drug brand name approvals
                worldwide!
              </p>
            </div>
          </div>
          <div className="row circular-wrap text-center">
            <div className="col-12 col-lg-4 wow bounceIn">
              <div id="circle" className="circle" data-value="0.77">
                <h6 className="counter-num">1,064</h6>
              </div>
              <h4 className="darkcolor">Healthcare Clients</h4>
            </div>
            <div className="col-12 col-lg-4 wow bounceIn">
              <div id="circletwo" className="circle" data-value="0.96">
                <h6 className="counter-num">3,717</h6>
              </div>
              <h4 className="darkcolor"> Total Healthcare Names</h4>
            </div>
            <div className="col-12 col-lg-4 wow bounceIn">
              <div id="circlethree" className="circle" data-value="0.75">
                <h6 className="counter-num">1,159</h6>
              </div>
              <h4 className="darkcolor">USAN/INN Names</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
