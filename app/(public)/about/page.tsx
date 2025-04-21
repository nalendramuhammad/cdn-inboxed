"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-wrap">
        <div className="about-overlay"></div>
        <div className="about-content">
          <h1>{t("aboutPage.heroTitle")}</h1>
          <p>{t("aboutPage.heroSubtitle")}</p>
        </div>
        <div className="arrow">
          <Image
            src="/icons/arrow-down.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </div>
      </section>

      <section className="about-about-us">
        <div className="about-header">
          <div className="title-wrap">
            <span className="about-subtitle">{t("aboutPage.subtitle")}</span>
            <h2>{t("aboutPage.sectionTitle")}</h2>
            <p>{t("aboutPage.sectionParagraph")}</p>
          </div>
        </div>
        <div className="about-us-image">
          <img
            src="/image/About Us 2.jpg"
            alt="About Us"
          />
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-text-wrap">
            <div className="vision-text">
              <h2>{t("aboutPage.visionTitle")}</h2>
              <p>{t("aboutPage.visionParagraph")}</p>
              <ul className="vision-list">
                {(
                  t("aboutPage.visionList", { returnObjects: true }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="vision-text">
              <h2>{t("aboutPage.missionSubtitle")}</h2>
              <p>{t("aboutPage.visionParagraph")}</p>
              <ul className="vision-list">
                {(
                  t("aboutPage.visionList", { returnObjects: true }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="vision-images">
            <div className="main-image">
              <img
                src="/image/Card 2.jpg"
                alt="Main"
              />
            </div>
            <div className="side-images">
              <img
                src="/image/Card 1.jpg"
                alt="Side 1"
              />
              <img
                src="/image/Card 3.jpg"
                alt="Side 2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section-mobile">
        <div className="vision-section-header-mobile">
          <div className="vision-section-title-wrap-mobile">
            <span className="vision-section-subtitle-mobile">
              {t("aboutPage.visionSubtitle")}
            </span>
          </div>
        </div>
        <div className="vision-section-grid">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="vision-section-item-mobile"
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
