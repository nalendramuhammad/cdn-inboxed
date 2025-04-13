"use client";

import { useTranslation } from "react-i18next";
import ContactForm from "../../../components/ContactForm";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact-page-wrap">
        <div className="contact-page-overlay"></div>
        <div className="contact-page-content">
          <h1>{t("contactPage.heroTitle")}</h1>
        </div>
      </section>

      <section id="contact-form">
        <ContactForm />
      </section>

      <section className="contact-address">
        <p>{t("contactPage.reachOut")}</p>
        <h1>{t("contactPage.addressTitle")}</h1>
        <div className="contact-wrap">
          <div className="contact-item">
            <img
              src="/icons/envelope.svg"
              alt="Email Icon"
              className="contact-icon"
            />
            <h2>{t("contactPage.emailTitle")}</h2>
            <p>
              <a
                href="mailto:service@inboxed.com"
                className="contact-link"
              >
                service@inboxed.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <img
              src="/icons/phone.svg"
              alt="Phone Icon"
              className="contact-icon"
            />
            <h2>{t("contactPage.phoneTitle")}</h2>
            <p>
              <a
                href="tel:+628138123456"
                className="contact-link"
              >
                +62 813 456 3456
              </a>
            </p>
          </div>

          <div className="contact-item">
            <img
              src="/icons/location.svg"
              alt="Location Icon"
              className="contact-icon"
            />
            <h2>{t("contactPage.locationTitle")}</h2>
            <p>
              <a
                href="https://maps.google.com?q=Jl.+Meruya+Selatan"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jl. Meruya Selatan
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
