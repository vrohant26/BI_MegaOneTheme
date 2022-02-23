function App() {
  return (
    <>
      {/* <!-- Preloader --> */}
      <div className="preloader">
        <div className="center">
          <div className="loader loader-32">
            <div className="loader-container">
              <div className="ball-wrapper">
                <div className="ball-holder">
                  <div className="ball"></div>
                </div>
                <div className="shadow"></div>
              </div>
              <div className="ball-wrapper">
                <div className="ball-holder">
                  <div className="ball"></div>
                </div>
                <div className="shadow"></div>
              </div>
              <div className="ball-wrapper">
                <div className="ball-holder">
                  <div className="ball"></div>
                </div>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Preloader End --> */}

      {/* <!--Header Start--> */}
      <header id="home">
        <div className="inner-header">
          {/* <!--colored-lines--> */}
          <div className="color-lines row no-gutters">
            <div className="col-4 bg-blue"></div>
            <div className="col-4 bg-black"></div>
            <div className="col-4 bg-yellow"></div>
          </div>
          {/* <!--upper-nav--> */}
          <div className="upper-nav">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <ul className="top-personal-info">
                    <li>
                      <a href="#">
                        <i className="las la-phone"></i> +1 631 123 4567
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="las la-envelope"></i> email@website.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 text-right">
                  <ul className="top-social-links">
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
                            href="#company-portfolio-section"
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
                          PORTFOLIO
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#testimonial-sec">
                          CLIENTS
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#blog-sec">
                          BLOG
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

      {/* <!--SLider sec start--> */}
      <section className="slider-area">
        <div className="bg-overlay"></div>
        <div className="container position-relative">
          <div className="inner-bg-overlay"></div>
          <div className="row">
            <div
              className="slider-detail col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
              data-wow-delay=".8s"
            >
              <div className="slider-slide">
                <div className="slider-inner-content">
                  <h4 className="slide-heading">
                    The World's <span>#1 Naming Company</span>
                  </h4>
                  <p className="slide-text">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy. Lorem Ipsum has been the industry’s standard dummy.
                  </p>
                  <a
                    href="#about-sec"
                    className="btn anim-btn rounded-pill scroll"
                  >
                    LEARN MORE <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
              <div className="slider-slide">
                <div className="slider-inner-content">
                  <h4 className="slide-heading">
                    MODREN <span>CREATIVE STUDIO</span>
                  </h4>
                  <p className="slide-text">
                    Lorem Ipsum has been the industry’s standard dummy. Lorem
                    ipsum is simply dummy text of the printing and typesetting.
                    Lorem Ipsum has been the industry’s standard dummy.
                  </p>
                  <a
                    href="#about-sec"
                    className="btn anim-btn rounded-pill scroll"
                  >
                    LEARN MORE <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
              <div className="slider-slide">
                <div className="slider-inner-content">
                  <h4 className="slide-heading">
                    STARTUP <span>MODERN WORKS</span>
                  </h4>
                  <p className="slide-text">
                    Lorem Ipsum has been the industry’s standard dummy. Lorem
                    Ipsum has been the industry’s standard dummy. Lorem ipsum is
                    simply dummy text of the printing and typesetting.
                  </p>
                  <a
                    href="#about-sec"
                    className="btn anim-btn rounded-pill scroll"
                  >
                    LEARN MORE <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="slider-img col-12 col-lg-6 wow fadeInRight"
              data-wow-delay=".8s"
              data-depth="0.1"
            >
              <div className="img-slide">
                <img src="./assets/creative-startup/img/slide1.jpg" />
              </div>
              <div className="img-slide">
                <img src="./assets/creative-startup/img/slide2.jpg" />
              </div>
              <div className="img-slide">
                <img src="./assets/creative-startup/img/slide3.jpg" />
              </div>
            </div>
          </div>
          <div className="slider-arrows">
            <a
              href="javascript:void(0);"
              className="slider-arr slider-arr-up"
              id="slider-arr-up"
            >
              <i className="fas fa-angle-up"></i>
            </a>
            <a
              href="javascript:void(0);"
              className="slider-arr slider-arr-down"
              id="slider-arr-down"
            >
              <i className="fas fa-angle-down"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <!--SLider sec End--> */}

      {/* <!--About sec start--> */}
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
                    WE ARE <span>DIGITAL AGENCY</span>
                  </h4>
                  <p className="text">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy. Lorem Ipsum has been the industry’s standard dummy.
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy. Lorem Ipsum has been the industry’s standard dummy.
                  </p>
                  <p className="text">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry’s standard
                    dummy. Lorem Ipsum has been the industry’s standard dummy.
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
      {/* <!--About sec End--> */}

      {/* <!--Stats sec start--> */}
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
      {/* <!--Stats sec End--> */}

      {/* <!--Team sec start--> */}
      <section className="team-sec position-relative" id="team-sec">
        <div className="left-overlay"></div>
        <div className="container">
          <div className="row inner-team-sec padding-top padding-bottom">
            <div className="col-12 col-lg-4 text-center text-lg-left">
              <div className="team-detail wow fadeInLeft">
                <h4 className="heading">
                  WE HAVE <span>AMAZING TEAM</span>
                </h4>
                <p className="text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="team-area wow fadeInRight">
                <div className="row no-gutters team-carousel owl-carousel owl-theme">
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img src="./assets/creative-startup/img/team1.jpg" />
                        <div className="overlay d-flex justify-content-center align-items-center">
                          {/* <!--Team Social--> */}
                          <ul className="team-social">
                            <li>
                              <a
                                className="facebook-text-hvr"
                                href="javascript:void(0);"
                              >
                                <i
                                  className="lab la-facebook-f"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="twitter-text-hvr"
                                href="javascript:void(0);"
                              >
                                <i
                                  className="lab la-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="instagram-text-hvr"
                                href="javascript:void(0);"
                              >
                                <i
                                  className="lab la-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="pinterest-text-hvr"
                                href="javascript:void(0);"
                              >
                                <i
                                  className="lab la-pinterest-p"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">Eden Wooderburg</h4>
                        <p className="team-designation">Creative Head</p>
                      </div>
                    </div>
                  </div>
                  <div className="item text-center">
                    <div className="team-box">
                      <div className="img-holder position-relative">
                        <img src="./assets/creative-startup/img/team2.jpg" />
                        <div className="overlay d-flex justify-content-center align-items-center">
                          {/* <!--Team Social--> */}
                          <ul className="team-social">
                            <li>
                              <a
                                className="facebook-text-hvr"
                                href="javascript:void(0);"
                              >
                                <i
                                  className="lab la-facebook-f"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="twitter-text-hvr"
                                href="javascript:void(0);"
                              >
                                <i
                                  className="lab la-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="instagram-text-hvr"
                                href="javascript:void(0);"
                              >
                                <i
                                  className="lab la-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="pinterest-text-hvr"
                                href="javascript:void(0);"
                              >
                                <i
                                  className="lab la-pinterest-p"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">Angelo Walking</h4>
                        <p className="team-designation">Design Lead</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="javascript:void(0);"
                  className="team-nav team-prev"
                  id="team-prev"
                >
                  <i className="fas fa-angle-left"></i>
                </a>
                <a
                  href="javascript:void(0);"
                  className="team-nav team-next"
                  id="team-next"
                >
                  <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Team sec End--> */}

      {/* <!--portfolio section start--> */}
      <section
        className="portfolio-sec company-portfolio-section padding-top"
        id="company-portfolio-section"
      >
        <div className="container">
          <div className="section-heading">
            <div className="row">
              <div
                className="col-lg-6 wow fadeInUp text-center text-lg-left"
                data-wow-delay="300ms"
              >
                <h4 className="heading">
                  OUR <span>AMAZING PORTFOLIO</span>
                </h4>
              </div>
              <div className="col-md-12 pt-5">
                <div
                  id="js-filters-mosaic"
                  className="cbp-l-filters-button wow fadeInUp text-center text-lg-left"
                  data-wow-delay="350ms"
                >
                  <div
                    data-filter="*"
                    className="cbp-filter-item-active cbp-filter-item"
                  >
                    ALL
                  </div>
                  <div data-filter=".web" className="cbp-filter-item">
                    WEB DESIGN
                  </div>
                  <div data-filter=".logo" className="cbp-filter-item">
                    LOGO DESIGN
                  </div>
                  <div data-filter=".mobile" className="cbp-filter-item">
                    MOBILE APP
                  </div>
                  <div data-filter=".development" className="cbp-filter-item">
                    DEVELOPMENT
                  </div>
                </div>

                <div id="js-grid-mosaic" className="cbp cbp-l-grid-mosaic">
                  <div className="cbp-item web logo">
                    <a
                      href="creative-startup/img/p1.jpg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="./assets/creative-startup/img/p1.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">Creative</h4>
                          <p className="p-hover-des">35 WP Anniversary</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="cbp-item mobile web">
                    <a
                      href="creative-startup/img/p2.jpg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="./assets/creative-startup/img/p2.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">Web Design</h4>
                          <p className="p-hover-des">35 WP Anniversary</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="cbp-item print logo development web mobile">
                    <a
                      href="creative-startup/img/p3.jpg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="./assets/creative-startup/img/p3.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">Logo Design</h4>
                          <p className="p-hover-des">35 WP Anniversary</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="cbp-item logo development">
                    <a
                      href="creative-startup/img/p4.jpg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="./assets/creative-startup/img/p4.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span></span>
                          <span></span>
                        </div>
                        <div className="hover-text">
                          <h4 className="p-hover-title">Development</h4>
                          <p className="p-hover-des">35 WP Anniversary</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  id="js-loadMore-lightbox-gallery"
                  className="cbp-l-loadMore-button text-data wow fadeInUp"
                  data-wow-delay="650ms"
                >
                  <div className="row portfolio-foot-detail text-data-inner">
                    <div className="col-7 col-lg-4 offset-lg-6 text-left pl-4">
                      <span className="p-text">We've Completed More Then</span>
                      <h4 className="p-num">530</h4>
                      <span className="p-text">
                        Projects for Our amazing Clients
                      </span>
                    </div>
                    <div className="col-5 col-lg-2 d-flex justify-content-end align-items-center">
                      <button className="btn green-btn rounded-pill">
                        VIEW ALL<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--portfolio section end--> */}

      {/* <!--testimonial section start--> */}
      <div
        className="testimonial-sec padding-top position-relative"
        id="testimonial-sec"
      >
        <div className="right-overlay"></div>
        <div className="container">
          <div className="testimonial-area padding-top padding-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center text-center text-lg-left">
                  <div className="testimonial-details wow fadeInLeft">
                    <h4 className="heading">
                      SATISFIED <span>CUSTOMERS</span>
                    </h4>
                    <p className="text">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting. Lorem Ipsum has been the industry’s standard
                      dummy.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-1">
                  <div className="testimonial-carousel wow fadeInRight">
                    <div className="testimonial-box owl-carousel owl-theme">
                      <div className="item text-center">
                        <div className="icon-holder">
                          <i className="fas fa-quote-right"></i>
                        </div>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce vitae egestas mi, vel dapibus diam. Mauris
                          malesuada, nisl non rutrum commodo, sem magna laoreet
                          tellus, eu euismod dolor enim et mi. In at tempor
                          purus.
                        </p>
                        <div className="img-holder">
                          <img src="./assets/creative-startup/img/test1.jpg" />
                        </div>
                        <h4 className="user-name">Sara Williams</h4>
                      </div>
                      <div className="item text-center">
                        <div className="icon-holder">
                          <i className="fas fa-quote-right"></i>
                        </div>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce vitae egestas mi, vel dapibus diam. Mauris
                          malesuada, nisl non rutrum commodo, sem magna laoreet
                          tellus, eu euismod dolor enim et mi. In at tempor
                          purus.
                        </p>
                        <div className="img-holder">
                          <img src="./assets/creative-startup/img/test2.jpg" />
                        </div>
                        <h4 className="user-name">Julia Miltese</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--testimonial section end--> */}

      {/* <!--sponsers section start--> */}
      <div className="sponser-sec padding-top" id="sponser-sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sponser-tags owl-carousel owl-theme">
                <div className="item">
                  <img src="./assets/creative-startup/img/brand4.png" />
                </div>
                <div className="item">
                  <img src="./assets/creative-startup/img/brand4.png" />
                </div>
                <div className="item">
                  <img src="./assets/creative-startup/img/brand4.png" />
                </div>
                <div className="item">
                  <img src="./assets/creative-startup/img/brand4.png" />
                </div>
                <div className="item">
                  <img src="./assets/creative-startup/img/brand4.png" />
                </div>
                <div className="item">
                  <img src="./assets/creative-startup/img/brand4.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--sponsers section end--> */}

      {/* <!--Blogs section start--> */}
      <section className="blog-sec" id="blog-sec">
        <div className="left-overlay"></div>
        <div className="container position-relative">
          <div className="blog-inner-overlay"></div>
          <div className="row blog-area">
            <div className="col-12 col-lg-5 d-flex align-items-center text-center text-lg-left">
              <div className="blog-detail wow fadeInLeft">
                <h4 className="heading">
                  LATEST <span>DESIGN BLOGS</span>
                </h4>
                <p className="text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy.
                </p>
                <a
                  className="btn anim-btn rounded-pill"
                  href="creative-startup/standard-blog.html"
                >
                  LEARN MORE <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="blog-img wow fadeInRight">
                <img
                  src="./assets/creative-startup/img/blog1.png"
                  alt="blog-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Blogs section end--> */}

      {/* <!--Contact section start--> */}
      <section
        className="contact-sec padding-top padding-bottom"
        id="contact-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <h4 className="heading text-center text-lg-left">GET IN TOUCH</h4>
              <form
                className="row contact-form wow fadeInLeft"
                id="contact-form-data"
              >
                <div className="col-sm-12" id="result"></div>
                <div className="col-12 col-md-5">
                  <input
                    type="text"
                    name="userName"
                    placeholder="Your Name"
                    className="form-control"
                  />
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="Email Address *"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="userSubject"
                    placeholder="Subject"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-md-7">
                  <textarea
                    className="form-control"
                    name="userMessage"
                    placeholder="Your Message"
                    rows="6"
                  ></textarea>
                </div>
                <div className="col-12">
                  <a
                    href="javascript:void(0);"
                    className="btn purple-btn rounded-pill w-100 contact_btn"
                  >
                    <i
                      className="fa fa-spinner fa-spin mr-2 d-none"
                      aria-hidden="true"
                    ></i>
                    Send Message <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-5 text-center text-lg-left position-relative">
              <div className="contact-details wow fadeInRight">
                <h4 className="heading">OUR LOCATION</h4>
                <p className="text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered .
                </p>
                <ul>
                  <li>
                    <i className="las la-map-marker addr"></i>123 Park Avenue,
                    New York, United States
                  </li>
                  <li>
                    <i className="las la-phone-volume phone"></i>
                    <span>+1 631 1234 5678</span>
                    <span>+1 631 1234 5678</span>
                  </li>
                  <li>
                    <i className="las la-paper-plane email"></i>
                    email@website.com
                  </li>
                </ul>
              </div>
              <img
                src="./assets/creative-startup/img/contact-background.png"
                className="contact-background"
                alt="contact"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--Contact section end--> */}

      {/* <!--colored-lines--> */}
      <div className="color-lines row no-gutters">
        <div className="col-4 bg-red"></div>
        <div className="col-4 bg-purple"></div>
        <div className="col-4 bg-green"></div>
      </div>
      {/* <!--Footer Start--> */}
      <footer className="footer-style-1">
        <div className="container">
          <div className="row align-items-center">
            {/* <!--Social--> */}
            <div className="col-lg-6">
              <div className="footer-social text-center text-lg-left">
                <ul className="list-unstyled">
                  <li>
                    <a className="wow fadeInUp" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInUp" href="javascript:void(0);">
                      <i
                        aria-hidden="true"
                        className="fab fa-google-plus-g"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInUp" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="javascript:void(0);">
                      <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Text--> */}
            <div className="col-lg-6 text-center text-lg-right">
              <p className="company-about fadeIn">
                © 2020 MegaOne. Made With Love By
                <a href="javascript:void(0);">Themesindustry</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--Footer End--> */}

      {/* <!--Scroll Top Start--> */}
      <span className="scroll-top-arrow">
        <i className="fas fa-angle-up"></i>
      </span>
      {/* <!--Scroll Top End--> */}
    </>
  );
}

export default App;
