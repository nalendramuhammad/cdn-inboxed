"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function PartnerPage() {
  const { t } = useTranslation();

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
    </>
  );
}
