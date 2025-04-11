"use client";

import Link from "next/link";
import Logo from "../public/logo/inboxed.svg";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

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

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Link href="/home">
            <Logo className="logo" />
          </Link>
        </div>

        <div
          ref={menuRef}
          className={`nav-links ${isMenuOpen ? "open" : ""}`}
        >
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

          <div className="extra-actions mobile-lang">
            <select className="language-selector">
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>

        <div className="right">
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
