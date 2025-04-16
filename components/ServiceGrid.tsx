"use client";

import { useTranslation } from "react-i18next";

export default function ServiceGrid() {
  const { t } = useTranslation();

  return (
    <>
      <section className="service-section">
        <div className="wrap">
          <div className="service-section-header">
            <div className="service-section-title-wrap">
              <span className="service-section-subtitle">
                {t("ourService.subtitle")}
              </span>
              <h2>{t("ourService.title")}</h2>
              <p>{t("ourService.description")}</p>
            </div>
          </div>
          <div className="service-section-grid">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="service-section-item"
                >
                  <img
                    src="/image/placeholder.png"
                    alt={`Industry ${index + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
