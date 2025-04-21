"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ServiceItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
  background: string;
}

export default function ServiceGrid() {
  const { t } = useTranslation();

  const [service, setService] = useState<ServiceItem[]>([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <>
      <section className="grid">
        <div className="grid-header">
          <div className="grid-title-wrap">
            <span className="grid-subtitle">{t("servicesPage.header")}</span>
            <h2>{t("servicesPage.title")}</h2>
            <p>{t("servicesPage.subtitle")}</p>
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
