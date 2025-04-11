"use client";

import Link from "next/link";
import Logo from "../public/logo/inboxed.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClassName = (path: string) => {
    return pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Link href="/home">
            <Logo className="logo" />
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link
            href="/home"
            className={getLinkClassName("/home")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={getLinkClassName("/about")}
          >
            About Us
          </Link>
          <Link
            href="/our-service"
            className={getLinkClassName("/our-service")}
          >
            Our Services
          </Link>
          <Link
            href="/our-partner"
            className={getLinkClassName("/our-partner")}
          >
            Our Partner
          </Link>
          <Link
            href="/case-studies"
            className={getLinkClassName("/case-studies")}
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className={getLinkClassName("/contact")}
          >
            Contact
          </Link>

          {/* Language selector for mobile */}
          <div className="extra-actions mobile-lang">
            <select className="language-selector">
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>

        <div className="right">
          {/* Language selector for desktop */}
          <div className="extra-actions desktop-lang">
            <select className="language-selector">
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>
          </div>

          <Link href="/login">
            <button className="login-btn">Demo Login</button>
          </Link>

          <div
            className="hamburger"
            onClick={toggleMenu}
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
