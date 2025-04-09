"use client";

import Link from "next/link";
import Logo from "../public/logo/inboxed.svg";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/our-service">Our Services</Link>
          <Link href="/our-partner">Our Partner</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="extra-actions">
          <select className="language-selector">
            <option value="id">ID</option>
            <option value="en">EN</option>
          </select>
          <Link href="/login">
            <button className="login-btn">Demo Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
