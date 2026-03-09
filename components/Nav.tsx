"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const navLinkKeys = [
  { href: "#hero", key: "home" as const },
  { href: "#about", key: "about" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#skills", key: "skills" as const },
  { href: "#contact", key: "contact" as const },
];

export default function Nav() {
  const { locale, setLocale, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      const sections = navLinkKeys.map((l) => l.href.slice(1)).filter(Boolean);
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY + 120) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-gray-200 shadow-sm" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-wide px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Left: logo + name */}
        <a
          href="#"
          className="flex items-center gap-3 shrink-0 hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 rounded-lg bg-charcoal flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src="/assets/nav-avatar.jpg"
              alt=""
              width={40}
              height={40}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <span className={`font-semibold text-base whitespace-nowrap ${scrolled ? "text-charcoal" : "text-white"}`}>
            {t.hero.name}
          </span>
        </a>

        {/* Center-right: nav links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinkKeys.map((link) => {
            const id = link.href.slice(1) || "hero";
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? (scrolled ? "text-charcoal" : "text-white")
                      : (scrolled ? "text-charcoal-light hover:text-charcoal" : "text-white/80 hover:text-white")
                  }`}
                >
                  {t.nav[link.key]}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: language selector */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-charcoal-light hover:text-charcoal" : "text-white/90 hover:text-white"
            }`}
            aria-label={locale === "ja" ? "Switch to English" : "日本語に切り替え"}
          >
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <ellipse cx="12" cy="12" rx="10" ry="4" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
            <span>{t.languageButton}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`md:hidden p-2 ${scrolled ? "text-charcoal" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="container-wide px-4 py-4 flex flex-col gap-1">
            {navLinkKeys.map((link) => {
              const id = link.href.slice(1) || "hero";
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-2.5 px-2 rounded-md transition-colors font-medium ${
                      isActive ? "text-charcoal bg-gray-100" : "text-charcoal-light hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 mt-2 border-t border-gray-200">
              <button
                type="button"
                onClick={() => { setLocale(locale === "ja" ? "en" : "ja"); setMobileOpen(false); }}
                className="flex items-center gap-2 py-2.5 px-2 text-charcoal text-sm w-full text-left font-medium"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                {t.languageButton}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
