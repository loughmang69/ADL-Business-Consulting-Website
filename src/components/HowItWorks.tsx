import React from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Free Initial Consultation',
    body: "Tell me about your business — where things stand and what's keeping you up at night. No commitment required, no sales pitch. Just a conversation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H8l-4 4V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 11h10M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Clear Recommendations',
    body: "I'll assess your situation and put together a straightforward plan. You'll know exactly what I'd do, why, and what it would cost before signing anything.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 4h12a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 10l2 2 6-4M10 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'We Get to Work',
    body: 'Once we agree on scope and timeline, I handle the engagement from start to finish — whether that\'s a one-time project or ongoing support.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 14l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Ongoing Access',
    body: "Questions don't always come up at convenient times. As a client, you have direct access to me — not a call center, not a junior associate.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 6l4 4M22 6l-4 4M6 22l4-4M22 22l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
]

const HowItWorks = ({ tweaks }: { tweaks?: any }) => {
  const accent = tweaks?.accentColor || 'var(--c-accent)'

  return (
    <section id="how-it-works" data-screen-label="How It Works" style={{
      background: 'var(--c-navy-deepest)', padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-block', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: accent, marginBottom: 12,
          }}>The Process</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            color: '#fff', letterSpacing: '-0.03em', marginBottom: 16,
          }}>How It Works</h2>
          <p style={{
            fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6,
            maxWidth: 520, margin: '0 auto',
          }}>Simple, transparent, and built around your schedule.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 32,
        }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{
              position: 'relative',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              padding: '36px 28px',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              {/* Step number */}
              <div style={{
                fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em',
                color: 'rgba(103,203,234,0.15)', lineHeight: 1,
                position: 'absolute', top: 20, right: 24,
                fontVariantNumeric: 'tabular-nums',
              }}>{step.number}</div>

              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(103,203,234,0.12)',
                border: `1px solid rgba(103,203,234,0.25)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: accent,
              }}>{step.icon}</div>

              <h3 style={{
                fontSize: 18, fontWeight: 700, color: '#fff',
                letterSpacing: '-0.02em', lineHeight: 1.3,
              }}>{step.title}</h3>

              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7,
              }}>{step.body}</p>

              {/* Connector arrow (not on last) */}
              {i < STEPS.length - 1 && (
                <div style={{
                  display: 'none', // visible via grid layout; shown at larger widths if needed
                }}/>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="#contact" onClick={(e) => {
            e.preventDefault()
            const el = document.querySelector('#contact')
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
          }} style={{
            display: 'inline-block', padding: '16px 40px', borderRadius: 100,
            background: accent, color: 'var(--c-navy-deep)',
            fontWeight: 800, fontSize: 16, textDecoration: 'none',
            letterSpacing: '-0.01em',
            boxShadow: '0 4px 28px rgba(103,203,234,0.35)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 36px rgba(103,203,234,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 28px rgba(103,203,234,0.35)' }}
          >Start with a Free Consultation</a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
