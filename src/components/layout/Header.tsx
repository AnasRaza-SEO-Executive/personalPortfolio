import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../../data/content'
import { useContact } from '../../context/ContactContext'
import { Button } from '../ui/Button'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openContact } = useContact()


  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            AR
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-xs font-medium tracking-widest text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="outline"
            onClick={() => openContact()}
          >
            Let&apos;s Talk
          </Button>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-charcoal px-4 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-xs font-medium tracking-widest text-white/70 transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" className="mt-2 w-full" onClick={() => openContact()}>
              Let&apos;s Talk
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
