import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const privacySections = [
  {
    id: 'privacy-introduction',
    number: '01',
    icon: 'PV',
    title: 'Introduction',
    text: 'This Privacy Policy explains how Ozilla Festival handles visitor, account, ticket, and support information with transparency and care.'
  },
  {
    id: 'information-collection',
    number: '02',
    icon: 'ID',
    title: 'Information We Collect',
    text: 'We may collect details such as name, email address, phone number, account information, ticket requests, and support messages.'
  },
  {
    id: 'data-use',
    number: '03',
    icon: 'DU',
    title: 'How We Use Data',
    text: 'Your information is used for account access, ticket processing, booking verification, event communication, support, and festival operations.'
  },
  {
    id: 'cookies',
    number: '04',
    icon: 'CK',
    title: 'Cookies',
    text: 'Cookies and local storage may be used to keep the site functional, remember sessions, improve performance, and support a smoother experience.'
  },
  {
    id: 'third-party-services',
    number: '05',
    icon: 'TP',
    title: 'Third-Party Services',
    text: 'Trusted service providers may help with authentication, ticketing, communication, analytics, or payment-related workflows when required.'
  },
  {
    id: 'data-security',
    number: '06',
    icon: 'SC',
    title: 'Data Security',
    text: 'We use secure workflows, careful access controls, and protected systems to reduce risk and keep visitor information safe.'
  },
  {
    id: 'user-rights',
    number: '07',
    icon: 'RT',
    title: 'User Rights',
    text: 'Visitors can contact Ozilla Festival to request support, corrections, clarification, or help with account and privacy-related questions.'
  },
  {
    id: 'children-privacy',
    number: '08',
    icon: 'FM',
    title: "Children's Privacy",
    text: 'Family attendance and under-16 participation are handled according to official festival notices, guardian guidance, and event safety rules.'
  },
  {
    id: 'policy-updates',
    number: '09',
    icon: 'UP',
    title: 'Policy Updates',
    text: 'This Privacy Policy may be updated to reflect improvements, operational needs, legal requirements, or changes to festival services.'
  },
  {
    id: 'privacy-contact',
    number: '10',
    icon: 'CT',
    title: 'Contact Information',
    text: 'For privacy questions, account support, or clarification, visitors can contact the Ozilla Festival support team through the Contact page.'
  }
]

const termsSections = [
  {
    id: 'introduction',
    number: '01',
    icon: 'TR',
    title: 'Introduction',
    text: 'These Terms & Conditions explain the policies that help Ozilla Festival maintain a safe, organized, and enjoyable festival experience for every visitor.'
  },
  {
    id: 'ticket-policy',
    number: '02',
    icon: 'TK',
    title: 'Ticket Policy',
    text: 'Tickets are issued for the selected Ozilla Festival access and must be presented at the event entrance. Visitors are responsible for keeping ticket information secure.'
  },
  {
    id: 'payments',
    number: '03',
    icon: 'PM',
    title: 'Payments',
    text: 'Payment and ticket information may be reviewed for verification, booking confirmation, and customer support. Any inaccurate payment details may delay ticket approval.'
  },
  {
    id: 'refund-policy',
    number: '04',
    icon: 'RF',
    title: 'Refund Policy',
    text: 'Refund availability depends on event policies, partner rules, and operational circumstances. Approved refunds are processed according to the official event support workflow.'
  },
  {
    id: 'festival-rules',
    number: '05',
    icon: 'RL',
    title: 'Festival Rules',
    text: 'Visitors must follow event safety rules, venue policies, and organizer instructions. Restricted items, unsafe behavior, and policy violations may result in denied entry.'
  },
  {
    id: 'privacy',
    number: '06',
    icon: 'PR',
    title: 'Privacy',
    text: 'Personal information is used for event operations, communication, ticketing, and support. Ozilla Festival does not sell visitor information.'
  },
  {
    id: 'liability',
    number: '07',
    icon: 'LB',
    title: 'Liability',
    text: 'Ozilla Festival may update event timing, venue details, entry requirements, or operational policies when necessary for safety, logistics, or compliance.'
  },
  {
    id: 'user-responsibilities',
    number: '08',
    icon: 'UR',
    title: 'User Responsibilities',
    text: 'Visitors are expected to provide accurate information, respect other attendees, and follow guidance from festival staff, security, and venue teams.'
  },
  {
    id: 'contact-information',
    number: '09',
    icon: 'CT',
    title: 'Contact Information',
    text: 'For clarification about these Terms & Conditions, contact the Ozilla Festival support team through the official contact page.'
  }
]

const termsBanners = [
  ['Important Policy Update', 'Official event instructions, entry rules, and safety notices may be updated before the festival.'],
  ['Key Information', 'Keep your ticket details secure and contact support if anything needs clarification.']
]

const privacyBanners = [
  ['Privacy First', 'Your account, ticket, and support information is handled with transparency and careful access control.'],
  ['Security Guaranteed', 'Ozilla Festival uses secure workflows to protect authentication, ticket requests, and payment-related support.']
]

const termsHighlights = [
  ['Notice', 'Important Notice', 'Under 16 attendees are allowed with their family according to the current event notice.'],
  ['Entry', 'Restricted Items', 'Venue safety checks may apply. Visitors must follow all staff and security instructions at entry points.'],
  ['Update', 'Policy Updates', 'Operational updates may be shared before or during the festival through official Ozilla Festival channels.']
]

const privacyHighlights = [
  ['Promise', 'Privacy Promise', 'We never misuse your information and keep data usage limited to festival, account, ticket, and support needs.'],
  ['Rights', 'Your Rights', 'Visitors can contact the team for privacy questions, account support, corrections, or clarification.'],
  ['Cookies', 'Cookie Usage', 'Cookies are used only to support functionality, sessions, performance, and a smoother website experience.']
]

const legalHighlights = [
  ['Secure Ticket Purchase', 'Ticket and booking policies are structured to keep visitor access clear and verifiable.'],
  ['Refund Protection', 'Refund requests follow the official support process so every case is reviewed consistently.'],
  ['Privacy Commitment', 'Visitor information is used only for festival operations, ticketing, communication, and support.'],
  ['Safe Payments', 'Payment details are reviewed through trusted workflows for booking confirmation and assistance.'],
  ['Festival Rules', 'Clear rules help protect guests, families, artists, partners, and the event experience.'],
  ['Professional Support', 'The Ozilla Festival team is available for policy questions and event guidance.']
]

const privacySecurity = [
  ['Secure Authentication', 'Protected account access for ticket and user workflows.'],
  ['Encrypted Data', 'Sensitive flows are handled through secured application processes.'],
  ['Protected Payments', 'Payment-related support is managed through trusted verification steps.'],
  ['Secure Database', 'Visitor data is handled with careful operational access controls.'],
  ['Privacy First', 'Information is used for clear festival purposes only.'],
  ['Safe Browsing', 'The website experience is designed around trust, clarity, and secure usage.']
]

const privacyStats = [
  { target: 100, suffix: '%', label: 'Secure Authentication' },
  { target: 256, suffix: '-bit', label: 'Data Encryption' },
  { value: 'Protected', label: 'User Accounts' },
  { value: 'Secure', label: 'Payment Processing' }
]

const privacyPromises = [
  'We never misuse your information.',
  'Your data remains protected.',
  'Secure ticket purchases.',
  'Safe payment processing.',
  'Transparent privacy practices.'
]

const supportDetails = [
  ['Email', 'ozillafestival@gmail.com'],
  ['Phone', '+92 322 6622221'],
  ['Support Hours', 'Monday to Saturday, 10:00 AM - 7:00 PM']
]

function LegalPage({ type }) {
  const isTerms = type === 'terms'
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const [statProgress, setStatProgress] = useState(0)
  const sections = useMemo(() => (isTerms ? termsSections : privacySections), [isTerms])
  const banners = isTerms ? termsBanners : privacyBanners
  const highlightCards = isTerms ? termsHighlights : privacyHighlights
  const benefitCards = isTerms ? legalHighlights : privacySecurity

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100)) : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.15, 0.35, 0.55] }
    )

    sections.forEach((section) => {
      const node = document.getElementById(section.id)
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.legal-reveal'))
    if (!nodes.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [isTerms])

  useEffect(() => {
    if (isTerms) return undefined

    const node = document.querySelector('.legal-stat-grid')
    if (!node) return undefined

    let frameId
    const animateStats = () => {
      const startedAt = performance.now()
      const duration = 900

      const tick = (now) => {
        const next = Math.min(1, (now - startedAt) / duration)
        setStatProgress(next)
        if (next < 1) {
          frameId = requestAnimationFrame(tick)
        }
      }

      cancelAnimationFrame(frameId)
      setStatProgress(0)
      frameId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) animateStats()
        })
      },
      { threshold: 0.28 }
    )

    observer.observe(node)
    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
    }
  }, [isTerms])

  const title = isTerms ? 'Terms & Conditions' : 'Privacy Policy'
  const subtitle = isTerms
    ? 'Please review our policies carefully to ensure a safe and enjoyable Ozilla Festival experience.'
    : 'Your privacy matters. We are committed to protecting your personal information and providing complete transparency.'

  return (
    <main className={`legal-premium-page ${isTerms ? 'legal-terms-page' : 'legal-privacy-page'}`}>
      <div className="legal-scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <section className="legal-hero">
        <div className="legal-hero-orb legal-hero-orb-one" />
        <div className="legal-hero-orb legal-hero-orb-two" />
        <div className="legal-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="legal-hero-content legal-reveal">
          <p className="legal-kicker">Ozilla Festival 2026</p>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {!isTerms && (
            <div className="privacy-hero-trust" aria-label="Privacy trust highlights">
              <span>Privacy First</span>
              <span>Secure Ticketing</span>
              <span>Transparent Data Use</span>
            </div>
          )}
        </div>
      </section>

      <section className="legal-shell">
        <aside className="legal-sidebar" aria-label={`${title} quick navigation`}>
          <p>{isTerms ? 'Quick Navigation' : 'Privacy Center'}</p>
          <nav>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className={activeSection === section.id ? 'is-active' : ''}>
                <span>{section.number}</span>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="legal-document">
          <div className="legal-document-top legal-reveal">
            <div>
              <p className="legal-kicker">{isTerms ? 'Premium Legal Portal' : 'Executive Privacy Center'}</p>
              <h2>{isTerms ? 'Clear Policies For A Better Festival' : 'Your Information, Handled With Care'}</h2>
            </div>
            <span className="legal-updated">Updated for 2026</span>
          </div>

          <div className="legal-policy-banners legal-reveal">
            {banners.map(([label, detail]) => (
              <article key={label}>
                <strong>{label}</strong>
                <span>{detail}</span>
              </article>
            ))}
          </div>

          {!isTerms && (
            <div className="legal-stat-grid legal-reveal">
              {privacyStats.map((stat, index) => (
                <article key={stat.label} style={{ '--delay': `${index * 70}ms` }}>
                  <strong className="legal-stat-value">
                    {stat.value || `${Math.round(stat.target * statProgress)}${stat.suffix}`}
                  </strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          )}

          <div className="legal-highlight-grid">
            {highlightCards.map(([icon, titleText, text], index) => (
              <article key={titleText} className="legal-highlight-card legal-reveal" style={{ '--delay': `${index * 80}ms` }}>
                <span>{icon}</span>
                <h3>{titleText}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="legal-benefit-grid">
            {benefitCards.map(([label, detail], index) => (
              <article key={label} className="legal-benefit-card legal-reveal" style={{ '--delay': `${index * 55}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{label}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="legal-section-list">
            {sections.map((section, index) => (
              <article key={section.id} id={section.id} className="legal-section-card legal-reveal" style={{ '--delay': `${index * 45}ms` }}>
                <div className="legal-section-icon" aria-hidden="true">{section.icon}</div>
                <div>
                  <span className="legal-section-number">{section.number}</span>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </div>
              </article>
            ))}
          </div>

          {isTerms ? (
            <article className="legal-acceptance-card legal-reveal">
              <span aria-hidden="true">OK</span>
              <div>
                <h3>By continuing to use Ozilla Festival, you acknowledge and agree to these Terms & Conditions.</h3>
                <p>Please read each section carefully before purchasing tickets, creating an account, or attending the event.</p>
              </div>
            </article>
          ) : (
            <article className="legal-promise-card legal-reveal">
              <p className="legal-kicker">Our Privacy Promise</p>
              <h3>Transparent, secure, and respectful data practices.</h3>
              <div>
                {privacyPromises.map((promise) => (
                  <span key={promise}>{promise}</span>
                ))}
              </div>
            </article>
          )}

          <section className="legal-support-cta legal-reveal">
            <p className="legal-kicker">{isTerms ? 'We Believe In Complete Transparency' : 'Questions About Your Privacy?'}</p>
            <h2>{isTerms ? 'Need help understanding our policies?' : 'Our team is always available to assist you.'}</h2>
            <p className="legal-support-copy">
              {isTerms
                ? 'Our team is happy to assist you with ticket policies, refund guidance, festival rules, and account questions.'
                : 'If you have any questions regarding our Privacy Policy, account data, or ticket information, contact our support team anytime.'}
            </p>
            <div className="legal-support-grid">
              {supportDetails.map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <Link to="/contact" className="legal-support-button">Contact Support</Link>
          </section>
        </div>
      </section>
    </main>
  )
}

export default LegalPage
