"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const te = t.testimonials;
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-3xl font-extrabold text-charcoal mb-4">{te.sectionTitle}</h2>
        <p className="text-charcoal-light mb-12">{te.sectionSub}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col about-glow-card"
            >
              <p className="text-white text-sm mb-6 flex-1">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{item.name}</h4>
                  <p className="text-white text-sm">{item.role}</p>
                  <p className="text-white text-xs">{item.company}</p>
                  <p className="text-white text-xs mt-1">{item.date}</p>
                </div>
              </div>
              <p className="text-white text-xs mt-2">{item.roleJa}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.qualities.map((q) => (
                  <span
                    key={q}
                    className="px-2 py-0.5 rounded bg-gray-500 text-white text-xs font-medium"
                  >
                    {q}
                  </span>
                ))}
              </div>
              <p className="text-white text-xs mt-2">
                <strong className="text-white">{te.relatedProject}:</strong> {item.project}
              </p>
              <a
                href={item.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-white text-sm font-semibold hover:underline"
              >
                {te.linkedIn}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
