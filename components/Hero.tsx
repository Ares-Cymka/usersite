"use client";

import { useLanguage } from "@/context/LanguageContext";
import { contact } from "@/lib/data";

const iconBtn =
  "hero-icon-btn w-12 h-12 rounded-full border border-white/60 bg-black/40 flex items-center justify-center text-gray-900 hover:opacity-100 hover:border-white hover:bg-white hover:text-charcoal hover:shadow-lg transition-all";

export default function Hero() {
  const { t } = useLanguage();
  const github = contact.social.find((s) => s.name === "GitHub");
  const telegram = contact.social.find((s) => s.name === "Telegram");
  const x = contact.social.find((s) => s.name === "X");
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center section-padding relative overflow-hidden hero-slide-bg"
    >
      <div className="hero-slide-orb hero-slide-orb-1" aria-hidden />
      <div className="hero-slide-orb hero-slide-orb-2" aria-hidden />
      <div className="absolute inset-0 z-[1] wave-bg" />
      <div className="relative z-10 container-narrow">
        <h1 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold font-sans text-white mb-3 tracking-tight italic">
        {t.hero.tagline}
        </h1>
        <h2 className="text-white text-lg max-w-4xl mx-auto mb-10 font-extrabold font-sans font-medium italic">
        {t.hero.title}
        </h2>
        <div className="flex items-center justify-center gap-4 mt-8 mb-8">
          <a href={`mailto:${contact.info.email}`} aria-label="Mail" className={iconBtn}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
          {telegram && (
            <a href={telegram.url} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={iconBtn}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          )}
          {github && (
            <a href={github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconBtn}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          )}
          {x && (
            <a href={x.url} target="_blank" rel="noopener noreferrer" aria-label="X" className={iconBtn}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          )}
        </div>
        <p className="mt-4 text-gray-400 text-sm">{t.hero.scroll}</p>
      </div>
      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="text-xs text-gray-300 font-medium">{t.hero.theme}</p>
        <p className="text-xs text-gray-400">{t.hero.themeDesc}</p>
      </div>
    </section>
  );
}
