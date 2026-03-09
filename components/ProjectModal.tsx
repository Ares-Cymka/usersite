"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { projectDetailsJa, projectDetailsEn } from "@/lib/projectDetails";

type ProjectItem = {
  category: string;
  year: string;
  title: string;
  description: string;
  tech: readonly string[];
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projectIndex: number;
  project: ProjectItem;
  projectImageUrl: string;
};

export default function ProjectModal({
  isOpen,
  onClose,
  projectIndex,
  project,
  projectImageUrl,
}: Props) {
  const { locale, t } = useLanguage();
  const details = (locale === "ja" ? projectDetailsJa : projectDetailsEn)[projectIndex];
  const pr = t.projects;

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const headerImage =
    details && "headerImage" in details && details.headerImage
      ? details.headerImage
      : projectImageUrl;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 bg-black/60 backdrop-blur-sm project-modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-2xl my-8 bg-white rounded-2xl shadow-2xl overflow-hidden project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image and overlay */}
        <div className="relative h-48 sm:h-56 bg-gray-200">
          <Image
            src={headerImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          {details?.overlayText && (
            <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-white font-bold text-lg sm:text-xl leading-tight whitespace-pre-line">
              {details.overlayText}
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-white hover:bg-white transition-colors shadow-lg"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content - scrollable */}
        <div className="p-6 sm:p-8 text-gray-800 max-h-[60vh] overflow-y-auto">
          {/* Tags (light blue/teal style) */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
              {project.category}
            </span>
            {details && (
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-200 text-white">
                {details.status}
              </span>
            )}
          </div>

          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {project.title}
          </h2>

          <div className="flex items-center gap-4 text-white text-sm mb-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {project.year}
            </span>
            {details?.duration && details.duration !== "—" && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {details.duration}
              </span>
            )}
          </div>

          <p className="text-white leading-relaxed mb-6">{project.description}</p>

          {/* Key Features (◎ / checklist) */}
          {details?.keyFeatures && details.keyFeatures.length > 0 && (
            <div className="mb-6">
              <h3 className="flex items-center gap-2 font-semibold text-gray mb-3">
                <svg className="w-5 h-5 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ◎ {pr.modalKeyFeatures}
              </h3>
              <ul className="space-y-2 text-white text-sm">
                {details.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5 shrink-0">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges (lightbulb) */}
          {details?.challenges && (
            <div className="mb-6">
              <h3 className="flex items-center gap-2 font-semibold text-white mb-2">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                {pr.modalChallenges}
              </h3>
              <p className="text-white text-sm leading-relaxed pl-7">{details.challenges}</p>
            </div>
          )}

          {/* Solutions */}
          {details?.solutions && (
            <div className="mb-6">
              <h3 className="flex items-center gap-2 font-semibold text-white mb-2">
                <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a7.5 7.5 0 0115 0v1m-15 0a1.5 1.5 0 013 0m0 0a1.5 1.5 0 013 0m3 0h1.5a1.5 1.5 0 010 3H18a1.5 1.5 0 010-3h1.5a1.5 1.5 0 010 3zm0 0h1.5a1.5 1.5 0 010 3H18m-15 0a1.5 1.5 0 010-3H18m15 0h1.5a1.5 1.5 0 010 3M3 11v5.5a1.5 1.5 0 003 0V11m-3 0a1.5 1.5 0 013 0" />
                </svg>
                {pr.modalSolutions}
              </h3>
              <p className="text-white text-sm leading-relaxed pl-7">{details.solutions}</p>
            </div>
          )}

          {/* Achievements (green check) */}
          {details?.achievements && details.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="flex items-center gap-2 font-semibold text-white mb-3">
                <svg className="w-5 h-5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {pr.modalAchievements}
              </h3>
              <ul className="space-y-2 text-white text-sm pl-7">
                {details.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">{pr.modalTech}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-gray-100 text-white text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Site button */}
          {details?.liveUrl && (
            <a
              href={details.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {pr.modalLiveSite}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
