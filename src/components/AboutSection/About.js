import React, { useState } from "react";
import Bi from "./Bi";
import Dsi from "./Dsi";

export default function About() {
  const [move, setMove] = useState(true);
  const Move = () => {
    setMove(!move);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <button onClick={Move} className="btn right-arrow">
        <i className={move ? "fa fa-angle-right" : "fa fa-angle-left"}></i>
      </button>
      <div className="bg-light overflow-hidden" id="About-sec">
        <div className={move ? "go-right " : "go-left"}>
          <div className="bi-dsi ">
            <div className="bi">
              <Bi />
            </div>
            <div className={`dsi ${move ? "opacity-9" : null}`}>
              <Dsi />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
