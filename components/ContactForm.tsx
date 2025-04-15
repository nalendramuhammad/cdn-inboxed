"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>("");

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
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone: value,
            companyName,
            message,
          }),
        });

        const data = await res.json();
        if (data.success) {
          alert("Message sent successfully!");
          setFirstName("");
          setLastName("");
          setEmail("");
          setValue("");
          setCompanyName("");
          setMessage("");
        } else {
          alert("Failed to send message.");
        }
      } catch (error) {
        console.error("Submit error:", error);
        alert("An error occurred. Please try again later.");
      }
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
            <h2>{t("contactForm.title")}</h2>
            <p>
              {t("contactForm.subtitle")}{" "}
              <a href="mailto:service@inboxed.com">service@inboxed.com</a>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div
                  className={`form-group ${errors.firstName ? "error" : ""}`}
                >
                  <label>{t("contactForm.firstName")}</label>
                  <input
                    type="text"
                    placeholder={t("contactForm.firstNamePlaceholder")}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={`form-group ${errors.lastName ? "error" : ""}`}>
                  <label>{t("contactForm.lastName")}</label>
                  <input
                    type="text"
                    placeholder={t("contactForm.lastNamePlaceholder")}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.email ? "error" : ""}`}>
                  <label>{t("contactForm.email")}</label>
                  <input
                    type="email"
                    placeholder={t("contactForm.emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  className={`form-group phone-group ${
                    errors.phone ? "error" : ""
                  }`}
                >
                  <label>{t("contactForm.phone")}</label>
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
                  <label>{t("contactForm.companyName")}</label>
                  <input
                    type="text"
                    placeholder={t("contactForm.companyNamePlaceholder")}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div
                  className={`form-group full ${errors.message ? "error" : ""}`}
                >
                  <label>{t("contactForm.message")}</label>
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
                {t("contactForm.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
