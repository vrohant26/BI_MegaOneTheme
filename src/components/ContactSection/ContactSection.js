import React from "react";
import LeaveaMessage from "./LeaveaMessage";
import Contact from "./Contact";

export default function ContactSection() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <section
        className="contact-sec slider-area padding-top padding-bottom"
        id="contact-sec"
      >
        <div className="container">
          <div className="row">
            <Contact />
            <LeaveaMessage />
          </div>
        </div>
      </section>
    </>
  );
}
