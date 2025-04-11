"use client";

import { useTranslation } from "react-i18next";

export default function CaseStudiesPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="studies-wrap">
        <div className="studies-overlay"></div>
        <div className="studies-content">
          <h1>{t("caseStudiesPage.header")}</h1>
        </div>
      </section>
      <section className="our-studies-section">
        <div className="our-studies-section-header">
          <div className="our-studies-section-title-wrap">
            <span className="our-studies-section-subtitle">
              {t("caseStudiesPage.subtitle")}
            </span>
            <h2>{t("caseStudiesPage.title")}</h2>
            <p>{t("caseStudiesPage.description")}</p>
          </div>
        </div>
        <div className="our-studies-section-grid">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="our-studies-section-item"
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
