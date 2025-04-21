"use client";

import Link from "next/link";
import ContactForm from "../../../components/ContactForm";
import partnersData from "../../../public/data/partners.json";
import Industries from "../../../components/IndustriesGrid";
import Solution from "../../../components/OurSolutionGrid";
import Service from "../../../components/ServiceGrid";
import { useTranslation } from "react-i18next";
import Image from "next/image";

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
        <div className="arrow">
          <Image
            src="/icons/arrow-down.svg"
            alt="icon"
            width={30}
            height={30}
          />
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
        <Industries />

        <Solution />

        <Service />
      </section>

      <ContactForm />
    </>
  );
}
