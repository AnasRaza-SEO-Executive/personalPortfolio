import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye } from 'lucide-react'
import { useState } from 'react'
import type { PortfolioItem } from '../../data/content'

interface PortfolioResultCardProps {
  item: PortfolioItem
}

/* AUTO BADGE */
const getBadge = (category: string) => {
  switch (category) {
    case 'ai-overview':
      return 'AI Overview'
    case 'google-results':
      return 'Google Results'
    case 'google-search':
      return 'Google Search'
    case 'local-seo':
      return 'Local SEO'
    case 'search-console':
      return 'Search Console'
    case 'pinterest':
      return 'Pinterest'
    default:
      return 'SEO Result'
  }
}

export function PortfolioResultCard({ item }: PortfolioResultCardProps) {
  const [imgError, setImgError] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CARD */}
      <motion.article
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* IMAGE */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

          {!imgError ? (
            <img
              src={item.image}
              alt="portfolio"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-200">
              <span className="text-sm text-gray-600">Image not found</span>
            </div>
          )}

          {/* BADGE */}
          <span className="absolute right-4 top-4 z-20 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
            {getBadge(item.category)}
          </span>

          {/* HOVER CTA */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-300">

            <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center gap-2 transition-all duration-300">

              <Eye size={22} className="text-white" />

              <span className="text-white text-sm font-semibold border border-white/40 px-4 py-1 rounded-full backdrop-blur-sm">
                View Image
              </span>

              <span className="text-[10px] text-white/70">
                Click to open full preview
              </span>

            </div>

          </div>

        </div>
      </motion.article>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full shadow-lg"
              >
                <X size={18} />
              </button>

              {/* IMAGE */}
              <img
                src={item.image}
                alt="portfolio full"
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}