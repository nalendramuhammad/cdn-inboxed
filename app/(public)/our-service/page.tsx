"use client";

import { useTranslation } from "react-i18next";
import Service from "../../../components/ServiceGrid";
import Image from "next/image";
import Link from "next/link";

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
      <section className="service-kedua">
        <div className="kedua-wrap">
          <div className="kedua-wrap-kiri">
            <Image
              src="/image/services.png"
              alt="solution"
              width={800}
              height={500}
            />
          </div>
          <div className="kedua-wrap-kanan">
            <h1>{t("ourService.serviceSecond.header")}</h1>
            <p>{t("ourService.serviceSecond.description")}</p>
            <Link href="/about">
              <button className="ctaButton">
                {t("ourService.serviceSecond.ctaButton")}
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Service />
    </>
  );
}
