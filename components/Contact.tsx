"use client";

import { contact } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-wide">
        <h2 className="text-3xl font-extrabold text-charcoal mb-4">{c.sectionTitle}</h2>
        <p className="text-charcoal-light mb-12 text-lg">{c.headline}</p>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          <div>
            <h3 className="text-xl font-bold text-charcoal mb-6">{c.formTitle}</h3>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1">
                  {c.nameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-charcoal placeholder-charcoal-light/60 focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                  placeholder={c.nameLabel}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-1">
                  {c.emailLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-charcoal placeholder-charcoal-light/60 focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                  placeholder={c.emailLabel}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-1">
                  {c.companyLabel}
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-charcoal placeholder-charcoal-light/60 focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                  placeholder={c.companyLabel}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-charcoal mb-1">
                  {c.subjectLabel} <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                >
                  <option value="">{c.subjectPlaceholder}</option>
                  {c.subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-1">
                  {c.messageLabel} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-charcoal placeholder-charcoal-light/60 focus:outline-none focus:ring-2 focus:ring-charcoal/30 resize-y"
                  placeholder={c.messagePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-charcoal mb-1">
                  {c.budgetLabel}
                </label>
                <select
                  id="budget"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                >
                  <option value="">{c.budgetPlaceholder}</option>
                  {c.budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-charcoal mb-1">
                  {c.timelineLabel}
                </label>
                <select
                  id="timeline"
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                >
                  <option value="">{c.timelinePlaceholder}</option>
                  {c.timelineOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-charcoal text-white font-bold hover:bg-charcoal-dark transition-colors"
              >
                {c.submit}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-charcoal mb-4">{c.contactTitle}</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-charcoal font-semibold text-sm">{c.email}</p>
                  <a
                    href={`mailto:${contact.info.email}`}
                    className="text-charcoal-light hover:text-charcoal"
                  >
                    {contact.info.email}
                  </a>
                  <p className="text-charcoal-light/80 text-xs mt-1">{c.info.emailDesc}</p>
                </div>
                <div>
                  <p className="text-charcoal font-semibold text-sm">{c.phone}</p>
                  <a href={`tel:${contact.info.phone.replace(/\s/g, "")}`} className="text-charcoal-light hover:text-charcoal">
                    {contact.info.phone}
                  </a>
                  <p className="text-charcoal-light/80 text-xs mt-1">{c.info.phoneHours}</p>
                </div>
                <div>
                  <p className="text-charcoal font-semibold text-sm">{c.location}</p>
                  <p className="text-charcoal-light">{contact.info.location}</p>
                  <p className="text-charcoal-light/80 text-xs mt-1">{c.info.locationDesc}</p>
                </div>
                <div>
                  <p className="text-charcoal font-semibold text-sm">{c.timezone}</p>
                  <p className="text-charcoal-light">{contact.info.timezone}</p>
                  <p className="text-charcoal-light/80 text-xs mt-1">{c.info.timezoneDesc}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-charcoal mb-4">{c.socialTitle}</h4>
              <div className="flex flex-col gap-2">
                {contact.social.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal font-medium hover:underline"
                  >
                    {s.name} — {s.handle}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 about-glow-card">
              <h4 className="text-lg font-bold text-charcoal mb-2">{c.availabilityTitle}</h4>
              <p className="text-charcoal font-semibold">{c.availability.status}</p>
              <p className="text-charcoal-light text-sm mt-1">{c.availability.desc}</p>
              <p className="text-charcoal-light/80 text-xs mt-2">{c.availability.response}</p>
              <p className="text-charcoal-light/80 text-xs">{c.availability.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
