import React from "react";

export default function Bi({ move }) {
  return (
    <>
      <section className="bi-section" id="slider-area">
        <div className="container-fluid position-relative bg-blue">
          {/* <div className="inner-bg-overlay "></div> */}
          <div className="container main">
            <div className="row my-5">
              <div className="text-light font-control col-12 col-lg-9  text-lg-left wow fadeInLeft">
                <h4 className="heading  ">
                  Where Great Brands <br /> Begin!
                </h4>
                <p>
                  Founded in 1993, Brand Institute (BI) was created on this
                  principle: provide the highest quality name development
                  services, produced and presented by the most experienced
                  professionals, in a timely manner, and at a competitive price.
                  As we strive to deliver industry-leading nomenclature
                  services, we are constantly adapting to our clients’ needs to
                  deliver greater value and successful outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container  padding-null py-5">
        <div className="row my-5 font-control ">
          <div className="text-light  col-12 col-lg-6 wow fadeInLeft">
            <div className="h-100  bg-yellow  justify-content-center p-5">
              <h4 className="heading ">Mission</h4>
              <p>
                To provide best-in-class strategy, name development, trademark
                screening, market/safety research and visual identity services
                to our valued, global clientele, delivered by 300+ of the most
                experienced and forward-thinking branding professionals in our
                industry.
              </p>
            </div>
          </div>
          <div className="text-yellow col-12 col-lg-6 wow fadeInRight">
            <div className="h-100  bg-white justify-content-center p-5">
              <h4 className="heading  text-yellow">Vision</h4>
              <p>
                To maintain and grow our leadership role in nomenclature and
                brand identity development by always listening and responding
                promptly to our client’s needs, fostering cross-functional
                “internal” team collaboration, advancing the quality of our
                services via in-house departmental experts, leading technology,
                and providing the industry’s most innovative, proven and
                results-driven methodology.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-white">
            <div className="col-12 font-control col-lg-12 h-100  p-5 bg-blue">
              <h4 className="heading  ">Brand Promise</h4>
              <p>
                To exceed our client’s expectations every day by providing the
                highest quality deliverables supported by outstanding service
                and unparalleled expertise, at an exceptional value; and to
                support our team of experts with the most sophisticated,
                leading-edge infrastructure, resulting in innovative, next
                generation nomenclature offerings, and a supportive working
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="team py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="mx-auto">
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="	https://www.brandinstitute.com/wp-content/uploads/2019/11/jd-new.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    James L. Dettore <br />
                    <h6>Chairman & CEO</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`divisional-leadership-team ${move ? "" : "d-none"}`}>
            <h4 className="text-center py-5">Divisional Leadership Team</h4>
            <div className="team-profile">
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/11/web-bill.jpg"
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <span className="card-text">
                    William Johnson <br />
                    <h6>Co-Chief Executive Officer & President</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="	https://www.brandinstitute.com/wp-content/uploads/2019/11/web-dave-2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    David Dettore
                    <br />
                    <h6>President, U.S. Western Division & Asia</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/11/web-courtney.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Courtney Kilroy <br />
                    <h6>Divisional President - Pacific Northwest</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/11/web-jerry-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Jerry Phillips <br />
                    <h6>President, Client Relations</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/11/web-brian-2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Brian Frasca
                    <br />
                    <h6>Divisional President, Midwestern U.S.</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`divisional-leadership-team mt-5 ${
              move ? "" : "d-none"
            }`}
          >
            <h4 className="text-center py-5">Divisional Operational Team</h4>
            <div className="team-profile">
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/Carlos-small.jpg"
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <span className="card-text">
                    Carlos Gomez <br /> <h6>Senior Vice President, IS</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/AMAURIS-small.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Amauris Diaz <br />
                    <h6>Senior Vice President, Visual Identity</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/Roly-small.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Rogelio Reyes, Esq. <br />
                    <h6>General Counsel</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="	https://www.brandinstitute.com/wp-content/uploads/2019/12/Mary1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Mary Lewis <br />
                    <h6>Senior Vice President, Professional Development</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/John-Can-small.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Can Celebican <br />
                    <h6>Senior Vice President, Business Development</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/scott-small.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Scott Piergrossi <br />
                    <h6>President, Creative</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="	https://www.brandinstitute.com/wp-content/uploads/2019/12/jguillen.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Juan Guillen <br />
                    <h6>Vice President, Visual Identity</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/ssuga.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Sanae Suga <br />
                    <h6>Vice President, Creative Nomenclature, Asia</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="	https://www.brandinstitute.com/wp-content/uploads/2019/12/jchaimberlain.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Jacqueline Chamberlain, Esq.
                    <br />
                    <h6>Vice President, Human Resources & Legal Affairs</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/alexa.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Alexa Lash <br />
                    <h6>Senior Vice President, Creative Nomenclature</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/cristina-small.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Cristina Milesi, Pharm.D. <br />
                    <h6>Vice President, Safety Research</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/alejandro-small.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Alejandro Bretana
                    <br />
                    <h6>Vice President, IT</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/Kathy-small.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Katherine Millan, MST <br />
                    <h6>Vice President, Finance</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/minnie.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Minnie Suh <br />
                    <h6>Director, Brand Strategy & Market Research</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/arotar.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Anamaria Rotar, CPA <br />
                    <h6>Vice President, Tax</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="	https://www.brandinstitute.com/wp-content/uploads/2019/12/joe.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Joe Bazerghi <br />
                    <h6>Vice President, Commercial Research & Strategy</h6>
                  </span>
                </div>
              </div>
              <div className="card wow bounceInUp" style={{ width: "18rem" }}>
                <img
                  src="https://www.brandinstitute.com/wp-content/uploads/2019/12/sanderson.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="card-text">
                    Steve Anderson <br />
                    <h6>Vice President, Trademarks & Brand Development</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
