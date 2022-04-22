import React from "react";

export default function ServicesInfo({ data }) {
  const { heading, description } = data;
  return (
    <div key={heading} className="about-content wow fadeInRight">
      <div className="about-inner-content ">
        <span className="mb-5"></span>
        <h4 className="heading">{heading}</h4>
        <p className="text">{description}</p>
        <a href="#about-sec" className="btn anim-btn rounded-pill">
          READ MORE <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </div>
  );
}
