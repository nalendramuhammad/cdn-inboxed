"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

interface StudyItem {
  slug: string;
  titleKey: string;
  background: string;
  category: string; // <- ditambahkan
}

const ITEMS_PER_PAGE = 9;

export default function CaseStudiesPage() {
  const { t } = useTranslation();
  const [studies, setStudies] = useState<StudyItem[]>([]);
  const [filteredStudies, setFilteredStudies] = useState<StudyItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetch("/data/studies.json")
      .then((res) => res.json())
      .then((data) => {
        setStudies(data);
        setFilteredStudies(data); // default tampil semua
      });
  }, []);

  const categories = [
    "all",
    ...Array.from(new Set(studies.map((s) => s.category))),
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === "all") {
      setFilteredStudies(studies);
    } else {
      setFilteredStudies(studies.filter((item) => item.category === category));
    }
  };

  const totalPages = Math.ceil(filteredStudies.length / ITEMS_PER_PAGE);

  const paginatedStudies = filteredStudies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const paginationElement = document.querySelector(".pagination");
      if (paginationElement) {
        paginationElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  return (
    <>
      <section className="studies-wrap">
        <div className="studies-overlay"></div>
        <div className="studies-content">
          <h1>{t("caseStudiesPage.header")}</h1>
          <p>{t("caseStudiesPage.subHeader")}</p>
        </div>
      </section>

      <section className="our-studies-section">
        <div className="our-studies-section-header">
          <div className="our-studies-section-title-wrap">
            <span className="our-studies-section-subtitle">
              {t("caseStudiesPage.subtitle")}
            </span>
            <h2>{t("caseStudiesPage.title")}</h2>
            <p>{t("caseStudiesPage.description")}</p>
          </div>

          {/* Filter Dropdown */}
          <div className="filter-wrapper">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="filter-select"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="our-studies-section-grid">
          {paginatedStudies.map((item, index) => (
            <Link
              href={`/case-studies/${item.slug}`}
              key={index}
              className="our-studies-section-item custom-box"
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
              <div className="content">
                <Image
                  src="/icons/globe.svg"
                  alt={t(item.titleKey)}
                  width={40}
                  height={40}
                />
                <div className="title-desc">
                  <h3>{t(item.titleKey)}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}
