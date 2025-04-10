"use client"; // Add this directive to ensure client-side rendering

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import the default styling

const ContactForm = () => {
  const [value, setValue] = useState<string>(""); // Phone number
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    companyName: false,
    message: false,
    phone: false,
  });

  const handlePhoneChange = (phone: string | undefined) => {
    if (phone) {
      setValue(phone);
      setErrors((prev) => ({ ...prev, phone: false }));
    } else {
      setValue("");
    }
  };

  const validateForm = () => {
    const newErrors = {
      firstName: !firstName,
      lastName: !lastName,
      email: !email,
      companyName: !companyName,
      message: !message,
      phone: !value,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true); // Return true if no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send to API)
      console.log("Form submitted!");
    } else {
      console.log("Form has errors.");
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

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div
                  className={`form-group ${errors.firstName ? "error" : ""}`}
                >
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={`form-group ${errors.lastName ? "error" : ""}`}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.email ? "error" : ""}`}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  className={`form-group phone-group ${
                    errors.phone ? "error" : ""
                  }`}
                >
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
                <div
                  className={`form-group full ${
                    errors.companyName ? "error" : ""
                  }`}
                >
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div
                  className={`form-group full ${errors.message ? "error" : ""}`}
                >
                  <label>Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
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
