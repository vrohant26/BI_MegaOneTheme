import React from "react";

export default function LeaveaMessage() {
  return (
    <>
      <div className="col-12 col-lg-6">
        <h4 className="heading text-center text-lg-left">LEAVE US A MESSAGE</h4>
        <form
          className="row contact-form wow fadeInLeft"
          id="contact-form-data"
        >
          <div className="col-sm-12" id="result"></div>
          <div className="col-12 col-md-5">
            <input
              type="text"
              name="userName"
              placeholder="Your Name *"
              className="form-control"
            />
            <input
              type="email"
              name="userEmail"
              placeholder="Email Address *"
              className="form-control"
            />
            <input
              type="text"
              name="Company"
              placeholder="Company"
              className="form-control"
            />
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              className="form-control"
            />
            <select className="select" name="State">
              <option value="" disabled selected hidden>
                State
              </option>
            </select>
            <select className="select" name="Country">
              <option value="" disabled selected hidden>
                Country
              </option>
            </select>
          </div>
          <div className="col-12 col-md-7">
            <select className="select" name="Services">
              <option value="" disabled selected hidden>
                Services and inquires *
              </option>
            </select>
            <select className="select" name="How">
              <option value="default" disabled selected hidden>
                How did you hear about us ? *
              </option>
            </select>
            <textarea
              className="form-control"
              name="userMessage"
              placeholder="Your Message"
              rows="6"
            ></textarea>
          </div>
          <div className="col-12">
            <a
              href="javascript:void(0);"
              className="btn purple-btn rounded-pill w-100 contact_btn"
            >
              <i
                className="fa fa-spinner fa-spin mr-2 d-none"
                aria-hidden="true"
              ></i>
              Send Message <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
