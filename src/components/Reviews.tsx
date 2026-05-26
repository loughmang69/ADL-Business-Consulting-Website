import React from 'react'

const GOOGLE_PROFILE_URL = 'https://www.google.com/search?q=ADL+Business+Consulting+PC+Garrett+Loughman+CPA+Fremont+CA'
const GOOGLE_REVIEW_URL = 'https://g.page/r/CUJAnBWd91buEAE/review'

export { GOOGLE_PROFILE_URL }

const STATIC_REVIEW = {
  name: 'Valerie L.',
  role: 'Owner, Excel Cleaning, LLC',
  stars: 5, // Last verified: 2026-05-26 - update if rating changes
  title: "Completely transformed my business. I can't recommend ADL enough.",
  paragraphs: [
    'Before working with Garrett at ADL Business Consulting, I was running Excel Cleaning as a sole proprietor, doing everything manually and honestly just hoping for the best when tax season rolled around. I had no real back office, no structure, and no idea how much it was costing me.',
    'Garrett changed all of that. He walked me through the real benefits of forming an LLC, including liability protection, tax flexibility, and credibility with clients, and then coordinated directly with my attorneys to make it happen. From there, it snowballed in the best way. He helped me redesign my logo and branding, overhauled my entire accounting process, and set me up with a new payroll provider that saves me money while giving me more services than I had before.',
    "What really sets Garrett apart is how thorough he is. He handles my monthly bookkeeping, tracks my federal, state, and local tax obligations so I'm never caught off guard with a big tax bill, and even remits my sales taxes for me every month. He built out over two dozen operational templates that have made running the day-to-day so much smoother. And he's always looking for ways to cut costs without cutting corners, finding savings I never would have noticed on my own.",
    'On top of all of it, he took the time to actually educate me on personal finance and how to use my business strategically for tax savings. I feel like I finally understand my own finances.',
    "If you're a small business owner who feels like you're just figuring it out as you go, Garrett is exactly who you need in your corner. ADL Business Consulting didn't just help me, they transformed the way I operate.",
  ],
}

const Reviews = ({ tweaks }: { tweaks?: any }) => {
  const accent = tweaks?.accentColor || 'var(--c-accent)'
  const [expanded, setExpanded] = React.useState(false)

  return (
    <section id="reviews" data-screen-label="Google Reviews" style={{
      background: '#fff', padding: '100px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--c-navy-soft)', marginBottom: 12,
        }}>Google Reviews</div>

        <h2 style={{
          fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800,
          color: 'var(--c-navy-deepest)', letterSpacing: '-0.03em', marginBottom: 16,
        }}>See What Our Clients Say on Google</h2>

        <p style={{
          fontSize: 17, color: 'var(--c-text-muted)', lineHeight: 1.6,
          maxWidth: 560, margin: '0 auto 48px',
        }}>
          Real reviews from real clients, verified on our Google Business Profile.
        </p>

        {/* Static review card */}
        <div style={{
          maxWidth: 680, margin: '0 auto 48px',
          background: 'var(--c-bg-soft)',
          border: '1px solid rgba(20,43,86,0.09)',
          borderRadius: 20, padding: '36px 40px',
          textAlign: 'left',
          boxShadow: '0 2px 20px rgba(20,43,86,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20, gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 46, height: 46, borderRadius: '50%',
                background: 'var(--c-navy)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, fontWeight: 800, flexShrink: 0,
              }}>VL</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--c-navy-deepest)', marginBottom: 2 }}>{STATIC_REVIEW.name}</div>
                <div style={{ fontSize: 13, color: 'var(--c-text-muted)' }}>{STATIC_REVIEW.role}</div>
              </div>
            </div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
              <path d="M30.5 16.3c0-.6-.05-1.17-.15-1.72H16v3.25h8.19a7 7 0 01-3.04 4.59v3.82h4.92C28.9 24.1 30.5 20.5 30.5 16.3z" fill="#4285F4"/>
              <path d="M16 31c4.1 0 7.53-1.36 10.07-3.68l-4.92-3.82c-1.36.91-3.1 1.45-5.15 1.45c-3.96 0-7.31-2.67-8.51-6.26H2.43v3.94A15.19 15.19 0 0016 31z" fill="#34A853"/>
              <path d="M7.49 18.69A9.08 9.08 0 017.02 16c0-.93.16-1.83.47-2.69V9.37H2.43A15.19 15.19 0 001 16c0 2.44.58 4.75 1.43 6.63l5.06-3.94z" fill="#FBBC05"/>
              <path d="M16 6.8c2.24 0 4.25.77 5.83 2.27l4.37-4.37C23.52 2.14 20.1.8 16 .8A15.19 15.19 0 002.43 9.37l5.06 3.94C8.69 9.47 12.04 6.8 16 6.8z" fill="#EA4335"/>
            </svg>
          </div>

          <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
            {[0,1,2,3,4].map(i => (
              <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#d4a017">
                <path d="M9 1.5l1.95 4.25L16 6.6l-3.5 3.4.83 4.8L9 12.6l-4.33 2.2.83-4.8L2 6.6l5.05-.85z"/>
              </svg>
            ))}
          </div>

          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--c-navy-deepest)', marginBottom: 16, lineHeight: 1.4 }}>
            {STATIC_REVIEW.title}
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              maxHeight: expanded ? 'none' : '100px',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}>
              {STATIC_REVIEW.paragraphs.map((para, i) => (
                <p key={i} style={{
                  fontSize: 15, lineHeight: 1.75, color: 'var(--c-text-mid)',
                  margin: 0, marginBottom: i < STATIC_REVIEW.paragraphs.length - 1 ? 14 : 0,
                }}>{para}</p>
              ))}
            </div>
            {!expanded && (
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 52,
                background: 'linear-gradient(to bottom, transparent, var(--c-bg-soft))',
                pointerEvents: 'none',
              }}/>
            )}
          </div>

          <button onClick={() => setExpanded(e => !e)} style={{
            marginTop: 12, background: 'none', border: 'none', padding: 0,
            fontSize: 14, fontWeight: 700, color: 'var(--c-navy)',
            cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4,
          }}>
            {expanded ? 'See less' : 'See more'}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(20,43,86,0.08)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L8.5 4.5H12L9.25 6.75 10.25 10.5 7 8.5 3.75 10.5 4.75 6.75 2 4.5H5.5z" fill="#d4a017"/>
            </svg>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--c-text-faint)', letterSpacing: '0.03em' }}>Verified Google Review</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '13px 28px', borderRadius: 100,
            background: 'var(--c-navy)', color: '#fff',
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
            transition: 'background 0.2s, transform 0.15s',
            boxShadow: '0 4px 18px rgba(26,61,110,0.2)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--c-navy-deep)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--c-navy)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1l2 5.5H17l-4.9 3.6L13.8 17 9 13.4 4.2 17l1.7-6.9L1 6.5h6z" fill="currentColor"/>
            </svg>
            Leave Us a Review
          </a>
          <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 28px', borderRadius: 100,
            background: 'transparent', color: 'var(--c-navy)',
            fontWeight: 600, fontSize: 15, textDecoration: 'none',
            border: '1.5px solid rgba(26,61,110,0.25)',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-navy)'; e.currentTarget.style.background = 'rgba(26,61,110,0.04)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,61,110,0.25)'; e.currentTarget.style.background = 'transparent' }}
          >
            View Google Profile
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews
