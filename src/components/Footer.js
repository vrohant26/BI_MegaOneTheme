import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="color-lines mt-5  row no-gutters">
        <div className="col-4 bg-blue"></div>
        <div className="col-4 bg-blue"></div>
        <div className="col-4 bg-blue"></div>
      </div>

      <footer className="my-5">
        {/* <div className="divider  mb-5"></div> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!--Social--> */}
            <div className="col-lg-3">
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
            <div className="col-lg-5">
              <div className="footer-text text-center ">
                <ul>
                  <li>Careers</li>
                  <li>Member Services</li>
                  <li>Press</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>

            {/* <!--Text--> */}
            <div className="col-lg-4 text-center text-lg-right">
              <p className="company-about fadeIn">
                © {date} Brand Institute Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
