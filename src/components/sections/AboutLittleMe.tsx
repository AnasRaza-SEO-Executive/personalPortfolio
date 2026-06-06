import { motion } from 'framer-motion'
import { aboutMe, stats } from '../../data/content'

export function AboutLittleMe() {
  const paragraphs = aboutMe.body.split('\n\n').filter(Boolean)

  return (
    <div className="bg-charcoal py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal-light shadow-2xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid lg:grid-cols-[1fr_280px]">
            <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-10 w-1 rounded-full bg-accent" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  My Story
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {aboutMe.heading}
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70 sm:text-lg sm:leading-relaxed">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="flex flex-col justify-center gap-3 bg-charcoal/50 p-8 sm:p-10 lg:p-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
                Quick highlights
              </p>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-accent/40 hover:bg-accent/10"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                >
                  <p className="text-sm font-medium leading-snug text-white">{stat.label}</p>
                </motion.div>
              ))}
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
