"use client";

import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="service-wrap">
        <div className="service-overlay"></div>
        <div className="service-content">
          <h1>{t("ourService.header")}</h1>
        </div>
      </section>
      <section className="our-service-section">
        <div className="our-service-section-header">
          <div className="our-service-section-title-wrap">
            <span className="our-service-section-subtitle">
              {t("ourService.subtitle")}
            </span>
            <h2>{t("ourService.title")}</h2>
            <p>{t("ourService.description")}</p>
          </div>
        </div>
        <div className="our-service-section-grid">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="our-service-section-item"
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
