import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import {
  education,
  experience,
  formatHeroPeriod,
  heroHighlights,
  heroImage,
  heroSection,
  heroTabs,
  homeIntro,
  skills,
  type HeroTabId,
} from '../../data/content'
import { AboutLittleMe } from './AboutLittleMe'
import { Companies } from './Companies'
import { Clients } from './Clients'
import { StatsMarquee } from './StatsMarquee'
import { HeroExperienceCard } from '../ui/HeroExperienceCard'

export function Hero() {
  const [activeTab, setActiveTab] = useState<HeroTabId>('myself')

  const tabCards = useMemo(() => {
    switch (activeTab) {
      case 'myself':
        return heroHighlights
      case 'education':
        return education
      case 'skills':
        return skills.slice(0, 4).map((skill, i) => ({
          period: 'CORE SKILL',
          title: skill,
          company: toolsLabel(i),
        }))
      case 'experience':
        return experience.slice(0, 4).map((job) => ({
          period: formatHeroPeriod(job.period),
          title: job.role,
          company: job.company,
        }))
      default:
        return heroHighlights
    }
  }, [activeTab])

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-24 pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — portrait + shapes (original design) */}
          <motion.div
            className="relative mx-auto w-full max-w-[340px] pb-4 lg:mx-0 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="absolute -right-1 top-2 h-[82%] w-[72%] rounded-sm border-2 border-accent/90"
              aria-hidden
            />
            <div
              className="absolute bottom-6 left-0 h-[78%] w-[76%] rounded-br-[2.5rem] bg-accent"
              aria-hidden
            />

            <div className="relative z-10 ml-auto w-full overflow-hidden rounded-br-[2.5rem] bg-gray-100 shadow-2xl shadow-charcoal/20 ring-2 ring-white">
              <img
                src={heroImage}
                alt="Anas Raza — SEO Specialist"
                className="aspect-[4/5] w-full scale-[1.12] object-cover object-[48%_22%] brightness-[1.05] contrast-[1.08] saturate-[0.88]"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=650&fit=crop'
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-charcoal/35"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/10 via-transparent to-transparent"
                aria-hidden
              />
            </div>

            {/* Badge — neeche, taake chehra cover na ho */}
            <div className="absolute -bottom-1 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full border border-gray-100 bg-white py-2 pl-2 pr-5 shadow-lg sm:left-auto sm:right-0 sm:translate-x-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                {heroSection.experienceYears}
              </span>
              <span className="ml-2.5 max-w-[76px] text-[10px] font-bold leading-tight tracking-wide text-charcoal">
                {heroSection.experienceLabel}
              </span>
            </div>
          </motion.div>

          {/* Right — headline, about, tabs, cards (original + your content) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {homeIntro.heading}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500">
              {homeIntro.subheading}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-accent text-white shadow-md shadow-accent/25'
                      : 'border border-gray-200 bg-white text-charcoal hover:border-accent/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tabCards.map((card, i) => (
                <HeroExperienceCard
                  key={`${activeTab}-${card.title}-${i}`}
                  period={card.period}
                  title={card.title}
                  company={card.company}
                  highlighted={i === 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <StatsMarquee />

      <AboutLittleMe />

      <Companies embedded />

      <Clients embedded />
    </section>
  )
}

function toolsLabel(index: number) {
  const labels = ['Technical', 'Analytics', 'Research', 'Strategy']
  return labels[index] ?? 'SEO'
}
