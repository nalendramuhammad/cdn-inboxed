"use client";

import { useTranslation } from "react-i18next";

export default function PartnerPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="partner-wrap">
        <div className="partner-overlay"></div>
        <div className="partner-content">
          <h1>{t("ourPartner.header")}</h1>
        </div>
      </section>
      <section className="our-partner-section">
        <div className="our-partner-section-header">
          <div className="our-partner-section-title-wrap">
            <span className="our-partner-section-subtitle">
              {t("ourPartner.subtitle")}
            </span>
            <h2>{t("ourPartner.title")}</h2>
            <p>{t("ourPartner.description")}</p>
          </div>
        </div>
        <div className="our-partner-section-grid">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="our-partner-section-item"
              >
                <img
                  src="/image/placeholder.png"
                  alt={`Industry ${index + 1}`}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
