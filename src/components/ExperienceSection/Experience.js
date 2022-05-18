import React, { useState } from "react";
import { experience } from "../../Data";
import CountUp from "react-countup";

export default function Experience() {
  const [exp, setexp] = useState(experience[1]);
  // const [active, setActive] = useState(false);

  const healthcare = () => {
    // setbool(!bool);
    setexp(experience[0]);
  };
  const consumer = () => {
    // setbool(!bool);
    setexp(experience[1]);
  };

  const nonproprietary = () => {
    // setbool(!bool);
    setexp(experience[2]);
  };
  const covid = () => {
    // setbool(!bool);

    setexp(experience[3]);
  };

  return (
    <>
      <div className="slider-area overflow-clip" id="About-sec">
        {/* <div className={bool ? "go-right " : "go-left"}> */}
        {/* <div className="d-flex ">
          <div className="w-100">
            <ExperienceInfo
              healthcare={healthcare}
              consumer={consumer}
              bool={bool}
              info={exp[0]}
              stats={exp[1]}
            />
          </div>
          <div className="w-100">
              <ExperienceInfo
                healthcare={healthcare}
                consumer={consumer}
                bool={bool}
                info={exp[0]}
                stats={exp[1]}
              />
            </div>
        </div> */}
        <section className="bg-blue">
          <div className="container-fluid position-relative ">
            <div className="container main">
              <div className="container">
                <div className="dropdown-divider"></div>
                <div className="row my-3 text-white text-center">
                  <div className="col-lg-12">
                    <h4 className="card-heading">Select Experience</h4>
                    <ul id="myDIV" className="experience-submenu">
                      <li onClick={consumer}>Consumer</li>
                      <li onClick={healthcare}>Healthcare</li>
                      <li onClick={nonproprietary}>Non-Proprietary</li>
                      <li onClick={covid}>Covid-19</li>
                    </ul>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
              </div>
              <div className="row padding-top">
                <div className="text-light font-control col-12 col-lg-12 text-center wow fadeInLeft">
                  <h4 className="heading  ">{exp.Headline}</h4>
                  <p>{exp.SubTopic}</p>
                </div>
              </div>
              <div className="row text-light text-center">
                {exp.Stats?.map((stat) => {
                  return (
                    <div key={stat.Number} className="col-lg-4 my-5">
                      <h4 className="heading mb-2">
                        <CountUp
                          end={stat.Number}
                          separator={","}
                          duration={0.9}
                        />
                      </h4>
                      <h5>{stat.Topic}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="blog-sec my-5">
          <div className="left-overlay"></div>
          <div className="container position-relative">
            <div className="blog-inner-overlay"></div>
            <div className="row blog-area">
              <div className="col-12 col-lg-3 d-flex  justify-content-center text-center text-lg-left">
                <div className="blog-detail  wow fadeInLeft">
                  <h5 className="heading">Categories</h5>
                  <ul className="list-group">
                    <li className="listItem">
                      Animal Health -{" "}
                      <span style={{ color: "#1e3d7d" }}>27</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-9">
                <div className="blog-img wow fadeInRight">
                  <div className="articles">
                    <table className="table table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Client</th>
                          <th scope="col">Name</th>
                          <th scope="col">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* </div> */}
    </>
  );
}
