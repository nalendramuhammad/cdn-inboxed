"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

interface StudyItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  background: string;
}

export default function CaseStudiesPage() {
  const { t } = useTranslation();
  const [studies, setStudies] = useState<StudyItem[]>([]);

  useEffect(() => {
    fetch("/data/studies.json")
      .then((res) => res.json())
      .then((data) => setStudies(data));
  }, []);

  return (
    <>
      <section className="studies-wrap">
        <div className="studies-overlay"></div>
        <div className="studies-content">
          <h1>{t("caseStudiesPage.header")}</h1>
          <p>{t("caseStudiesPage.subHeader")}</p>
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
          {studies.map((item, index) => (
            <div
              className="our-studies-section-item custom-box"
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
                <Link
                  href={item.link}
                  className="btn-learn-more"
                >
                  {t("homePage.learnMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
