"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18n from "../lib/i18n";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setIsMenuOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getLinkClassName = (path: string) => {
    return pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.cookie = `NEXT_LOCALE=${lang}; path=/`;
    router.refresh();
  };

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link
          className="logo"
          href="/home"
        >
          <Image
            src="/logo/inboxed-white.png"
            alt="logo"
            width={100}
            height={25}
          />
        </Link>

        <div
          ref={menuRef}
          className={`nav-links ${isMenuOpen ? "open" : ""}`}
        >
          <Link
            href="/home"
            className={getLinkClassName("/home")}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className={getLinkClassName("/about")}
          >
            {t("about")}
          </Link>
          <Link
            href="/industries"
            className={getLinkClassName("/industries")}
          >
            {t("industries")}
          </Link>
          <Link
            href="/our-solution"
            className={getLinkClassName("/our-solution")}
          >
            {t("solution")}
          </Link>
          <Link
            href="/our-service"
            className={getLinkClassName("/our-service")}
          >
            {t("services")}
          </Link>
          <Link
            href="/our-partner"
            className={getLinkClassName("/our-partner")}
          >
            {t("partner")}
          </Link>
          <Link
            href="/case-studies"
            className={getLinkClassName("/case-studies")}
          >
            {t("caseStudies")}
          </Link>
          <Link
            href="/contact"
            className={getLinkClassName("/contact")}
          >
            {t("contact")}
          </Link>

          <div className="extra-actions mobile-lang">
            <select
              className="language-selector"
              onChange={(e) => changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value="en">EN</option>
              <option value="id">ID</option>
            </select>
          </div>
        </div>

        <div className="right">
          <div className="extra-actions desktop-lang">
            <select
              className="language-selector"
              onChange={(e) => changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value="en">EN</option>
              <option value="id">ID</option>
            </select>
          </div>

          <Link href="/login">
            <button className="login-btn">{t("demoLogin")}</button>
          </Link>

          <div
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            ref={hamburgerRef}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
