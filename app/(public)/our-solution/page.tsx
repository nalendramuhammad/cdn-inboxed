"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Solution from "../../../components/OurSolutionGrid";

export default function SolutionPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="solution-wrap">
        <div className="solution-overlay"></div>
        <div className="solution-content">
          <h1>{t("ourSolution.header")}</h1>
          <p>{t("ourSolution.subHeader")}</p>
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
