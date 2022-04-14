import React from "react";
import Bi from "./Bi";
import Dsi from "./Dsi";

export default function About({ toggle, move }) {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <button
        onClick={toggle}
        className={`${
          move
            ? "right-arrow right-arrow-position"
            : "left-arrow left-arrow-position"
        } btn d-flex justify-content-center align-items-center`}
      >
        <i className="fa fa-angle-right"></i>
      </button>

      <div className="slider-area overflow-clip" id="About-sec">
        <div className="bg-light">
          <div className={move ? "go-right " : "go-left"}>
            <div className="bi-dsi ">
              <div className="bi">
                <Bi />
              </div>
              <div className="dsi">
                <Dsi />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
