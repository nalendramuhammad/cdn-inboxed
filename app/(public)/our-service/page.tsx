"use client";

import { useTranslation } from "react-i18next";
import Service from "../../../components/ServiceGrid";
import Image from "next/image";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="service-wrap">
        <div className="service-overlay"></div>
        <div className="service-content">
          <h1>{t("ourService.header")}</h1>
          <p>{t("ourService.subHeader")}</p>
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
      <Service />
    </>
  );
}
