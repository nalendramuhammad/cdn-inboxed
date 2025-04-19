"use client";

import { useTranslation } from "react-i18next";
import Solution from "../../../components/IndustriesGrid";
import Image from "next/image";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="solution-wrap">
        <div className="solution-overlay"></div>
        <div className="solution-content">
          <h1>{t("industriesSolution.header")}</h1>
          <p>{t("industriesSolution.subHeader")}</p>
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
      <Solution />
    </>
  );
}
