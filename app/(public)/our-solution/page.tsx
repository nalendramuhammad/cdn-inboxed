"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Partners from "../../../components/PartnerGrid";

interface SolutionItem {
  titleKey: string;
  descriptionKey: string;
  link: string;
  image: string;
}

export default function SolutionPage() {
  const { t } = useTranslation();

  const [solution, setSolution] = useState<SolutionItem[]>([]);

  useEffect(() => {
    fetch("/data/our-solution.json")
      .then((res) => res.json())
      .then((data) => setSolution(data));
  }, []);

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
      <section className="solution-kedua">
        <div className="kedua-wrap">
          <div className="kedua-wrap-kiri">
            <Image
              src="/image/oursolution.jpeg"
              alt="solution"
              width={800}
              height={500}
            />
          </div>
          <div className="kedua-wrap-kanan">
            <h1>{t("ourSolution.solutionKedua.header")}</h1>
            <p>{t("ourSolution.solutionKedua.description")}</p>
            <Link href="/about">
              <button className="ctaButton">
                {t("ourSolution.solutionKedua.ctaButton")}
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Partners />
      <section className="pembatas">
        <div className="pembatas-wrap">
          <h1>{t("ourSolution.pembatas")}</h1>
          <div className="image-kiri">
            <Image
              src="/image/our-solution/Bussinessssss.png"
              width={750}
              height={500}
              alt="business"
            />
          </div>
        </div>
      </section>
      <section className="solution-ketiga">
        {solution.map((item, index) => (
          <div
            className="solution-ketiga-wrap-satu"
            key={index}
          >
            <Image
              src={item.image}
              alt={item.titleKey}
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
            <div className="solution-ketiga-wrap-satu-kanan">
              <h1>{t(item.titleKey)}</h1>
              <p>{t(item.descriptionKey)}</p>
              <Link href="/login">
                <button className="login-btn">Learn More</button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
