"use client";

import { useTranslation } from "react-i18next";
import Industries from "../../../components/IndustriesGrid";
import Image from "next/image";

export default function IndustriesPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="industries-wrap">
        <div className="industries-overlay"></div>
        <div className="industries-content">
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
      <Industries />
    </>
  );
}
