import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategoryId,
} from '../data/content'

import { PageShell } from '../components/layout/PageShell'
import { PortfolioResultCard } from '../components/ui/PortfolioResultCard'
import { AnimateIn } from '../components/ui/AnimateIn'

const STEP = 3
const INITIAL_LIMIT = 6

export function PortfolioPage() {
  const [active, setActive] = useState<PortfolioCategoryId | 'all'>('all')
  const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT)

  /* FILTER DATA */
  const filtered = useMemo(() => {
    return active === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active)
  }, [active])

  /* RESET ON CATEGORY CHANGE */
  const handleCategoryChange = (cat: PortfolioCategoryId | 'all') => {
    setActive(cat)
    setVisibleCount(INITIAL_LIMIT)
  }

  const visibleItems = filtered.slice(0, visibleCount)

  /* LOAD MORE */
  const handleMore = () => {
    setVisibleCount((prev) => Math.min(prev + STEP, filtered.length))
  }

  /* SHOW LESS */
  const handleLess = () => {
    setVisibleCount((prev) => Math.max(prev - STEP, INITIAL_LIMIT))
  }

  const canShowMore = visibleCount < filtered.length
  const canShowLess = visibleCount > INITIAL_LIMIT

  return (
    <PageShell
      title="SEO Results Portfolio"
      subtitle="Real AI Overview, Google Rankings & SEO Case Studies"
    >
      {/* FILTER BUTTONS */}
      <div className="mb-10 flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider border transition-all duration-300
          ${
            active === 'all'
              ? 'bg-black text-white border-black shadow-lg scale-105'
              : 'bg-white text-gray-700 border-gray-200 hover:border-black'
          }`}
        >
          ALL RESULTS
        </button>

        {portfolioCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider border transition-all duration-300
            ${
              active === cat.id
                ? 'bg-accent text-white border-accent shadow-lg scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:border-accent'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item, i) => (
          <AnimateIn key={item.id} delay={0.05 * i}>
            <PortfolioResultCard item={item} />
          </AnimateIn>
        ))}
      </div>

      {/* SMOOTH BUTTONS */}
      <div className="mt-10 flex justify-center gap-4">

        {/* SHOW LESS */}
        <AnimatePresence>
          {canShowLess && (
            <motion.button
              key="less"
              onClick={handleLess}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 text-sm font-semibold rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-sm"
            >
              Show Less ↑
            </motion.button>
          )}
        </AnimatePresence>

        {/* VIEW MORE */}
        <AnimatePresence>
          {canShowMore && (
            <motion.button
              key="more"
              onClick={handleMore}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 text-sm font-semibold rounded-full bg-black text-white hover:bg-gray-800 shadow-lg"
            >
              View More ↓
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </PageShell>
  )
}