"use client";

import Link from "next/link";
import Logo from "../public/logo/inboxed.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Link href="/home">
            <Logo />
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/home">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/our-service">Our Services</Link>
          <Link href="/our-partner">Our Partner</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="right">
          <div className="extra-actions">
            <select className="language-selector">
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>
          </div>
          <Link href="/login">
            <button className="login-btn">Demo Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
