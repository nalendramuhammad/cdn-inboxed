"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PartnerPage() {
  const { t } = useTranslation();
  const [partnerImages, setPartnerImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/partners.json")
      .then((res) => res.json())
      .then((data) => {
        setPartnerImages([...(data.partners || []), ...(data.partners2 || [])]);
      });
  }, []);

  return (
    <>
      <section className="partner-wrap">
        <div className="partner-overlay"></div>
        <div className="partner-content">
          <h1>{t("ourPartner.header")}</h1>
          <p>{t("ourPartner.subHeader")}</p>
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
      <section className="partner-list-section">
        <h2 className="partner-list-heading">Our Partner</h2>
        <div className="partner-list-grid">
          {partnerImages.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Partner ${idx + 1}`}
              width={200}
              height={100}
              className="partner-list-img"
            />
          ))}
        </div>
      </section>
    </>
  );
}
