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
            <h1>
              A Complete Digital Ecosystem to Streamline Operations, Enhance
              Collaboration, and Accelerate Business Growth.
            </h1>
            <p>
              Unlock the full potential of your business with a complete digital
              ecosystem tailored to your needs. Whether you're optimizing daily
              operations, boosting team productivity, or enhancing customer
              experience, our comprehensive solution pillars are designed to
              support your growth. From ERP and CRM to AI-powered insights,
              collaboration tools, and secure cloud services—everything you need
              is seamlessly integrated and available via On-Premises, SaaS, or
              Managed Service. Start with what you need today, scale as you
              grow, and experience the agility and efficiency that modern
              businesses demand. Let us simplify your digital transformation—try
              it now and see the difference.
            </p>
            <Link href="/about">
              <button className="ctaButton">Try it Now</button>
            </Link>
          </div>
        </div>
      </section>
      <Partners />
      <section className="pembatas">
        <div className="pembatas-wrap">
          <h1>Unlock Seamless Growth with Scalable Business Tools</h1>
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
