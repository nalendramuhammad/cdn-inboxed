"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <span className="about-subtitle">
              {t("homePage.aboutUsTagline")}
            </span>
            <h2>{t("homePage.aboutUsTitle")}</h2>
            <p>{t("homePage.aboutUsPara1")}</p>
            <button className="about-button">{t("homePage.learnMore")}</button>
          </div>
          <Image
            src="/image/aboutus.png"
            width={750}
            height={500}
            alt="business"
          />
        </div>
      </section>
    </>
  );
}
