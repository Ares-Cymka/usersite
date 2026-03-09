"use client";

import { awards, certifications } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Achievements() {
  const { t } = useLanguage();
  const ac = t.achievements;
  return (
    <section id="achievements" className="section-padding bg-gray-50">
      <div className="container-wide">
        <h2 className="text-3xl font-extrabold text-charcoal mb-4">{ac.sectionTitle}</h2>
        <p className="text-charcoal-light mb-12">{ac.sectionSub}</p>

        <h3 className="text-xl font-bold text-charcoal mb-6">{ac.awardsTitle}</h3>
        <div className="space-y-6 mb-16">
          {awards.map((award, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white border border-gray-200 about-glow-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-charcoal">{award.title}</h4>
                  <p className="text-charcoal-light text-sm">{award.org}</p>
                  <p className="text-charcoal-light text-xs mt-1">{award.date}</p>
                </div>
                <span className="text-charcoal font-bold">{award.rating}</span>
              </div>
              <p className="text-charcoal-light text-sm mt-4">{award.desc}</p>
              <p className="text-white text-xs mt-2">
                <strong className="text-white">{ac.relatedProject}:</strong> {award.project}
              </p>
              <p className="text-white text-xs mt-1">
                <strong className="text-white">{ac.impact}:</strong> {award.impact}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-charcoal mb-6">{ac.certsTitle}</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white border border-gray-200 about-glow-card"
            >
              <h4 className="font-bold text-charcoal">{cert.name}</h4>
              <p className="text-charcoal-light text-sm">{cert.issuer}</p>
              <p className="text-charcoal-light text-sm mt-2">{cert.desc}</p>
              <p className="text-white text-xs mt-2">
                {ac.obtained}: {cert.obtained} · {ac.expiry}: {cert.expiry}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {cert.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 rounded bg-gray-500 text-white text-xs font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-charcoal text-sm font-semibold hover:underline"
              >
                {ac.verify}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
