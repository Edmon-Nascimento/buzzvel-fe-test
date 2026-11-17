
"use client";

import { useState } from "react";
import Link from "next/link";

const navigationLinks = [
  { label: "Courses", href: "#categories" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#process" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-content">

        {/* Logo */}
        <Link className="brand" href="/" aria-label="Luma home">
          luma.
        </Link>

        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-[15px] font-light ">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="header-actions">
          <Link href="/login" className="login-link">
            <span className="text-[#656770] text-[17px]">Log in</span>
          </Link>

          <button className="bg-[#3157F6] text-white rounded-lg px-5 py-3">
            <a href="#categories" className="header-cta font-bold">
              Start learning
            </a>
          </button>
        </div>

      </div>
    </header>
  );
}
