import React from "react";
import LeaveaMessage from "./LeaveaMessage";
import Contact from "./Contact";

export default function ContactSection() {
  return (
    <>
      <section
        className="contact-sec padding-top padding-bottom"
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
