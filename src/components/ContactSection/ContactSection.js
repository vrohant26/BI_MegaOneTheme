import React from "react";
import LeaveaMessage from "./LeaveaMessage";
import Contact from "./Contact";

export default function ContactSection() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <section className="contact-sec  padding-top padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-5 text-center text-lg-left position-relative">
              <div className="contact-details  wow fadeInRight">
                <Contact />
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <LeaveaMessage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
