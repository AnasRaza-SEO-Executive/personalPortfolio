import { navLinks, site, socialLinks } from '../../data/content'
import { useContact } from '../../context/ContactContext'

export function Footer() {
  const { openContact } = useContact()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-charcoal pt-20 pb-8 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        {/* Let's Talk */}
        <button
          type="button"
          onClick={() => openContact()}
          className="text-5xl font-bold transition-all duration-500 hover:text-accent hover:scale-105 sm:text-7xl lg:text-8xl"
        >
          Let&apos;s Talk
        </button>

        {/* Navigation */}
        <nav
          className="mt-10 flex flex-wrap justify-center gap-6"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-xs font-medium uppercase tracking-widest text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium uppercase tracking-widest text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <p>
            © {year} {site.name}. All Rights Reserved.
          </p>

          <p className="text-white/30">
            Helping Businesses Rank Higher on Google
          </p>
        </div>
      </div>
    </footer>
  )
}