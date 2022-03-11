import React from "react";

export default function Navbar() {
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
                      <a href="#">
                        <i className="las la-phone"></i> (305) 374-2500
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="las la-envelope"></i>{" "}
                        rsupport@brandinstitute.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 text-right">
                  <ul className="top-social-links">
                    <li>
                      <a
                        href="https://www.facebook.com/BrandInstituteInc"
                        className="link-holder fb"
                      >
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/BrandInstitute"
                        className="link-holder twit"
                      >
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG7eGIaSr-IDgAAAX93pangBl0_jO3f1AMh1z8pk5nO5FI1fq3a87l751sqopgsmB_xA5nJssq7K2Jk29Qu-xzPI579yUlhTWo8L8OT2zQYmQf-BRk5uL7XHUBx0ciLJlrnTfQ=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbrand-institute"
                        className="link-holder link-in"
                      >
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/brand_institute/"
                        className="link-holder insta"
                      >
                        <i className="lab la-instagram"></i>
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
                  <a
                    className="navbar-brand simple-nav-logo"
                    href="index-creative-startup.html"
                  >
                    <img
                      src="./assets/creative-startup/img/logo.png"
                      alt="logo"
                    />
                  </a>
                  <a
                    className="navbar-brand fixed-nav-logo"
                    href="index-creative-startup.html"
                  >
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
                          <a className="nav-link home" href="#">
                            HOME
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link scroll" href="#about-sec">
                            ABOUT
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link scroll"
                            href="#Services-Section "
                          >
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
                          <a className="nav-link scroll" href="#blog-sec">
                            PRESS ROOM
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link scroll" href="#contact-sec">
                            CONTACT
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <ul className="top-social-links fixed-nav-links">
                    <li>
                      <a href="#" className="link-holder fb">
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-holder twit">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-holder link-in">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link-holder insta">
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!--toggle btn--> */}
          <a
            href="javascript:void(0)"
            className="sidemenu_btn"
            id="sidemenu_toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
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
                  <a
                    href="index-creative-startup.html"
                    className="navbar-brand"
                  >
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
                        <a className="nav-link scroll" href="#home">
                          HOME
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#about-sec">
                          ABOUT
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link scroll"
                          href="#company-portfolio-section"
                        >
                          SERVICES
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#testimonial-sec">
                          EXPERIENCE
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#blog-sec">
                          PRESSROOM
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#contact-sec">
                          CONTACT
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-12 col-lg-4 d-flex align-items-center">
                  <div className="side-footer text-white w-100">
                    <div className="menu-company-details">
                      <span>+1 631 123 4567</span>
                      <span>email@website.com</span>
                    </div>
                    <ul className="social-icons-simple">
                      <li>
                        <a
                          className="facebook-text-hvr"
                          href="javascript:void(0)"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="instagram-text-hvr"
                          href="javascript:void(0)"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="instagram-text-hvr"
                          href="javascript:void(0)"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="instagram-text-hvr"
                          href="javascript:void(0)"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <p className="text-white">
                      &copy; 2020 MegaOne. Made With Love by Themesindustry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a id="close_side_menu" href="javascript:void(0);"></a>
      </header>
      {/* <!--Header End--> */}
    </>
  );
}
