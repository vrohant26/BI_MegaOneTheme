import React from "react";

export default function Contact() {
  return (
    <>
      <div className="col-12 col-lg-6 text-center text-lg-left position-relative">
        <div className="contact-details  wow fadeInRight">
          <h4 className="heading">Brand Institute Global Offices</h4>
          <p className="text">
            Not sure which office to contact? Select your country from the menu
            below and we'll let you know!
          </p>
          <select className="select">
            <option value="" disabled selected hidden>
              --Select Country--
            </option>
          </select>
        </div>
        <img
          src="./assets/creative-startup/img/contact-background.png"
          className="contact-background"
          alt="contact"
        />
      </div>
    </>
  );
}
