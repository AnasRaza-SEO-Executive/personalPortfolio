import {
  FileText,
  Link2,
  MapPin,
  PenTool,
  Settings,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'

export const site = {
  name: 'Anas Raza',
  title: 'SEO Specialist',
  headline: 'A Creative Seo Specialist',
  tagline: 'SEO EXECUTIVE · DIGITAL MEDIA MARKETING · ORGANIC GROWTH',
  email: 'connectwithanasraza@gmail.com',
  phone: '+923360376528',
  phoneDisplay: '+92 336 0376528',
  location: 'Karachi, Pakistan',
  city: 'Karachi',
  age: 21,
  birthday: '30 August 2004',
  degree: 'BS Digital Media Marketing',
  linkedin: 'https://www.linkedin.com/in/anasraza-digital',
  whatsapp: 'https://wa.me/923360376528',
  whatsappDisplay: '+92 336 0376528',
}

export const navLinks = [
  { path: '#home', label: 'HOME' },
  { path: '#services', label: 'SERVICES' },
  { path: '#portfolio', label: 'PORTFOLIO' },
  { path: '#resume', label: 'RESUME' },
  { path: '#pricing', label: 'PRICING' },
  { path: '#contact', label: 'CONTACT' },
] as const

export const homeIntro = {
  heading: 'I Help Businesses Rank Higher on Google',
  subheading:
    'From keyword research to technical SEO and backlinks, I help websites attract more organic traffic and generate quality leads.',
}

export const aboutMe = {
  heading: 'A Little About Me',
  body: `My journey started in software engineering, which gave me a strong understanding of how websites are built and work behind the scenes. Later, I moved into sales and marketing, where I learned how customers think and what drives their decisions.

Today, I combine both technical knowledge and marketing experience as an SEO Executive, helping businesses improve their visibility on Google and attract the right audience.`,
}

export const stats = [
  { id: 'experience', label: '2+ Years of SEO Experience' },
  { id: 'clients', label: '5+ Clients Managed' },
  { id: 'rankings', label: 'Top 5 Google Rankings Achieved' },
  { id: 'ai', label: '#1 in AI Overviews' },
  { id: 'freelance', label: 'Open to Freelance' },
]

export interface LogoItem {
  id: string
  name: string
  image: string
  subtitle?: string
  /** Use dark tile when logo image has a dark background */
  darkCard?: boolean
}

export const companies: LogoItem[] = [
  {
    id: 'aheadtech360',
    name: 'AheadTech360',
    image: '/personalPortfolio/images/companies/aheadtech360.png',
    subtitle: 'SEO Executive · Jun 2025 — Present',
  },
  {
    id: 'artimization',
    name: 'Artimization',
    image: '/personalPortfolio/images/companies/artimization.png',
    subtitle: 'Off-Page SEO · Nov 2024 — Apr 2025',
    darkCard: true,
  },
  {
    id: 'interactive-media',
    name: 'Interactive Media',
    image: '/personalPortfolio/images/companies/interactive-media.png',
    subtitle: 'Sales & Leads · May — Oct 2024',
  },
  {
    id: 'alpha-gfx',
    name: 'Alpha GFX',
    image: '/personalPortfolio/images/companies/alpha-gfx.png',
    subtitle: 'Sales Executive · 2022 — 2023',
  },
  {
    id: 'savtech',
    name: 'SavTech Solutions',
    image: '/personalPortfolio/images/companies/savtech.png',
    subtitle: 'Social Media Sales · 2021',
  },
]

export const clients: LogoItem[] = [
  { id: 'dtf-maker', name: 'DTF Maker', image: '/personalPortfolio/images/clients/dtf-maker.png' },
  {
    id: 'fresh-fits',
    name: 'Fresh Fits Activewear',
    image: '/personalPortfolio/images/clients/fresh-fits.png',
    darkCard: true,
  },
  {
    id: 'maniyas-studio',
    name: "Maniya's Studio",
    image: '/personalPortfolio/images/clients/maniyas-studio.png',
    darkCard: true,
  },
  {
    id: 'lofty-creations',
    name: 'Lofty Creations Apparel',
    image: '/personalPortfolio/images/clients/lofty-creations.png',
  },
  {
    id: 'trashedpunk',
    name: 'TrashedPunk',
    image: '/personalPortfolio/images/clients/trashedpunk.png',
    darkCard: true,
  },
  { id: 'grade-labo', name: 'Grade Labo', image: '/personalPortfolio/images/clients/grade-labo.png' },
  { id: 'avanti-printing', name: 'Avanti Printing', image: '/personalPortfolio/images/clients/avanti-printing.png' },
  { id: 'viral-hairstyle', name: 'Viral HairStyle', image: '/personalPortfolio/images/clients/viral-hairstyle.png' },
  {
    id: 'influencive-news',
    name: 'InfluenciveNews',
    image: '/personalPortfolio/images/clients/influencive-news.png',
  },
  { id: 'insider-lyfe', name: 'Insider Lyfe', image: '/personalPortfolio/images/clients/insider-lyfe.png' },
  {
    id: 'prime-cleaning',
    name: 'Prime Cleaning Solutions',
    image: '/personalPortfolio/images/clients/prime-cleaning.png',
  },
]

export type PortfolioCategoryId =
  | 'ai-overview'
  | 'google-results'
  | 'google-search'
  | 'local-seo'
  | 'search-console'
  | 'pinterest'

export const portfolioCategories: { id: PortfolioCategoryId; label: string }[] = [
  { id: 'ai-overview', label: 'AI Overview Results' },
  { id: 'google-results', label: 'Google Search Results' },
  { id: 'local-seo', label: 'Local SEO (GMB)' },
  { id: 'search-console', label: 'Search Console Results' },
  { id: 'pinterest', label: 'Pinterest Dashboard' },
]

export interface PortfolioItem {
  id: string
  category: PortfolioCategoryId
  image: string
  resultType?: string
}

export const portfolioItems: PortfolioItem[] = [

  // AI OVERVIEW
  {
    id: 'ai-1',
    category: 'ai-overview',
    image: '/personalPortfolio/images/portfolio/ai-overview/1.jpeg',
    
  },

  {
    id: 'ai-2',
    category: 'ai-overview',
    image: '/personalPortfolio/images/portfolio/ai-overview/2.jpeg',
    
  },

  {
    id: 'ai-3',
    category: 'ai-overview',
    image: '/personalPortfolio/images/portfolio/ai-overview/3.jpeg',
    
  },

  {
    id: 'ai-4',
    category: 'ai-overview',
    image: '/personalPortfolio/images/portfolio/ai-overview/4.jpeg',
    
  },

  {
    id: 'ai-5',
    category: 'ai-overview',
    image: '/personalPortfolio/images/portfolio/ai-overview/5.jpeg',
    
  },

  {
    id: 'ai-6',
    category: 'ai-overview',
    image: '/personalPortfolio/images/portfolio/ai-overview/6.jpeg',
    
  },
   {
    id: 'ai-7',
    category: 'ai-overview',
    image: '/personalPortfolio/images/portfolio/ai-overview/7.jpeg',
    
  },

  // Google Search Results 
  {
    id: 'g1',
    category: 'google-results',
    image: '/personalPortfolio/images/portfolio/google-results/1.jpeg',
  },
   {
    id: 'g2',
    category: 'google-results',
    image: '/personalPortfolio/images/portfolio/google-results/2.jpeg',
    
  },

   {
    id: 'g3',
    category: 'google-results',
    image: '/personalPortfolio/images/portfolio/google-results/3.jpeg',
    
  },

   {
    id: 'g4',
    category: 'google-results',
    image: '/personalPortfolio/images/portfolio/google-results/4.jpeg',
    
  },

   {
    id: 'g5',
    category: 'google-results',
    image: '/personalPortfolio/images/portfolio/google-results/5.jpeg',
    
  },


  // LOCAL SEO
  {
    id: 'local-1',
    category: 'local-seo',
    image: '/personalPortfolio/images/portfolio/local-seo/1.jpeg',
  },

  {
    id: 'local-2',
    category: 'local-seo',
    image: '/personalPortfolio/images/portfolio/local-seo/2.jpeg',
  },

  {
    id: 'local-3',
    category: 'local-seo',
    image: '/personalPortfolio/images/portfolio/local-seo/3.jpeg',
  },

   {
    id: 'local-4',
    category: 'local-seo',
    image: '/personalPortfolio/images/portfolio/local-seo/4.jpeg',
  },

   {
    id: 'local-5',
    category: 'local-seo',
    image: '/personalPortfolio/images/portfolio/local-seo/5.jpeg',
  },

  // SEARCH CONSOLE
  {
    id: 'gsc-1',
    category: 'search-console',
    image: '/personalPortfolio/images/portfolio/search-console/1.jpeg',
  },

  {
    id: 'gsc-2',
    category: 'search-console',
    image: '/personalPortfolio/images/portfolio/search-console/2.jpeg',
  },

  {
    id: 'gsc-3',
    category: 'search-console',
    image: '/personalPortfolio/images/portfolio/search-console/3.jpeg',
  },

  {
    id: 'gsc-4',
    category: 'search-console',
    image: '/personalPortfolio/images/portfolio/search-console/4.jpeg',
  },
  
  {
    id: 'gsc-5',
    category: 'search-console',
    image: '/personalPortfolio/images/portfolio/search-console/5.jpeg',
  },


  // PINTEREST
  {
    id: 'pin-1',
    category: 'pinterest',
    image: '/personalPortfolio/images/portfolio/pinterest/1.jpeg',
  },

  {
    id: 'pin-2',
    category: 'pinterest',
    image: '/personalPortfolio/images/portfolio/pinterest/2.jpeg',
  },

  {
    id: 'pin-3',
    category: 'pinterest',
    image: '/personalPortfolio/images/portfolio/pinterest/3.jpeg',
  },

]

export interface CaseStudy {
  id: string
  title: string
  client: string
  category: string
  summary: string
  results: string[]
  image: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'dtf-ai-overview',
    title: 'Multi-City AI Overview Dominance',
    client: 'DTF Transfer Brand',
    category: 'AI Overview SEO',
    summary:
      'Secured AI Overview visibility across 5+ US cities for high-intent DTF transfer keywords.',
    results: [
      'dtf transfer in Chicago, IL',
      'dtf transfers in Milwaukee, WI',
      'dtf transfers in Indianapolis, IN',
      'dtf transfers in St. Louis, MO',
      'dtf tranfers in Detroit, MI',
      'weare lofty creations',
    ],
    image: '/personalPortfolio/images/portfolio/ai-overview/dtf-chicago.jpg',
  },
  {
    id: 'local-gmb',
    title: 'Local SEO & GMB Optimization',
    client: 'Service Business',
    category: 'Local SEO',
    summary: 'Improved map pack rankings and call volume through GMB and citation work.',
    results: ['Top 3 local pack positions', 'Increased direction requests', 'More qualified calls'],
    image: '/personalPortfolio/images/portfolio/local-seo/gmb-1.jpeg',
  },
]

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'on-page',
    title: 'On-Page SEO',
    description: 'Title tags, meta, headings, internal linking, and content optimization.',
    icon: FileText,
  },
  {
    id: 'off-page',
    title: 'Off-Page SEO & Link Building',
    description: 'Quality backlinks, outreach, and authority building for stronger rankings.',
    icon: Link2,
  },
  {
    id: 'technical',
    title: 'Technical SEO',
    description: 'Site speed, crawlability, indexing, schema, and Core Web Vitals fixes.',
    icon: Settings,
  },
  {
    id: 'local',
    title: 'Local SEO & GMB',
    description: 'Google Business Profile, local citations, and map pack optimization.',
    icon: MapPin,
  },
  {
    id: 'ai-overview',
    title: 'AI Overview Optimization',
    description: 'Get cited in Google AI Overviews and AI-powered search results.',
    icon: TrendingUp,
  },
  {
    id: 'content',
    title: 'Content & Keyword Strategy',
    description: 'Research, clustering, and SEO content that ranks and converts.',
    icon: PenTool,
  },
]

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  location?: string
  description: string
  bullets?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'AheadTech360',
    role: 'SEO Executive',
    period: 'June 2025 — Present',
    location: 'On-site',
    description: 'Leading end-to-end SEO for client accounts.',
    bullets: [
      'Managed complete SEO operations including on-page, off-page, technical, and local SEO.',
      'Performed keyword research, SEO audits, optimized meta titles/descriptions, and SEO-friendly URLs.',
      'Handled content updates, GMB management, and performance tracking.',
    ],
  },
  {
    company: 'Artimization',
    role: 'Off-Page SEO & Backlink Building',
    period: 'November 2024 — April 2025',
    location: 'On-site',
    description: 'Pinterest-led off-page SEO and backlink growth.',
    bullets: [
      'Used Midjourney-generated visuals with SEO-optimized titles, descriptions, and keywords for high-ranking Pinterest posts.',
      'Drove organic traffic and created quality backlinks.',
    ],
  },
  {
    company: 'Interactive Media',
    role: 'Sales & Lead Generation Executive',
    period: 'May 2024 — October 2024',
    description: 'Sales pipeline and developer collaboration.',
    bullets: [
      'Generated and converted leads while collaborating with developers to align on business goals and drive sales.',
    ],
  },
  {
    company: 'Alpha GFX',
    role: 'Sales Executive',
    period: 'June 2022 — October 2023',
    description: 'Twitch streamer outreach and lead generation.',
    bullets: [
      'Convinced and pitched streamers to generate leads through Twitch.',
    ],
  },
  {
    company: 'SavTech Solutions',
    role: 'Social Media Sales Executive',
    period: 'May 2021 — December 2021',
    description: 'Facebook-based lead generation for sales operations.',
    bullets: [
      'Generated leads through Facebook as part of sales operations.',
    ],
  },
]

export interface EducationEntry {
  degree: string
  period: string
  institution: string
}

export const educationEntries: EducationEntry[] = [
  {
    degree: 'BS in Digital Media Marketing',
    period: '2026 — 2030',
    institution: 'AIMS University',
  },
  {
    degree: 'Diploma in Software Engineering',
    period: '2021 — 2025',
    institution: 'Aptech Shahrah-e-Faisal',
  },
  {
    degree: 'HSC in Computer Science',
    period: '2022 — 2024',
    institution: 'Islamia Science College',
  },
  {
    degree: 'SSC in Computer Science',
    period: '2016 — 2022',
    institution: 'Iqra School (P.E.C.H.S)',
  },
]

export const skills = [
  'On-Page SEO',
  'Off-Page SEO',
  'Technical SEO',
  'Local SEO',
  'AI Overview SEO',
  'Keyword Research',
  'Google Search Console',
  'Google Analytics',
  'Ahrefs',
  'SEMrush',
  'Link Building',
  'Content Strategy',
]

export const tools = ['Ahrefs', 'SEMrush', 'Google Analytics', 'Search Console', 'Screaming Frog']

export const heroImage = '/personalPortfolio/images/profile/hero.jpg?v=3'
export const aboutImage = '/personalPortfolio/images/profile/hero.jpg?v=3'

export const heroSection = {
  experienceYears: '2+',
  experienceLabel: 'YEARS OF EXPERIENCE',
}

export type HeroTabId = 'myself' | 'education' | 'skills' | 'experience'

export const heroTabs: { id: HeroTabId; label: string }[] = [
  { id: 'myself', label: 'My Self' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
]

/** Hero education tab cards */
export const education = educationEntries.map((e) => ({
  period: e.period.toUpperCase(),
  title: e.degree,
  company: e.institution,
}))

/** Cards shown in hero “My Self” tab */
export const heroHighlights = [
  { period: 'EXPERIENCE', title: '2+ Years SEO', company: 'Agency & Freelance' },
  { period: 'CLIENTS', title: '5+ Managed', company: 'Active Accounts' },
  { period: 'DEGREE', title: 'BS Digital Media', company: 'AIMS University' },
  { period: 'LOCATION', title: 'Karachi', company: 'Pakistan · Age 21' },
]

export function formatHeroPeriod(period: string) {
  return period.replace(/\s*—\s*present/gi, ' AT PRESENT').toUpperCase()
}

export const marqueeItems = [
  'AI OVERVIEW SEO',
  'LOCAL SEO',
  'TECHNICAL SEO',
  'LINK BUILDING',
  'KEYWORD RESEARCH',
  'GMB OPTIMIZATION',
]

export const socialLinks = [
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'WhatsApp', href: site.whatsapp },
]




