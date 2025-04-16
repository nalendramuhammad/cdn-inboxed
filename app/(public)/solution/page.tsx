"use client";

import { useTranslation } from "react-i18next";
import Solution from "../../../components/IndustriesGrid";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="service-wrap">
        <div className="service-overlay"></div>
        <div className="service-content">
          <h1>{t("ourService.header")}</h1>
        </div>
      </section>
      <Solution />
    </>
  );
}
