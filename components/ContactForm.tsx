"use client"; // Add this directive to ensure client-side rendering

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import the default styling

const ContactForm = () => {
  const [value, setValue] = useState<string>(""); // Explicitly typed as a string

  const handlePhoneChange = (phone: string | undefined) => {
    // The phone number might be undefined initially, so ensure it's handled properly
    if (phone) {
      setValue(phone);
    } else {
      setValue(""); // Clear the phone number if it's undefined
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-image">
          <img
            src="/image/CS CARD.jpg"
            alt="Customer Service"
          />
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <h2>Let&apos;s Get In Touch</h2>
            <p>
              or just reach us out at{" "}
              <a href="mailto:service@inboxed.com">service@inboxed.com</a>
            </p>

            <form>
              <div className="form-row">
                <div className="form-group ">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-group ">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group ">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-group phone-group">
                  <label>Phone Number</label>
                  <div className="phone-input">
                    <PhoneInput
                      international
                      defaultCountry="ID"
                      value={value}
                      onChange={handlePhoneChange}
                      className="country-code"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full">
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full">
                  <label>Message</label>
                  <textarea></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
