"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";

interface SolutionItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  background: string;
}

export default function SolutionGrid() {
  const { t } = useTranslation();

  const [solution, setSolution] = useState<SolutionItem[]>([]);

  useEffect(() => {
    fetch("/data/solution.json")
      .then((res) => res.json())
      .then((data) => setSolution(data));
  }, []);

  return (
    <>
      <section className="grid">
        <div className="grid-header">
          <div className="grid-title-wrap">
            <span className="grid-subtitle">{t("ourSolutionPage.header")}</span>
            <h2>{t("ourSolutionPage.title")}</h2>
            <p>{t("ourSolutionPage.subtitle")}</p>
          </div>
        </div>
        <div className="grid-grid">
          {solution.map((item, index) => (
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
