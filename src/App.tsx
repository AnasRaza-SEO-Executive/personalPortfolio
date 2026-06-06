import { ContactModal } from './components/ContactModal'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ContactProvider } from './context/ContactContext'

import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { ServicesPage } from './pages/ServicesPage'
import { ResumePage } from './pages/ResumePage'
import { PricingPage } from './pages/PricingPage'
import { ContactPage } from './pages/ContactPage'


function App() {
  return (
    <ContactProvider>
      <Header />

      <main>
        <section id="home">
          <HomePage />
        </section>

        <section id="services">
          <ServicesPage />
        </section>

        <section id="portfolio">
          <PortfolioPage />
        </section>

        <section id="case-studies">
          <CaseStudiesPage />
        </section>

        <section id="resume">
          <ResumePage />
        </section>

        <section id="pricing">
          <PricingPage />
        </section>


        <section id="contact">
          <ContactPage />
        </section>
      </main>

      <Footer />
      <ContactModal />
    </ContactProvider>
  )
}

export default App