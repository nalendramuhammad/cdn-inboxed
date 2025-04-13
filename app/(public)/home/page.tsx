"use client";

import Link from "next/link";
import ContactForm from "../../../components/ContactForm";
import partnersData from "../../../public/data/partners.json";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  const { partners, partners2 } = partnersData;

  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>{t("homePage.heroTitle")}</h1>
          <p>{t("homePage.heroSubtitle")}</p>
          <Link href="/about">
            <button className="ctaButton">{t("homePage.aboutButton")}</button>
          </Link>
        </div>
      </section>

      <section className="partner">
        <h3>{t("homePage.ourPartner")}</h3>
        <div className="marquee-wrap">
          <div className="marquee">
            <div className="marquee-content">
              {partners.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Partner Logo"
                  className="partner-logo"
                />
              ))}
              {partners.map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo}
                  alt="Partner Logo"
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
          <div className="marquee-2">
            <div className="marquee-content">
              {partners2.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Partner Logo"
                  className="partner-logo"
                />
              ))}
              {partners2.map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo}
                  alt="Partner Logo"
                  className="partner-logo"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-overlay" />
        <div className="about-container">
          <div className="about-text">
            <span className="about-subtitle">
              {t("homePage.aboutUsTagline")}
            </span>
            <h2>{t("homePage.aboutUsTitle")}</h2>
            <p>{t("homePage.aboutUsPara1")}</p>
            <button className="about-button">{t("homePage.learnMore")}</button>
          </div>
          <div className="about-image">
            <img
              src="/image/woman pointing.png"
              alt="About Us"
            />
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="wrap">
          <div className="industries-section-header">
            <div className="industries-section-title-wrap">
              <span className="industries-section-subtitle">
                {t("homePage.industryTagline")}
              </span>
              <h2>{t("homePage.industryTitle")}</h2>
              <p>{t("homePage.industryDesc")}</p>
            </div>
          </div>
          <div className="industries-section-grid">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="industries-section-item"
                >
                  <img
                    src="/image/placeholder.png"
                    alt={`Industry ${index + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="wrap">
          <div className="industries-section-header">
            <div className="industries-section-title-wrap">
              <span className="industries-section-subtitle">
                {t("homePage.serviceTagline")}
              </span>
              <h2>{t("homePage.serviceTitle")}</h2>
              <p>{t("homePage.serviceDesc")}</p>
            </div>
          </div>
          <div className="industries-section-grid">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="industries-section-item"
                >
                  <img
                    src="/image/placeholder.png"
                    alt={`Service ${index + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
