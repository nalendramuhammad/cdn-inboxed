"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface CultureItem {
  icon: string;
  titleKey: string;
  titleKeyBawah: string;
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
            className="culture-grid-item-wrapper"
            key={index}
          >
            <div className="culture-our-grid-section-item">
              <span className="inside-text">{t(item.titleKey)}</span>
            </div>
            <div className="culture-grid-item-text">
              <h3>{t(item.titleKeyBawah)}</h3>
              <p>{t(item.descriptionKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
