"use client";

import { useTranslation } from "react-i18next";
import partnersData from "../public/data/partners.json";

export default function PartnerGrid() {
  const { t } = useTranslation();

  const { partners, partners2 } = partnersData;

  return (
    <>
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
    </>
  );
}
