import { Download } from 'lucide-react'
import { educationEntries, experience, site, skills, tools } from '../data/content'
import { PageShell } from '../components/layout/PageShell'
import { AnimateIn } from '../components/ui/AnimateIn'
import { Button } from '../components/ui/Button'

export function ResumePage() {

  // ✅ REAL PDF DOWNLOAD (NO BLOB)
  const handleDownload = () => {
    const url = '/resume/Anas-Raza-Resume.pdf'

    const a = document.createElement('a')
    a.href = url
    a.download = 'Anas-Raza-Resume.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <PageShell
      title="Resume"
      subtitle={`${site.degree} · ${site.city} · SEO Executive with software engineering & sales background.`}
    >
      {/* HEADER */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          {site.email} · {site.phoneDisplay}
        </p>

        <Button
          variant="ghost"
          onClick={handleDownload}
          className="flex items-center gap-2"
        >
          <Download size={16} />
          Download CV
        </Button>
      </div>

      {/* EDUCATION */}
      <AnimateIn className="mb-12">
        <h2 className="mb-6 text-xl font-bold text-charcoal">Education</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {educationEntries.map((item) => (
            <article
              key={item.institution + item.degree}
              className="rounded-xl border border-gray-100 bg-gray-50 p-5"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {item.period}
              </span>
              <h3 className="mt-2 font-semibold text-charcoal">
                {item.degree}
              </h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
            </article>
          ))}
        </div>
      </AnimateIn>

      {/* MAIN GRID */}
      <div className="grid gap-12 lg:grid-cols-3">

        {/* EXPERIENCE */}
        <div className="space-y-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-charcoal">
            Professional Experience
          </h2>

          {experience.map((item, i) => (
            <AnimateIn key={`${item.company}-${item.period}`} delay={0.06 * i}>
              <article className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.period}
                  </span>

                  {item.location && (
                    <span className="text-xs text-gray-400">
                      {item.location}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                <p className="font-medium text-gray-600">{item.company}</p>
                <p className="mt-3 text-gray-600">{item.description}</p>

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 text-sm text-gray-600 leading-relaxed"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </AnimateIn>
          ))}
        </div>

        {/* SIDEBAR */}
        <AnimateIn delay={0.15}>
          <div className="rounded-xl bg-charcoal p-8 text-white lg:sticky lg:top-28">
            
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Age: {site.age}</li>
              <li>City: {site.city}</li>
              <li>Birthday: {site.birthday}</li>
            </ul>

            <h3 className="mt-8 text-lg font-semibold">Skills</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold">Tools</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tools.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-sm"
                >
                  {t}
                </li>
              ))}
            </ul>

          </div>
        </AnimateIn>

      </div>
    </PageShell>
  )
}