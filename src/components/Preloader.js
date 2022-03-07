import React from "react";

export default function Preloader() {
  return (
    <>
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
    </>
  );
}
