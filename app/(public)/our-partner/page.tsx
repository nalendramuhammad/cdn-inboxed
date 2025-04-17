"use client";

import { useTranslation } from "react-i18next";

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
      </section>
    </>
  );
}
