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
          <div className="culture-item">
            <h3>INNOVATION</h3>
            <p>We lead with fresh ideas and creative approaches to solve complex challenges and drive progress.</p>
          </div>
          <div className="culture-item">
            <h3>NETWORK</h3>
            <p>Building strong, collaborative relationships with our partners and clients to achieve shared goals and success.</p>
          </div>
          <div className="culture-item">
            <h3>BREAKTHROUGH</h3>
            <p>We embrace bold thinking and actions to break through barriers, discovering new possibilities and innovations along the way.</p>
          </div>
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
          <div className="culture-item">
            <h3>OPPORTUNITY</h3>
            <p>We view every challenge as an opportunity to grow, innovate, and create meaningful change.</p>
          </div>
          <div className="culture-item">
            <h3>XCELLENCE</h3>
            <p>We uphold excellence in all aspects of our work, continuously striving to exceed expectations.</p>
          </div>
          <div className="culture-item">
            <h3>EDUCATION</h3>
            <p>We foster continuous learning and knowledge sharing as the foundation of personal growth, innovation, and organizational development.</p>
          </div>
          <div className="culture-item">
            <h3>DIVERSITY</h3>
            <p>We foster continuous learning and knowledge sharing as the foundation of personal growth, innovation, and organizational development.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
