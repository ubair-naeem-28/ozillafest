import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './DeckStackScroll.css'

export function DeckCardItem({
  category,
  title,
  description,
  price,
  priceSub,
  perks = [],
  tags = [],
  meta,
  ctaText = 'Learn More →',
  ctaLink = '/tickets',
  image,
  bgGradient,
  accentColor = '#ffbd59',
  isFeatured = false,
  index = 0,
  total = 1
}) {
  const isExternal = typeof ctaLink === 'string' && (ctaLink.startsWith('http') || ctaLink.startsWith('#'))
  const hasTabs = index < total - 1

  // Palette color rotation if custom bgGradient not provided
  const defaultCardGradients = [
    'linear-gradient(135deg, #1b0e07 0%, #2e1408 50%, #150904 100%)', // Terracotta Amber
    'linear-gradient(135deg, #091a14 0%, #123328 50%, #06120e 100%)', // Emerald Forest
    'linear-gradient(135deg, #120f26 0%, #221d45 50%, #0a0817 100%)', // Deep Indigo
    'linear-gradient(135deg, #23120b 0%, #3d1c0e 50%, #180a05 100%)', // Obsidian Bronze
    'linear-gradient(135deg, #1c0a1a 0%, #351430 50%, #120610 100%)'  // Crimson Royal
  ]

  const background = bgGradient || defaultCardGradients[index % defaultCardGradients.length]

  return (
    <div
      className="deck-stack-card-wrapper"
      style={{
        zIndex: 10 + index,
        top: `${80 + index * 10}px` // Subtle cascading sticky pinning offset
      }}
    >
      <div
        className={`deck-card ${isFeatured ? 'deck-card-featured' : ''}`}
        style={{
          background: background,
          borderColor: isFeatured ? 'rgba(255, 189, 89, 0.45)' : 'rgba(255, 255, 255, 0.12)'
        }}
      >
        {/* Left Column: Details & CTA */}
        <div className="deck-card-left">
          <div className="deck-card-top-tag">
            {category && (
              <span className="deck-category-badge">
                <span
                  className="deck-category-dot"
                  style={{ background: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
                />
                {category}
              </span>
            )}
            {isFeatured && (
              <span
                className="deck-category-badge"
                style={{ background: 'rgba(255, 189, 89, 0.18)', color: '#ffbd59', borderColor: 'rgba(255, 189, 89, 0.4)' }}
              >
                ★ POPULAR CHOICE
              </span>
            )}
          </div>

          <div className="deck-card-body">
            <h3 className="deck-card-title">{title}</h3>
            {description && <p className="deck-card-desc">{description}</p>}

            {price && (
              <div className="deck-card-price-row">
                <span className="deck-card-price" style={{ color: accentColor }}>
                  {price}
                </span>
                {priceSub && <span className="deck-card-price-sub">{priceSub}</span>}
              </div>
            )}

            {perks && perks.length > 0 && (
              <ul className="deck-card-perks">
                {perks.map((perk, pIdx) => (
                  <li key={pIdx}>
                    <span className="deck-perk-icon" style={{ color: accentColor }}>
                      ✓
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            )}

            {tags && tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.4rem' }}>
                {tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.85)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="deck-card-footer">
            {isExternal ? (
              <a
                href={ctaLink}
                className="deck-cta-btn"
                style={
                  isFeatured
                    ? { background: 'linear-gradient(120deg, #ffbd59, #ff8a3d)', color: '#0B0705' }
                    : {}
                }
              >
                {ctaText}
              </a>
            ) : (
              <Link
                to={ctaLink}
                className="deck-cta-btn"
                style={
                  isFeatured
                    ? { background: 'linear-gradient(120deg, #ffbd59, #ff8a3d)', color: '#0B0705' }
                    : {}
                }
              >
                {ctaText}
              </Link>
            )}

            {meta && <span className="deck-meta-info">{meta}</span>}
          </div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="deck-card-right">
          {image ? (
            <img
              src={image}
              alt={title}
              className="deck-card-img"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle at 60% 40%, ${accentColor}33, #000000 85%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: `1px solid ${accentColor}66`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  boxShadow: `0 0 30px ${accentColor}44`
                }}
              >
                ⚡
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-marron, serif)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '0.04em'
                }}
              >
                OZILLA FEST 2026
              </span>
            </div>
          )}
          <div className="deck-card-img-sheen" />
        </div>

        {/* 3D Bottom Deck Preview Tabs */}
        {hasTabs && (
          <div className="deck-stack-preview-tabs">
            <div className="deck-stack-preview-layer-1" />
            {index < total - 2 && <div className="deck-stack-preview-layer-2" />}
          </div>
        )}
      </div>
    </div>
  )
}

export default function DeckStackScroll({ items = [], children, className = '' }) {
  if (children) {
    return (
      <div className={`deck-stack-container ${className}`}>
        <div className="deck-stack-inner">{children}</div>
      </div>
    )
  }

  return (
    <div className={`deck-stack-container ${className}`}>
      <div className="deck-stack-inner">
        {items.map((item, idx) => (
          <DeckCardItem
            key={item.id || item.title || idx}
            index={idx}
            total={items.length}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
