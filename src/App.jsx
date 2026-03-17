import { useEffect, useState } from 'react'
import './App.css'

const company = {
  name: 'Mavenreno Enterprises',
  subtitle: 'Hospital Infrastructure Solutions',
  tagline: 'Simple, reliable hospital project support.',
  description:
    'We help hospitals set up new units and upgrade old ones with clear planning and smooth execution.',
  stats: [
    { value: '24/7', label: 'project support' },
    { value: 'MEP + BM', label: 'team coordination' },
    { value: 'On-Time', label: 'handover focus' },
  ],
  contact: {
    phone: '+91 63928 63640',
    email: 'projects@mavenreno.com',
    address: 'Healthcare Business District, New Delhi, India',
  },
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

const services = [
  {
    title: 'Big Machine Installation',
    text: 'Setup support for MRI, CT, cath lab, and other heavy medical systems.',
  },
  {
    title: 'Modular OT & ICU',
    text: 'End-to-end planning and setup for OT, ICU, and critical care areas.',
  },
  {
    title: 'CSSD & Sterile Areas',
    text: 'Better sterile workflows with practical clean-zone layouts.',
  },
  {
    title: 'Equipment Planning',
    text: 'Right equipment list, vendor alignment, and smooth procurement support.',
  },
]

const aboutPoints = [
  'Clear communication from day one',
  'Practical planning for real hospital workflows',
  'Fast response for urgent project needs',
]

const processSteps = [
  {
    title: 'Plan',
    text: 'We review scope, timeline, and site needs.',
  },
  {
    title: 'Install',
    text: 'We align teams and track setup progress daily.',
  },
  {
    title: 'Handover',
    text: 'We close gaps and support final readiness.',
  },
]

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('mavenreno-theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('mavenreno-theme', theme)
  }, [theme])

  const isLightTheme = theme === 'light'
  const themeLabel = isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Mavenreno Enterprises home">
          <span className="brand-mark">ME</span>
          <span>
            <strong>{company.name}</strong>
            <small>{company.subtitle}</small>
          </span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={themeLabel}
            title={themeLabel}
            onClick={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
          >
            {isLightTheme ? '🌙' : '☀️'}
          </button>
          <a className="nav-cta" href="#contact">
            Get Quote
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Hospital setup made easy</p>
            <h1>Hospital projects, done right.</h1>
            <p className="hero-text">{company.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                View Services
              </a>
              <a className="button button-secondary" href="#contact">
                Talk to Us
              </a>
            </div>
            <ul className="stats-grid" aria-label="Company highlights">
              {company.stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-panel">
            <article className="panel-card gradient-card">
              <p className="panel-label">What we do</p>
              <h2>{company.tagline}</h2>
              <ul className="quick-list">
                <li>Planning support</li>
                <li>Installation coordination</li>
                <li>Ready-to-use handover</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="trust-strip" aria-label="Trust indicators">
          <div>
            <span>Quick response</span>
            <p>You get updates without chasing teams.</p>
          </div>
          <div>
            <span>Clear workflow</span>
            <p>Every task has ownership and timeline.</p>
          </div>
          <div>
            <span>Practical execution</span>
            <p>Solutions that work on real sites.</p>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About us</p>
            <h2>A reliable partner for hospital teams.</h2>
          </div>
          <div className="about-grid">
            <article className="content-card">
              <p>
                Mavenreno Enterprises supports hospitals with planning, equipment setup, and final
                readiness. We keep work simple, transparent, and on schedule.
              </p>
            </article>
            <article className="content-card emphasis-card">
              <h3>Why clients choose us</h3>
              <ul className="feature-list">
                {aboutPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>What we can help you with.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section process-section">
          <div className="section-heading">
            <p className="eyebrow">Our process</p>
            <h2>Simple 3-step delivery.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span>{`0${index + 1}`}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="contact-card primary-contact">
            <p className="eyebrow">Contact us</p>
            <h2>Let’s start your project.</h2>
            <p>Share your requirement, and our team will get back quickly.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${company.contact.email}`}>
                Email Us
              </a>
              <a className="button button-secondary" href={`tel:${company.contact.phone.replace(/\s+/g, '')}`}>
                Call Now
              </a>
            </div>
          </div>

          <div className="contact-card contact-details">
            <div>
              <span>Phone</span>
              <a href={`tel:${company.contact.phone.replace(/\s+/g, '')}`}>{company.contact.phone}</a>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
            </div>
            <div>
              <span>Address</span>
              <p>{company.contact.address}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>{company.name}</strong>
          <p>Clear support for hospital infrastructure projects.</p>
        </div>
        <div className="footer-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
