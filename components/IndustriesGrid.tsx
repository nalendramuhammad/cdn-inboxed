"use client";

import { useTranslation } from "react-i18next";

export default function IndustriesGrid() {
  const { t } = useTranslation();

  return (
    <>
      <section className="industries">
        <div className="wrap">
          <div className="industries-header">
            <div className="industries-title-wrap">
              <span className="industries-subtitle">
                {t("homePage.industryTagline")}
              </span>
              <h2>{t("homePage.industryTitle")}</h2>
              <p>{t("homePage.industryDesc")}</p>
            </div>
          </div>
          <div className="industries-grid">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="industries-item"
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
