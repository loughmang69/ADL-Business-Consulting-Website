import React from 'react'
import { GOOGLE_PROFILE_URL } from './Reviews'

const Footer = ({ tweaks }: { tweaks?: any }) => {
  const accent = tweaks?.accentColor || 'var(--c-accent)'

  // L1: use live year instead of hardcoded 2026
  const year = new Date().getFullYear()

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    // L7: offset updated to match standardized nav height of 80px
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: '#0a172e',
      padding: '64px 24px 32px',
      color: 'rgba(255,255,255,0.6)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48, marginBottom: 56,
        }}>
          {/* Brand col */}
          <div>
            {/* M9: logo height reduced from 156px → 64px */}
            <img src="/uploads/logo.jpg" alt="ADL Business Consulting" style={{ height: 64, width: 'auto', borderRadius: 8, marginBottom: 20 }} />
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              CPA-led business consulting for small businesses and individuals across the Bay Area.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 20, flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/garrettloughman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Garrett Loughman on LinkedIn (opens in new tab)"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  fontSize: 13, fontWeight: 500, transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = accent)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M2 1a1 1 0 100 2 1 1 0 000-2zM1 5h2v10H1V5zm4 0h2v1.4C7.5 5.5 8.5 5 9.5 5c2.2 0 3.5 1.5 3.5 3.7V15h-2V9.2c0-1.2-.6-1.9-1.6-1.9-1.1 0-1.7.8-1.7 1.9V15H5V5z"/>
                </svg>
                LinkedIn
              </a>

              {/* Google rating badge
                  NOTE: Rating ("5.0") and star count are HARDCODED.
                  To update: edit the <span>5.0</span> text and the stars array below. */}
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="See our Google Reviews"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '6px 12px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none', fontSize: 13, fontWeight: 600,
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                <svg width="14" height="14" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                  <path d="M44.5 28.5c0-1.04-.09-2.04-.26-3H28v5.67h9.26a7.92 7.92 0 01-3.44 5.2v4.32h5.57c3.26-3 5.11-7.43 5.11-12.19z" fill="#4285F4"/>
                  <path d="M28 45c4.64 0 8.54-1.54 11.39-4.17l-5.57-4.32c-1.54 1.04-3.51 1.65-5.82 1.65-4.48 0-8.27-3.02-9.62-7.09H12.6v4.46A17 17 0 0028 45z" fill="#34A853"/>
                  <path d="M18.38 31.07A10.2 10.2 0 0117.85 28c0-1.06.18-2.09.53-3.07v-4.46H12.6A17 17 0 0011 28c0 2.74.66 5.34 1.6 7.53l5.78-4.46z" fill="#FBBC05"/>
                  <path d="M28 17.84c2.52 0 4.78.87 6.56 2.57l4.92-4.92C36.53 12.73 32.64 11 28 11A17 17 0 0012.6 20.47l5.78 4.46C19.73 20.86 23.52 17.84 28 17.84z" fill="#EA4335"/>
                </svg>
                <span style={{ color: '#fff' }}>5.0</span>
                <span style={{ display: 'inline-flex', gap: 1, color: '#fbbc05' }} aria-hidden="true">
                  {[0,1,2,3,4].map(i => (
                    <svg key={i} width="10" height="10" viewBox="0 0 18 18" fill="currentColor">
                      <path d="M9 1l2 5.5H17l-4.9 3.6L13.8 17 9 13.4 4.2 17l1.7-6.9L1 6.5h6z"/>
                    </svg>
                  ))}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>on Google</span>
              </a>
            </div>
          </div>

          {/* Services col */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Entity Structure', 'Accounting & Bookkeeping', 'Tax Return Review', 'Payroll Implementation', 'Technology Setup', 'Process Optimization'].map(s => (
                <a
                  key={s}
                  href="#services"
                  onClick={(e) => scrollTo(e, '#services')}
                  style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Phone</div>
                <a href="tel:5103202724" style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontWeight: 500 }}>510-320-2724</a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Email</div>
                <a href="mailto:info@adlbusinessconsulting.com" style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', wordBreak: 'break-all' }}>info@adlbusinessconsulting.com</a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Location</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>PO Box 1208<br/>Fremont, CA 94538</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          {/* Legal disclaimer */}
          <div id="disclaimer" style={{
            width: '100%', marginBottom: 20,
            padding: '16px 20px', borderRadius: 10,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)',
          }}>
            ADL Business Consulting, PC is not licensed to provide legal advice. All statements made are either from a tax strategy perspective or for educational purposes.
          </div>
          <div style={{ fontSize: 13 }}>
            © {year} ADL Business Consulting, PC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Blog', href: '/blog/' },
              { label: 'Contact', href: '#contact' },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={l.href.startsWith('#') ? (e) => scrollTo(e, l.href) : undefined}
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
