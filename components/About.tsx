"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, locale } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e: PointerEvent) => {
      card.classList.remove("rotate");
      const rect = card.getBoundingClientRect();
      const hw = rect.width / 2;
      const hh = rect.height / 2;
      card.style.setProperty("--ratio-x", String((e.x - (rect.x + hw)) / hw));
      card.style.setProperty("--ratio-y", String((e.y - (rect.y + hh)) / hh));
    };
    const onLeave = () => {
      card.style.setProperty("--ratio-x", "0");
      card.style.setProperty("--ratio-y", "0");
    };

    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    return () => {
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return (
    <section id="about" className="section-padding bg-gray-50 relative">
      <div className="container-wide relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal text-center mb-12">
          <span className="section-title-underline">{t.about.sectionTitle}</span>
        </h2>

        {/* Main block: glowing circle left, white card right */}
        <div className="grid lg:grid-cols-[minmax(360px,420px)_1fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto mb-16">
          {/* Left: large circular glowing avatar with blinking lights */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[26rem] sm:w-[30rem] lg:w-[34rem] h-[26rem] sm:h-[30rem] lg:h-[34rem] flex items-center justify-center overflow-visible">
              {/* Orbit dots — larger radius for bigger effect ring */}
              {Array.from({ length: 24 }, (_, i) => {
                const angle = 20 + (i * 6.5);
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = -Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <span
                    key={i}
                    className="avatar-orbit-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                );
              })}
              {/* Accent orbs */}
              <span
                className="avatar-orb-blue absolute right-2 top-2"
                aria-hidden
              />
              <span
                className="avatar-orb-amber absolute bottom-4 left-0"
                aria-hidden
              />
              {/* Avatar circle */}
              <div className="relative w-150 h-150 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden avatar-glow shrink-0">
                <Image
                  src={t.avatarUrl}
                  alt={t.about.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 400px, (max-width: 1024px) 480px, 560px"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Right: holographic 3D bio card */}
          <div ref={cardRef} className="holo-card rotate bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-charcoal">
            <div className="holo-circles" aria-hidden />
            <div className="holo-bg" aria-hidden />
            <div className="holo-lines" aria-hidden />
            <div className="relative z-[2]">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-4">
                <span className="inline-block border-b-2 border-charcoal pb-1 px-1">{t.about.name}</span>
              </h3>
              <span className="inline-block px-4 py-2 rounded-full border-2 border-gray-300 bg-gray-50 text-charcoal text-sm font-semibold mb-5">
                {t.about.role}
              </span>
              <p className="text-charcoal-light leading-relaxed text-sm sm:text-base">
                {t.about.bio}
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-2xl sm:text-3xl font-extrabold text-charcoal text-center mb-4">
          <span className="section-title-underline">{t.about.valuesTitle}</span>
        </h4>
        <p className="text-charcoal-light text-sm text-center mb-8">
          {t.about.valuesSub}
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-4xl mx-auto">
          {t.about.values.map((v, i) => (
            <div
              key={v.title}
              className="p-4 rounded-xl bg-white border border-gray-200 about-glow-card"
              style={{ "--glow": (["rgb(99,179,237)", "rgb(13,122,140)", "rgb(103,232,249)", "rgb(44,82,130)"])[i] } as React.CSSProperties}
            >
              <h5 className="font-bold text-charcoal mb-2">{v.title}</h5>
              <p className="text-charcoal-light text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        <h4 className="text-lg font-bold text-charcoal mb-4 text-center">
          {t.about.highlightsTitle}
        </h4>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-white border border-gray-200 about-glow-card" style={{ "--glow": "rgb(99,179,237)" } as React.CSSProperties}>
            <h5 className="text-charcoal font-semibold mb-2">{locale === "ja" ? "言語" : "Languages"}</h5>
            <ul className="text-charcoal-light text-sm space-y-1">
              {t.about.highlights.languages.map((l) => (
                <li key={l}>• {l}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200 about-glow-card" style={{ "--glow": "rgb(13,122,140)" } as React.CSSProperties}>
            <h5 className="text-charcoal font-semibold mb-2">{locale === "ja" ? "趣味" : "Hobbies"}</h5>
            <ul className="text-charcoal-light text-sm space-y-1">
              {t.about.highlights.hobbies.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200 about-glow-card" style={{ "--glow": "rgb(103,232,249)" } as React.CSSProperties}>
            <h5 className="text-charcoal font-semibold mb-2">{locale === "ja" ? "哲学" : "Philosophy"}</h5>
            <ul className="text-charcoal-light text-sm space-y-1">
              {t.about.highlights.philosophy.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
