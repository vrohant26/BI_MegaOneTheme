import React from "react";
import { Link } from "react-router-dom";
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
              <h4 className="text-center splashHeadding my-3">
                Select Experience
              </h4>

              <Link to="Healthcare/Home" className=" button button-blue mx-3">
                Healthcare
              </Link>

              <button className=" button-outline-blue button mx-3">
                Consumer
              </button>
            </div>
            <div className="socials ">
              <div className="footer-social text-center text-lg-left mb-2">
                <ul className="list-unstyled">
                  Connect with us :
                  <li>
                    <a
                      href="!#"
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
