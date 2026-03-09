"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const ex = t.experience;
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-3xl font-extrabold text-charcoal mb-4">{ex.sectionTitle}</h2>
        <p className="text-charcoal-light mb-12">{ex.sectionSub}</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {ex.stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-gray-50 border border-gray-200 text-center about-glow-card"
            >
              <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
              <p className="text-charcoal-light text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-charcoal mb-8">{ex.timelineTitle}</h3>
        <div className="exp-tl-wrap">
          <ul className="exp-tl">
            {ex.experiences.map((exp, i) => (
              <li key={i}>
                <div className="exp-tl-cont">
                  <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                  <p className="font-medium text-sm mb-0.5">{exp.company}</p>
                  <p className="text-sm opacity-75 mb-2">{exp.location}</p>
                  <p className="text-sm mb-4">{exp.desc}</p>
                  <p className="text-xs font-semibold mb-2">{ex.achievementsLabel}</p>
                  <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                    {exp.achievements.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold mb-2">{ex.techLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ background: "rgba(255,255,255,0.12)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <time>{exp.period}</time>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-xl font-bold text-charcoal mt-12 mb-6">{ex.expertiseTitle}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ex.expertise.map((area) => (
            <div
              key={area.title}
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 about-glow-card"
            >
              <p className="font-bold text-charcoal">{area.title}</p>
              <p className="text-charcoal-light text-sm">{area.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
