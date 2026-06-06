import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '../data/content'
import { PageShell } from '../components/layout/PageShell'
import { AnimateIn } from '../components/ui/AnimateIn'

export function CaseStudiesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(
    caseStudies[0]?.id ?? null,
  )

  return (
    <PageShell
      title="Case Studies"
      subtitle="Real SEO campaigns with measurable outcomes — AI Overviews, local SEO, and organic growth."
    >
      <div className="space-y-6">

        {caseStudies.map((study, i) => {
          const open = expandedId === study.id

          return (
            <AnimateIn key={study.id} delay={0.05 * i}>
              <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">

                {/* HEADER */}
                <button
                  type="button"
                  onClick={() => setExpandedId(open ? null : study.id)}
                  className="w-full text-left p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center group"
                >

                  {/* IMAGE BLOCK (FIXED - NO BLANK ISSUE) */}
                  <div className="relative h-32 w-full sm:w-48 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">

                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                      }}
                    />

                    {/* SAFE FALLBACK (always visible if image fails) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                      Case Study Preview
                    </div>

                    {/* GRADIENT OVERLAY (safe, no issue) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* HINT TEXT */}
                    <div className="absolute bottom-2 left-2 right-2 text-[10px] text-white font-semibold opacity-90">
                      {open ? 'Click to collapse ↑' : 'Click to view case study ↓'}
                    </div>

                  </div>

                  {/* TEXT */}
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {study.category}
                    </span>

                    <h2 className="mt-1 text-xl font-bold text-charcoal">
                      {study.title}
                    </h2>

                    <p className="text-sm text-gray-500">{study.client}</p>

                    <p className="mt-2 text-gray-600 line-clamp-2">
                      {study.summary}
                    </p>
                  </div>

                </button>

                {/* EXPAND SECTION */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden border-t border-gray-100 bg-accent/5"
                    >
                      <div className="p-6 space-y-3">

                        <h3 className="text-sm font-bold uppercase tracking-widest text-accent">
                          Results
                        </h3>

                        <div className="space-y-2">
                          {study.results.map((r) => (
                            <div
                              key={r}
                              className="flex items-start gap-2 text-sm text-charcoal"
                            >
                              <span className="text-accent mt-0.5">✓</span>
                              <span>{r}</span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </article>
            </AnimateIn>
          )
        })}

      </div>
    </PageShell>
  )
}