"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    

      <div className="culture-content">
        <div className="culture-left">
          {culture.slice(0, 3).map((item, idx) => (
            <div className="culture-item" key={item.titleKeyBawah}>
              <h3>{item.titleKeyBawah}</h3>
              <p>{item.descriptionKey}</p>
            </div>
          ))}
        </div>

        <div className="culture-image">
          <Image
            src="/image/culturec.png"
            alt="Culture Grid"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>

        <div className="culture-right">
          {culture.slice(3).map((item, idx) => (
            <div className="culture-item" key={item.titleKeyBawah}>
              <h3>{item.titleKeyBawah}</h3>
              <p>{item.descriptionKey}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
