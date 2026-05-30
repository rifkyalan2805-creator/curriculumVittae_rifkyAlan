import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const links = [
  { to: 'about',      label: 'About' },
  { to: 'skills',     label: 'Skills' },
  { to: 'projects',   label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact',    label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 32px',
      height: '68px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s',
      background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.2rem',
        letterSpacing: '-0.02em',
        color: 'var(--text-primary)',
      }}>
        RAM<span style={{ color: 'var(--accent)' }}>.</span>
      </span>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '8px', listStyle: 'none',
        alignItems: 'center',
      }} className="nav-desktop">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              smooth duration={600}
              offset={-80}
              spy activeClass="nav-active"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 400,
                color: 'var(--text-secondary)',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'color 0.2s, background 0.2s',
                display: 'block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'var(--bg-hover)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '';
                e.currentTarget.style.background = '';
              }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="mailto:rifky@email.com"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              fontWeight: 500,
              color: 'var(--accent-bright)',
              padding: '7px 18px',
              borderRadius: '10px',
              border: '1px solid var(--accent-dim)',
              transition: 'background 0.2s, border-color 0.2s',
              marginLeft: '8px',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-glow)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = 'var(--accent-dim)'; }}
          >
            Hire me
          </a>
        </li>
      </ul>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '6px' }}
        className="nav-burger"
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--text-primary)',
            borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: menuOpen
              ? i === 0 ? 'translateY(7px) rotate(45deg)'
              : i === 2 ? 'translateY(-7px) rotate(-45deg)'
              : 'scaleX(0)'
              : 'none',
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '68px', left: 0, right: 0,
          background: 'rgba(10,10,15,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '20px 32px 28px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1.1rem', fontFamily: 'var(--font-display)',
                fontWeight: 600, padding: '10px 0',
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
