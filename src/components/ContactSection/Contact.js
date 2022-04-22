import React from "react";

export default function Contact() {
  return (
    <>
      <h4 className="heading">Brand Institute Global Offices</h4>
      <p className="text">
        Not sure which office to contact? Select your country from the menu
        below and we'll let you know!
      </p>
      <select defaultValue={"DEFAULT"} className="select">
        <option value="DEFAULT" disabled hidden>
          --Select Country--
        </option>
      </select>

      <img
        src="./assets/creative-startup/img/contact-background.png"
        className="contact-background"
        alt="contact"
      />
    </>
  );
}
