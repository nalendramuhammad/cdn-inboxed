"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/our-service">Our Services</Link>
        <Link href="/our-partner">Our Partner</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}
