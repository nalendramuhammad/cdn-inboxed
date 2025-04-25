"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface CultureItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  background: string;
}

export default function CultureGrid() {
  const { t } = useTranslation();

  const [culture, setCulture] = useState<CultureItem[]>([]);

  useEffect(() => {
    fetch("/data/culture.json")
      .then((res) => res.json())
      .then((data) => setCulture(data));
  }, []);

  return (
    <>
      <section className="culture-grid">
        <div className="culture-grid-header">
          <div className="culture-grid-title-wrap">
            <span className="culture-grid-subtitle">
              {t("cultureGrid.title")}
            </span>
          </div>
        </div>
        <div className="culture-grid-grid">
          {culture.map((item, index) => (
            <div
              className="culture-our-grid-section-item custom-box"
              key={index}
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
              <div className="content">
                <div className="title-desc">
                  <h3>{t(item.titleKey)}</h3>
                  <p>{t(item.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
