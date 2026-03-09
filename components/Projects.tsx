"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const { t } = useLanguage();
  const pr = t.projects;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-wide">
        <h2 className="text-3xl font-extrabold text-charcoal mb-4">{pr.sectionTitle}</h2>
        <p className="text-charcoal-light mb-12">{pr.sectionSub}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pr.items.map((project, idx) => (
            <article
              key={idx}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 transition-colors about-glow-card"
            >
              <div className="relative aspect-video bg-gray-100">
                <Image
                  src={t.projectImageUrl(idx + 1)}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 rounded bg-charcoal/80 text-xs text-white font-medium">
                    {project.category}
                  </span>
                  <span className="px-2 py-1 rounded bg-charcoal/80 text-xs text-white font-medium">
                    {project.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-charcoal mb-2">{project.title}</h3>
                <p className="text-charcoal-light text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-gray-100 text-charcoal-light text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className="text-charcoal text-sm font-semibold hover:underline inline-flex items-center gap-1"
                >
                  {pr.viewDetail}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <ProjectModal
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          projectIndex={selectedIndex ?? 0}
          project={selectedIndex !== null ? pr.items[selectedIndex] : pr.items[0]}
          projectImageUrl={selectedIndex !== null ? t.projectImageUrl(selectedIndex + 1) : t.projectImageUrl(1)}
        />

        <h3 className="text-xl font-bold text-charcoal mb-6">{pr.categoriesTitle}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pr.categoryNames.map((cat) => (
            <div
              key={cat.name}
              className="p-4 rounded-xl bg-white border border-gray-200 about-glow-card"
            >
              <h4 className="font-bold text-charcoal">{cat.name}</h4>
              <p className="text-charcoal-light text-sm mt-1">{cat.nameEn}</p>
              <p className="text-charcoal-light text-xs mt-2">{pr.projectCount(cat.count)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
