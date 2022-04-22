import React, { useState, useEffect } from "react";
import { Cities } from "../../../Data";
import { useParams, useNavigate } from "react-router";
import LeaveaMessage from "../../ContactSection/LeaveaMessage";

export default function CityInfo() {
  const { cityname } = useParams();
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const [Place, setPlace] = useState({});
  const [disp, setdisp] = useState(false);

  useEffect(() => {
    const City = Cities.find((name) => name.cityname === cityname.toString());

    setPlace({
      img: City.img,
      name: City.cityname,
      address: City.address,
      phone: City.phone,
      email: City.email,
      team: City.team,
    });

    if (City.team === "") {
      setdisp(true);
    }

    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [cityname]);

  return (
    <>
      <section className="slider-area" id="slider-area">
        <div className="bg-overlay"></div>
        <div className="container main position-relative ">
          <div className="inner-bg-overlay "></div>

          <div className="row mb-5">
            <div
              className="slider-detail col-12 col-lg-5 text-center  text-lg-left wow fadeInLeft"
              data-wow-delay=".8s"
            >
              <div className="slider-slide w-100 ">
                <div className="slider-inner-content">
                  <h4 className="slide-heading">{Place.name}</h4>
                  <h5 className="text-yellow">Address :</h5>
                  <p className="slide-text">{Place.address}</p>
                  <h5 className="text-yellow">Call us directly :</h5>
                  <p className="slide-text">{Place.phone}</p>
                  <h5 className="text-yellow">Contact us directly :</h5>
                  <p className="slide-text">{Place.email}</p>

                  <h5
                    className={`meet-team text-yellow ${
                      disp ? "display-none" : "display-block"
                    }`}
                    onClick={() => {
                      window.open(`${Place.team}`);
                    }}
                  >
                    Meet the Team
                  </h5>

                  <button
                    onClick={() => navigate(-1)}
                    className="btn mt-5 anim-btn rounded-pill scroll"
                  >
                    Back <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="slider-img col-12 col-lg-7  wow fadeInRight">
              <div className="img-slide">
                {loading ? (
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <img src={Place.img} alt={Place.name} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="padding-top container contact-sec">
        <LeaveaMessage />
      </div>
      <div className="container contact-sec padding-top padding-bottom">
        <div className=" row wow fadeInLeft">
          <div className="w-100  text-center text-lg-left  justify-content-center">
            <h4 className="heading ">Looking for more ?</h4>
            <div className="row">
              <div className="col-lg-4 mb-5">
                <h5 className="text-yellow">Press Enquiries</h5> <br />
                <p
                  onClick={() =>
                    (window.location.href = "mailto:press@brandinstitute.com")
                  }
                  className="slide-text looking"
                >
                  press@brandinstitute.com
                </p>
              </div>
              <div className="col-lg-4 mb-5">
                <h5 className="text-yellow ">Work at Brand Institute</h5>
                <br />
                <p
                  onClick={() =>
                    window.open("http://brandinstituteinc.appone.com/")
                  }
                  className="slide-text looking"
                >
                  See our current openings
                </p>
              </div>
              <div className="col-lg-4">
                <div className="footer-social ">
                  <ul className="list-unstyled">
                    <span className="text-yellow mb-3 h5">Add us on :</span>
                    <br />

                    <li>
                      <a
                        href="!#"
                        className=" d-flex justify-content-center align-items-center wow fadeInDown"
                      >
                        <i
                          aria-hidden="true"
                          className="fab fa-linkedin-in"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
