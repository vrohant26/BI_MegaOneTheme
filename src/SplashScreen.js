import React from "react";
import logo from "./white-logo.png";

export default function SplashScreen() {
  return (
    <>
      <div className="splashscreen">
        <div className="row h-100">
          <div className="bg-blue col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img width={250} src={logo} alt="..." />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6  bg-white selectExperience">
            <h2 className="splashHeadding">
              BRAND INSTITUTE <br /> THE WORLD's NUMBER 1 NAMING COMPANY
            </h2>
            <div className="SplashButtons ">
              <h4 className="text-center splashHeadding my-4">
                Select Experience
              </h4>

              <a
                href="//localhost:3000/Healthcare/Home"
                className="btn anim-btn bg-blue rounded-pill mx-3"
                style={{ color: "white" }}
              >
                HEALTHCARE
                <span className="bg-yellow"></span>
                <span className="bg-yellow"></span>
                <span className="bg-yellow"></span>
                <span className="bg-yellow"></span>
              </a>

              <a
                href="/#"
                className="btn font-lg anim-btn bg-yellow rounded-pill mx-3"
                style={{ color: "white" }}
              >
                CONSUMER
                <span className="bg-blue"></span>
                <span className="bg-blue"></span>
                <span className="bg-blue"></span>
                <span className="bg-blue"></span>
              </a>
            </div>
            <div className="socials ">
              <div className="footer-social text-center text-lg-left mb-2">
                <ul className="list-unstyled">
                  Connect with us :
                  <li>
                    <a
                      href="/#"
                      className=" d-flex justify-content-center align-items-center wow fadeInDown"
                    >
                      <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
