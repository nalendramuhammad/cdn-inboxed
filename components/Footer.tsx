"use client";

import Logo from "../public/logo/inboxed.svg";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Image
            src="/logo/inboxed-white.png"
            alt="logo"
            width={100}
            height={25}
          />
          <p>{t("footer.description")}</p>
        </div>

        <div className="footer-links">
          <div className="navigation-footer">
            <Link href="/home">{t("home")}</Link>
            <Link href="/about">{t("about")}</Link>
            <Link href="/industries">{t("industries")}</Link>
            <Link href="/solution">{t("solution")}</Link>
            <Link href="/services">{t("services")}</Link>
            <Link href="/partner">{t("partner")}</Link>
            <Link href="/caseStudies">{t("caseStudies")}</Link>
            <Link href="/contact">{t("contact")}</Link>
          </div>
          <div className="services-footer">
            <Link href="Services">{t("footer.servicesFooter.title")}</Link>
            <Link href="/home">{t("footer.servicesFooter.ai")}</Link>
            <Link href="/home">{t("footer.servicesFooter.business")}</Link>
            <Link href="/home">{t("footer.servicesFooter.maintanance")}</Link>
            <Link href="/home">{t("footer.servicesFooter.os")}</Link>
            <Link href="/home">{t("footer.servicesFooter.saas")}</Link>
            <Link href="/home">{t("footer.servicesFooter.software")}</Link>
          </div>
          <div className="industries-footer">
            <Link href="/">{t("footer.industries.title")}</Link>
            <Link href="/home">{t("footer.industries.education")}</Link>
            <Link href="/home">{t("footer.industries.energy")}</Link>
            <Link href="/home">{t("footer.industries.bank")}</Link>
            <Link href="/home">{t("footer.industries.fleet")}</Link>
            <Link href="/home">{t("footer.industries.government")}</Link>
            <Link href="/home">{t("footer.industries.healthcare")}</Link>
            <Link href="/home">{t("footer.industries.legal")}</Link>
            <Link href="/home">{t("footer.industries.manufacturing")}</Link>
            <Link href="/home">{t("footer.industries.media")}</Link>
            <Link href="/home">{t("footer.industries.retail")}</Link>
            <Link href="/home">
              {t("footer.industries.telecommunications")}
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="contact-links">
          <h4>Contact</h4>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Garis pindah ke sini */}
        <div className="footer-divider" />

        <div className="footer-meta">
          <span>© Copyright 2025, All Rights Reserved by Inboxed.id</span>
          <div className="meta-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
