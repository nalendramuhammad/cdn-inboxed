"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import studies from "../../../../public/data/studies.json";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const study = studies.find((item) => item.slug === slug);

  if (!study) return notFound();

  const title = study.titleKey ? t(study.titleKey) : "";
  const backgroundDesc = study.backgroundDesc ? t(study.backgroundDesc) : "";
  const challenge = study.challenge ? t(study.challenge) : "";
  const solution = study.solution ? t(study.solution) : "";
  const benefits = study.benefit ? study.benefit.map((key) => t(key)) : [];
  const future = study.future ? t(study.future) : "";

  return (
    <>
      <section className="slug">
        <div className="overlay"></div>
        <Image
          src={study.background}
          alt="img"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <h1 className="text-overlay">{title}</h1>
        <div className="arrow">
          <Image
            src="/icons/arrow-down.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </div>
      </section>
      <section className="slug-content">
        <div className="slug-kiri">
          <div className="background-slug">
            <p>| Backgorund</p>
            <h4>{backgroundDesc}</h4>
          </div>
          <div className="challenge-slug">
            <p>| Key Challenges</p>
            <h4>{challenge}</h4>
          </div>
          <div className="solution-slug">
            <p>| Soltuion</p>
            <h4>{solution}</h4>
          </div>
          <div className="benefit-slug">
            <p>| Customer Benefit</p>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="future-slug">
            <p>| Future Prospect</p>
            <h4>{future}</h4>
          </div>
        </div>
        <div className="slug-kanan">
          <div className="related-solutions">
            <p>Related Solutions</p>
          </div>
          <div className="related-industries">
            <p>Related Industries</p>
          </div>
        </div>
      </section>
    </>
  );
}
