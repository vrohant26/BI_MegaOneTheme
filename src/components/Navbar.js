import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const date = new Date().getFullYear();
  return (
    <>
      {/* <!--Header Start--> */}
      <header id="home">
        <div className="inner-header">
          {/* <!--colored-lines--> */}
          <div className="color-lines row no-gutters">
            <div className="col-4 bg-blue"></div>
            <div className="col-4 bg-blue"></div>
            <div className="col-4 bg-blue"></div>
          </div>
          {/* <!--upper-nav--> */}
          <div className="upper-nav">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <ul className="top-personal-info">
                    <li>
                      <a href="!#">
                        <i className="las la-phone"></i> +1 305 374 2500
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <i className="las la-envelope"></i>
                        press@brandinstitute.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 text-right">
                  <ul className="top-social-links">
                    <li>Connect With Us : </li>
                    <li>
                      <a href="!#" className="link-holder link-in">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!--main nav--> */}
          <div className="main-navigation">
            <div className="container">
              <div className="row">
                <div className="col-4 col-lg-3">
                  <a className="navbar-brand simple-nav-logo" href="/">
                    <img
                      src="./assets/creative-startup/img/BiLogo.png"
                      alt="logo"
                      width={180}
                    />
                  </a>
                  <a className="navbar-brand fixed-nav-logo" href="/">
                    <img
                      src="./assets/creative-startup/img/logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="col-8 col-lg-9 simple-navbar">
                  <nav className="navbar navbar-expand-lg">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <Link to="/" className="nav-link home">
                            HOME
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="About" className="nav-link scroll">
                            ABOUT
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link scroll" href="#about-sec">
                            SERVICES
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link scroll"
                            href="#testimonial-sec"
                          >
                            EXPERIENCE
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link scroll" to="PressRoom">
                            PRESS ROOM
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link scroll" to="Contact">
                            CONTACT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  {/* <ul className="top-social-links fixed-nav-links">
                    <li>
                      <a href="!#" className="link-holder fb">
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="link-holder twit">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="link-holder link-in">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#" className="link-holder insta">
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!--toggle btn--> */}
          <span className="sidemenu_btn" id="sidemenu_toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        {/* <!--Side Nav--> */}
        <div className="side-menu hidden side-menu-opacity">
          <div className="bg-overlay"></div>
          <div className="inner-wrapper">
            <span className="btn-close" id="btn_sideNavClose">
              <i></i>
              <i></i>
            </span>
            <div className="container">
              <div className="row w-100 side-menu-inner-content">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <a href="/" className="navbar-brand">
                    <img
                      src="./assets/creative-startup/img/white-logo.png"
                      alt="logo"
                      width={150}
                    />
                  </a>
                </div>
                <div className="col-12 col-lg-8">
                  <nav className="side-nav w-100">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/" className="nav-link scroll">
                          HOME
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="About" className="nav-link scroll">
                          ABOUT
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link  scroll" href="#about-sec">
                          SERVICES
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#testimonial-sec">
                          EXPERIENCE
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link to="PressRoom" className="nav-link scroll">
                          PRESS ROOM
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="Contact" className="nav-link scroll">
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-12 col-lg-4 d-flex align-items-center">
                  <div className="side-footer text-white w-100">
                    <div className="menu-company-details">
                      <span>+1 305 374 2500 </span>
                      <span>press@brandinstitute.com</span>
                    </div>
                    <ul className="social-icons-simple mb-3">
                      <p> Connect with us : </p>
                      <li>
                        <a href="!#" className="link-holder link-in">
                          <i className="lab la-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="text-white">© {date} Brand Institute Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="close_side_menu"></button>
      </header>
      {/* <!--Header End--> */}
    </>
  );
}
