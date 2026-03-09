"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="container-wide section-padding text-center text-charcoal-light text-sm font-medium">
        <p>{f.name} — {f.title}</p>
        <p className="mt-1">{f.theme}</p>
      </div>
    </footer>
  );
}
