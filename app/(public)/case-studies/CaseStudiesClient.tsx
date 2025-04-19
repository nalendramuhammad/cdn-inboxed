"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface StudyItem {
  slug: string;
  titleKey: string;
  background: string;
  category: string;
}

const ITEMS_PER_PAGE = 9;

export default function CaseStudiesPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [studies, setStudies] = useState<StudyItem[]>([]);
  const [filteredStudies, setFilteredStudies] = useState<StudyItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const pageParam = parseInt(searchParams.get("page") || "1", 10);
    const categoryParam = searchParams.get("category") || "all";

    setCurrentPage(pageParam);
    setSelectedCategory(categoryParam);

    fetch("/data/studies.json")
      .then((res) => res.json())
      .then((data) => {
        setStudies(data);
        if (categoryParam === "all") {
          setFilteredStudies(data);
        } else {
          setFilteredStudies(
            data.filter((item: StudyItem) => item.category === categoryParam)
          );
        }
      });
  }, []);

  const categories = [
    "all",
    ...Array.from(new Set(studies.map((s) => s.category))),
  ];

  const updateURL = (page: number, category: string) => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("category", category);
    router.push(`?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    updateURL(1, category);

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
      updateURL(page, selectedCategory);
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
        <div className="arrow">
          <Image
            src="/icons/arrow-down.svg"
            alt="icon"
            width={30}
            height={30}
          />
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

        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) => {
              return (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              );
            })
            .reduce((acc: (number | string)[], page, i, arr) => {
              if (i > 0 && page !== arr[i - 1] + 1) {
                acc.push("ellipsis");
              }
              acc.push(page);
              return acc;
            }, [])
            .map((page, i) =>
              page === "ellipsis" ? (
                <span
                  key={i}
                  className="ellipsis"
                >
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => handlePageChange(page as number)}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
                </button>
              )
            )}

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
