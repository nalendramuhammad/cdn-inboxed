"use client";

import Link from "next/link";
import ContactForm from "../../../components/ContactForm";
import Partners from "../../../components/PartnerGrid";
import Industries from "../../../components/IndustriesGrid";
import Service from "../../../components/ServiceGrid";
import About from "../../../components/About";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>{t("homePage.heroTitle")}</h1>
          <p>{t("homePage.heroSubtitle")}</p>
          <Link href="/about">
            <button className="ctaButton">{t("homePage.aboutButton")}</button>
          </Link>
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

      <Partners />

      <About />

      <section className="industries-section">
        <Industries />

        <Service />
      </section>

      <ContactForm />
    </>
  );
}
