"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface PartnerItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  background: string;
}

export default function ServiceGrid() {
  const { t } = useTranslation();

  const [service, setService] = useState<PartnerItem[]>([]);

  useEffect(() => {
    fetch("/data/partners-grid.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <>
      <section className="grid">
        <div className="grid-header">
          <div className="grid-title-wrap">
            <span className="grid-subtitle">{t("ourService.subtitle")}</span>
            <h2>{t("ourService.title")}</h2>
            <p>{t("ourService.description")}</p>
          </div>
        </div>
        <div className="grid-grid">
          {service.map((item, index) => (
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
