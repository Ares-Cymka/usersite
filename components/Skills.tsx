"use client";

import {
  skillCategories,
  skillLevels,
  learningGoals,
} from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const sk = t.skills;
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-3xl font-extrabold text-charcoal mb-4">{sk.sectionTitle}</h2>
        <p className="text-charcoal-light mb-12">{sk.sectionSub}</p>

        <h3 className="text-xl font-bold text-charcoal mb-8">{sk.categoriesTitle}</h3>
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-lg font-bold text-charcoal mb-2">{category.title}</h4>
              <p className="text-charcoal-light text-sm mb-6">{category.description}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 about-glow-card"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-charcoal">{skill.name}</span>
                      {skill.certified && (
                        <span className="text-xs text-charcoal-light font-medium">{sk.certified}</span>
                      )}
                    </div>
                    <p className="text-charcoal-light text-xs mb-2">{skill.level}</p>
                    <p className="text-charcoal-light text-sm mb-3">{skill.description}</p>
                    <p className="text-white text-charcoal-light/80 text-xs mb-2">
                      {sk.yearsProjects(skill.years, skill.projects)}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className="h-full bg-charcoal rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                      <span className="text-xs text-charcoal-light font-medium">{skill.proficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-charcoal mt-12 mb-6">{sk.levelsTitle}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skillLevels.map((level) => (
            <div
              key={level.level}
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 about-glow-card"
            >
              <p className="font-bold text-charcoal">{level.level}</p>
              <p className="text-charcoal-light text-sm mt-1">{level.desc}</p>
              <div className="mt-2 h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-charcoal rounded-full"
                  style={{ width: `${level.pct}%` }}
                />
              </div>
              <p className="text-xs text-charcoal-light mt-1 font-medium">{level.pct}%</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-charcoal mb-6">{sk.learningTitle}</h3>
        <p className="text-charcoal-light text-sm mb-6">{sk.learningSub}</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {learningGoals.map((goal) => (
            <div
              key={goal.name}
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 about-glow-card"
            >
              <p className="font-bold text-charcoal">{goal.name}</p>
              <p className="text-charcoal-light text-sm mt-1">{goal.desc}</p>
              <p className="text-charcoal-light text-xs mt-2">{sk.targetDate(goal.target)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
