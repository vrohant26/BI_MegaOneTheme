import React from "react";

export default function AboutSection() {
  return (
    <>
      <section className="about-sec" id="about-sec">
        <div className="about-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 services-area padding-top padding-bottom">
              <div className="purple-overlay"></div>
              <div className="row no-gutters wow fadeInLeft">
                <div className="col-12 col-lg-6 services text-center">
                  <div className="service-card">
                    <div className="icon-holder">
                      <i className="lni lni-briefcase"></i>
                    </div>
                    <h4 className="card-heading">Make Business</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 services text-center">
                  <div className="service-card">
                    <div className="icon-holder">
                      <i className="lni lni-bulb"></i>
                    </div>
                    <h4 className="card-heading">Agency Ideas</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 services text-center">
                  <div className="service-card">
                    <div className="icon-holder">
                      <i className="lni lni-heart"></i>
                    </div>
                    <h4 className="card-heading">Our Hardwork</h4>
                  </div>
                </div>
                <div className="col-12 col-lg-6 services text-center">
                  <div className="service-card">
                    <div className="icon-holder">
                      <i className="las la-wallet"></i>
                    </div>
                    <h4 className="card-heading">Make Money</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 about-area padding-top padding-bottom text-center text-lg-left">
              <div className="about-content wow fadeInRight">
                <div className="about-inner-content">
                  <h4 className="heading">
                    Where Great Brands<span> Begin!</span>
                  </h4>
                  <p className="text">
                    Founded in 1993, Brand Institute (BI) was created on this
                    principle: provide the highest quality name development
                    services, produced and presented by the most experienced
                    professionals, in a timely manner, and at a competitive
                    price. As we strive to deliver industry-leading nomenclature
                    services, we are constantly adapting to our clients’ needs
                    to deliver greater value and successful outcomes.
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
      {/* test  */}
      <section className="blog-sec" id="">
        <div className="left-overlay"></div>
        <div className="container position-relative">
          <div className="blog-inner-overlay"></div>
          <div className="row blog-area">
            <div className="col-12 col-lg-5 d-flex align-items-center text-center text-lg-left">
              <div className="blog-detail wow fadeInLeft">
                <h4 className="heading">
                  Our<span>Mission</span>
                </h4>
                <p className="text">
                  To provide best-in-class strategy, name development, trademark
                  screening, market/safety research and visual identity services
                  to our valued, global clientele, delivered by 300+ of the most
                  experienced and forward-thinking branding professionals in our
                  industry.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="blog-img wow bg-gray fadeInRight">
                <h4 className="heading">
                  Our<span>Vision</span>
                </h4>
                <p className="text">
                  To maintain and grow our leadership role in nomenclature and
                  brand identity development by always listening and responding
                  promptly to our client’s needs, fostering cross-functional
                  “internal” team collaboration, advancing the quality of our
                  services via in-house departmental experts, leading
                  technology, and providing the industry’s most innovative,
                  proven and results-driven methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
