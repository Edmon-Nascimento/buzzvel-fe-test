
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
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="header-actions">
          <Link href="/login" className="login-link">
            Log in
          </Link>

          <a href="#categories" className="header-cta">
            Start learning
          </a>
        </div>

      </div>
    </header>
  );
}
