"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";

interface IndustriesItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  background: string;
}

export default function IndustriesGrid() {
  const { t } = useTranslation();

  const [industries, setIndustries] = useState<IndustriesItem[]>([]);

  useEffect(() => {
    fetch("/data/industries.json")
      .then((res) => res.json())
      .then((data) => setIndustries(data));
  }, []);

  return (
    <>
      <section className="grid">
        <div className="grid-header">
          <div className="grid-title-wrap">
            <span className="grid-subtitle">
              {t("industriesSolutionPage.Header")}
            </span>
            <h2>{t("industriesSolutionPage.Title")}</h2>
            <p>{t("industriesSolutionPage.Subtitle")}</p>
          </div>
        </div>
        <div className="grid-grid">
          {industries.map((item, index) => (
            <div
              className="our-grid-section-item custom-box"
              key={index}
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
              <div className="content">
                <Image
                  src={item.icon}
                  alt={t(item.titleKey)}
                  width={40}
                  height={40}
                  quality={75}
                />
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
