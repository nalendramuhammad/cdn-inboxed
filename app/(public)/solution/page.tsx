"use client";

import { useTranslation } from "react-i18next";
import Solution from "../../../components/IndustriesGrid";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="solution-wrap">
        <div className="solution-overlay"></div>
        <div className="solution-content">
          <h1>{t("ourService.header")}</h1>
        </div>
      </section>
      <Solution />
    </>
  );
}
