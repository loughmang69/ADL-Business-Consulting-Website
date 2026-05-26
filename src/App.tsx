import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Reviews from './components/Reviews'
import ConsultationForm from './components/ConsultationForm'
import Blog from './components/Blog'
import Footer from './components/Footer'

const SITE_CONFIG = {
  accentColor: 'var(--c-accent)',
}

function App() {
  return (
    <>
      <Nav tweaks={SITE_CONFIG} />
      <Hero tweaks={SITE_CONFIG} />
      <Services tweaks={SITE_CONFIG} />
      <HowItWorks tweaks={SITE_CONFIG} />
      <About tweaks={SITE_CONFIG} />
      <Testimonials tweaks={SITE_CONFIG} />
      <Reviews tweaks={SITE_CONFIG} />
      <ConsultationForm tweaks={SITE_CONFIG} />
      <Blog tweaks={SITE_CONFIG} />
      <Footer tweaks={SITE_CONFIG} />
    </>
  )
}

export default App
