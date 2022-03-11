import React from "react";
import Leave_a_message from "./Leave_a_message";
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
            <Leave_a_message />
          </div>
        </div>
      </section>
    </>
  );
}
