import React from 'react'

const BLOG_POSTS = [
  {
    slug: 'ai-and-accounting',
    tag: 'AI',
    tagColor: 'var(--c-navy-deep)',
    date: 'May 20, 2026',
    readTime: '7 min read',
    title: "AI Is Not Replacing Your Accountant. It's Replacing Your Old One.",
    excerpt: "Every few months someone asks me whether AI is going to take my job. My honest answer: not the job I do today. But the one I did in 2012? That one's already gone. Here's what AI is actually doing in accounting, where it still falls short, and what it means for small business owners.",
    author: 'Garrett Loughman, CPA',
  },
  {
    slug: 'llc-vs-s-corp',
    tag: 'Tax Strategy',
    tagColor: 'var(--c-navy-deep)',
    date: 'April 28, 2026',
    readTime: '5 min read',
    title: 'LLC vs. S-Corp: Which Entity Structure Saves You More in Taxes?',
    excerpt: 'One of the most impactful decisions a small business owner can make is choosing the right entity structure. The difference between an LLC and an S-Corp can mean thousands of dollars in self-employment tax savings each year, but only if the timing and setup are right.',
    author: 'Garrett Loughman, CPA',
  },
  {
    slug: 'quickbooks-setup-mistakes',
    tag: 'Technology',
    tagColor: '#1a527a',
    date: 'April 15, 2026',
    readTime: '4 min read',
    title: '5 QuickBooks Setup Mistakes That Cost Small Businesses Money',
    excerpt: "Most small businesses set up QuickBooks in a hurry and never look back until tax season reveals a year of miscategorized transactions. Here are the five most common setup errors we see, and how to fix them before they become expensive problems.",
    author: 'Garrett Loughman, CPA',
  },
  {
    slug: 'payroll-california-guide',
    tag: 'Payroll',
    tagColor: 'var(--c-navy)',
    date: 'April 3, 2026',
    readTime: '6 min read',
    title: "California Payroll Compliance: A Small Business Owner's Guide",
    excerpt: "California has some of the most complex payroll requirements in the country. From SDI contributions to pay stub requirements and final paycheck rules. Staying compliant isn't optional. This guide walks you through what every California small business owner needs to know.",
    author: 'Garrett Loughman, CPA',
  },
  {
    slug: 'bookkeeping-habits',
    tag: 'Accounting',
    tagColor: '#225e89',
    date: 'March 20, 2026',
    readTime: '4 min read',
    title: '4 Monthly Bookkeeping Habits That Keep Your Business Tax-Ready All Year',
    excerpt: "Most small business owners only think about their books when tax season hits. But staying organized throughout the year doesn't have to be complicated. These four habits take less than an hour a month and will save you hours of stress and potentially thousands in missed deductions.",
    author: 'Garrett Loughman, CPA',
  },
]

const Blog = ({ tweaks }: { tweaks?: any }) => {
  const accent = tweaks?.accentColor || 'var(--c-accent)'

  return (
    <section id="blog" data-screen-label="Blog" style={{
      background: '#fff', padding: '100px 24px',
      borderTop: '1px solid rgba(20,43,86,0.07)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-navy-soft)', marginBottom: 12,
          }}>Insights &amp; Resources</div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            color: 'var(--c-navy-deepest)', letterSpacing: '-0.03em', marginBottom: 16,
          }}>Financial Insights for<br/>Small Business Owners</h2>
          <p style={{
            fontSize: 17, color: 'var(--c-text-muted)', lineHeight: 1.6,
            maxWidth: 520, margin: '0 auto',
          }}>Practical guidance on tax strategy, accounting, and business growth, written by a CPA who works with small businesses every day.</p>
        </div>

        {/* Featured post */}
        <a
          href={`/blog/${BLOG_POSTS[0].slug}.html`}
          style={{
            display: 'grid', gridTemplateColumns: '1fr auto',
            gap: 32, alignItems: 'start',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, var(--c-navy-deepest) 0%, var(--c-navy) 100%)',
            borderRadius: 20, padding: '48px 48px',
            marginBottom: 28,
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 32px rgba(20,43,86,0.18)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(20,43,86,0.25)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(20,43,86,0.18)' }}
        >
          <div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100,
                background: 'rgba(103,203,234,0.2)', color: accent,
              }}>{BLOG_POSTS[0].tag}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{BLOG_POSTS[0].date}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>· {BLOG_POSTS[0].readTime}</span>
            </div>
            <h3 style={{
              fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800,
              color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2,
              marginBottom: 16,
            }}>{BLOG_POSTS[0].title}</h3>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 0 }}>
              {BLOG_POSTS[0].excerpt}
            </p>
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(103,203,234,0.2)', border: `1px solid ${accent}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, color: accent,
              }}>GL</div>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{BLOG_POSTS[0].author}</span>
            </div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.08)', borderRadius: 10,
            padding: '8px 16px', fontSize: 13, color: 'rgba(255,255,255,0.6)',
            fontWeight: 600, whiteSpace: 'nowrap', alignSelf: 'flex-start',
            flexShrink: 0,
          }}>
            Read article →
          </div>
        </a>

        {/* Grid of remaining posts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {BLOG_POSTS.slice(1).map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}.html`}
              style={{
                display: 'flex', flexDirection: 'column', gap: 14,
                textDecoration: 'none',
                background: 'var(--c-bg-soft)',
                borderRadius: 16, padding: '28px 28px 24px',
                border: '1.5px solid rgba(20,43,86,0.08)',
                transition: 'all 0.22s',
                boxShadow: '0 2px 12px rgba(20,43,86,0.04)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,61,110,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.border = '1.5px solid var(--c-navy)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(20,43,86,0.04)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.border = '1.5px solid rgba(20,43,86,0.08)' }}
            >
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                  textTransform: 'uppercase', padding: '3px 10px', borderRadius: 100,
                  background: 'rgba(26,61,110,0.09)', color: post.tagColor,
                }}>{post.tag}</span>
                <span style={{ fontSize: 12, color: 'var(--c-text-faint)' }}>{post.readTime}</span>
              </div>
              <h3 style={{
                fontSize: 17, fontWeight: 700, color: 'var(--c-navy-deepest)',
                letterSpacing: '-0.02em', lineHeight: 1.3,
              }}>{post.title}</h3>
              <p style={{
                fontSize: 14.5, color: 'var(--c-text-muted)', lineHeight: 1.65,
                display: '-webkit-box', WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical', overflow: 'hidden',
              }}>{post.excerpt}</p>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginTop: 4, paddingTop: 14, borderTop: '1px solid rgba(20,43,86,0.08)',
              }}>
                <span style={{ fontSize: 12, color: '#9aabb8' }}>{post.date}</span>
                <span style={{ fontSize: 13, color: 'var(--c-navy)', fontWeight: 600 }}>Read more →</span>
              </div>
            </a>
          ))}
        </div>

        {/* View all posts — links to blog index */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="/blog/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 28px', borderRadius: 100,
            border: '1.5px solid rgba(26,61,110,0.2)',
            fontSize: 15, fontWeight: 600, color: 'var(--c-navy)',
            textDecoration: 'none',
            transition: 'border-color 0.2s, background 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-navy)'; e.currentTarget.style.background = 'rgba(26,61,110,0.04)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,61,110,0.2)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none' }}
          >
            View all posts
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 56, textAlign: 'center',
          padding: '40px 32px', borderRadius: 20,
          background: 'rgba(26,61,110,0.04)', border: '1px solid rgba(26,61,110,0.08)',
        }}>
          <p style={{ fontSize: 16, color: 'var(--c-text-mid)', marginBottom: 6, fontWeight: 600 }}>Have a question about something you read?</p>
          <p style={{ fontSize: 14, color: 'var(--c-text-faint)', marginBottom: 24 }}>Garrett is happy to answer questions in a free consultation, no obligation.</p>
          <a href="#contact" onClick={e => {
            e.preventDefault()
            const el = document.querySelector('#contact')
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
          }} style={{
            display: 'inline-block', padding: '13px 32px', borderRadius: 100,
            background: 'var(--c-navy)', color: '#fff', fontWeight: 700, fontSize: 15,
            textDecoration: 'none', letterSpacing: '-0.01em',
            boxShadow: '0 4px 18px rgba(26,61,110,0.2)',
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--c-navy-deep)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--c-navy)'; e.currentTarget.style.transform = 'none' }}
          >Book a Free Consultation</a>
        </div>
      </div>
    </section>
  )
}

export default Blog
